import React from 'react';
import assessmentReducer from '../../redux/reducers/assessmentReducer';
import * as actions from '../../redux/constants/index';

const initialState = {
    assessmentResults: []
};

describe('Assessment general tests', () => {
  it('Testing SET_AND_DELETE Data For Assessment', () => {
    const myactions = [
      { type: actions.SET_ASSESSMENT_RESULTS, payload: [[1], [2], [0,1], [3]] },
      { type: actions.RESET_ASSESSMENT_RESULTS }
    ]

    const state = myactions.reduce((currentState, action) => assessmentReducer(currentState, action), initialState);
    expect(state).toMatchSnapshot();
  });

});
