import React from 'react';
import userProfileReducer from '../../redux/reducers/userProfileReducer';
import * as actions from '../../redux/constants/index';

jest.mock('react-native-elements', () => ({}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));

beforeEach(async () => {
  // store = await createTestStore();
});

const initialState = {
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

describe('SessionReducer general tests', () => {
  it('Testing CREATE_USER_PROFILE', () => {
    const actionObj = {
        type: actions.CREATE_USER_PROFILE,
        payload: {
            name: 'User1',
            email: 'user1@email.com'
        }
    };

    const returned = userProfileReducer(initialState, actionObj);
    expect(returned.Name).toEqual('User1');
    expect(returned.Email).toEqual('user1@email.com');
  });

  it('Testing UPDATE_ONBOARDING_HEALTH_PROFILE', () => {
    const actionObj = {
        type: actions.UPDATE_ONBOARDING_HEALTH_PROFILE,
        payload: {
            onboarding: {
                nickname: 'nickname',
                birthday: '19871214',
                country: 'US',
                zipCode: '10000',
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
        }
    };

    const returned = userProfileReducer(initialState, actionObj);
    expect(returned.OnboardingAnswers.onboarding.country).toEqual('US');
  });

  it('Testing UPDATE_ONBOARDING_GOALS', () => {
    const actionObj = {
        type: actions.UPDATE_ONBOARDING_GOALS,
        payload: {
            goals: {
                trackMenstruation: true,
                trackFertility: false,
                trackChronic: false,
                learnHealth: true,
                other: '',
            },
        }
    };

    const returned = userProfileReducer(initialState, actionObj);
    expect(returned.OnboardingAnswers.goals.learnHealth).toEqual(true);
  });

  it('Testing UPDATE_ONBOARDING_VALUE', () => {
    const actionObj = {
        type: actions.UPDATE_ONBOARDING_VALUE,
        payload: {
            value: true,
            level1Str: 'contraception',
            level2Str: 'IUD',
            level3Str: ''
        }
    };
    const actionObj2 = {
        type: actions.UPDATE_ONBOARDING_VALUE,
        payload: {
            value: 'pregnancyStatus',
            level1Str: 'pregnancyStatus',
            level2Str: '',
            level3Str: ''
        }
    };

    const returned = userProfileReducer(initialState, actionObj);
    expect(returned.OnboardingAnswers.onboarding.contraception.IUD).toEqual(true);

    const returned2 = userProfileReducer(initialState, actionObj2);
    expect(returned2.OnboardingAnswers.onboarding.pregnancyStatus).toEqual('pregnancyStatus');
  });

  it('Testing ADD_AND_REMOVE_ONBOARDING_CONDITION', () => {
    const actionObj = {
        type: actions.ADD_ONBOARDING_CONDITION,
        payload: {
            conditionName: 'conditionName',
            yearSymptomsStarted: 1980,
            yearDiagnosed: 1987,
            primarySymptoms: ['primarySymtom1', 'primarySymtom2']
        }
    };
    const actionObj2 = {
        type: actions.REMOVE_ONBOARDING_CONDITION,
        payload: {
            conditionName: 'conditionName',
        }
    };

    const returned = userProfileReducer(initialState, actionObj);
    expect(returned.OnboardingAnswers.onboarding.initialConditions.conditionName.yearDiagnosed).toEqual(1987);

    const returned2 = userProfileReducer(returned, actionObj2);
    expect(returned2.OnboardingAnswers.onboarding.initialConditions.conditionName).toBeUndefined();
  });

  it('Testing SET_ONBOARDING_PROGRESS', () => {
    const actionObj = {
        type: actions.SET_ONBOARDING_PROGRESS,
        payload: {
            onboardingProgress: 20,
        }
    };

    const returned = userProfileReducer(initialState, actionObj);
    expect(returned.onboardingProgress).toEqual(20);
  });

  it('Testing SET_APP_INTRO_TUTORIAL_COMPLETE', () => {
    const actionObj = {
        type: actions.SET_APP_INTRO_TUTORIAL_COMPLETE,
        payload: [1,2,3]
    };

    const returned = userProfileReducer(initialState, actionObj);
    expect(returned.appIntroTutorialComplete).toEqual([1,2,3]);
  });

  it('Testing SET_ACTIVE_GOALS, SET_TODO_STATUS', () => {
    const actionObj = {
        type: actions.SET_ACTIVE_GOALS,
        payload: {
            '0': 2,
            '1': 3,
            '2': 4,
        }
    };

    const actionObj3 = {
        type: actions.SET_TODO_STATUS,
        payload: {
            goalNum: 2,
            goalStatus: 2
        }
    };

    const actionObj2 = {
        type: actions.SET_TODO_STATUS,
        payload: {
            goalNum: 3,
            goalStatus: 2
        }
    };

    const actionObj4 = {
        type: actions.SET_TODO_STATUS,
        payload: {
            goalNum: 4,
            goalStatus: 2
        }
    };

    const returned = userProfileReducer(initialState, actionObj);
    expect(returned.activeTodo['1']).toEqual(3);

    const returned3 = userProfileReducer(returned, actionObj3);
    expect(returned3.allTodo[2].status).toEqual(2);

    const returned4 = userProfileReducer(returned3, actionObj4);
    expect(returned3.allTodo[2].status).toEqual(2);

    const returned2 = userProfileReducer(returned4, actionObj2);
    expect(returned2.activeTodo['0']).toEqual('0');
  });

  it('Testing ADD_TODO_ITEM', () => {
    const actionObj = {
        type: actions.ADD_TODO_ITEM,
        payload: {
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
    };

    const returned = userProfileReducer(initialState, actionObj);
    expect(returned.allTodo[6].rewardText).toEqual('+10 seeds');
  });

  it('Testing SET_INTRO_HEALTH_SURVEY, ADD_INTRO_HEALTH_SURVEY_ANSWER', () => {
    const actionObj = {
        type: actions.SET_INTRO_HEALTH_SURVEY,
        payload: {
            timestamp: 1973763,
            healthSurvey: {
                healthSurveyQuestion: 'healthSurveyAnswer'
            }
        },
    };
    const actionObj2 = {
        type: actions.ADD_INTRO_HEALTH_SURVEY_ANSWER,
        payload: {
            timestamp: 1973763,
            healthSurveyQuestion: 'healthSurveyQuestion',
            healthSurveyAnswer: 'healthSurveyAnswer2'
        },
    };
    const actionObj3 = {
        type: actions.ADD_INTRO_HEALTH_SURVEY_ANSWER,
        payload: {
            timestamp: 1973765,
            healthSurveyQuestion: 'healthSurveyQuestion2',
            healthSurveyAnswer: 'healthSurveyAnswer3'
        },
    };

    const returned = userProfileReducer(initialState, actionObj);
    expect(returned.introHealthSurvey[1973763].healthSurveyQuestion).toEqual('healthSurveyAnswer');

    const returned2 = userProfileReducer(returned, actionObj2);
    expect(returned2.introHealthSurvey[1973763].healthSurveyQuestion).toEqual('healthSurveyAnswer2');

    const returned3 = userProfileReducer(returned, actionObj3);
    expect(returned3.introHealthSurvey[1973765].healthSurveyQuestion2).toEqual('healthSurveyAnswer3');
  });

  it('Testing ADD_FOLLOW_UP_HEALTH_SURVEY', () => {
    const actionObj = {
        type: actions.ADD_FOLLOW_UP_HEALTH_SURVEY,
        payload: {
            timestamp: 1973643,
            healthSurvey: {
                healthSurveyQuestion: 'healthSurveyAnswer'
            }
        },
    };
    const actionObj2 = {
        type: actions.ADD_FOLLOW_UP_HEALTH_SURVEY_ANSWER,
        payload: {
            timestamp: 1973643,
            healthSurveyQuestion: 'healthSurveyQuestion',
            healthSurveyAnswer: 'healthSurveyAnswer2'
        },
    };
    const actionObj3 = {
        type: actions.ADD_FOLLOW_UP_HEALTH_SURVEY_ANSWER,
        payload: {
            timestamp: 1973645,
            healthSurveyQuestion: 'healthSurveyQuestion2',
            healthSurveyAnswer: 'healthSurveyAnswer3'
        },
    };

    const returned = userProfileReducer(initialState, actionObj);
    expect(returned.followUpHealthSurveys[1973643].healthSurveyQuestion).toEqual('healthSurveyAnswer');

    const returned2 = userProfileReducer(returned, actionObj2);
    expect(returned2.followUpHealthSurveys[1973643].healthSurveyQuestion).toEqual('healthSurveyAnswer2');

    const returned3 = userProfileReducer(returned, actionObj3);
    expect(returned3.followUpHealthSurveys[1973645].healthSurveyQuestion2).toEqual('healthSurveyAnswer3');
  });

});
