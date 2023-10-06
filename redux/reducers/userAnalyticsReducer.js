import produce from 'immer';
import XDate from 'xdate';
import {
  linearRegression,
  sampleCorrelation,
  standardDeviation,
  mean,
} from 'simple-statistics';

import * as actions from '../constants/index';
import {findIndexOfSymptom} from './customSymptomsReducer';
import excludedSymptomsDir from '../../constants/track/excludedSymptomsDir';
import {statsConstants} from '../../shared/AnalysisUtils';

getPosterior = (prior, observations) => {
  //  returns a weighted value that considers both the prior assumed value and the observed values
  //  as more observations are made the observations hold more weight and have more influence over
  //  the returned value, a simplified version of MAP
  const initialWeightPrior = 10;
  const lenOfObservations = observations.length;
  const currentWeightPrior =
    1 - lenOfObservations / (lenOfObservations + initialWeightPrior);
  const currentWeightObservations = 1 - currentWeightPrior;

  const observationAvg = lenOfObservations > 0 ? mean(observations) : 0;

  return (
    currentWeightPrior * prior + currentWeightObservations * observationAvg
  );
};

// const maxChartColumns = 6;
const maxChartNameLen = 6;

// initialStateTLR = {
//   logHistory: {
//     27269253: {
//       symptoms: {
//         0: {
//           Type: "Symptom",
//           BodyPart: "Abdomen",
//           IconName: "024-hot air balloon",
//           Category: "Gastrointestinal",
//           Name: "Bloating",
//           Measurements: {
//             Binary: -1,
//             Severity: 0.9,
//             Location: "",
//             Number: -1,
//             Options: "",
//           },
//           Notes: "",
//         },
//       },
//     },

// initialStateUAR = {
//   MenstrualCycle: {
// menstrualCycleLog: {
//     timestampDays: "PeriodStart" / "PeriodEnd" / "Ovulation",
//     timestampDays: "PeriodStart" / "PeriodEnd" / "Ovulation",
//     timestampDays: "PeriodStart" / "PeriodEnd" / "Ovulation",
// ...
// }
//   },
// };

initialStateUAR = {
  menstrualCycle: {
    avgCycleLength: -1,
    avgPeriodLength: -1,
    predCycleLen: -1,
    predPeriodLen: -1,

    observedCycleMean: -1,
    observedCycleStd: -1,
    observedPeriodMean: -1,
    observedPeriodStd: -1,

    menstrualCycleLog: {},
  },
  chartStats: {},
  chartParams: {
    //  moved here from interactive params
    symptomLogCountsBeginTS: null,
    customChart1Symp: '',
    customChart1Metric: '',
    chart3Symptom: '',
    chart4Symptom: '',
    chart5Symptom1: '',
    chart5Symptom2: '',
  },
};

