import React, { useReducer } from 'react';
import learnReducer from '../../redux/reducers/learnReducer';
import * as actions from '../../redux/constants/index';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils'

jest.mock('react-native-elements', () => ({}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));

beforeEach(async () => {
  // store = await createTestStore();
});

const initialState = {
    favorites: [],
    recommended: [],
    endo101Course: {
        courseProgress: 0,
        courseStartTimestamp: -1,
        week1: {}, //  let each week be flexible, don't specify more detail then this
        week2: {}, //  in the initial state
        week3: {},
        week4: {},
        week5: {},
        week6: {},
        week7: {},
        week8: {},
        week9: {},
        week10: {},
        week11: {},
        week12: {},
    },
};

describe('learnReducer general tests', () => {
  it('Testing ADD_REMOVE_FAVORITE_LEARN', () => {
    const actionObj = {
      type: actions.ADD_FAVORITE_LEARN,
      payload: 'favorite1',
    };
    const actionObj2 = {
        type: actions.REMOVE_FAVORITE_LEARN,
        payload: 'favorite1',
    };

    const returned = learnReducer(initialState, actionObj);
    expect(returned.favorites).toEqual(['favorite1']);

    const returned2 = learnReducer(returned, actionObj2);
    expect(returned2.favorites).toEqual([]);
  });

  it('Testing ADD_REMOVE_RECOMMENDED_LEARN', () => {
    const actionObj = {
      type: actions.ADD_RECOMMENDED_LEARN,
      payload: 'recommended1',
    };
    const actionObj2 = {
        type: actions.REMOVE_RECOMMENDED_LEARN,
        payload: 'recommended1',
    };

    const returned = learnReducer(initialState, actionObj);
    expect(returned.recommended).toEqual(['recommended1']);

    const returned2 = learnReducer(returned, actionObj2);
    expect(returned2.recommended).toEqual([]);
  });

  it('Testing ENDO101_COURSE', () => {
    const actionObj = {
      type: actions.INITIALIZE_ENDO101_COURSE,
    };
    const actionObj2 = {
      type: actions.UPDATE_ENDO101_PROGRESS,
      payload: 10
    }

    const returned = learnReducer(initialState, actionObj);
    expect(returned.endo101Course.courseProgress).toEqual(0);

    const returned2 = learnReducer(initialState, actionObj2);
    expect(returned2.endo101Course.courseProgress).toEqual(10);
  });

  it('Testing ENDO101_WEEK1_PROGRESS', () => {
    const actionObj = {
      type: actions.RESET_ENDO101_WEEK1_PROGRESS,
    };
    const actionObj2 = {
      type: actions.UPDATE_ENDO101_WEEK1_PROGRESS,
      payload: 3
    }
    const actionObj3 = {
        type: actions.UPDATE_ENDO101_WEEK1_NUMMODULES,
        payload: 3
    }
    const actionObj4 = {
        type: actions.UPDATE_ENDO101_WEEK1_MODULE2_Q1,
        payload: 'MODULE2'
    }
    const actionObj5 = {
        type: actions.UPDATE_ENDO101_WEEK1_MODULE2_Q2,
        payload: 'MODULE2'
    }
    const actionObj6 = {
        type: actions.UPDATE_ENDO101_WEEK1_MODULE2_Q3,
        payload: 'MODULE2'
    }

    const returned = learnReducer(initialState, actionObj);
    expect(returned.endo101Course.week1.weekProgress).toEqual(0);

    const returned2 = learnReducer(returned, actionObj2);
    expect(returned2.endo101Course.week1.weekProgress).toEqual(3);

    const returned3 = learnReducer(returned, actionObj3);
    expect(returned3.endo101Course.week1.numModules).toEqual(3);

    const returned4 = learnReducer(returned, actionObj4);
    expect(returned4.endo101Course.week1.module2Q1HasEndo).toEqual('MODULE2');

    const returned5 = learnReducer(returned, actionObj5);
    expect(returned5.endo101Course.week1.module2Q2EndoKnowledge).toEqual('MODULE2');

    const returned6 = learnReducer(returned, actionObj6);
    expect(returned6.endo101Course.week1.module2Q3GoalsList).toEqual('MODULE2');
  });

  it('Testing ENDO101_WEEK1_MODULES', () => {
    
    const { result } = renderHook(() => useReducer(learnReducer, initialState));
    const learnActions = [
        { type: actions.UPDATE_ENDO101_WEEK1_MODULE3_Q1, payload: 'MODULE2'},
        { type: actions.UPDATE_ENDO101_WEEK1_MODULE6_Q1, payload: 'MODULE2'},
        { type: actions.UPDATE_ENDO101_WEEK1_MODULE6_Q2, payload: 'MODULE2'},
        { type: actions.UPDATE_ENDO101_WEEK1_MODULE6_Q3, payload: 'MODULE2'},

        { type: actions.UPDATE_ENDO101_WEEK1_MODULE6_Q4_1, payload: 'MODULE2'},
        { type: actions.UPDATE_ENDO101_WEEK1_MODULE6_Q4_2, payload: 'MODULE2'},
        { type: actions.UPDATE_ENDO101_WEEK1_MODULE6_Q4_3, payload: 'MODULE2'},
        { type: actions.UPDATE_ENDO101_WEEK1_MODULE6_Q5_1, payload: 'MODULE2'},
        { type: actions.UPDATE_ENDO101_WEEK1_MODULE6_Q5_2, payload: 'MODULE2'},
        { type: actions.UPDATE_ENDO101_WEEK1_MODULE6_Q5_3, payload: 'MODULE2'},
        { type: actions.UPDATE_ENDO101_WEEK1_MODULE6_Q6, payload: 'MODULE2'},
    ]
    learnActions.forEach((action) => {
        act(() => result.current[1](action));
    })
    const expectedState = {
        favorites: [],
        recommended: [],
        endo101Course: {
            courseProgress: 0,
            courseStartTimestamp: -1,
            week1: {
                module3Q1Why: 'MODULE2',
                module6Q1: 'MODULE2',
                module6Q2: 'MODULE2',
                module6Q3: 'MODULE2',
                module6Q4Confidence1: 'MODULE2',
                module6Q4Confidence2: 'MODULE2',
                module6Q4Confidence3: 'MODULE2',
                module6Q5Progress1: 'MODULE2',
                module6Q5Progress2: 'MODULE2',
                module6Q5Progress3: 'MODULE2',
                module6Q6Rating: 'MODULE2',
            }, //  let each week be flexible, don't specify more detail then this
            week2: {}, //  in the initial state
            week3: {},
            week4: {},
            week5: {},
            week6: {},
            week7: {},
            week8: {},
            week9: {},
            week10: {},
            week11: {},
            week12: {},
        },
    }
    expect(result.current[0]).toEqual(expectedState);
  });

  it('Testing USING SNAPSHOT', () => {
    const myactions = [
        { type: actions.RESET_ENDO101_WEEK2_PROGRESS },
        { type: actions.UPDATE_ENDO101_WEEK2_PROGRESS, payload: 3 },
        { type: actions.UPDATE_ENDO101_WEEK2_NUMMODULES, payload: 3 },
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE1_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE1_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE1_Q3, payload: {'test': 'test'} },
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE1_Q4, payload: 'test' },
        
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE6_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE6_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE6_Q3, payload: {'test': 'test'} },
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE6_Q4, payload: 'test' },

        { type: actions.UPDATE_ENDO101_WEEK2_MODULE6_Q5_1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE6_Q5_2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE6_Q5_3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE6_Q6_1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE6_Q6_2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE6_Q6_3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK2_MODULE6_Q7, payload: 'test' },

        // week3
        { type: actions.RESET_ENDO101_WEEK3_PROGRESS},
        { type: actions.UPDATE_ENDO101_WEEK3_PROGRESS, payload: 3 },
        { type: actions.UPDATE_ENDO101_WEEK3_NUMMODULES, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE1_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE1_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE1_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE1_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE2_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE3_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE4_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE5_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE5_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE5_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE7_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE7_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE7_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE7_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE7_Q5_1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE7_Q5_2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE7_Q5_3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE7_Q6_1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE7_Q6_2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE7_Q6_3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK3_MODULE7_Q7, payload: 'test' },
        
        // week4
        { type: actions.RESET_ENDO101_WEEK4_PROGRESS},
        { type: actions.UPDATE_ENDO101_WEEK4_PROGRESS, payload: 3 },
        { type: actions.UPDATE_ENDO101_WEEK4_NUMMODULES, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE1_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE1_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE1_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE2_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE7_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE7_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE7_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE7_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE7_Q5, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE7_Q6, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE7_Q7, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE7_Q8, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE8_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE8_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE8_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE9_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE9_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE9_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE9_Q4_1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE9_Q4_2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE9_Q4_3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE9_Q5_1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE9_Q5_2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE9_Q5_3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK4_MODULE9_Q6, payload: 'test' },

        // week5
        { type: actions.RESET_ENDO101_WEEK5_PROGRESS },
        { type: actions.UPDATE_ENDO101_WEEK5_PROGRESS, payload: 3 },
        { type: actions.UPDATE_ENDO101_WEEK5_NUMMODULES, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE1_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE1_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE1_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE1_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE2_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE3_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE7_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE7_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE7_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE7_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE7_Q5, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE7_Q6, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE7_Q7, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE7_Q8, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE7_Q9, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE7_Q10, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK5_MODULE7_Q11, payload: 'test' },
        
        // week6
        { type: actions.RESET_ENDO101_WEEK6_PROGRESS },
        { type: actions.UPDATE_ENDO101_WEEK6_PROGRESS, payload: 3 },
        { type: actions.UPDATE_ENDO101_WEEK6_NUMMODULES, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE1_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE1_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE1_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE1_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE6_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE6_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE6_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE6_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE7_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE7_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE7_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE7_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE7_Q5, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE7_Q6, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE7_Q7, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE7_Q8, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE7_Q9, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE7_Q10, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK6_MODULE7_Q11, payload: 'test' },

        // week7
        { type: actions.RESET_ENDO101_WEEK7_PROGRESS },
        { type: actions.UPDATE_ENDO101_WEEK7_PROGRESS, payload: 3 },
        { type: actions.UPDATE_ENDO101_WEEK7_NUMMODULES, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE1_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE1_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE1_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE1_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE3_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE3_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE3_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE3_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE4_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE4_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE4_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE7_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE7_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE7_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE7_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE7_Q5, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE7_Q6, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE7_Q7, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE7_Q8, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE7_Q9, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE7_Q10, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK7_MODULE7_Q11, payload: 'test' },

        // week8
        { type: actions.RESET_ENDO101_WEEK8_PROGRESS },
        { type: actions.UPDATE_ENDO101_WEEK8_PROGRESS, payload: 3 },
        { type: actions.UPDATE_ENDO101_WEEK8_NUMMODULES, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK8_MODULE1_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK8_MODULE1_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK8_MODULE1_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK8_MODULE7_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK8_MODULE7_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK8_MODULE7_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK8_MODULE7_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK8_MODULE7_Q5, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK8_MODULE7_Q6, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK8_MODULE7_Q7, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK8_MODULE7_Q8, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK8_MODULE7_Q9, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK8_MODULE7_Q10, payload: 'test' },

        // week9
        { type: actions.RESET_ENDO101_WEEK9_PROGRESS },
        { type: actions.UPDATE_ENDO101_WEEK9_PROGRESS, payload: 3 },
        { type: actions.UPDATE_ENDO101_WEEK9_NUMMODULES, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE1_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE1_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE1_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE1_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE4_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE4_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE4_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE6_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE6_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE6_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE6_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE6_Q5, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE6_Q6, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE6_Q7, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE6_Q8, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE6_Q9, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE6_Q10, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK9_MODULE6_Q11, payload: 'test' },

        // week10
        { type: actions.RESET_ENDO101_WEEK10_PROGRESS },
        { type: actions.UPDATE_ENDO101_WEEK10_PROGRESS, payload: 3 },
        { type: actions.UPDATE_ENDO101_WEEK10_NUMMODULES, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE1_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE1_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE1_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE1_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE6_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE6_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE6_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE6_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE6_Q5, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE6_Q6, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE6_Q7, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE6_Q8, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE6_Q9, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE6_Q10, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK10_MODULE6_Q11, payload: 'test' },

        // week11
        { type: actions.RESET_ENDO101_WEEK11_PROGRESS },
        { type: actions.UPDATE_ENDO101_WEEK11_PROGRESS, payload: 3 },
        { type: actions.UPDATE_ENDO101_WEEK11_NUMMODULES, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK11_MODULE1_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK11_MODULE1_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK11_MODULE1_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK11_MODULE6_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK11_MODULE6_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK11_MODULE6_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK11_MODULE6_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK11_MODULE6_Q5, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK11_MODULE6_Q6, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK11_MODULE6_Q7, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK11_MODULE6_Q8, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK11_MODULE6_Q9, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK11_MODULE6_Q10, payload: 'test' },

        // week12
        { type: actions.RESET_ENDO101_WEEK12_PROGRESS },
        { type: actions.UPDATE_ENDO101_WEEK12_PROGRESS, payload: 3 },
        { type: actions.UPDATE_ENDO101_WEEK12_NUMMODULES, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE1_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE1_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE1_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE1_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE2_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE2_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE2_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE2_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE7_Q1, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE7_Q2, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE7_Q3, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE7_Q4, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE7_Q5, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE7_Q6, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE7_Q7, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE7_Q8, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE7_Q9, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE7_Q10, payload: 'test' },
        { type: actions.UPDATE_ENDO101_WEEK12_MODULE7_Q11, payload: 'test' },
    ]
  
    const state = myactions.reduce((currentState, action) => learnReducer(currentState, action), initialState);
    expect(state).toMatchSnapshot();
  });

});
