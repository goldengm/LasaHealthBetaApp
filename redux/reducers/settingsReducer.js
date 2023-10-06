import produce from 'immer';
import * as actions from '../constants/index';

initialStateSR = {
  pushNotificationsEnabled: true,
};
export default settingsReducer = (state = initialStateSR, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.SET_PUSH_NOTIFICATIONS_ENABLED:
        draft.pushNotificationsEnabled = action.payload;
        break;

      default:
        break;
    }
  });