export default userAnalyticsReducer = (state = initialStateUAR, action) =>
  produce(state, draft => {
    console.log('USER ANALYTICS REDUCER');
    switch (action.type) {
      case actions.UPDATE_USER_MENSTRUATION_ONBOARDING:
        draft.menstrualCycle.avgCycleLength = action.payload.avgLenOfCycle;
        draft.menstrualCycle.avgPeriodLength = action.payload.avgLenOfPeriod;
        break;
      case actions.REGENERATE_MENSTRUAL_CYCLE:
        //  FIXMETUNA:  this will go through the whole trackingLog, finding each day with bleeding
        //  heavier then spotting. Then it will mark the first of each of those sets of bleeding
        //  as the start day of a period
        // FIXMETUNA: find cycles here
        trackingLogTmp = action.payload.trackingLog;
        userProfileTmp = action.payload.userProfile;
        draft.menstrualCycle.menstrualCycleLog = {};
        console.log('REGENERATE MENSTRUAL CYCLE');

        //  default to user provided data if not previous prediction exists
        const lastPredCycleLen = parseInt(draft.menstrualCycle.predCycleLen);
        const lastPredPeriodLen = parseInt(draft.menstrualCycle.predPeriodLen);
        const predCycleLen =
          lastPredCycleLen && lastPredCycleLen > 0
            ? lastPredCycleLen
            : parseInt(
                userProfileTmp.OnboardingAnswers.onboarding.menstruation
                  .avgLenOfCycle,
              );
        const predPeriodLen =
          lastPredPeriodLen && lastPredPeriodLen > 0
            ? lastPredPeriodLen
            : parseInt(
                userProfileTmp.OnboardingAnswers.onboarding.menstruation
                  .avgLenOfPeriod,
              );
        //  observed cycle data in app
        const observedCycleLens = [];
        const observedPeriodLens = [];

        //  only calculate cycles if the user indicated they menstruate
        if (
          userProfileTmp.OnboardingAnswers.onboarding.menstrationStatus.includes(
            'Yes',
          ) ||
          userProfileTmp.OnboardingAnswers.onboarding.menstrationStatus.includes(
            'yes',
          )
        ) {
          //  start with user provided cycle start date as default
          const userProvidedCycleStartDateObj = new XDate(
            userProfileTmp.OnboardingAnswers.onboarding.menstruation.firstDayOfLastPeriod,
          );
          const userProvidedCycleStartTSDays = Math.floor(
            parseInt(userProvidedCycleStartDateObj.getTime()) /
              statsConstants.dayLengthMilliseconds,
          );
          let lastCycleStartRecorded = userProvidedCycleStartTSDays;
          let lastObservedOfCurrentPeriod = userProvidedCycleStartTSDays;
          let currentCycleStart = -1;
          const maxPeriodLenDays = 10;
          const maxCycleLenDays = 54;
          Object.entries(trackingLogTmp)
            .sort(([a], [b]) => a - b)
            .forEach(([tsKey, symptomsVal]) => {
              Object.entries(symptomsVal['symptoms']).forEach(
                ([indKey, symptomVal]) => {
                  if (
                    symptomVal['Type'] === 'Menstrual' &&
                    (symptomVal['Name'] === 'Light' ||
                      symptomVal['Name'] === 'Medium' ||
                      symptomVal['Name'] === 'Heavy')
                  ) {
                    let tsKeyDays = Math.floor(
                      parseInt(tsKey) / statsConstants.dayLengthMinutes,
                    );
                    if (currentCycleStart < 0) {
                      //  if this is the first period recorded, save as the start
                      currentCycleStart = tsKeyDays;
                      draft.menstrualCycle.menstrualCycleLog[
                        currentCycleStart - 14
                      ] = 'Ovulation';
                      draft.menstrualCycle.menstrualCycleLog[
                        currentCycleStart
                      ] = 'PeriodStart';
                      lastCycleStartRecorded = currentCycleStart;
                      lastObservedOfCurrentPeriod = currentCycleStart;
                    } else if (
                      tsKeyDays - currentCycleStart <=
                      maxPeriodLenDays
                    ) {
                      //  if this is within the maximum period len, record as the last observed day of the
                      //  current period
                      lastObservedOfCurrentPeriod = tsKeyDays;
                    } else {
                      //  then this is the start of the new cycle
                      draft.menstrualCycle.menstrualCycleLog[tsKeyDays - 14] =
                        'Ovulation';
                      draft.menstrualCycle.menstrualCycleLog[tsKeyDays] =
                        'PeriodStart';
                      lastCycleStartRecorded = tsKeyDays;
                      if (tsKeyDays - currentCycleStart <= maxCycleLenDays) {
                        //  if this cycle start is within the maximum for a single cycle
                        //  record the observed cycle length
                        observedCycleLens.push(tsKeyDays - currentCycleStart);

                        if (lastObservedOfCurrentPeriod != currentCycleStart) {
                          //  if more then one day was recorded this period, mark the observed end
                          draft.menstrualCycle.menstrualCycleLog[
                            lastObservedOfCurrentPeriod
                          ] = 'PeriodEnd';
                          observedPeriodLens.push(
                            lastObservedOfCurrentPeriod - currentCycleStart,
                          );
                        } else {
                          //  otherwise use the predicted period length and record
                          draft.menstrualCycle.menstrualCycleLog[
                            currentCycleStart + predPeriodLen
                          ] = 'PeriodEnd';
                        }
                      } else {
                        //  record all missing cycles and periods

                        //  first record the last observed period end, if it was observed
                        if (lastObservedOfCurrentPeriod != currentCycleStart) {
                          //  if more then one day was recorded this period, mark the observed end
                          draft.menstrualCycle.menstrualCycleLog[
                            lastObservedOfCurrentPeriod
                          ] = 'PeriodEnd';
                          observedPeriodLens.push(
                            lastObservedOfCurrentPeriod - currentCycleStart,
                          );
                        } else {
                          //  otherwise use the predicted period length and record
                          draft.menstrualCycle.menstrualCycleLog[
                            currentCycleStart + predPeriodLen
                          ] = 'PeriodEnd';
                        }

                        //  then record all missing cycles and periods as being equal to their predicted values until
                        //  reaching the current tsKeyDays
                        const startingFillCycleDate =
                          currentCycleStart + predCycleLen;
                        for (
                          let nextCycleStartDay = startingFillCycleDate;
                          nextCycleStartDay < tsKeyDays;
                          nextCycleStartDay += predCycleLen
                        ) {
                          if (nextCycleStartDay != startingFillCycleDate) {
                            //  if this isn't the first skipped period (since that's already recorded above)
                            draft.menstrualCycle.menstrualCycleLog[
                              nextCycleStartDay - predCycleLen + predPeriodLen
                            ] = 'PeriodEnd';
                          }

                          draft.menstrualCycle.menstrualCycleLog[
                            nextCycleStartDay - 14
                          ] = 'Ovulation';
                          draft.menstrualCycle.menstrualCycleLog[
                            nextCycleStartDay
                          ] = 'PeriodStart';
                        }
                      }

                      //  then reset all values to this new date
                      currentCycleStart = tsKeyDays;
                      lastObservedOfCurrentPeriod = tsKeyDays;
                    }

                    //  end of symptom analysis
                  }
                },
              );
            });

          //  catch recorded cycles up to today
          //  first record the last observed period end, if it was observed
          if (lastObservedOfCurrentPeriod != lastCycleStartRecorded) {
            //  if more then one day was recorded this period, mark the observed end
            draft.menstrualCycle.menstrualCycleLog[
              lastObservedOfCurrentPeriod
            ] = 'PeriodEnd';
            observedPeriodLens.push(
              lastObservedOfCurrentPeriod - lastCycleStartRecorded,
            );
          } else {
            //  otherwise use the predicted period length and record
            draft.menstrualCycle.menstrualCycleLog[
              lastCycleStartRecorded + predPeriodLen
            ] = 'PeriodEnd';

            if (lastCycleStartRecorded == userProvidedCycleStartTSDays) {
              //  if no logs have been made besides the user provided start date,
              //  then record the period start date as it's not yet been recorded in the log
              draft.menstrualCycle.menstrualCycleLog[lastCycleStartRecorded] =
                'PeriodStart';
            }
          }

          //  then record all missing cycles and periods as being equal to their predicted values until
          //  reaching the current date, only triggers when no entries have been made for a full cycle
          const currentTSObj = new XDate();
          const currentTSDays = Math.floor(
            parseInt(currentTSObj.getTime()) /
              statsConstants.dayLengthMilliseconds,
          );

          let lastTSDayCycleFilled = currentTSDays;
          const startingFillCycleDate = lastCycleStartRecorded + predCycleLen;

          for (
            let nextCycleStartDay = startingFillCycleDate;
            nextCycleStartDay < currentTSDays;
            nextCycleStartDay += predCycleLen
          ) {
            if (nextCycleStartDay != startingFillCycleDate) {
              //  if this isn't the first skipped period (since that's already recorded above)
              draft.menstrualCycle.menstrualCycleLog[
                nextCycleStartDay - predCycleLen + predPeriodLen
              ] = 'PeriodEnd';
            }

            draft.menstrualCycle.menstrualCycleLog[nextCycleStartDay - 14] =
              'Ovulation';
            draft.menstrualCycle.menstrualCycleLog[nextCycleStartDay] =
              'PeriodStart';
            lastCycleStartRecorded = nextCycleStartDay; //  this isn't recorded because it's older
            lastObservedOfCurrentPeriod = nextCycleStartDay;

            lastTSDayCycleFilled = nextCycleStartDay;
          }

          if (
            lastTSDayCycleFilled != currentTSDays &&
            lastTSDayCycleFilled + predPeriodLen < currentTSDays
          ) {
            //  if a predicted period would have happened before the current date
            //  use the predicted period length and record
            draft.menstrualCycle.menstrualCycleLog[
              lastTSDayCycleFilled + predPeriodLen
            ] = 'PeriodEnd';
          }

          const userCycleLen = parseInt(
            userProfileTmp.OnboardingAnswers.onboarding.menstruation
              .avgLenOfCycle,
          );
          const userPeriodLen = parseInt(
            userProfileTmp.OnboardingAnswers.onboarding.menstruation
              .avgLenOfPeriod,
          );
          // "Estimated cycle len: "
          const newPredictedCycleLen = getPosterior(
            userCycleLen,
            observedCycleLens,
          );
          // "Estimated period len: "
          const newPredictedPeriodLen = getPosterior(
            userPeriodLen,
            observedPeriodLens,
          );

          const observedCycleMean =
            observedCycleLens.length > 0 ? mean(observedCycleLens) : 0;
          const observedCycleStd =
            observedCycleLens.length > 0
              ? standardDeviation(observedCycleLens)
              : 0;
          const observedPeriodMean =
            observedPeriodLens.length > 0 ? mean(observedPeriodLens) : 0;
          const observedPeriodStd =
            observedPeriodLens.length > 0
              ? standardDeviation(observedPeriodLens)
              : 0;

          draft.menstrualCycle.predCycleLen = newPredictedCycleLen;
          draft.menstrualCycle.predPeriodLen = newPredictedPeriodLen;
          draft.menstrualCycle.observedCycleMean = observedCycleMean;
          draft.menstrualCycle.observedCycleStd = observedCycleStd;
          draft.menstrualCycle.observedPeriodMean = observedPeriodMean;
          draft.menstrualCycle.observedPeriodStd = observedPeriodStd;

          //  use newly estimated cycle len values for next 3 period predictions
          if (lastCycleStartRecorded && lastCycleStartRecorded > 0) {
            //  Predicting the next 3 periods
            let lastPredTS = parseInt(lastCycleStartRecorded);
            for (let predIndex = 0; predIndex < 3; predIndex++) {
              const tsKeyDaysPred = lastPredTS + predCycleLen;
              draft.menstrualCycle.menstrualCycleLog[tsKeyDaysPred] =
                'PeriodStart';
              draft.menstrualCycle.menstrualCycleLog[
                tsKeyDaysPred + predPeriodLen
              ] = 'PeriodEnd';
              draft.menstrualCycle.menstrualCycleLog[tsKeyDaysPred - 14] =
                'Ovulation';
              lastPredTS = parseInt(tsKeyDaysPred);
            }
          }
        }

        break;
      case actions.UPDATE_STATS_BEGIN_RANGE_TS:
        draft.chartParams.symptomLogCountsBeginTS = action.payload;
        break;
      case actions.UPDATE_CUSTOM_CHART1_SYMP:
        draft.chartParams.customChart1Symp = action.payload;
        break;
      case actions.UPDATE_CUSTOM_CHART1_METRIC:
        draft.chartParams.customChart1Metric = action.payload;
        break;
      case actions.UPDATE_CHART3_SYMP:
        draft.chartParams.chart3Symptom = action.payload;
        break;
      case actions.UPDATE_CHART4_SYMP:
        draft.chartParams.chart4Symptom = action.payload;
        break;
      case actions.UPDATE_CHART5_SYMP1:
        draft.chartParams.chart5Symptom1 = action.payload;
        break;
      case actions.UPDATE_CHART5_SYMP2:
        draft.chartParams.chart5Symptom2 = action.payload;
        break;
      case actions.RESET_USER_ANALYTICS_INTERACTIVE_PARAMS:
        draft.chartParams.symptomLogCountsBeginTS = null;
        draft.chartParams.customChart1Symp = '';
        draft.chartParams.customChart1Metric = '';
        draft.chartParams.chart3Symptom = '';
        draft.chartParams.chart4Symptom = '';
        draft.chartParams.chart5Symptom1 = '';
        draft.chartParams.chart5Symptom2 = '';
        break;
      case actions.REGENERATE_CHART_STATS:
        //  FIXMETUNA:
        //  FIXMETUNA:  implement stats generation
        //  FIXMETUNA:  all methods only neeed the passes timestampday, userprofile, and tracking log
        //  FIXMETUNA:  in order to calculate all stats
        //  FIXMETUNA:
        //  FIXMETUNA:  recalculating and holding stats globally here in redux will probably be the right
        //  FIXMETUNA:  choice long term,  this will make refercing stats for gamification and stats
        //  FIXMETUNA:  integration and summary sharing easy later on.
        //  FIXMETUNA:
        //  FIXMETUNA:  strategically calling the recalculation instead of calling it every render will
        //  FIXMETUNA:  be much more efficient as well
        //  FIXMETUNA:
        trackingLogTmp = action.payload.trackingLog;
        userProfileTmp = action.payload.userProfile;
        userAnalyticsTmp = action.payload.userAnalytics;
        customSymptomsTmp = action.payload.customSymptoms;

        newChartStats = getChartStats(
          trackingLogTmp,
          userProfileTmp,
          userAnalyticsTmp,
          customSymptomsTmp,
          state.chartParams,
        );

        draft.chartStats = newChartStats;
        break;

      default:
        break;
    }
  });

getCurrentTimestampDays = () => {
  return Math.floor(Date.now() / statsConstants.dayLengthMilliseconds);
};

reduceChartName = (chartName, customMaxChartLen = null) => {
  if (!(customMaxChartLen == null)) {
    if (chartName.length <= customMaxChartLen) {
      return chartName;
    }
    return chartName.slice(0, customMaxChartLen);
  } else {
    if (chartName.length <= maxChartNameLen) {
      return chartName;
    }
    let chartNameParts = chartName.split(' ');
    let newName = '';
    for (let namePart of chartNameParts) {
      newName = newName + namePart.slice(0, 5) + '.';
    }
    return newName.slice(0, maxChartNameLen);
  }
};

getTopNCategoricalBarChart = (
  dataP,
  xAxisLabels = null,
  customMaxChartLen = null,
) => {
  if (!(dataP == null)) {
    let keysArray = [];
    let valuesArray = [];
    Object.entries(dataP)
      .sort(([, a], [, b]) => b - a)
      .forEach(([keyTmp, valTmp]) => {
        keysArray = keysArray.concat(keyTmp);
        valuesArray = valuesArray.concat(valTmp);
      });

    let labels = [];
    if (!(xAxisLabels == null) && xAxisLabels.length == keysArray.length) {
      labels = xAxisLabels;
    } else {
      labels =
        keysArray.length > statsConstants.maxDataPointsXAxis
          ? keysArray
              .slice(0, statsConstants.maxDataPointsXAxis)
              .map(val => reduceChartName(val, customMaxChartLen))
          : keysArray.map(val => reduceChartName(val, customMaxChartLen));
    }
    const data =
      valuesArray.length > statsConstants.maxDataPointsXAxis
        ? valuesArray.slice(0, statsConstants.maxDataPointsXAxis)
        : valuesArray;

    let dataset = [];
    for (let i = 0; i < labels.length; i++) {
      dataset = dataset.concat({x: labels[i], y: data[i]});
    }
    return dataset;
  } else {
    return [];
  }
};

