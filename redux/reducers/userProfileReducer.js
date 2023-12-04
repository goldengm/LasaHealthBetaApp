import * as actions from '../constants/index';
import produce from 'immer';

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

function allActiveTodosComplete(draft) {
  // Because allTodo length is 6, updated condition command.
  if (
    draft.allTodo[draft.activeTodo['0']]['status'] > 1 &&
    draft.allTodo[draft.activeTodo['1']]['status'] > 1 &&
    (draft.activeTodo['2'] == '' ||
      draft.allTodo[draft.activeTodo['2']]['status'] > 1)
  ) {
    return true;
  } else {
    return false;
  }
}

function findUpTo3RemainingTodos(draft) {
  const todoExclusionList = ['3'];
  let remainingTodos = [];
  {
    Object.entries(draft.allTodo).map((val, index) => {
      if (
        val[1] &&
        val[1]['status'] < 2 &&
        !todoExclusionList.includes(val[0]) &&
        remainingTodos.length < 3
      ) {
        remainingTodos = remainingTodos.concat(val[0]);
      }
    });
  }

  return remainingTodos;
}

initialStateUPR = {
  Name: '',
  Email: '',
  accountCreationTS: -1,
  emailVerified: false,
  onboardingProgress: -1,
  OnboardingAnswers: {
    goals: {
      trackMenstruation: false,
      trackFertility: false,
      trackChronic: false,
      learnHealth: false,
      other: '',
    },
    onboarding: {
      nickname: '',
      birthday: '',
      country: '',
      zipCode: '',
      associatedClinic: '',
      surgeryDate: '',
      schoolStatus: '',
      workingStatus: '',
      preferredPronouns: '',
      sexAtBirth: '',
      //  basic info above, health profile below
      menstrationStatus: '',
      //  pause point 1
      menstruation: {
        firstDayOfLastPeriod: '',
        avgLenOfPeriod: 5,
        avgLenOfCycle: 28,
        startAgePeriod: 12,
      },
      pregnancyStatus: '',
      contraception: {
        Implant: false,
        IUD: false,
        'Vaginal Ring': false,
        vaginalRingDetails: {
          usage: '',
          lastRingStartDate: '',
          ringReminder: false,
          reminderTime: '',
        },
        Patch: false,
        patchDetails: {
          usage: '',
          lastPatchStartDate: '',
          patchReminder: false,
          reminderTime: '',
        },
        Pill: false,
        pillDetails: {
          pillType: '',
          usage: '',
          lastPackStartDate: '',
          pillReminder: false,
          reminderTime: '',
        },
        Condom: false,
        'Fertility Awareness': false,
        Withdrawal: false,
        Breastfeeding: false,
        'Barrier Gel': false,
        Spermacide: false,
        Diaphragm: false,
        Sterilization: false,
        Abstinance: false,
        None: false,
      },
      initialSymptoms: {
        'Painful periods': false,
        'Irregular periods': false,
        'Painful intercourse': false,
        'Periods longer than 7 days': false,
        'Heavy periods': false,
        Infertility: false,
      },
      //  pause point 2
      initialConditions: {},
    },
  },
  appIntroTutorialComplete: [],
  activeTodo: {
    0: 0,
    1: 1,
    2: 2,
  },
  // example:
  //  5: {
  //   status: 0,
  //   name: "Plant a flower in your garden",
  //   navigationParams: {
  //     name: "Garden",
  //     params: {}
  //   }},
  allTodo: {
    //  status: 0=incomplete, 1=in progress, 2=complete
    0: {
      status: 0,
      name: 'Complete your health profile',
      navigationParams: {
        name: 'Login',
        params: {
          screen: 'ProfileSetup',
        },
      },
      rewardText: '+10 seeds',
    },
    1: {
      status: 0,
      name: 'Chronic Conditions Registered',
      navigationParams: {
        name: 'Login',
        params: {
          screen: 'ProfileSetup',
        },
      },
      rewardText: '+10 seeds',
    },
    2: {
      status: 0,
      name: 'Log your first day of symptoms',
      navigationParams: {
        name: 'Track',
        params: {
          screen: 'TrackSymptoms',
        },
      },
      rewardText: '+ garden watered',
    },
    3: {
      status: 0,
      name: 'Confirm your email',
      navigationParams: {
        name: 'Learn',
        params: {},
      },
      rewardText: '+10 seeds',
    },
    4: {
      status: 0,
      name: 'Log symptoms for seven days',
      navigationParams: {
        name: 'Track',
        params: {
          screen: 'TrackSymptoms',
        },
      },
      rewardText: '+10 seeds',
    },
    5: {
      status: 0,
      name: 'Plant a flower in your garden',
      navigationParams: {
        name: 'Garden',
        params: {},
      },
      rewardText: '+10 seeds',
    },
  },

  introHealthSurvey: {},
  followUpHealthSurveys: {},
};

