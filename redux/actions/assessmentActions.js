import * as actions from '../constants/index';

export function SetAssessmentResults(items) {
  return {
    type: actions.SET_DATA_FOR_ASSESSMENT,
    payload: items,
  };
}
export function ResetAssessmentResults() {
  return {
    type: actions.Delete_DATA_FOR_ASSESSMENT,
  };
}