discretizeTimeseriesChartData = (
  dataP,
  xAxisLabels = null,
  firstTSP = null,
  lastTSP = null,
  forceDiscretization = false,
) => {
  if (!(dataP == null)) {
    let labels = [];
    let data = [];

    let keysArray = [];
    let valuesArray = [];
    Object.entries(dataP)
      .sort(([a], [b]) => a - b)
      .forEach(([keyTmp, valTmp]) => {
        keysArray = keysArray.concat(keyTmp);
        valuesArray = valuesArray.concat(valTmp);
      });

    if (
      forceDiscretization ||
      keysArray.length > statsConstants.maxDataPointsXAxis
    ) {
      labels = keysArray;
      data = valuesArray;
      const firstTS = firstTSP ? parseFloat(firstTSP) : parseFloat(labels[0]);
      const lastTS = lastTSP
        ? parseFloat(lastTSP)
        : parseFloat(labels[labels.length - 1]);
      const discreteWindowLength =
        (lastTS - firstTS) / statsConstants.maxDataPointsXAxis;

      let updatedLabels = [];
      let updatedData = [];
      //  average all values in each window
      for (let i = 0; i < statsConstants.maxDataPointsXAxis; i++) {
        let valuesInWindow = [];
        for (let j = 0; j < labels.length; j++) {
          if (
            parseFloat(labels[j]) >= firstTS + discreteWindowLength * i &&
            parseFloat(labels[j]) < firstTS + discreteWindowLength * (i + 1)
          ) {
            valuesInWindow = valuesInWindow.concat(parseFloat(data[j]));
          }
        }
        let windowSum = 0.0;
        for (let windowVal of valuesInWindow) {
          windowSum = windowSum + windowVal;
        }

        updatedLabels = updatedLabels.concat(
          (firstTS +
            discreteWindowLength * i +
            (firstTS + discreteWindowLength * (i + 1))) *
            0.5,
        );
        if (valuesInWindow.length > 0) {
          updatedData = updatedData.concat(windowSum / valuesInWindow.length);
        } else {
          updatedData = updatedData.concat(0.0);
        }
      }
      labels = updatedLabels;
      data = updatedData;
    } else {
      labels = keysArray;
      data = valuesArray;
    }

    if (!(xAxisLabels == null) && xAxisLabels.length == data.length) {
      labels = xAxisLabels;
    } else {
      //  convert timestamps to date strings
      labels = labels.map(val => {
        const dateObj = new XDate(parseInt(val) * 60000);
        const dateStr = dateObj.toString('MM/dd');
        return this.reduceChartName(dateStr);
      });
    }

    let dataset = [];
    for (let i = 0; i < labels.length; i++) {
      dataset = dataset.concat({x: labels[i], y: data[i]});
    }
    return dataset;
  } else {
    return [];
  }
};

discretizeChartData = (xValues, yValues, xAxisLabels = null) => {
  if (!(xValues == null) && !(yValues == null)) {
    let labels = [];
    let data = [];

    if (xValues.length > statsConstants.maxDataPointsXAxis) {
      labels = xValues;
      data = yValues;
      const firstTS = parseFloat(labels[0]);
      const lastTS = parseFloat(labels[labels.length - 1]);
      const discreteWindowLength =
        (lastTS - firstTS) / statsConstants.maxDataPointsXAxis;

      let updatedLabels = [];
      let updatedData = [];
      //  average all values in each window
      for (let i = 0; i < statsConstants.maxDataPointsXAxis; i++) {
        let valuesInWindow = [];
        for (let j = 0; j < labels.length; j++) {
          if (
            parseFloat(labels[j]) >= firstTS + discreteWindowLength * i &&
            parseFloat(labels[j]) < firstTS + discreteWindowLength * (i + 1)
          ) {
            valuesInWindow = valuesInWindow.concat(parseFloat(data[j]));
          }
        }
        let windowSum = 0.0;
        for (let windowVal of valuesInWindow) {
          windowSum = windowSum + windowVal;
        }

        updatedLabels = updatedLabels.concat(
          Math.floor(
            (firstTS +
              discreteWindowLength * i +
              (firstTS + discreteWindowLength * (i + 1))) /
              2.0,
          ),
        );
        updatedData = updatedData.concat(windowSum / valuesInWindow.length);
      }
      labels = updatedLabels;
      data = updatedData;
    } else {
      labels = xValues;
      data = yValues;
    }

    if (!(xAxisLabels == null) && xAxisLabels.length == data.length) {
      labels = xAxisLabels;
    }

    let dataset = [];
    for (let i = 0; i < labels.length; i++) {
      dataset = dataset.concat({x: labels[i], y: data[i]});
    }
    return dataset;
  } else {
    return [];
  }
};

// "chart2HappinessOverTime": {
//   "01/01": 3,
//   "01/02": 2,
//   "01/29": 4,
//   "01/30": 3,
//   "02/26": 3,}
// "chart0SymptomLogCounts": {
//   "Abdominal Pain": 34,
//   "Anxiety": 5,
//   "Bloating": 6,
//   "Blood in Stool": 6,
//   "Heart Rate": 19,
//   "Ovulation Test - Saliva": 14
// },
cleanChartData = newChartStats => {
  sortSymptomLogCounts(newChartStats);

  newChartStats['chart0SymptomLogCounts'] = getTopNCategoricalBarChart(
    newChartStats['chart0SymptomLogCounts'],
    null,
    12,
  );
  newChartStats['chart1SympOverTime'] = discretizeTimeseriesChartData(
    newChartStats['chart1SympOverTime'],
  );
  newChartStats['chart2HappinessOverTime'] = discretizeTimeseriesChartData(
    newChartStats['chart2HappinessOverTime'],
  );
};

// Name: "Anxiety",
// Measurements: {
//   Binary: false,
//   Severity: 0.2,
//   Location: false,
//   Number: false,
//   Options: "morning",
//   symptomVal["Measurements"]["Binary"]

getNumericMeasurementValue = (customSymptoms, symptomValP) => {
  if (!(symptomValP['Measurements']['Severity'] === false)) {
    return symptomValP['Measurements']['Severity'];
  } else if (!(symptomValP['Measurements']['Number'] === false)) {
    return symptomValP['Measurements']['Number'];
  } else if (
    !(symptomValP['Measurements']['Options'] === false) &&
    !(symptomValP['Measurements']['Options'] == []) &&
    !(symptomValP['Measurements']['Options'] == null) &&
    typeof symptomValP['Measurements']['Options'] == typeof [] &&
    symptomValP['Measurements']['Options'].length > 0
  ) {
    const symptomIndex = findIndexOfSymptom(
      customSymptoms,
      symptomValP['Name'],
      symptomValP['Category'],
      symptomValP['BodyPart'],
      symptomValP['Type'],
    );
    if (symptomIndex >= 0) {
      const numberOfOptions = Object.entries(
        customSymptoms[symptomIndex]['Measurements']['Options'],
      ).length;
      let optionIndex = 0;
      for (let [i, val] of Object.entries(
        customSymptoms[symptomIndex]['Measurements']['Options'],
      )) {
        if (val['title'] == symptomValP['Measurements']['Options']) {
          optionIndex = i;
          break;
        }
      }

      return optionIndex / numberOfOptions;
    } else {
      return 0.0;
    }
  } else if (symptomValP['Measurements']['Binary']) {
    return 1.0;
  } else {
    return 0.0;
  }
};

