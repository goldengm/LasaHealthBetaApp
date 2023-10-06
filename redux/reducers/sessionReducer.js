import * as actions from '../constants/index';
import produce from 'immer';
import {DB_VERSION, APP_VERSION} from '../../constants/AppVersion';

//  NOTE: apparently only simple data sctructures and primatives are allowed in redux,
//  sets, maps, functions, classes are all not allowed
initialStateSESSIONR = {
  timestamp: -1,
  owner: null,
  lastServerSyncTimestamp: -1,
  dbVersion: DB_VERSION,
  appVersion: APP_VERSION,
  deviceMetadata: {},
  notifications: {
    daily: {},
    weekly: {},
  },
};
export default sessionReducer = (state = initialStateSESSIONR, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.UPDATE_LAST_SERVER_SYNC_TIMESTAMP:
        draft.lastServerSyncTimestamp = action.payload;
        break;

      case actions.UPDATE_DEVICE_METADATA:
        draft['appVersion'] = APP_VERSION;
        draft['deviceMetadata'] = action.payload.deviceMetadata;
        break;

      case actions.UPDATE_NOTIFICATIONS:
        draft['notifications']['daily'] = action.payload.daily;
        draft['notifications']['weekly'] = action.payload.weekly;
        break;

      default:
        break;
    }
  });
