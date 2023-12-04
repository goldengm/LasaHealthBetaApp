import React from 'react';
import {ScrollView, Dimensions, View, DeviceEventEmitter} from 'react-native';
import XDate from 'xdate';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';

import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';
import {theme, styles, Images} from '../../constants';
import {
  Button,
  Calendar,
  Icon,
  Footer,
  LineGraph,
  BarGraph,
  RoundedTopContainer,
  Select,
} from '../../components';
import {StatusBar} from 'expo-status-bar';
import {
  setSymptomLogStagingToDate,
  resetTrackingLogStagingToDefaultAction,
} from '../../redux/actions/trackActions';
import {
  updateStatsBeginRangeTSAction,
  updateCustomChart1SympAction,
  updateCustomChart1MetricAction,
  regenerateChartStatsAction,
  updateChart3SymptomAction,
  updateChart4SymptomAction,
  updateChart5Symptom1Action,
  updateChart5Symptom2Action,
} from '../../redux/actions/userAnalyticsActions';
import {statsConstants} from '../../shared/AnalysisUtils';
import {GardenContext} from '../../garden/GardenProvider';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import Blob1 from '../../assets/ui/general/Blob1.svg';
import Blob2 from '../../assets/ui/general/Blob2.svg';
import Blob4 from '../../assets/ui/general/Blob4.svg';
import {getOS} from '../../shared/PlatformUtils';
import { isArray } from 'lodash';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

class TrackScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;
    this.state = {
      customChart1Symp: '',
      customChart1Metric: '',
      editTrackLogOnDate: null,
      statsWindowOfTimeIndex: 0,
      chart3Symptom: '',
      chart4Symptom: '',
      chart5Symptom1: '',
      chart5Symptom2: '',
    };
  }

  componentDidMount() {
    this.mixpanel.track('trackScreen_reached');
    if (!this.props.userProfile.appIntroTutorialComplete.includes(3)) {
      setTimeout(() => {
        //  giving session controller 1.5 seconds to load before sending trigger
        console.log('Showing tutorial for track screen');
        DeviceEventEmitter.emit('event.showtutorialPage', {
          pageNumber: 3,
        });
      }, 1000);
    }
  }

  setEditTrackLogOnDate = dateTSMinutes => {
    this.setState({editTrackLogOnDate: dateTSMinutes});
  };

  setStatsWindowOfTimeIndex = newIndex => {
    this.setState({statsWindowOfTimeIndex: newIndex});

    let updatedSymptomLogCountsBeginTS = -1;
    if (newIndex == 1) {
      //  last week chosen
      updatedSymptomLogCountsBeginTS =
        this.getCurrentTimestampMinutes() - statsConstants.weekLengthMinutes;
    } else if (newIndex == 2) {
      //  last month chosen
      updatedSymptomLogCountsBeginTS =
        this.getCurrentTimestampMinutes() - statsConstants.monthLengthMinutes;
    } else if (newIndex == 3) {
      //  last year chosen
      updatedSymptomLogCountsBeginTS =
        this.getCurrentTimestampMinutes() - statsConstants.yearLengthMinutes;
    } else {
      //  all time chosen
      updatedSymptomLogCountsBeginTS = -1;
    }

    Promise.resolve()
      .then(() => {
        return this.props.dispatch(
          updateStatsBeginRangeTSAction(updatedSymptomLogCountsBeginTS),
        );
      })
      .then(() => {
        this.props.dispatch(
          regenerateChartStatsAction(
            this.props.trackingLog,
            this.props.userProfile,
            this.props.userAnalytics,
            this.props.customSymptoms,
          ),
        );
      });
  };

  getMarkedDates = () => {
    let newMarkedDates = {};
    //  highlight today
    const currentTS = new XDate();
    const currentMonth = currentTS.getMonth() + 1;
    const keyToday =
      currentTS.getFullYear() + '-' + currentMonth + '-' + currentTS.getDate();
    newMarkedDates[keyToday] = {
      // dotColor: theme.COLORS.PRIMARY3,
      // marked: true,
      endingDay: true,
      startingDay: true,
      color: theme.COLORS.PRIMARY2,
      textColor: theme.COLORS.WHITE,
    };

    Object.entries(this.props.trackingLog).forEach(logEntry => {
      const aTimestamp = logEntry[0];
      const symptomDict = logEntry[1];
      Object.entries(symptomDict.symptoms).forEach(symptomEntry => {
        const symptomVal = symptomEntry[1];
        if (
          symptomVal['Type'] == 'Menstrual' &&
          (symptomVal['Name'] == 'Light' ||
            symptomVal['Name'] == 'Medium' ||
            symptomVal['Name'] == 'Heavy')
        ) {
          const dateObj = new XDate(parseInt(aTimestamp) * 60000);
          const dateStr = dateObj.toString('yyyy-MM-dd');
          console.log(
            'NEW LOGGED MENSTRUAL SYMPTOM: ',
            symptomVal['Name'],
            aTimestamp,
            dateStr,
          );
          newMarkedDates[dateStr] = {
            // marked: true,
            // dotColor: theme.COLORS.PRIMARY3,
            // activeOpacity: 0.5,
            endingDay: true,
            startingDay: true,
            color: theme.COLORS.ERROR2,
            textColor: theme.COLORS.WHITE,
          };
        }
      });

      const dateObj = new XDate(parseInt(aTimestamp) * 60000);
      const dateStr = dateObj.toString('yyyy-MM-dd');

      if (Object.keys(newMarkedDates).includes(dateStr)) {
        newMarkedDates[dateStr] = {
          ...newMarkedDates[dateStr],
          marked: true,
          dotColor: theme.COLORS.PRIMARY3,
        };
      } else {
        newMarkedDates[dateStr] = {
          marked: true,
          dotColor: theme.COLORS.PRIMARY3,
        };
      }
    });

    //  add in menstrual to calendar
    //     timestampDays: "PeriodStart" / "PeriodEnd" / "Ovulation",
    let lastPeriodStart = -1;
    Object.entries(this.props.userAnalytics.menstrualCycle.menstrualCycleLog)
      .sort(([a], [b]) => a - b)
      .forEach(([key, val]) => {
        //  FIXMETUNA:  hack, adjusting the TSDays menstration dates 1 day forward so that
        //  when interpreted as UTC and rounded down they will be the correct dates in the US
        const utcAdjustedTS = parseInt(key) + 1;
        if (val == 'PeriodEnd') {
          if (!(lastPeriodStart == -1)) {
            //  draw the period range
            // newMarkedDates[lastPeriodStart -> key]  = colored range

            const startTSTmp =
              parseInt(lastPeriodStart) * statsConstants.dayLengthMilliseconds;
            const endTSTmp =
              parseInt(utcAdjustedTS) * statsConstants.dayLengthMilliseconds;
            for (
              let nextTS = startTSTmp;
              nextTS < endTSTmp;
              nextTS += statsConstants.dayLengthMilliseconds
            ) {
              const dateObj = new XDate(parseInt(nextTS));
              const dateStr = dateObj.toString('yyyy-MM-dd');

              let dateColor = theme.COLORS.ERROR1;
              let dateMiddleColor = theme.COLORS.ERROR3;
              if (nextTS > Date.now()) {
                //  predicted period
                dateColor = theme.COLORS.ERROR2;
                dateMiddleColor = theme.COLORS.ERROR2;
              }

              if (nextTS == startTSTmp) {
                // logged period
                newMarkedDates[dateStr] = {
                  startingDay: true,
                  color: dateColor,
                  textColor: theme.COLORS.WHITE,
                };
              } else if (
                nextTS + statsConstants.dayLengthMilliseconds >=
                endTSTmp
              ) {
                // logged period
                newMarkedDates[dateStr] = {
                  endingDay: true,
                  // startingDay: true,
                  color: dateColor,
                  textColor: theme.COLORS.WHITE,
                };
              } else {
                // logged period
                newMarkedDates[dateStr] = {
                  color: dateMiddleColor,
                  textColor: theme.COLORS.WHITE,
                };
              }
            }
          }

          lastPeriodStart = -1;
        } else if (val == 'PeriodStart') {
          lastPeriodStart = utcAdjustedTS;
        }
      });

    return newMarkedDates;
  };

  getCurrentTimestampMinutes = () => {
    return Math.floor(Date.now() / 60000.0);
  };

  getCurrentTimestampDays = () => {
    return Math.floor(Date.now() / statsConstants.dayLengthMilliseconds);
  };

  timestampSecondsToMonthDayStr = tsStr => {
    const dateObj = new XDate(parseInt(tsStr) * 60000);
    const dateStr = dateObj.toString('MM/dd');
    return dateStr;
  };

  getSymptomMetricSelector = newChartStats => {
    const {trackingLog} = this.props;

    let symptomCategories = [];
    Object.keys(newChartStats['symptomMetricOptions']).forEach(key => {
      symptomCategories = symptomCategories.concat({title: key});
    });

    let symptomMetrics = [];
    if (
      !(this.state.customChart1Symp == '') &&
      !(
        newChartStats['symptomMetricOptions'][this.state.customChart1Symp] ==
        null
      )
    ) {
      newChartStats['symptomMetricOptions'][
        this.state.customChart1Symp
      ].forEach(key => {
        symptomMetrics = symptomMetrics.concat({title: key});
      });
    }

    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: theme.SIZES.BASE * 0.25,
          justifyContent: 'center',
          marginTop: theme.SIZES.BASE * 0.5,
        }}>
        <View style={{width: 150}}>
          <Select
            customPrompt={Object.keys(newChartStats['symptomMetricOptions'])[0]}
            defaultIndex={1}
            options={symptomCategories}
            customButtonStyle={{
              backgroundColor: theme.COLORS.BACKGROUND2,
            }}
            customTextStyle={{color: theme.COLORS.TEXT2}}
            customIconColor={theme.COLORS.TEXT2}
            onSelect={(ind, value) => {
              Promise.resolve()
                .then(() => {
                  return this.props.dispatch(
                    updateCustomChart1SympAction(value),
                  );
                })
                .then(() => {
                  this.props.dispatch(
                    regenerateChartStatsAction(
                      this.props.trackingLog,
                      this.props.userProfile,
                      this.props.userAnalytics,
                      this.props.customSymptoms,
                    ),
                  );
                })
                .then(() => {
                  this.setState({customChart1Symp: value});
                });
            }}
          />
        </View>
        {symptomMetrics.length > 0 && (
          <View style={{width: 150, marginLeft: theme.SIZES.BASE * 0.5}}>
            <Select
              customPrompt="Metric"
              defaultIndex={1}
              options={symptomMetrics}
              customButtonStyle={{
                backgroundColor: theme.COLORS.BACKGROUND2,
              }}
              customTextStyle={{color: theme.COLORS.TEXT2}}
              customIconColor={theme.COLORS.TEXT2}
              onSelect={(ind, value) => {
                Promise.resolve()
                  .then(() => {
                    return this.props.dispatch(
                      updateCustomChart1MetricAction(value),
                    );
                  })
                  .then(() => {
                    this.props.dispatch(
                      regenerateChartStatsAction(
                        this.props.trackingLog,
                        this.props.userProfile,
                        this.props.userAnalytics,
                        this.props.customSymptoms,
                      ),
                    );
                  })
                  .then(() => {
                    this.setState({customChart1Metric: value});
                  });
              }}
            />
          </View>
        )}
      </View>
    );
  };

  getGraphParamSelector = (
    newChartStats,
    prompt1 = null,
    optionsList1 = null,
    customOnSelect1 = null,
    prompt2 = null,
    optionsList2 = null,
    customOnSelect2 = null,
  ) => {
    if (!(optionsList1 == null)) {
      return (
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: theme.SIZES.BASE * 0.25,
            justifyContent: 'center',
            marginTop: theme.SIZES.BASE * 0.5,
          }}>
          <View style={{width: 150}}>
            <Select
              customPrompt={prompt1}
              defaultIndex={1}
              options={optionsList1}
              customButtonStyle={{
                backgroundColor: theme.COLORS.BACKGROUND2,
              }}
              customTextStyle={{color: theme.COLORS.TEXT2}}
              customIconColor={theme.COLORS.TEXT2}
              onSelect={(ind, value) => {
                customOnSelect1(ind, value);
              }}
            />
          </View>
          {!(optionsList2 == null) && (
            <View style={{width: 150, marginLeft: theme.SIZES.BASE * 0.5}}>
              <Select
                customPrompt={prompt2}
                defaultIndex={1}
                options={optionsList2}
                customButtonStyle={{
                  backgroundColor: theme.COLORS.BACKGROUND2,
                }}
                customTextStyle={{color: theme.COLORS.TEXT2}}
                customIconColor={theme.COLORS.TEXT2}
                onSelect={(ind, value) => {
                  customOnSelect2(ind, value);
                }}
              />
            </View>
          )}
        </View>
      );
    } else {
      return <></>;
    }
  };

  customCalendarOnDayPress = dayTS => {
    const currentXDate = new XDate();
    const currentTS = Math.ceil(currentXDate.getTime() / 60000);
    if (dayTS <= currentTS) {
      this.setEditTrackLogOnDate(dayTS);
    } else {
      this.setEditTrackLogOnDate(null);
    }
  };

  getFirstSameDayTS = (trackingLogP, tsMinutesP) => {
    const matchingTSLog = -1;
    const tsToFindDays = Math.floor(
      tsMinutesP / statsConstants.dayLengthMinutes,
    );
    for (const [keyTmp, value] of Object.entries(this.props.trackingLog).sort(
      ([a], [b]) => a - b,
    )) {
      const keyTsDays = Math.floor(
        parseInt(keyTmp) / statsConstants.dayLengthMinutes,
      );
      if (keyTsDays == tsToFindDays) {
        const keyTmpReturn = keyTmp;
        return keyTmpReturn;
      }
    }
    return matchingTSLog;
  };

  // This is an example of a function you might use to transform your data to make 100% data
  transformData(dataset) {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y;
      }, 0);
    });
    return dataset.map(data => {
      return data.map((datum, i) => {
        return {x: datum.x, y: (datum.y / totals[i]) * 100};
      });
    });
  }

  getXAxisOnlyData = logCountStats => {
    let dataset = [];
    for (let i = 0; i < logCountStats.length; i++) {
      dataset = dataset.concat({x: logCountStats[i]});
    }
    return dataset;
  };

  convertListToTitleArray = listP => {
    let convertedArray = [];
    for (let listItem of listP) {
      convertedArray = convertedArray.concat({title: listItem});
    }
    return convertedArray;
  };

  userTrackingMenstration = () => {
    const menstrationStatusStr =
      this.props.userProfile.OnboardingAnswers.onboarding.menstrationStatus.toString();
    if (
      menstrationStatusStr &&
      (menstrationStatusStr.includes('Yes') ||
        menstrationStatusStr.includes('yes'))
    ) {
      return true;
    } else {
      return false;
    }
  };

  convertGraphData = (data) => {
    if(!isArray(data)) return [];
    let ret = [...data];
    let dateLen = ret.length;
    for(let i = 1; i < dateLen; i++) {
      if(ret[i].y == 0) {
        ret[i] = {"x": ret[i]["x"], "y": ret[i-1]["y"]};
      }
    }
    return ret
  }

  render() {
    const {navigation} = this.props;

    const newMarkedDates = this.getMarkedDates();
    // console.log('MARKED DATES: ', newMarkedDates);
    const newChartStats = this.props.userAnalytics.chartStats;

    // const myDataset = [
    //   [
    //     { x: "a", y: 1 },
    //     { x: "b", y: 2 },
    //     { x: "c", y: 3 },
    //     { x: "d", y: 2 },
    //     { x: "e", y: 1 },
    //   ],
    // ];

    // const data2012 = [
    //   { quarter: 1, earnings: 13000 },
    //   { quarter: 2, earnings: 16500 },
    //   { quarter: 3, earnings: 14250 },
    //   { quarter: 4, earnings: 19000 },
    // ];

    // const sampleData = [
    //   { x: 1, y: 5 },
    //   { x: 2, y: 4 },
    //   { x: 3, y: 2 },
    //   { x: 4, y: 3 },
    //   { x: 5, y: 1 },
    // ];

    // const sampleHistogramData = [
    //   { x: 1 },
    //   { x: 2 },
    //   { x: 3 },
    //   { x: 4 },
    //   { x: 5 },
    //   { x: 1.2 },
    //   { x: 3.7 },
    //   { x: 8.3 },
    //   { x: 2.3 },
    //   { x: 1.7 },
    //   { x: 0.4 },
    //   { x: 0.6 },
    //   { x: 4.2 },
    //   { x: 8.4 },
    //   { x: 2.5 },
    //   { x: 6.4 },
    //   { x: 2.8 },
    //   { x: 3.8 },
    //   { x: 1.3 },
    //   { x: 1.9 },
    //   { x: 5.4 },
    // ];

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customImageName={Images.ui.BackgroundGradient4}>
        <GardenContext.Consumer>
          {garden => (
            <View
              style={{
                flex: 1,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <StatusBar
                  style={{
                    backgroundColor: theme.COLORS.TRANSPARENT,
                    fontFamily: theme.FONTS.TEXT,
                  }}
                  backgroundColor={theme.COLORS.TRANSPARENT}
                />

                <KeyboardAvoidingView
                  style={{
                    flex: 1,
                  }}
                  behavior="padding"
                  enabled={iosPlatform()}>
                  <ScrollView
                    testID="pageScrollview"
                    showsVerticalScrollIndicator={false}>
                    <RoundedTopContainer
                      style={{
                        paddingHorizontal: theme.SIZES.BASE,
                        minHeight: height - theme.SIZES.BASE * 8.6,
                        marginTop: theme.SIZES.BASE * 0.8,
                      }}>
                      <View testID="calenderView" style={{marginTop: 4}}>
                        <Calendar
                          customOnDayPress={this.customCalendarOnDayPress}
                          markedDates={newMarkedDates}
                          calendarWidth={width - theme.SIZES.BASE * 2}
                        />
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            top: -8,
                          }}>
                          <Text
                            style={{
                              color: theme.COLORS.SECONDARY1,
                              fontSize: theme.SIZES.B1,
                            }}>
                            ● Selected
                          </Text>
                          <Text
                            style={{
                              color: theme.COLORS.ERROR1,
                              fontSize: theme.SIZES.B1,
                            }}>
                            ● Period
                          </Text>
                          <Text
                            style={{
                              color: theme.COLORS.PRIMARY2,
                              fontSize: theme.SIZES.B1,
                            }}>
                            ● Today
                          </Text>
                        </View>
                      </View>

                      {!(this.state.editTrackLogOnDate == null) && (
                        <View
                          style={{
                            marginTop: 0,
                            paddingTop: 0,
                            alignItems: 'center',
                            marginBottom: theme.SIZES.BASE * 0.5,
                          }}>
                          <Button
                            testID="editDateEntryButton"
                            style={{
                              ...styles.outlinedButton,
                              width: 220,
                              fontSize: 16,
                              fontWeight: '700',
                              textAlign: 'center',
                              borderColor: theme.COLORS.PRIMARY2,
                            }}
                            titleStyle={{
                              color: theme.COLORS.PRIMARY2,
                              fontFamily: theme.FONTS.TEXT,
                            }}
                            title={
                              'Edit entry on ' +
                              XDate(
                                this.state.editTrackLogOnDate * 60000,
                              ).toString('M/d/yyyy') +
                              '?'
                            }
                            onPress={() => {
                              const tsMinutesTmp =
                                this.state.editTrackLogOnDate;
                              let matchingTSLog = -1;
                              matchingTSLog = this.getFirstSameDayTS(
                                this.props.trackingLog,
                                tsMinutesTmp,
                              );

                              Promise.resolve()
                                .then(() =>
                                  this.props.dispatch(
                                    setSymptomLogStagingToDate(
                                      tsMinutesTmp,
                                      matchingTSLog > 0
                                        ? this.props.trackingLog[matchingTSLog]
                                            .symptoms
                                        : {},
                                      matchingTSLog > 0
                                        ? this.props.trackingLog[matchingTSLog]
                                            .logEntryNotes
                                        : '',
                                      true,
                                    ),
                                  ),
                                )
                                .then(() => {
                                  navigation.navigate('TrackSymptoms');
                                });
                            }}></Button>
                        </View>
                      )}

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            flex: 1,
                            alignContent: 'center',
                            alignItems: 'center',
                            marginBottom: theme.SIZES.BASE * 0.5,
                            paddingTop: 0,
                            marginTop: 0,
                          }}>
                          <Button
                            testID="logHistoryButton"
                            style={{
                              ...styles.button,
                              width: width / 2.0 - theme.SIZES.BASE * 2.0,
                              fontSize: 16,
                              fontWeight: '700',
                              textAlign: 'center',
                            }}
                            titleStyle={{
                              color: theme.COLORS.WHITE,
                              fontFamily: theme.FONTS.TEXT,
                            }}
                            title="View Log History"
                            onPress={() => {
                              navigation.navigate('TrackLogHistoryScreen');
                            }}></Button>
                        </View>

                        <View
                          style={{
                            flex: 1,
                            alignContent: 'center',
                            alignItems: 'center',
                            marginBottom: theme.SIZES.BASE * 0.5,
                            paddingTop: 0,
                            marginTop: 0,
                          }}>
                          <Button
                            testID="howFeelingButton"
                            style={{
                              ...styles.outlinedButton,
                              width: width / 2.0 - theme.SIZES.BASE * 2.0,
                              fontSize: 16,
                              fontWeight: '700',
                              textAlign: 'center',
                              borderColor: theme.COLORS.PRIMARY2,
                            }}
                            titleStyle={{
                              color: theme.COLORS.PRIMARY2,
                              fontFamily: theme.FONTS.TEXT,
                            }}
                            title="How are you feeling?"
                            onPress={() => {
                              this.props.dispatch(
                                resetTrackingLogStagingToDefaultAction(),
                              );

                              navigation.navigate('TrackSymptoms');
                            }}></Button>
                        </View>
                      </View>

                      {this.userTrackingMenstration() && (
                        <View>
                          <View
                            style={{
                              justifyContent: 'flex-start',
                              marginHorizontal: theme.SIZES.BASE,
                            }}>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                fontFamily: theme.FONTS.TEXT,
                                fontSize: theme.SIZES.H5,
                                marginTop: theme.SIZES.BASE,
                              }}>
                              Menstrual Cycle
                            </Text>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-evenly',
                            }}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Blob1
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.SECONDARY3,
                                      preserveAspectRatio: 'none',
                                      top: -24,
                                    }}
                                    height={80}
                                    width={80}
                                  />
                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontWeight: 'bold',
                                      fontFamily: theme.FONTS.TEXT,
                                      color: theme.COLORS.SECONDARY1,
                                    }}>
                                    {newChartStats['currentDayInCycle']}/
                                    {
                                      this.props.userProfile.OnboardingAnswers
                                        .onboarding.menstruation.avgLenOfCycle
                                    }
                                  </Text>
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Cycle Day
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT3,
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                Menstruation
                              </Text>
                            </View>

                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    marginVertical: theme.SIZES.BASE * 0.5,
                                  }}>
                                  <Blob2
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.TERTIARY2,
                                      preserveAspectRatio: 'none',
                                      top: -24,
                                    }}
                                    height={80}
                                    width={80}
                                  />
                                  <Icon
                                    type="ionicon"
                                    name="calendar-outline"
                                    fill={theme.COLORS.TERTIARY1}
                                    color={theme.COLORS.TERTIARY1}
                                  />
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                {newChartStats['nextPredictedPeriodStr']}
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT3,
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                Next Period
                              </Text>
                            </View>

                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Blob4
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.PRIMARY3,
                                      preserveAspectRatio: 'none',
                                      top: -12,
                                    }}
                                    height={70}
                                    width={70}
                                  />
                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontFamily: theme.FONTS.TEXT,
                                      paddingTop: theme.SIZES.BASE * 0.4,
                                      color: theme.COLORS.PRIMARY1,
                                    }}>
                                    {
                                      newChartStats[
                                        'currentConsequtiveEntriesStreak'
                                      ]
                                    }
                                  </Text>
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Current Log
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT2,
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                Streak
                              </Text>
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-evenly',
                            }}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Blob2
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.PRIMARY3,
                                      preserveAspectRatio: 'none',
                                      top: -24,
                                    }}
                                    height={80}
                                    width={80}
                                  />

                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontFamily: theme.FONTS.TEXT,
                                      color: theme.COLORS.PRIMARY1,
                                    }}>
                                    {
                                      this.props.userProfile.OnboardingAnswers
                                        .onboarding.menstruation.avgLenOfCycle
                                    }
                                  </Text>
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Cycle Length
                              </Text>
                              {this.props.userProfile.onboardingProgress >=
                                3 && (
                                <Text
                                  style={{
                                    color: theme.COLORS.TEXT3,
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  User entered
                                </Text>
                              )}
                              {this.props.userProfile.onboardingProgress <
                                3 && (
                                <Text
                                  style={{
                                    color: theme.COLORS.TEXT3,
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  Default value
                                </Text>
                              )}
                            </View>

                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Blob4
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.SECONDARY3,
                                      preserveAspectRatio: 'none',
                                      top: -12,
                                    }}
                                    height={70}
                                    width={70}
                                  />
                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontWeight: 'bold',
                                      fontFamily: theme.FONTS.TEXT,
                                      paddingTop: theme.SIZES.BASE * 0.4,
                                      color: theme.COLORS.SECONDARY1,
                                    }}>
                                    {
                                      this.props.userProfile.OnboardingAnswers
                                        .onboarding.menstruation.avgLenOfPeriod
                                    }
                                  </Text>
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Period Length
                              </Text>
                              {this.props.userProfile.onboardingProgress >=
                                3 && (
                                <Text
                                  style={{
                                    color: theme.COLORS.TEXT3,
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  User entered
                                </Text>
                              )}
                              {this.props.userProfile.onboardingProgress <
                                3 && (
                                <Text
                                  style={{
                                    color: theme.COLORS.TEXT3,
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  Default value
                                </Text>
                              )}
                            </View>

                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    marginVertical: theme.SIZES.BASE * 0.5,
                                  }}>
                                  <Blob1
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.TERTIARY2,
                                      preserveAspectRatio: 'none',
                                      top: -24,
                                    }}
                                    height={80}
                                    width={80}
                                  />

                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontWeight: 'bold',
                                      fontFamily: theme.FONTS.TEXT,
                                      color: theme.COLORS.TERTIARY1,
                                    }}>
                                    0
                                  </Text>
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Cycle Variation
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT3,
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                  textAlign: 'center',
                                }}>
                                Updated after 3 months of use
                              </Text>
                            </View>
                          </View>
                        </View>
                      )}

                      {!this.userTrackingMenstration() && (
                        <View>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-evenly',
                            }}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Blob1
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.SECONDARY3,
                                      preserveAspectRatio: 'none',
                                      top: -24,
                                    }}
                                    height={80}
                                    width={80}
                                  />
                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontWeight: 'bold',
                                      fontFamily: theme.FONTS.TEXT,
                                      color: theme.COLORS.SECONDARY1,
                                    }}>
                                    {
                                      Object.keys(
                                        newChartStats['allUniqueSymptomCounts'],
                                      ).length
                                    }
                                  </Text>
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Symptoms
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT3,
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                Tracked
                              </Text>
                            </View>

                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    marginVertical: theme.SIZES.BASE * 0.5,
                                  }}>
                                  <Blob2
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.TERTIARY2,
                                      preserveAspectRatio: 'none',
                                      top: -24,
                                    }}
                                    height={80}
                                    width={80}
                                  />

                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontFamily: theme.FONTS.TEXT,
                                      paddingTop: theme.SIZES.BASE * 0.2,
                                      color: theme.COLORS.TERTIARY1,
                                    }}>
                                    {garden.playerInventory.numSeeds}
                                  </Text>
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Seeds
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT3,
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                Earned
                              </Text>
                            </View>

                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Blob4
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.PRIMARY3,
                                      preserveAspectRatio: 'none',
                                      top: -12,
                                    }}
                                    height={70}
                                    width={70}
                                  />
                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontFamily: theme.FONTS.TEXT,
                                      paddingTop: theme.SIZES.BASE * 0.4,
                                      color: theme.COLORS.PRIMARY1,
                                    }}>
                                    {
                                      newChartStats[
                                        'currentConsequtiveEntriesStreak'
                                      ]
                                    }
                                  </Text>
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Current Log
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT2,
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                Streak
                              </Text>
                            </View>
                          </View>
                        </View>
                      )}

                      {/*  FIXMETUNA:*/}
                      {/*  FIXMETUNA:  fixing graphs here, tmp, needs a lot of work */}
                      {/*  FIXMETUNA:*/}
                      <View
                        style={{
                          justifyContent: 'flex-start',
                          marginHorizontal: theme.SIZES.BASE,
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontFamily: theme.FONTS.TEXT,
                            fontSize: theme.SIZES.H5,
                            marginTop: theme.SIZES.BASE,
                          }}>
                          Insights
                        </Text>
                      </View>

                      {Object.keys(this.props.trackingLog).length < 7 && (
                        <View>
                          <View
                            style={{
                              justifyContent: 'center',
                              marginHorizontal: theme.SIZES.BASE,
                              marginVertical: theme.SIZES.BASE,
                            }}>
                            <Text
                              style={{
                                fontFamily: theme.FONTS.TEXT,
                                fontSize: theme.SIZES.H6,
                                marginTop: theme.SIZES.BASE,
                                textAlign: 'center',
                              }}>
                              Insights available after a week of daily logs.
                              Keep it up!
                            </Text>
                          </View>
                        </View>
                      )}

                      {Object.keys(this.props.trackingLog).length >= 7 && (
                        <View>
                          <View
                            style={{
                              marginTop: theme.SIZES.BASE,
                            }}>
                            <Text
                              style={{
                                fontFamily: theme.FONTS.TEXT,
                                fontSize: theme.SIZES.H6,
                                marginTop: theme.SIZES.BASE * 2,
                                marginBottom: theme.SIZES.BASE,
                              }}>
                              View insights over:
                            </Text>

                            <Select
                              testID="insightsOverTimeSelect"
                              customPrompt="Select time range"
                              defaultIndex={1}
                              options={[
                                {title: 'All time'},
                                {title: 'Last week'},
                                {title: 'Last month'},
                                {title: 'Last year'},
                              ]}
                              onSelect={this.setStatsWindowOfTimeIndex}
                              customButtonStyle={{
                                backgroundColor: theme.COLORS.BACKGROUND2,
                              }}
                              customTextStyle={{color: theme.COLORS.TEXT2}}
                              customIconColor={theme.COLORS.TEXT2}
                            />
                          </View>

                          <BarGraph
                            title={'Most Common Symptoms'}
                            data={newChartStats['chart0SymptomLogCounts']}
                            customPadding={{
                              left: theme.SIZES.BASE * 4,
                              right: theme.SIZES.BASE * 4,
                              top: theme.SIZES.BASE * 3,
                              bottom: theme.SIZES.BASE * 3,
                            }}
                            customDependantAxisProps={{
                              tickFormat: t => Math.round(t),
                            }}
                            horizontal={true}
                          />

                          <LineGraph
                            title={'Happiness Over Time'}
                            data={this.convertGraphData(newChartStats['chart2HappinessOverTime'])}
                            customPadding={{
                              left: theme.SIZES.BASE * 4,
                              right: theme.SIZES.BASE * 2,
                              top: theme.SIZES.BASE * 3,
                              bottom: theme.SIZES.BASE * 3,
                            }}
                            customAxisProps={{
                              tickFormat: t => t,
                            }}
                            customDependantAxisProps={{
                              tickFormat: [
                                'awful',
                                'bad',
                                'meh',
                                'good',
                                'rad',
                              ],
                            }}
                          />

                          <LineGraph
                            title={'Symptoms Over Time'}
                            data={this.convertGraphData(newChartStats['chart1SympOverTime'])}
                            customTitleComponant={() =>
                              this.getSymptomMetricSelector(newChartStats)
                            }
                            customPadding={{
                              left: theme.SIZES.BASE * 4,
                              right: theme.SIZES.BASE * 2,
                              top: theme.SIZES.BASE * 3,
                              bottom: theme.SIZES.BASE * 3,
                            }}
                            customAxisProps={{
                              tickFormat: t => t,
                            }}
                          />

                          <BarGraph
                            title={'Symptoms by Day of Week'}
                            data={newChartStats['chart3SymptomsByDOW']}
                            customTitleComponant={() =>
                              this.getGraphParamSelector(
                                newChartStats,
                                (prompt1 = Object.keys(
                                  newChartStats['symptomsByDOW'],
                                )[0]),
                                (optionsList1 = this.convertListToTitleArray(
                                  Object.keys(newChartStats['symptomsByDOW']),
                                )),
                                (customOnSelect1 = (ind, value) => {
                                  console.log('SELECTING!!!!: ', ind, value);
                                  Promise.resolve()
                                    .then(() => {
                                      return this.props.dispatch(
                                        updateChart3SymptomAction(value),
                                      );
                                    })
                                    .then(() => {
                                      this.props.dispatch(
                                        regenerateChartStatsAction(
                                          this.props.trackingLog,
                                          this.props.userProfile,
                                          this.props.userAnalytics,
                                          this.props.customSymptoms,
                                        ),
                                      );
                                    })
                                    .then(() => {
                                      this.setState({chart3Symptom: value});
                                    });
                                }),
                              )
                            }
                            customPadding={{
                              left: theme.SIZES.BASE * 4,
                              right: theme.SIZES.BASE * 2,
                              top: theme.SIZES.BASE * 3,
                              bottom: theme.SIZES.BASE * 3,
                            }}
                            customAxisProps={{
                              tickFormat: t => t,
                            }}
                          />

                          {this.userTrackingMenstration() && (
                            <LineGraph
                              title={'Symptoms by Menstrual Cycle'}
                              data={
                                newChartStats[
                                  'chart4SymptomsCorrelatedWithMenstrualCycle'
                                ]
                              }
                              customTitleComponant={() =>
                                this.getGraphParamSelector(
                                  newChartStats,
                                  (prompt1 = Object.keys(
                                    newChartStats[
                                      'symptomsCorrelatedWithMenstrualCycle'
                                    ],
                                  )[0]),
                                  (optionsList1 = this.convertListToTitleArray(
                                    Object.keys(
                                      newChartStats[
                                        'symptomsCorrelatedWithMenstrualCycle'
                                      ],
                                    ),
                                  )),
                                  (customOnSelect1 = (ind, value) => {
                                    console.log('SELECTING!!!!: ', ind, value);
                                    Promise.resolve()
                                      .then(() => {
                                        return this.props.dispatch(
                                          updateChart4SymptomAction(value),
                                        );
                                      })
                                      .then(() => {
                                        this.props.dispatch(
                                          regenerateChartStatsAction(
                                            this.props.trackingLog,
                                            this.props.userProfile,
                                            this.props.userAnalytics,
                                            this.props.customSymptoms,
                                          ),
                                        );
                                      })
                                      .then(() => {
                                        this.setState({chart4Symptom: value});
                                      });
                                  }),
                                )
                              }
                              customPadding={{
                                left: theme.SIZES.BASE * 4,
                                right: theme.SIZES.BASE * 2,
                                top: theme.SIZES.BASE * 3,
                                bottom: theme.SIZES.BASE * 3,
                              }}
                              customAxisProps={{
                                tickFormat: t => t,
                                label: 'Day of Cycle',
                              }}
                            />
                          )}

                          <LineGraph
                            title={'Symptoms Correlated'}
                            data={
                              newChartStats['chart5SymptomsCorrelatedOverTime'][
                                'plot1'
                              ]
                            }
                            secondPlotData={
                              newChartStats['chart5SymptomsCorrelatedOverTime'][
                                'plot2'
                              ]
                            }
                            customTitleComponant={() =>
                              this.getGraphParamSelector(
                                newChartStats,
                                (prompt1 =
                                  Object.keys(
                                    newChartStats['symptomsCorrelatedOverTime'],
                                  ).length > 1
                                    ? Object.keys(
                                        newChartStats[
                                          'symptomsCorrelatedOverTime'
                                        ],
                                      )[0]
                                    : 'Select Symptom 1'),
                                (optionsList1 = this.convertListToTitleArray(
                                  Object.keys(
                                    newChartStats['symptomsCorrelatedOverTime'],
                                  ),
                                )),
                                (customOnSelect1 = (ind, value) => {
                                  Promise.resolve()
                                    .then(() => {
                                      return this.props.dispatch(
                                        updateChart5Symptom1Action(value),
                                      );
                                    })
                                    .then(() => {
                                      this.props.dispatch(
                                        regenerateChartStatsAction(
                                          this.props.trackingLog,
                                          this.props.userProfile,
                                          this.props.userAnalytics,
                                          this.props.customSymptoms,
                                        ),
                                      );
                                    })
                                    .then(() => {
                                      this.setState({chart5Symptom1: value});
                                    });
                                }),
                                (prompt2 =
                                  Object.keys(
                                    newChartStats['symptomsCorrelatedOverTime'],
                                  ).length > 1
                                    ? Object.keys(
                                        newChartStats[
                                          'symptomsCorrelatedOverTime'
                                        ],
                                      )[1]
                                    : 'Select Symptom 2'),
                                (optionsList2 = this.convertListToTitleArray(
                                  Object.keys(
                                    newChartStats['symptomsCorrelatedOverTime'],
                                  ),
                                )),
                                (customOnSelect2 = (ind, value) => {
                                  Promise.resolve()
                                    .then(() => {
                                      return this.props.dispatch(
                                        updateChart5Symptom2Action(value),
                                      );
                                    })
                                    .then(() => {
                                      this.props.dispatch(
                                        regenerateChartStatsAction(
                                          this.props.trackingLog,
                                          this.props.userProfile,
                                          this.props.userAnalytics,
                                          this.props.customSymptoms,
                                        ),
                                      );
                                    })
                                    .then(() => {
                                      this.setState({chart5Symptom2: value});
                                    });
                                }),
                              )
                            }
                            customPadding={{
                              left: theme.SIZES.BASE * 4,
                              right: theme.SIZES.BASE * 2,
                              top: theme.SIZES.BASE * 3,
                              bottom: theme.SIZES.BASE * 3,
                            }}
                            customAxisProps={{
                              tickFormat: t => t,
                            }}
                          />

                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-evenly',
                            }}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Blob1
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.SECONDARY3,
                                      preserveAspectRatio: 'none',
                                      top: -24,
                                    }}
                                    height={80}
                                    width={80}
                                  />
                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontWeight: 'bold',
                                      fontFamily: theme.FONTS.TEXT,
                                      color: theme.COLORS.SECONDARY1,
                                    }}>
                                    {
                                      newChartStats[
                                        'currentConsequtiveEntriesStreak'
                                      ]
                                    }
                                  </Text>
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Current Consequtive
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Entries Streak
                              </Text>
                            </View>

                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    marginVertical: theme.SIZES.BASE * 0.5,
                                  }}>
                                  <Blob2
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.TERTIARY2,
                                      preserveAspectRatio: 'none',
                                      top: -24,
                                    }}
                                    height={80}
                                    width={80}
                                  />

                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontWeight: 'bold',
                                      fontFamily: theme.FONTS.TEXT,
                                      color: theme.COLORS.TERTIARY1,
                                    }}>
                                    {
                                      newChartStats[
                                        'allTimeConsequtiveEntriesStreak'
                                      ]
                                    }
                                  </Text>
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                All Time Consequtive
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Entries Streak
                              </Text>
                            </View>
                          </View>

                          <Text></Text>

                          <View>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                fontFamily: theme.FONTS.TEXT,
                              }}>
                              Symptoms Trending Up:
                            </Text>
                            <Text>
                              {newChartStats['symptomsTrendingImprovement']
                                .length > 1
                                ? newChartStats[
                                    'symptomsTrendingImprovement'
                                  ][0] +
                                  ', ' +
                                  newChartStats[
                                    'symptomsTrendingImprovement'
                                  ][1]
                                : newChartStats['symptomsTrendingImprovement']}
                            </Text>
                          </View>

                          <View>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                fontFamily: theme.FONTS.TEXT,
                              }}>
                              Symptoms Trending Down:
                            </Text>
                            <Text>
                              {newChartStats['symptomsTrendingWorse'].length > 1
                                ? newChartStats['symptomsTrendingWorse'][0] +
                                  ', ' +
                                  newChartStats['symptomsTrendingWorse'][1]
                                : newChartStats['symptomsTrendingWorse']}
                            </Text>
                          </View>

                          <View>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                fontFamily: theme.FONTS.TEXT,
                              }}>
                              Positively Correlated Symptoms:
                            </Text>
                            <Text>
                              {newChartStats['mostCorrelatedSymptoms'].length >
                              1
                                ? newChartStats['mostCorrelatedSymptoms'][0] +
                                  ', ' +
                                  newChartStats['mostCorrelatedSymptoms'][1]
                                : newChartStats['mostCorrelatedSymptoms']}
                            </Text>
                          </View>

                          <View>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                fontFamily: theme.FONTS.TEXT,
                              }}>
                              Inversely Correlated Symptoms:
                            </Text>
                            <Text>
                              {newChartStats['leastCorrelatedSymptoms'].length >
                              1
                                ? newChartStats['leastCorrelatedSymptoms'][0] +
                                  ', ' +
                                  newChartStats['leastCorrelatedSymptoms'][1]
                                : newChartStats['leastCorrelatedSymptoms']}
                            </Text>
                          </View>
                          <Text></Text>

                          {/* <View>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontFamily: theme.FONTS.TEXT,
                          }}
                        >
                          Analytics Work in Progress Below:
                        </Text>
                      </View>
                      <Text>Log info:</Text>
                      <Text>
                        {"Number of daily entries: " +
                          Object.keys(this.props.trackingLog).length}
                      </Text>
                      <Text>
                        {"First entry timestamp: " +
                          Object.keys(this.props.trackingLog)[0]}
                      </Text>
                      <Text>
                        {"Last entry timestamp: " +
                          Object.keys(this.props.trackingLog)[
                            Object.keys(this.props.trackingLog).length - 1
                          ]}
                      </Text>
                      {Object.keys(this.props.trackingLog).length > 0 && (
                        <Text>
                          {"Last entry symptoms: " +
                            Object.entries(
                              this.props.trackingLog[
                                Object.keys(this.props.trackingLog)[
                                  Object.keys(this.props.trackingLog).length - 1
                                ]
                              ]["symptoms"]
                            ).map(([ind, val]) => {
                              return " " + val.Name;
                            })}
                        </Text>
                      )}
                      <Text>
                        Cumulative Symptoms Logged:{" "}
                        {newChartStats["numberOfSymptomsLogged"]}
                      </Text>

                      <Text>
                        Current Phase in menstrual cycle:{" "}
                        {newChartStats["currentCyclePhase"]}
                      </Text>
                      <Text>
                        Common symptoms during this phase:{" "}
                        {newChartStats["currentCommonSymptoms"]}
                      </Text>
                      <Text>
                        Common mood during this phase:{" "}
                        {newChartStats["currentMood"]}
                      </Text>

                      <Text></Text> */}
                          {/*

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <View
                        style={{
                          ...styles.smallStatsContainer,

                          // backgroundColor: theme.COLORS.SECONDARY3,
                          alignContent: "center",
                          alignItems: "center",
                          marginHorizontal: 0,
                          paddingHorizontal: 0,
                        }}
                      >
                        <View
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Blob1
                            style={{
                              position: "absolute",
                              color: theme.COLORS.SECONDARY3,
                              preserveAspectRatio: "none",
                              top: -24,
                            }}
                            height={80}
                            width={80}
                          />
                          <Text
                            style={{
                              fontSize: 22,
                              fontWeight: "bold",
                              fontFamily: theme.FONTS.TEXT,
                              // paddingTop: theme.SIZES.BASE * 0.4,
                              color: theme.COLORS.SECONDARY1,
                            }}
                          >
                            {newChartStats["currentDayInCycle"]}
                          </Text>
                        </View>
                      </View>

                      <Text
                        style={{
                          // fontWeight: "bold",
                          color: theme.COLORS.TEXT1,
                          fontFamily: theme.FONTS.TEXT,
                          fontSize: theme.SIZES.B1,
                        }}
                      >
                        Your Stat 1 Compared
                      </Text>
                      <Text
                        style={{
                          // fontWeight: "bold",
                          color: theme.COLORS.TEXT1,
                          fontSize: theme.SIZES.C2,
                          fontFamily: theme.FONTS.TEXT,
                        }}
                      >
                        to Other Users
                      </Text>
                    </View>

                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <View
                        style={{
                          ...styles.smallStatsContainer,
                          // backgroundColor: theme.COLORS.TERTIARY2,
                          alignContent: "center",
                          alignItems: "center",
                          marginHorizontal: 0,
                          paddingHorizontal: 0,
                        }}
                      >
                        <View
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            marginVertical: theme.SIZES.BASE * 0.5,
                          }}
                        >
                          <Blob2
                            style={{
                              position: "absolute",
                              color: theme.COLORS.TERTIARY2,
                              preserveAspectRatio: "none",
                              top: -24,
                            }}
                            height={80}
                            width={80}
                          />

                          <Text
                            style={{
                              fontSize: 22,
                              fontWeight: "bold",
                              fontFamily: theme.FONTS.TEXT,
                              // paddingTop: theme.SIZES.BASE * 0.4,
                              color: theme.COLORS.TERTIARY1,
                            }}
                          >
                            {newChartStats["currentDayInCycle"]}
                          </Text>
                        </View>
                      </View>

                      <Text
                        style={{
                          // fontWeight: "bold",
                          color: theme.COLORS.TEXT1,
                          fontSize: theme.SIZES.C2,
                          fontFamily: theme.FONTS.TEXT,
                        }}
                      >
                        Your stat 2 compared
                      </Text>
                      <Text
                        style={{
                          // fontWeight: "bold",
                          color: theme.COLORS.TEXT1,
                          fontFamily: theme.FONTS.TEXT,
                          fontSize: theme.SIZES.B1,
                        }}
                      >
                        to other users
                      </Text>
                    </View>
                  </View> */}
                        </View>
                      )}
                    </RoundedTopContainer>
                  </ScrollView>
                </KeyboardAvoidingView>
              </View>
              <Footer navigation={navigation} tabName="Track" />
            </View>
          )}
        </GardenContext.Consumer>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    trackedSymptoms: state.trackSymptoms.trackingSymptoms,
    trackingLog: state.trackLog.logHistory,
    userProfile: state.userProfile,
    userAnalytics: state.userAnalytics,
    customSymptoms: state.trackCustomSymptoms.customSymptoms,
  };
};
export default connect(mapStateToProps)(TrackScreen);