standardizeSymptomsCorrelatedOverTime = newChartStats => {
  let updatedSymptomsCorrelatedOverTime = {};

  Object.entries(newChartStats['symptomsCorrelatedOverTime']).forEach(
    ([keyName, valEntries]) => {
      if (
        ![
          'Awful',
          'Bad',
          'Good',
          'Heavy',
          'Light',
          'Medium',
          'Meh',
          'None',
          'Rad',
          'Spotting',
        ].includes(keyName)
      ) {
        let minVal = 9999999999999.0;
        let maxVal = -9999999999999.0;
        let updatedValEntries = {};
        let minMaxValsUpdates = false;
        Object.entries(valEntries).forEach(([keyTS, valNum]) => {
          if (valNum < minVal) {
            minVal = valNum;
            minMaxValsUpdates = true;
          }
          if (valNum > maxVal) {
            maxVal = valNum;
            minMaxValsUpdates = true;
          }
        });

        Object.entries(valEntries).forEach(([keyTS, valNum]) => {
          if (minMaxValsUpdates && !(maxVal == minVal)) {
            updatedValEntries[keyTS] = (valNum - minVal) / (maxVal - minVal);
          } else {
            updatedValEntries[keyTS] = 0.0;
          }
        });

        updatedSymptomsCorrelatedOverTime[keyName] = updatedValEntries;
      }
    },
  );

  //  agregate mood and flow seperately
  let updatedMoodEntries = {};
  if (!(newChartStats['symptomsCorrelatedOverTime']['Awful'] == null)) {
    Object.entries(
      newChartStats['symptomsCorrelatedOverTime']['Awful'],
    ).forEach(([keyTS, valTMP]) => {
      updatedMoodEntries[keyTS] = 0.0;
    });
  }
  if (!(newChartStats['symptomsCorrelatedOverTime']['Bad'] == null)) {
    Object.entries(newChartStats['symptomsCorrelatedOverTime']['Bad']).forEach(
      ([keyTS, valTMP]) => {
        updatedMoodEntries[keyTS] = 0.25;
      },
    );
  }
  if (!(newChartStats['symptomsCorrelatedOverTime']['Meh'] == null)) {
    Object.entries(newChartStats['symptomsCorrelatedOverTime']['Meh']).forEach(
      ([keyTS, valTMP]) => {
        updatedMoodEntries[keyTS] = 0.5;
      },
    );
  }
  if (!(newChartStats['symptomsCorrelatedOverTime']['Good'] == null)) {
    Object.entries(newChartStats['symptomsCorrelatedOverTime']['Good']).forEach(
      ([keyTS, valTMP]) => {
        updatedMoodEntries[keyTS] = 0.75;
      },
    );
  }
  if (!(newChartStats['symptomsCorrelatedOverTime']['Rad'] == null)) {
    Object.entries(newChartStats['symptomsCorrelatedOverTime']['Rad']).forEach(
      ([keyTS, valTMP]) => {
        updatedMoodEntries[keyTS] = 1.0;
      },
    );
  }
  updatedSymptomsCorrelatedOverTime['Mood'] = updatedMoodEntries;

  let updatedMenstrualEntries = {};
  if (!(newChartStats['symptomsCorrelatedOverTime']['None'] == null)) {
    Object.entries(newChartStats['symptomsCorrelatedOverTime']['None']).forEach(
      ([keyTS, valTMP]) => {
        updatedMenstrualEntries[keyTS] = 0.0;
      },
    );
  }
  if (!(newChartStats['symptomsCorrelatedOverTime']['Spotting'] == null)) {
    Object.entries(
      newChartStats['symptomsCorrelatedOverTime']['Spotting'],
    ).forEach(([keyTS, valTMP]) => {
      updatedMenstrualEntries[keyTS] = 0.25;
    });
  }
  if (!(newChartStats['symptomsCorrelatedOverTime']['Light'] == null)) {
    Object.entries(
      newChartStats['symptomsCorrelatedOverTime']['Light'],
    ).forEach(([keyTS, valTMP]) => {
      updatedMenstrualEntries[keyTS] = 0.5;
    });
  }
  if (!(newChartStats['symptomsCorrelatedOverTime']['Medium'] == null)) {
    Object.entries(
      newChartStats['symptomsCorrelatedOverTime']['Medium'],
    ).forEach(([keyTS, valTMP]) => {
      updatedMenstrualEntries[keyTS] = 0.75;
    });
  }
  if (!(newChartStats['symptomsCorrelatedOverTime']['Heavy'] == null)) {
    Object.entries(
      newChartStats['symptomsCorrelatedOverTime']['Heavy'],
    ).forEach(([keyTS, valTMP]) => {
      updatedMenstrualEntries[keyTS] = 1.0;
    });
  }
  updatedSymptomsCorrelatedOverTime['Menstrual Flow'] = updatedMenstrualEntries;

  newChartStats['symptomsCorrelatedOverTime'] =
    updatedSymptomsCorrelatedOverTime;
};

// standardizeSymptomMeasurement = (
//   symptomVal,
//   customSymptoms,
//   symptomMetricRanges
// ) => {
//   const measurements = symptomVal["Measurements"];
//   let standardizedSymptomMeasurement = -1.0;

//   // Type: "Metric",
//   // BodyPart: "",
//   // IconName: "star",
//   // Category: "General",
//   // Name: "Heart Rate",
//   // Measurements: {
//   //   Binary: false,
//   //   Severity: false,
//   //   Location: false,
//   //   Number: 96,
//   //   Options: [],
//   // },

//   if (
//     !(typeof measurements["Severity"] == "boolean") &&
//     !(measurements["Severity"] == null) &&
//     !(measurements["Severity"] == "") &&
//     measurements["Severity"] >= 0
//   ) {
//     standardizedSymptomMeasurement = (measurements["Severity"] / 10.0) * 5.0;
//   } else if (
//     !(typeof measurements["Location"] == "boolean") &&
//     !(measurements["Location"] == null) &&
//     !(measurements["Location"] == "") &&
//     !(measurements["Location"] == -1)
//   ) {
//     const numberOfOptions = Object.entries(bodyPartCategories).length;
//     let optionIndex = 0;
//     for (let [i, val] of Object.entries(bodyPartCategories)) {
//       if (val["title"] == measurements["Options"]) {
//         optionIndex = i;
//         break;
//       }
//     }

//     standardizedSymptomMeasurement = (optionIndex / numberOfOptions) * 5.0;
//     // standardizedSymptomMeasurement = strToNormNumHash(measurements["Location"]) * 5.0;
//   } else if (
//     !(typeof measurements["Number"] == "boolean") &&
//     !(measurements["Number"] == null) &&
//     !(measurements["Number"] == "")
//   ) {
//     // trackingLog
//     symptomMetricRanges;

//     const symptomIdentifier =
//       symptomVal["Type"] +
//       "_" +
//       symptomVal["BodyPart"] +
//       "_" +
//       symptomVal["Category"] +
//       "_" +
//       symptomVal["Name"] +
//       "_number";
//     if (symptomIdentifier in symptomMetricRanges) {
//       standardizedSymptomMeasurement =
//         measurements["Number"] -
//         symptomMetricRanges[symptomIdentifier]["min"] /
//           (symptomMetricRanges[symptomIdentifier]["max"] -
//             symptomMetricRanges[symptomIdentifier]["min"]);
//       standardizedSymptomMeasurement = standardizedSymptomMeasurement * 5.0;
//     } else {
//       standardizedSymptomMeasurement = 0.0;
//     }
//   } else if (
//     !(typeof measurements["Options"] == "boolean") &&
//     !(measurements["Options"] == null) &&
//     !(measurements["Options"] == "") &&
//     !(measurements["Options"] == -1)
//   ) {
//     const symptomIndex = findIndexOfSymptom(
//       customSymptoms,
//       symptomVal["Name"],
//       symptomVal["Category"],
//       symptomVal["BodyPart"],
//       symptomVal["Type"]
//     );
//     console.log("Custom symptoms here TMPPPP: ", symptomIndex, symptomVal);
//     if (symptomIndex >= 0) {
//       // console.log("SYMPTOM log: ", symptomIndex, customSymptoms[symptomIndex]);
//       // console.log("ALL THE SYMPTOMMMMMMMSSSSSSSS; ", customSymptoms);
//       const numberOfOptions = Object.entries(
//         customSymptoms[symptomIndex]["Measurements"]["Options"]
//       ).length;
//       let optionIndex = 0;
//       for (let [i, val] of Object.entries(
//         customSymptoms[symptomIndex]["Measurements"]["Options"]
//       )) {
//         if (val["title"] == measurements["Options"]) {
//           optionIndex = i;
//           break;
//         }
//       }

//       standardizedSymptomMeasurement = (optionIndex / numberOfOptions) * 5.0;
//     } else {
//       //  use binary default if the current symptom isn't found in the custom symptoms
//       standardizedSymptomMeasurement = measurements["Binary"] ? 3.0 : 0.0;
//     }
//   } else {
//     //  use binary default if other values aren't provided
//     standardizedSymptomMeasurement = measurements["Binary"] ? 3.0 : 0.0;
//   }

//   //  TODO:
//   //  I need a solution for severity, location, number, and options
//   //  they are all open, the range is open, how do you normalize something without a range? You can't
//   //  I need to fit all of these values onto a [0.0,5.0] scale
//   //  I'll need max and min values for each of these ranges....
//   //  location doesn't make sense so I'll just assign each location to a hash somewhere on the 0-5 range
//   //  a difference in the graph will mean the location has changed
//   //  severity is in my control, so I'll just consider it to always be on a 10 point scale
//   //  for options I'll have to look up the matching symptom in the custom symtpom dictionary
//   //  and then use that list to convert strings to enums then convert that to 0-5 scale
//   //  for number, a number could be literally anything, with no scale, the user never specifies a scale...
//   //  custom symptoms could all be random..... I'll just have to look through the log and
//   //  find a max and min value and normalize from there

//   // Measurements: {
//   //   Binary: false,  //  could be -1 to mean false, false, or "", or null
//   //   Severity: false,  //  could be -1 to mean false, false, or "", or null  // should always be positive
//   //   Location: false, //  could be -1 to mean false, false, or "", or null  //  will just be a string
//   //   Number: false, //  could be false, or "", or null  // numbers could be negative
//   //   Options: "", [] //  could be -1 to mean false, false, or "", or null  //  will just be a string
//   // },

//   // Name: "Anxiety",
//   // Measurements: {
//   //   Binary: false,
//   //   Severity: 0.2,
//   //   Location: false,
//   //   Number: false,
//   //   Options: "morning",

//   //   symptomVal["Measurements"]["Binary"]

//   // const symptomName = symptomVal["Name"];

//   return standardizedSymptomMeasurement;
// };

// "symptomsByDOW": {
//   "Abdominal Pain": [2, 2, 2, 2, 2, 2, 22],
//   "Anxiety": [0, 1, 1, 0, 2, 1, 0],
//   "Awful": [0, 1, 0, 0, 0, 1, 0],
// "symptomsCorrelatedWithMenstrualCycle": {
//   "Abdominal Pain": [2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 22, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0],
//   "Anxiety": [0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
//   "Awful": [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
// "symptomsCorrelatedOverTime": {
//   "Abdominal Pain": {
//     "01/01": 0,
//     "01/02": 0,
//     "01/29": 0,
//     "01/30": 0,

