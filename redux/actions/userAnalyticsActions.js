import * as actions from '../constants/index';

export function regenerateMenstrualCycleAction(trackingLogP, userProfileP) {
  return {
    type: actions.REGENERATE_MENSTRUAL_CYCLE,
    payload: {
      trackingLog: trackingLogP,
      userProfile: userProfileP,
    },
  };
}

export function regenerateChartStatsAction(
  trackingLogP,
  userProfileP,
  userAnalyticsP,
  customSymptomsP,
) {
  return {
    type: actions.REGENERATE_CHART_STATS,
    payload: {
      trackingLog: trackingLogP,
      userProfile: userProfileP,
      userAnalytics: userAnalyticsP,
      customSymptoms: customSymptomsP,
    },
  };
}

export function updateUserMenstrualOnboardingAction(
  avgLenOfCycleP,
  avgLenOfPeriodP,
  firstDayOfLastPeriodP,
  startAgePeriodP,
) {
  return {
    type: actions.UPDATE_USER_MENSTRUATION_ONBOARDING,
    payload: {
      avgLenOfCycle: avgLenOfCycleP,
      avgLenOfPeriod: avgLenOfPeriodP,
      firstDayOfLastPeriod: firstDayOfLastPeriodP,
      startAgePeriod: startAgePeriodP,
    },
  };
}

export function updateStatsBeginRangeTSAction(statsBeginRangeTSP) {
  return {
    type: actions.UPDATE_STATS_BEGIN_RANGE_TS,
    payload: statsBeginRangeTSP,
  };
}

export function updateCustomChart1SympAction(customChart1SympP) {
  return {
    type: actions.UPDATE_CUSTOM_CHART1_SYMP,
    payload: customChart1SympP,
  };
}

export function updateCustomChart1MetricAction(customChart1MetricP) {
  return {
    type: actions.UPDATE_CUSTOM_CHART1_METRIC,
    payload: customChart1MetricP,
  };
}

export function resetUserAnalyticsInteractiveParamsAction() {
  return {
    type: actions.RESET_USER_ANALYTICS_INTERACTIVE_PARAMS,
    payload: '',
  };
}

export function updateChart3SymptomAction(symptomP) {
  return {
    type: actions.UPDATE_CHART3_SYMP,
    payload: symptomP,
  };
}

export function updateChart4SymptomAction(symptomP) {
  return {
    type: actions.UPDATE_CHART4_SYMP,
    payload: symptomP,
  };
}

export function updateChart5Symptom1Action(symptomP) {
  return {
    type: actions.UPDATE_CHART5_SYMP1,
    payload: symptomP,
  };
}

export function updateChart5Symptom2Action(symptomP) {
  return {
    type: actions.UPDATE_CHART5_SYMP2,
    payload: symptomP,
  };
}
