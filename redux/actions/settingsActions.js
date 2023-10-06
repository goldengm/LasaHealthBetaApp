import * as actions from '../constants/index';

export function setPushNotificationsEnabledAction(value) {
  return {
    type: actions.SET_PUSH_NOTIFICATIONS_ENABLED,
    payload: value,
  };
}