// chartParams: {
//   //  moved here from interactive params
//   symptomLogCountsBeginTS: null,
//   customChart1Symp: "",
//   customChart1Metric: "",
//   chart3Symptom: "",
//   chart4Symptom: "",
//   chart5Symptom1: "",
//   chart5Symptom2: "",
// },
generateSummaryChartData = (newChartStats, chartParams) => {
  if (!(chartParams['chart3Symptom'] == '')) {
    const yValues =
      newChartStats['symptomsByDOW'][chartParams['chart3Symptom']];
    if (!(yValues == null) && yValues.length > 0) {
      const xValues = [...Array(yValues.length).keys()];
      newChartStats['chart3SymptomsByDOW'] = discretizeChartData(
        xValues,
        yValues,
        ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      );
    }
  } else {
    if (
      newChartStats['symptomsByDOW'] &&
      Object.keys(newChartStats['symptomsByDOW']).length > 0
    ) {
      //  select the first by default
      const defaultValue = Object.keys(newChartStats['symptomsByDOW'])[0];

      const yValues = newChartStats['symptomsByDOW'][defaultValue];
      if (!(yValues == null) && yValues.length > 0) {
        const xValues = [...Array(yValues.length).keys()];
        newChartStats['chart3SymptomsByDOW'] = discretizeChartData(
          xValues,
          yValues,
          ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        );
      }
    }
  }

  if (!(chartParams['chart4Symptom'] == '')) {
    const yValues =
      newChartStats['symptomsCorrelatedWithMenstrualCycle'][
        chartParams['chart4Symptom']
      ];
    if (!(yValues == null) && yValues.length > 0) {
      const xValues = [...Array(yValues.length).keys()];
      newChartStats['chart4SymptomsCorrelatedWithMenstrualCycle'] =
        discretizeChartData(xValues, yValues);
    }
  } else {
    //  select the first option by default
    if (
      newChartStats['symptomsCorrelatedWithMenstrualCycle'] &&
      Object.keys(newChartStats['symptomsCorrelatedWithMenstrualCycle'])
        .length > 0
    ) {
      const defaultValue = Object.keys(
        newChartStats['symptomsCorrelatedWithMenstrualCycle'],
      )[0];

      const yValues =
        newChartStats['symptomsCorrelatedWithMenstrualCycle'][defaultValue];
      if (!(yValues == null) && yValues.length > 0) {
        const xValues = [...Array(yValues.length).keys()];
        newChartStats['chart4SymptomsCorrelatedWithMenstrualCycle'] =
          discretizeChartData(xValues, yValues);
      }
    }
  }

  standardizeSymptomsCorrelatedOverTime(newChartStats);

  if (
    newChartStats['symptomsCorrelatedOverTime'][
      chartParams['chart5Symptom1']
    ] == null &&
    newChartStats['symptomsCorrelatedOverTime'][
      chartParams['chart5Symptom2']
    ] == null &&
    Object.keys(newChartStats['symptomsCorrelatedOverTime']).length > 0
  ) {
    if (Object.keys(newChartStats['symptomsCorrelatedOverTime']).length > 1) {
      const defaultValue1 = Object.keys(
        newChartStats['symptomsCorrelatedOverTime'],
      )[0];
      const defaultValue2 = Object.keys(
        newChartStats['symptomsCorrelatedOverTime'],
      )[1];

      chart5Min = null;
      chart5Max = null;
      let firstValPlot1 = 999999999999999;
      let firstValPlot2 = 999999999999999;
      let lastValPlot1 = -999999999999999;
      let lastValPlot2 = -999999999999999;

      Object.keys(
        newChartStats['symptomsCorrelatedOverTime'][defaultValue1],
      ).forEach(valTmp => {
        if (valTmp < firstValPlot1) {
          firstValPlot1 = valTmp;
        }
        if (valTmp > lastValPlot1) {
          lastValPlot1 = valTmp;
        }
      });

      Object.keys(
        newChartStats['symptomsCorrelatedOverTime'][defaultValue2],
      ).forEach(valTmp => {
        if (valTmp < firstValPlot2) {
          firstValPlot2 = valTmp;
        }
        if (valTmp > lastValPlot2) {
          lastValPlot2 = valTmp;
        }
      });

      chart5Min = firstValPlot1 < firstValPlot2 ? firstValPlot1 : firstValPlot2;
      chart5Max = lastValPlot1 < lastValPlot2 ? lastValPlot1 : lastValPlot2;

      newChartStats['chart5SymptomsCorrelatedOverTime']['plot1'] =
        discretizeTimeseriesChartData(
          newChartStats['symptomsCorrelatedOverTime'][defaultValue1],
          null,
          parseInt(chart5Min),
          parseInt(chart5Max),
          true,
        );

      newChartStats['chart5SymptomsCorrelatedOverTime']['plot2'] =
        discretizeTimeseriesChartData(
          newChartStats['symptomsCorrelatedOverTime'][defaultValue2],
          null,
          parseInt(chart5Min),
          parseInt(chart5Max),
          true,
        );
    } else {
      const defaultValue1 = Object.keys(
        newChartStats['symptomsCorrelatedOverTime'],
      )[0];

      newChartStats['chart5SymptomsCorrelatedOverTime']['plot1'] =
        discretizeTimeseriesChartData(
          newChartStats['symptomsCorrelatedOverTime'][defaultValue1],
          null,
          parseInt(chart5Min),
          parseInt(chart5Max),
          true,
        );
    }
  } else {
    //  calculate min and max between the two chart5 plots
    let chart5Min = null;
    let chart5Max = null;
    if (
      !(
        newChartStats['symptomsCorrelatedOverTime'][
          chartParams['chart5Symptom1']
        ] == null
      ) &&
      !(
        newChartStats['symptomsCorrelatedOverTime'][
          chartParams['chart5Symptom2']
        ] == null
      )
    ) {
      let firstValPlot1 = 999999999999999;
      let firstValPlot2 = 999999999999999;
      let lastValPlot1 = -999999999999999;
      let lastValPlot2 = -999999999999999;

      Object.keys(
        newChartStats['symptomsCorrelatedOverTime'][
          chartParams['chart5Symptom1']
        ],
      ).forEach(valTmp => {
        if (valTmp < firstValPlot1) {
          firstValPlot1 = valTmp;
        }
        if (valTmp > lastValPlot1) {
          lastValPlot1 = valTmp;
        }
      });

      Object.keys(
        newChartStats['symptomsCorrelatedOverTime'][
          chartParams['chart5Symptom2']
        ],
      ).forEach(valTmp => {
        if (valTmp < firstValPlot2) {
          firstValPlot2 = valTmp;
        }
        if (valTmp > lastValPlot2) {
          lastValPlot2 = valTmp;
        }
      });

      chart5Min = firstValPlot1 < firstValPlot2 ? firstValPlot1 : firstValPlot2;
      chart5Max = lastValPlot1 < lastValPlot2 ? lastValPlot1 : lastValPlot2;
    }

    if (!(chartParams['chart5Symptom1'] == '')) {
      if (
        !(
          newChartStats['symptomsCorrelatedOverTime'][
            chartParams['chart5Symptom1']
          ] == null
        )
      ) {
        newChartStats['chart5SymptomsCorrelatedOverTime']['plot1'] =
          discretizeTimeseriesChartData(
            newChartStats['symptomsCorrelatedOverTime'][
              chartParams['chart5Symptom1']
            ],
            null,
            parseInt(chart5Min),
            parseInt(chart5Max),
            true,
          );
      }
    }

    if (!(chartParams['chart5Symptom2'] == '')) {
      if (
        !(
          newChartStats['symptomsCorrelatedOverTime'][
            chartParams['chart5Symptom2']
          ] == null
        )
      ) {
        newChartStats['chart5SymptomsCorrelatedOverTime']['plot2'] =
          discretizeTimeseriesChartData(
            newChartStats['symptomsCorrelatedOverTime'][
              chartParams['chart5Symptom2']
            ],
            null,
            parseInt(chart5Min),
            parseInt(chart5Max),
            true,
          );
      }
    }
  }
};

