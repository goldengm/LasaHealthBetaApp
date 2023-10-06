import * as actions from '../constants/index';

export function createUserProfileAction(nameP, emailP) {
  return {
    type: actions.CREATE_USER_PROFILE,
    payload: {
      name: nameP,
      email: emailP,
    },
  };
}

export function updateOnboardingHealthProfileAction(onboardingP) {
  return {
    type: actions.UPDATE_ONBOARDING_HEALTH_PROFILE,
    payload: {
      onboarding: onboardingP,
    },
  };
}

export function updateOnboardingGoalsAction(goalsP) {
  return {
    type: actions.UPDATE_ONBOARDING_GOALS,
    payload: {
      goals: goalsP,
    },
  };
}

export function updateOnboardingValueAction(
  valueP,
  level1StrP,
  level2StrP = '',
  level3StrP = '',
) {
  return {
    type: actions.UPDATE_ONBOARDING_VALUE,
    payload: {
      value: valueP,
      level1Str: level1StrP,
      level2Str: level2StrP,
      level3Str: level3StrP,
    },
  };
}

export function addOnboardingConditionAction(
  conditionNameP,
  yearSymptomsStartedP = false,
  yearDiagnosedP = false,
  primarySymptomsP = false,
) {
  return {
    type: actions.ADD_ONBOARDING_CONDITION,
    payload: {
      conditionName: conditionNameP,
      yearSymptomsStarted: yearSymptomsStartedP,
      yearDiagnosed: yearDiagnosedP,
      primarySymptoms: primarySymptomsP,
    },
  };
}

export function removeOnboardingConditionAction(conditionNameP) {
  return {
    type: actions.REMOVE_ONBOARDING_CONDITION,
    payload: {
      conditionName: conditionNameP,
    },
  };
}

export function setOnboardingProgressAction(onboardingProgressP) {
  return {
    type: actions.SET_ONBOARDING_PROGRESS,
    payload: {
      onboardingProgress: onboardingProgressP,
    },
  };
}

export function setActiveGoalsAction(goal0Num, goal1Num, goal2Num) {
  return {
    type: actions.SET_ACTIVE_GOALS,
    payload: {
      0: goal0Num,
      1: goal1Num,
      2: goal2Num,
    },
  };
}

export function setTodoStatusAction(goalNumP, goalStatusP) {
  return {
    type: actions.SET_TODO_STATUS,
    payload: {
      goalNum: goalNumP,
      goalStatus: goalStatusP,
    },
  };
}

export function addTodoItemAction(todoItemP) {
  return {
    type: actions.ADD_TODO_ITEM,
    payload: todoItemP,
  };
}

export function setAppIntroTutorialCompleteAction(tutorialCompleteP) {
  return {
    type: actions.SET_APP_INTRO_TUTORIAL_COMPLETE,
    payload: tutorialCompleteP,
  };
}

export function setIntroHealthSurveyAction(timestampP, healthSurveyP) {
  return {
    type: actions.SET_INTRO_HEALTH_SURVEY,
    payload: {
      timestamp: timestampP,
      healthSurvey: healthSurveyP,
    },
  };
}

export function addFollowUpHealthSurveyAction(timestampP, healthSurveyP) {
  return {
    type: actions.ADD_FOLLOW_UP_HEALTH_SURVEY,
    payload: {
      timestamp: timestampP,
      healthSurvey: healthSurveyP,
    },
  };
}

export function addIntroHealthSurveyAnswerAction(
  timestampP,
  healthSurveyQuestionP,
  healthSurveyAnswerP,
) {
  return {
    type: actions.ADD_INTRO_HEALTH_SURVEY_ANSWER,
    payload: {
      timestamp: timestampP,
      healthSurveyQuestion: healthSurveyQuestionP,
      healthSurveyAnswer: healthSurveyAnswerP,
    },
  };
}

export function addFollowUpHealthSurveyAnswerAction(
  timestampP,
  healthSurveyQuestionP,
  healthSurveyAnswerP,
) {
  return {
    type: actions.ADD_FOLLOW_UP_HEALTH_SURVEY_ANSWER,
    payload: {
      timestamp: timestampP,
      healthSurveyQuestion: healthSurveyQuestionP,
      healthSurveyAnswer: healthSurveyAnswerP,
    },
  };
}