export default userProfileReducer = (state = initialStateUPR, action) =>
  produce(state, draft => {
    console.log('USER PROFILE REDUCER: ', action);

    switch (action.type) {
      case actions.CREATE_USER_PROFILE:
        draft.Name = action.payload.name;
        draft.Email = action.payload.email;
        break;

      case actions.UPDATE_ONBOARDING_HEALTH_PROFILE:
        draft.OnboardingAnswers.onboarding = action.payload.onboarding;
        break;
      case actions.UPDATE_ONBOARDING_GOALS:
        draft.OnboardingAnswers.goals = action.payload.goals;
        break;

      case actions.UPDATE_ONBOARDING_VALUE:
        if (!(action.payload.level1Str == '')) {
          if (!(action.payload.level2Str == '')) {
            if (!(action.payload.level3Str == '')) {
              draft.OnboardingAnswers.onboarding[action.payload.level1Str][
                action.payload.level2Str
              ][action.payload.level3Str] = action.payload.value;
            } else {
              draft.OnboardingAnswers.onboarding[action.payload.level1Str][
                action.payload.level2Str
              ] = action.payload.value;
            }
          } else {
            draft.OnboardingAnswers.onboarding[action.payload.level1Str] =
              action.payload.value;
          }
        }
        break;

      case actions.ADD_ONBOARDING_CONDITION:
        draft.OnboardingAnswers.onboarding.initialConditions[
          action.payload.conditionName
        ] = {
          yearSymptomsStarted: action.payload.yearSymptomsStarted
            ? action.payload.yearSymptomsStarted
            : -1,
          yearDiagnosed: action.payload.yearDiagnosed
            ? action.payload.yearDiagnosed
            : -1,
          primarySymptoms: action.payload.primarySymptoms
            ? action.payload.primarySymptoms
            : [],
        };
        break;

      case actions.REMOVE_ONBOARDING_CONDITION:
        if (
          Object.keys(
            draft.OnboardingAnswers.onboarding.initialConditions,
          ).includes(action.payload.conditionName)
        ) {
          delete draft.OnboardingAnswers.onboarding.initialConditions[
            action.payload.conditionName
          ];
        }
        break;

      case actions.SET_ONBOARDING_PROGRESS:
        draft.onboardingProgress = action.payload.onboardingProgress;
        break;

      case actions.SET_APP_INTRO_TUTORIAL_COMPLETE:
        if (!draft.appIntroTutorialComplete.includes(action.payload)) {
          draft.appIntroTutorialComplete =
            draft.appIntroTutorialComplete.concat(action.payload);
        }
        break;

      case actions.SET_ACTIVE_GOALS:
        draft.activeTodo['0'] = action.payload['0'];
        draft.activeTodo['1'] = action.payload['1'];
        draft.activeTodo['2'] = action.payload['2'];
        break;

      case actions.SET_TODO_STATUS:
        if (
          action.payload.goalNum >= 0 &&
          action.payload.goalNum < Object.keys(draft.allTodo).length
        ) {
          draft.allTodo[action.payload.goalNum].status =
            action.payload.goalStatus;

          console.log('SET TODO STATUS CALLED');

          //  whenever a todo is completed, check to see if all active todos are complete
          if (allActiveTodosComplete(draft)) {
            console.log('ALL ACTIVE TODOS COMPLETE');
            //  if so, set all active todo's to null and fill in with any remaining todos
            const remainingTodos = findUpTo3RemainingTodos(draft);

            draft.activeTodo['0'] = null;
            draft.activeTodo['1'] = null;
            draft.activeTodo['2'] = null;
            if (remainingTodos.length > 0) {
              draft.activeTodo['0'] = remainingTodos[0];
            }
            if (remainingTodos.length > 1) {
              draft.activeTodo['1'] = remainingTodos[1];
            }
            if (remainingTodos.length > 2) {
              draft.activeTodo['2'] = remainingTodos[2];
            }
          }
        }
        break;

      case actions.ADD_TODO_ITEM:
        draft.allTodo[Object.keys(draft.allTodo).length] = action.payload;
        break;

      case actions.SET_INTRO_HEALTH_SURVEY:
        draft.introHealthSurvey[action.payload.timestamp] =
          action.payload.healthSurvey;
        break;

      case actions.ADD_INTRO_HEALTH_SURVEY_ANSWER:
        if (
          Object.keys(draft.introHealthSurvey).includes(
            action.payload.timestamp,
          )
        ) {
          draft.introHealthSurvey[action.payload.timestamp][
            action.payload.healthSurveyQuestion
          ] = action.payload.healthSurveyAnswer;
        } else {
          let newSurvey = {};
          newSurvey[action.payload.healthSurveyQuestion] =
            action.payload.healthSurveyAnswer;
          draft.introHealthSurvey[action.payload.timestamp] = newSurvey;
        }
        break;

      case actions.ADD_FOLLOW_UP_HEALTH_SURVEY:
        draft.followUpHealthSurveys[action.payload.timestamp] =
          action.payload.healthSurvey;
        break;

      case actions.ADD_FOLLOW_UP_HEALTH_SURVEY_ANSWER:
        if (
          Object.keys(draft.followUpHealthSurveys).includes(
            action.payload.timestamp,
          )
        ) {
          draft.followUpHealthSurveys[action.payload.timestamp][
            action.payload.healthSurveyQuestion
          ] = action.payload.healthSurveyAnswer;
        } else {
          let newSurvey = {};
          newSurvey[action.payload.healthSurveyQuestion] =
            action.payload.healthSurveyAnswer;
          draft.followUpHealthSurveys[action.payload.timestamp] = newSurvey;
        }
        break;

      default:
        break;
    }
  });