//  TODO:  use superchart to get summary stats here
generateSummaryStats = newChartStats => {
  let symptomsTrendingImprovement = [];
  let symptomsTrendingWorse = [];

  let symptomTrends = {};
  Object.entries(newChartStats['symptomsCorrelatedOverTime']).forEach(
    ([keyName, valEntries]) => {
      let cleanedCorreleationData = [];
      let i = 0;
      Object.entries(valEntries)
        .sort(([a], [b]) => a - b)
        .forEach(([tsTMP, numericalVal]) => {
          i = i + 1;
          cleanedCorreleationData.push([i, numericalVal]);
        });
      const tmpOutput = linearRegression(cleanedCorreleationData);
      symptomTrends[keyName] = tmpOutput['m'];
    },
  );

  symptomTrends = Object.entries(symptomTrends).sort(([, a], [, b]) => b - a);
  for (let i = 0; i < symptomTrends.length; i++) {
    if (symptomTrends[i][1] > 0.2 && symptomsTrendingImprovement.length < 2) {
      symptomsTrendingImprovement = symptomsTrendingImprovement.concat(
        symptomTrends[i][0],
      );
    }
  }

  symptomTrends = symptomTrends.sort(([, a], [, b]) => a - b);
  for (let i = 0; i < symptomTrends.length; i++) {
    if (symptomTrends[i][1] < -0.2 && symptomsTrendingWorse.length < 2) {
      symptomsTrendingWorse = symptomsTrendingWorse.concat(symptomTrends[i][0]);
    }
  }

  newChartStats['symptomsTrendingImprovement'] = symptomsTrendingImprovement;
  newChartStats['symptomsTrendingWorse'] = symptomsTrendingWorse;

  let mostCorrelatedSymptoms = [];
  let leastCorrelatedSymptoms = [];
  let symptomCorrelations = {};

  //  FIXMETUNA:
  //  FIXMETUNA:
  //  FIXMETUNA:  get absolute min and max of symptoms
  let globalSymptomMin = 9999999999;
  let globalSymptomMax = -9999999999;
  Object.entries(newChartStats['symptomsCorrelatedOverTime']).forEach(
    ([keyName1, valEntries1]) => {
      const tsList = Object.keys(valEntries1);
      if (tsList && tsList.length > 0) {
        tsList.forEach(valTmp => {
          if (valTmp < globalSymptomMin) {
            globalSymptomMin = valTmp;
          }
          if (valTmp > globalSymptomMax) {
            globalSymptomMax = valTmp;
          }
        });
      }
    },
  );

  Object.entries(newChartStats['symptomsCorrelatedOverTime']).forEach(
    ([keyName1, valEntries1]) => {
      Object.entries(newChartStats['symptomsCorrelatedOverTime']).forEach(
        ([keyName2, valEntries2]) => {
          if (!(keyName1 == keyName2)) {
            //  FIXMETUNA:
            //  FIXMETUNA:  standardize symptoms
            const discretizedData1 = discretizeTimeseriesChartData(
              valEntries1,
              null,
              parseInt(globalSymptomMin),
              parseInt(globalSymptomMax),
              true,
            );
            const discretizedData2 = discretizeTimeseriesChartData(
              valEntries2,
              null,
              parseInt(globalSymptomMin),
              parseInt(globalSymptomMax),
              true,
            );

            let updatedDiscretizedData1 = [];
            let updatedDiscretizedData2 = [];
            discretizedData1.forEach(
              valInList =>
                (updatedDiscretizedData1 = updatedDiscretizedData1.concat(
                  valInList['y'],
                )),
            );
            discretizedData2.forEach(
              valInList =>
                (updatedDiscretizedData2 = updatedDiscretizedData2.concat(
                  valInList['y'],
                )),
            );

            const symptomCorrelation = sampleCorrelation(
              updatedDiscretizedData1,
              updatedDiscretizedData2,
            ).toFixed(2);
            symptomCorrelations[keyName1 + ' and ' + keyName2] = {
              correlation: symptomCorrelation,
              symp1: keyName1,
              symp2: keyName2,
            };
          }
        },
      );
    },
  );

  let symptomCorrelationsList = Object.entries(symptomCorrelations).sort(
    ([, a], [, b]) => a['correlation'] - b['correlation'],
  );
  for (let i = 0; i < symptomCorrelationsList.length; i++) {
    if (
      symptomCorrelationsList[i][1]['correlation'] > 0.2 &&
      mostCorrelatedSymptoms.length < 2
    ) {
      mostCorrelatedSymptoms = mostCorrelatedSymptoms.concat(
        symptomCorrelationsList[i][0],
      );
    }
  }

  symptomCorrelationsList = symptomCorrelationsList.sort(
    ([, a], [, b]) => a - b,
  );
  for (let i = 0; i < symptomCorrelationsList.length; i++) {
    if (
      symptomCorrelationsList[i][1]['correlation'] < -0.2 &&
      leastCorrelatedSymptoms.length < 2
    ) {
      leastCorrelatedSymptoms = leastCorrelatedSymptoms.concat(
        symptomCorrelationsList[i][0],
      );
    }
  }

  newChartStats['mostCorrelatedSymptoms'] = mostCorrelatedSymptoms;
  newChartStats['leastCorrelatedSymptoms'] = leastCorrelatedSymptoms;
};

moodToInt = moodStr => {
  if (moodStr === 'Awful') {
    return 1;
  } else if (moodStr === 'Bad') {
    return 2;
  } else if (moodStr === 'Meh') {
    return 3;
  } else if (moodStr === 'Good') {
    return 4;
  } else if (moodStr === 'Rad') {
    return 5;
  } else {
    return 0;
  }
};

getGeneralMenstrualCycleStats = (userProfile, userAnalytics) => {
  let periodStartTSs = [];
  Object.entries(userAnalytics.menstrualCycle.menstrualCycleLog)
    .sort(([a], [b]) => a - b)
    .forEach(([tsKey, eventNameVal]) => {
      if (eventNameVal === 'PeriodStart') {
        periodStartTSs = periodStartTSs.concat(parseInt(tsKey));
      }
    });
  periodStartTSs.sort((a, b) => b - a);

  const mostRecentPeriodStartTSDays =
    periodStartTSs.length > 2 ? periodStartTSs[3] : -1;
  const daysSinceLastLoggedPeriod =
    getCurrentTimestampDays() - mostRecentPeriodStartTSDays;
  const numCyclesToNextPeriod =
    Math.floor(
      daysSinceLastLoggedPeriod /
        parseInt(
          userProfile.OnboardingAnswers.onboarding.menstruation.avgLenOfCycle,
        ),
    ) + 1;

  const nextPredictedPeriodTSDays =
    mostRecentPeriodStartTSDays +
    parseInt(
      userProfile.OnboardingAnswers.onboarding.menstruation.avgLenOfCycle,
    ) *
      numCyclesToNextPeriod;

  //  use backup current day in cycle if a previous period start date has not yet been recorded
  const backupCurrentDayInCycle =
    parseInt(
      userProfile.OnboardingAnswers.onboarding.menstruation.avgLenOfCycle,
    ) +
    (getCurrentTimestampDays() - nextPredictedPeriodTSDays);
  const currentDayInCycle =
    mostRecentPeriodStartTSDays > 0
      ? Math.floor(getCurrentTimestampDays() - mostRecentPeriodStartTSDays) + 1
      : backupCurrentDayInCycle + 1;

  // console.log(
  //   'USER ANALYTICS: ',
  //   getCurrentTimestampDays(),
  //   mostRecentPeriodStartTSDays,
  //   backupCurrentDayInCycle,
  //   periodStartTSs,
  //   JSON.stringify(userAnalytics.menstrualCycle.menstrualCycleLog),
  // );

  let currentCyclePhase = '';
  let currentFertility = '';
  let currentMood = '';
  let currentCommonSymptoms = [];
  if (
    currentDayInCycle <
    statsConstants.menstrualCycle.avgPhaseStartDays['Follicular Phase']
  ) {
    currentCyclePhase = 'Menstruation';

    if (
      currentDayInCycle <
      statsConstants.menstrualCycle.avgPhaseStartDays['Follicular Phase'] / 2.0
    ) {
      currentFertility =
        statsConstants.menstrualCycle.fertility.MenstruationStart;
      currentMood = statsConstants.menstrualCycle.mood.MenstruationStart;
      currentCommonSymptoms =
        statsConstants.menstrualCycle.commonSymptoms.MenstruationStart;
    } else {
      currentFertility =
        statsConstants.menstrualCycle.fertility.MenstruationEnd;
      currentMood = statsConstants.menstrualCycle.mood.MenstruationEnd;
      currentCommonSymptoms =
        statsConstants.menstrualCycle.commonSymptoms.MenstruationEnd;
    }
  } else if (
    currentDayInCycle <
    statsConstants.menstrualCycle.avgPhaseStartDays['Ovulation']
  ) {
    currentCyclePhase = 'Follicular Phase';

    if (
      currentDayInCycle <
      statsConstants.menstrualCycle.avgPhaseStartDays['Follicular Phase'] +
        (statsConstants.menstrualCycle.avgPhaseStartDays['Ovulation'] -
          statsConstants.menstrualCycle.avgPhaseStartDays['Follicular Phase']) /
          2.0
    ) {
      currentFertility =
        statsConstants.menstrualCycle.fertility.FollicularStart;
      currentMood = statsConstants.menstrualCycle.mood.FollicularStart;
      currentCommonSymptoms =
        statsConstants.menstrualCycle.commonSymptoms.FollicularStart;
    } else {
      currentFertility = statsConstants.menstrualCycle.fertility.FollicularEnd;
      currentMood = statsConstants.menstrualCycle.mood.FollicularEnd;
      currentCommonSymptoms =
        statsConstants.menstrualCycle.commonSymptoms.FollicularEnd;
    }
  } else if (
    currentDayInCycle <
    statsConstants.menstrualCycle.avgPhaseStartDays['Luteal Phase']
  ) {
    currentCyclePhase = 'Ovulation';

    if (
      currentDayInCycle <
      statsConstants.menstrualCycle.avgPhaseStartDays['Ovulation'] +
        (statsConstants.menstrualCycle.avgPhaseStartDays['Luteal Phase'] -
          statsConstants.menstrualCycle.avgPhaseStartDays['Follicular Phase']) /
          2.0
    ) {
      currentFertility = statsConstants.menstrualCycle.fertility.OvulationStart;
      currentMood = statsConstants.menstrualCycle.mood.OvulationStart;
      currentCommonSymptoms =
        statsConstants.menstrualCycle.commonSymptoms.OvulationStart;
    } else {
      currentFertility = statsConstants.menstrualCycle.fertility.OvulationEnd;
      currentMood = statsConstants.menstrualCycle.mood.OvulationEnd;
      currentCommonSymptoms =
        statsConstants.menstrualCycle.commonSymptoms.OvulationEnd;
    }
  } else {
    currentCyclePhase = 'Luteal Phase';

    if (
      currentDayInCycle <
      statsConstants.menstrualCycle.avgPhaseStartDays['Ovulation'] + 7
    ) {
      currentFertility = statsConstants.menstrualCycle.fertility.LutealStart;
      currentMood = statsConstants.menstrualCycle.mood.LutealStart;
      currentCommonSymptoms =
        statsConstants.menstrualCycle.commonSymptoms.LutealStart;
    } else {
      currentFertility = statsConstants.menstrualCycle.fertility.LutealEnd;
      currentMood = statsConstants.menstrualCycle.mood.LutealEnd;
      currentCommonSymptoms =
        statsConstants.menstrualCycle.commonSymptoms.LutealEnd;
    }
  }

  return [
    currentDayInCycle,
    currentFertility,
    currentCyclePhase,
    currentMood,
    currentCommonSymptoms,
    mostRecentPeriodStartTSDays,
    nextPredictedPeriodTSDays,
    periodStartTSs,
    parseInt(
      userProfile.OnboardingAnswers.onboarding.menstruation.avgLenOfCycle,
    ),
  ];
};

tsdaysToDayInCycle = (
  tsKeyDays,
  mostRecentPeriodStartTSDays,
  currentCycleLength,
) => {
  const daysDiff = tsKeyDays - mostRecentPeriodStartTSDays;
  return daysDiff % currentCycleLength;
};

updateMenstrualCycleStats = (userProfile, userAnalytics, newChartStats) => {
  [
    currentDayInCycle,
    currentFertility,
    currentCyclePhase,
    currentMood,
    currentCommonSymptoms,
    mostRecentPeriodStartTSDays,
    nextPredictedPeriodTSDays,
    periodStartTSs,
    currentCycleLength,
  ] = getGeneralMenstrualCycleStats(userProfile, userAnalytics);
  const dateObj = new XDate(
    parseInt(nextPredictedPeriodTSDays) *
      60000 *
      statsConstants.dayLengthMinutes,
  );
  const dateStr = dateObj.toString('MMM dd');
  newChartStats['currentCycleLength'] = currentCycleLength;
  newChartStats['mostRecentPeriodStartTSDays'] = mostRecentPeriodStartTSDays;
  newChartStats['periodStartTSs'] = periodStartTSs;
  newChartStats['currentDayInCycle'] = currentDayInCycle;
  newChartStats['currentFertility'] = currentFertility;
  newChartStats['currentCyclePhase'] = currentCyclePhase;
  newChartStats['currentMood'] = currentMood;
  newChartStats['currentCommonSymptoms'] = currentCommonSymptoms;
  newChartStats['nextPredictedPeriodTSDays'] = nextPredictedPeriodTSDays;
  newChartStats['nextPredictedPeriodStr'] = dateStr;
};

updateSymptomMinMaxes = (trackingLog, newChartStats) => {
  //  ###
  //  ### Caclulate Min and Max for each Symptom ###
  //  ###
  // Type: "Test",
  // BodyPart: "Head",
  // IconName: "024-hot air balloon",
  // Category: "Urinary",
  // Name: "PeedYesterday",
  //  {"type_bodypart_category_name_number": {"min":-1, "max":-1}}
  let symptomMetricRanges = {};
  //  Go through every timestamp in the log history
  Object.entries(trackingLog).forEach(([tsKeyTmp, symptomsVal]) => {
    const tsKey = parseInt(tsKeyTmp);
    //  Go through each symptom in this timestamp
    Object.entries(symptomsVal['symptoms']).forEach(
      ([indKey, symptomValInner]) => {
        const numberVal = symptomValInner['Measurements']['Number'];
        if (
          !(typeof numberVal == 'boolean') &&
          !(numberVal == null) &&
          !(numberVal == '')
        ) {
          const symptomIdentifier =
            symptomValInner['Type'] +
            '_' +
            symptomValInner['BodyPart'] +
            '_' +
            symptomValInner['Category'] +
            '_' +
            symptomValInner['Name'] +
            '_number';
          if (symptomIdentifier in symptomMetricRanges) {
            if (numberVal < symptomMetricRanges[symptomIdentifier]['min']) {
              symptomMetricRanges[symptomIdentifier]['min'] = numberVal;
            } else if (
              numberVal > symptomMetricRanges[symptomIdentifier]['max']
            ) {
              symptomMetricRanges[symptomIdentifier]['max'] = numberVal;
            }
          } else {
            symptomMetricRanges[symptomIdentifier] = {
              min: numberVal,
              max: numberVal,
            };
          }
        }
      },
    );
  });
  newChartStats['symptomMetricRanges'] = symptomMetricRanges;
};

updateTimestampCounts = (tsKey, newChartStats) => {
  //  ###
  //  ### Collect all log timestamps ###
  //  ###
  newChartStats['allLogTimestamps'] =
    newChartStats['allLogTimestamps'].concat(tsKey);
};

updateAllTimeStreakStats = newChartStats => {
  //  ###
  //  ### Calculate consecutive local and all time entry streaks ###
  //  ###

  //  this assumes acending order
  newChartStats['allLogTimestamps'] = newChartStats['allLogTimestamps'].sort();

  newChartStats['currentConsequtiveEntriesStreak'] = 0;
  newChartStats['allTimeConsequtiveEntriesStreak'] = 0;
  let lastRecordedTS = -99999999999;
  for (let recordedTS of newChartStats['allLogTimestamps']) {
    if (recordedTS - lastRecordedTS <= statsConstants.dayLengthMinutes * 1.5) {
      newChartStats['currentConsequtiveEntriesStreak'] =
        newChartStats['currentConsequtiveEntriesStreak'] + 1;
      if (
        newChartStats['currentConsequtiveEntriesStreak'] >
        newChartStats['allTimeConsequtiveEntriesStreak']
      ) {
        newChartStats['allTimeConsequtiveEntriesStreak'] =
          newChartStats['currentConsequtiveEntriesStreak'];
      }
    } else if (
      newChartStats['currentConsequtiveEntriesStreak'] >
      newChartStats['allTimeConsequtiveEntriesStreak']
    ) {
      newChartStats['allTimeConsequtiveEntriesStreak'] =
        newChartStats['currentConsequtiveEntriesStreak'];
      newChartStats['currentConsequtiveEntriesStreak'] = 1;
    } else {
      newChartStats['currentConsequtiveEntriesStreak'] = 1;
    }

    lastRecordedTS = recordedTS;
  }
};

updateTotalNumberOfSymptomsLogged = (symptomsVal, newChartStats) => {
  //  ###
  //  ### Keep a total count of all symptoms ###
  //  ###
  //  Go through each symptom in this timestamp
  Object.entries(symptomsVal['symptoms']).forEach(([indKey, symptomVal]) => {
    newChartStats['numberOfSymptomsLogged'] =
      newChartStats['numberOfSymptomsLogged'] + 1;
  });
};

updateStatsWithoutRange = (tsKey, symptomsVal, newChartStats) => {
  updateTimestampCounts(tsKey, newChartStats);
  updateTotalNumberOfSymptomsLogged(symptomsVal, newChartStats);

  //  Go through each symptom in this timestamp
  Object.entries(symptomsVal['symptoms']).forEach(
    ([indKey, symptomValInner]) => {
      if (newChartStats['allUniqueSymptomCounts'][symptomValInner['Name']]) {
        newChartStats['allUniqueSymptomCounts'][symptomValInner['Name']] =
          newChartStats['allUniqueSymptomCounts'][symptomValInner['Name']] + 1;
      } else {
        newChartStats['allUniqueSymptomCounts'][symptomValInner['Name']] = 1;
      }

      if (symptomValInner['Name'] == 'Current Stress') {
        newChartStats['lastStress'] =
          symptomValInner['Measurements']['Severity'];
      } else if (symptomValInner['Name'] == 'Current Pain') {
        newChartStats['lastPain'] = symptomValInner['Measurements']['Severity'];
      } else if (symptomValInner['Type'] == 'CurrentMood') {
        newChartStats['lastMood'] = symptomValInner['Name'];
      }
    },
  );
};

updateCountOfSymptomsInRange = newChartStats => {
  //  ###
  //  ### Count number of symptoms in range ###
  //  ###
  newChartStats['numberOfSymptomsLoggedInRange'] =
    newChartStats['numberOfSymptomsLoggedInRange'] + 1;
};

updateIndividualSymptomLogCounts = (symptomValInner, newChartStats) => {
  //  ###
  //  ### Keep individual count of all symptoms in range ###
  //  ###
  if (
    Object.keys(newChartStats['symptomLogCounts']).includes(
      symptomValInner['Name'],
    )
  ) {
    newChartStats['symptomLogCounts'][symptomValInner['Name']] =
      newChartStats['symptomLogCounts'][symptomValInner['Name']] + 1;

    //  ignore excluded symptoms in chart0
    if (!Object.keys(excludedSymptomsDir).includes(symptomValInner['Name'])) {
      newChartStats['chart0SymptomLogCounts'][symptomValInner['Name']] =
        newChartStats['chart0SymptomLogCounts'][symptomValInner['Name']] + 1;
    }
  } else {
    newChartStats['symptomLogCounts'][symptomValInner['Name']] = 1;
    //  ignore excluded symptoms in chart0
    if (!Object.keys(excludedSymptomsDir).includes(symptomValInner['Name'])) {
      newChartStats['chart0SymptomLogCounts'][symptomValInner['Name']] = 1;
    }
  }
};

updateSymptomMetricLists = (symptomValInner, newChartStats) => {
  //  ###
  //  ### Grab list of all metrics for each symptom in range, ignoring excluded symptoms ###
  //  ###
  if (
    !Object.keys(newChartStats['symptomLogCounts']).includes(
      symptomValInner['Name'],
    ) &&
    !Object.keys(excludedSymptomsDir).includes(symptomValInner['Name'])
  ) {
    newChartStats['symptomMetricOptions'][symptomValInner['Name']] = [];
    //  This will grab all metrics within each symptom, only needs to be added once
    Object.entries(symptomValInner['Measurements']).forEach(
      ([keyInner, valInner]) => {
        if (
          keyInner === 'Binary' ||
          keyInner === 'Severity' ||
          keyInner === 'Location' ||
          keyInner === 'Number'
        ) {
          if (valInner !== false && valInner !== '' && !(valInner < 0)) {
            newChartStats['symptomMetricOptions'][symptomValInner['Name']] =
              newChartStats['symptomMetricOptions'][
                symptomValInner['Name']
              ].concat(keyInner);
          }
        } else if (keyInner === 'Options') {
        }
      },
    );
  }
};

updateChart1Metrics = (symptomValInner, tsKey, newChartStats, chartParams) => {
  //  ###
  //  ### Grab chart1 metrics ###
  //  ###
  //  grab chart1 symptom metrics if they've been selected
  if (
    chartParams['customChart1Symp'] !== '' &&
    chartParams['customChart1Metric'] !== '' &&
    chartParams['customChart1Symp'] === symptomValInner['Name']
  ) {
    newChartStats['chart1SympOverTime'][tsKey] =
      symptomValInner['Measurements'][chartParams['customChart1Metric']];
  } else {
    if (
      newChartStats['symptomMetricOptions'] &&
      Object.keys(newChartStats['symptomMetricOptions']).length > 0
    ) {
      const defaultValueName = Object.keys(
        newChartStats['symptomMetricOptions'],
      )[0];

      const defaultValueMetric = Object.values(
        Object.values(newChartStats['symptomMetricOptions'])[0],
      )[0];
      if (defaultValueName === symptomValInner['Name']) {
        newChartStats['chart1SympOverTime'][tsKey] =
          symptomValInner['Measurements'][defaultValueMetric];
      }
    }
  }
};

updateHappinessOverTimeMetric = (symptomValInner, tsKey, newChartStats) => {
  //  ###
  //  ### Grab chart3 metrics ###
  //  ###
  //  grab chart3 happiness values
  if ('CurrentMood' === symptomValInner['Type']) {
    newChartStats['chart2HappinessOverTime'][tsKey] = moodToInt(
      symptomValInner['Name'],
    );
  }
};

updateSymptomsByDOW = (symptomValInner, tsKey, newChartStats) => {
  //  ###
  //  ### Calculate Symptoms by dow ###
  //  ###
  //  calculate symptoms by day of the week
  const dateObj = new XDate(parseInt(tsKey) * 60000);
  const dowNum = dateObj.getDay();
  if (symptomValInner['Name'] in newChartStats['symptomsByDOW']) {
    newChartStats['symptomsByDOW'][symptomValInner['Name']][dowNum] =
      newChartStats['symptomsByDOW'][symptomValInner['Name']][dowNum] + 1;
  } else {
    newChartStats['symptomsByDOW'][symptomValInner['Name']] = [
      0, 0, 0, 0, 0, 0, 0,
    ];
    newChartStats['symptomsByDOW'][symptomValInner['Name']][dowNum] =
      newChartStats['symptomsByDOW'][symptomValInner['Name']][dowNum] + 1;
  }
};

updateSymptomsByDayInMenstrualCycle = (
  symptomValInner,
  tsKey,
  newChartStats,
) => {
  //  ###
  //  ### Calculate Symptoms by menstrual cycle ###
  //  ###
  //  calculate symptoms correlated with menstrual cycle
  const symptomDayInCycle = tsdaysToDayInCycle(
    tsKey,
    newChartStats['mostRecentPeriodStartTSDays'],
    newChartStats['currentCycleLength'],
  );
  if (
    symptomValInner['Name'] in
    newChartStats['symptomsCorrelatedWithMenstrualCycle']
  ) {
    newChartStats['symptomsCorrelatedWithMenstrualCycle'][
      symptomValInner['Name']
    ][symptomDayInCycle] =
      newChartStats['symptomsCorrelatedWithMenstrualCycle'][
        symptomValInner['Name']
      ][symptomDayInCycle] + 1;
  } else {
    newChartStats['symptomsCorrelatedWithMenstrualCycle'][
      symptomValInner['Name']
    ] = Array(parseInt(newChartStats['currentCycleLength'])).fill(0);
    newChartStats['symptomsCorrelatedWithMenstrualCycle'][
      symptomValInner['Name']
    ][symptomDayInCycle] =
      newChartStats['symptomsCorrelatedWithMenstrualCycle'][
        symptomValInner['Name']
      ][symptomDayInCycle] + 1;
  }
};

updateSymptomsOverTimeSuperChart = (
  symptomValInner,
  tsKey,
  customSymptoms,
  newChartStats,
) => {
  //  ###
  //  ### Symptoms Superchart, needs to be cleaned up ###
  //  ###
  //  TMP superchart with all symptoms over time

  const symptomName = symptomValInner['Name'];
  const numericSymptomValue = getNumericMeasurementValue(
    customSymptoms,
    symptomValInner,
  );

  if (symptomName in newChartStats['symptomsCorrelatedOverTime']) {
    newChartStats['symptomsCorrelatedOverTime'][symptomName][parseInt(tsKey)] =
      numericSymptomValue;
  } else {
    newChartStats['symptomsCorrelatedOverTime'][symptomName] = {};
    newChartStats['symptomsCorrelatedOverTime'][symptomName][parseInt(tsKey)] =
      numericSymptomValue;
  }
};

sortSymptomLogCounts = newChartStats => {
  //  ###
  //  ### Sort Symptom Log Counts To Enable Grabbing Top N ###
  //  ###
  //  sort the log counts
  newChartStats['symptomLogCounts'] = Object.fromEntries(
    Object.entries(newChartStats['symptomLogCounts']).sort(
      ([, a], [, b]) => b - a,
    ),
  );

  newChartStats['chart0SymptomLogCounts'] = Object.fromEntries(
    Object.entries(newChartStats['chart0SymptomLogCounts']).sort(
      ([, a], [, b]) => b - a,
    ),
  );
};

getChartStats = (
  trackingLog,
  userProfile,
  userAnalytics,
  customSymptoms,
  chartParams,
) => {
  let newChartStats = {
    //  stats without variable windows
    currentCycleLength: 28,
    periodStartTSs: [],
    currentDayInCycle: -1,
    currentFertility: '',
    currentCyclePhase: '',
    currentMood: '',
    currentCommonSymptoms: [],
    nextPredictedPeriodTSDays: -1,
    nextPredictedPeriodStr: '',
    allLogTimestamps: [],
    numberOfSymptomsLogged: 0,
    numberOfSymptomsLoggedInRange: 0,
    currentConsequtiveEntriesStreak: -1,
    allTimeConsequtiveEntriesStreak: -1,

    lastMood: '',
    lastStress: '',
    lastPain: '',
    allUniqueSymptomCounts: {},

    //  baseline stats for feature calculations
    symptomMetricRanges: {},
    //  to be added
    numDaysWithCurrentSymptom1: -1,
    numDaysWithCurrentSymptom2: -1,
    numDaysWithCurrentSymptom3: -1,
    //  comparative stats will remain default for now
    symptomsComparedToOtherUsers: {},
    stat1ComparedToOtherUsers: -1,
    stat2ComparedToOtherUsers: -1,
    //  to be added
    // newChartStats["chart2HappinessOverTime"][dateStr] = moodToInt(symptomVal["Name"]);
    // newChartStats["chart1SympOverTime"][dateStr] = [array of vals in order];

    //  summary stats
    symptomsTrendingImprovement: {},
    symptomsTrendingWorse: {},
    mostCorrelatedSymptoms: {},
    leastCorrelatedSymptoms: {},

    //  all stats with variable windows below
    symptomLogCounts: {},

    //  NOTE: curated data for charts
    chart0SymptomLogCounts: [],
    symptomMetricOptions: {},
    chart1SympOverTime: [],
    chart2HappinessOverTime: [],
    symptomsByDOW: {},
    chart3SymptomsByDOW: [],
    symptomsCorrelatedWithMenstrualCycle: {},
    chart4SymptomsCorrelatedWithMenstrualCycle: [],
    symptomsCorrelatedOverTime: {},
    chart5SymptomsCorrelatedOverTime: {plot1: [], plot2: []},
  };

  if (
    userAnalytics == null ||
    userAnalytics.menstrualCycle == null ||
    userAnalytics.menstrualCycle.menstrualCycleLog == null
  ) {
    //  return empty if user analytics profile isn't loaded yet
    return newChartStats;
  }

  //  NOTE:
  //  NOTE:
  //  NOTE:  calculate general stats
  updateMenstrualCycleStats(userProfile, userAnalytics, newChartStats);
  updateSymptomMinMaxes(trackingLog, newChartStats);

  chartParams['lastMood'] = null;
  chartParams['lastStress'] = null;
  //  Go through every timestamp in the log history
  Object.entries(trackingLog)
    .sort(([a], [b]) => a - b)
    .forEach(([tsKeyTmp, symptomsVal]) => {
      const tsKey = parseInt(tsKeyTmp);

      updateStatsWithoutRange(tsKey, symptomsVal, newChartStats);

      //  NOTE: Variable range stats below
      if (
        chartParams['symptomLogCountsBeginTS'] == null ||
        chartParams['symptomLogCountsBeginTS'] < tsKey
      ) {
        //  If timestamp in range, Go through each symptom in this timestamp
        Object.entries(symptomsVal['symptoms']).forEach(
          ([indKey, symptomValInner]) => {
            updateCountOfSymptomsInRange(newChartStats);
            updateSymptomMetricLists(symptomValInner, newChartStats);
            updateIndividualSymptomLogCounts(symptomValInner, newChartStats);
            updateChart1Metrics(
              symptomValInner,
              tsKey,
              newChartStats,
              chartParams,
            );
            updateHappinessOverTimeMetric(
              symptomValInner,
              tsKey,
              newChartStats,
            );
            updateSymptomsByDOW(symptomValInner, tsKey, newChartStats);
            updateSymptomsByDayInMenstrualCycle(
              symptomValInner,
              tsKey,
              newChartStats,
            );

            //  ### TODO: Still need to create these charts ###

            updateSymptomsOverTimeSuperChart(
              symptomValInner,
              tsKey,
              customSymptoms,
              newChartStats,
            );
          },
        );
      }
    });

  generateSummaryChartData(newChartStats, chartParams);
  generateSummaryStats(newChartStats);
  updateAllTimeStreakStats(newChartStats);
  cleanChartData(newChartStats);

  return newChartStats;
};
