import React from 'react';
import sessionReducer from '../../redux/reducers/sessionReducer';
import * as actions from '../../redux/constants/index';
import {DB_VERSION, APP_VERSION} from '../../constants/AppVersion';

jest.mock('react-native-elements', () => ({}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));

beforeEach(async () => {
  // store = await createTestStore();
});

// //  3 ways to create the same query, for use in future test writing
// expect(componantInstance.contains(<Text>Hihihi</Text>)).toEqual(true);
// expect(
//   componantInstance
//     .find("Text") // Use selector to get certain children
//     .first() // Get the first child
//     .props().children // Get its props
// ).toEqual("Hihihi");
// expect(
//   componantInstance
//     .find(Text) // Use selector to get certain children
//     .at(0) // Get the first child
//     .props().children // Get its props
// ).toEqual("Hihihi");

const initialState = {
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

describe('SessionReducer general tests', () => {
  it('Testing UPDATE_LAST_SERVER_SYNC_TIMESTAMP', () => {
    const actionObj = {
      type: actions.UPDATE_LAST_SERVER_SYNC_TIMESTAMP,
      payload: 1,
    };
    const returned = sessionReducer(initialState, actionObj);
    expect(returned.lastServerSyncTimestamp).toEqual(1);
  });

  it('Testing UPDATE_DEVICE_METADATA', () => {
    const actionObj = {
      type: actions.UPDATE_DEVICE_METADATA,
      payload: {
        'deviceMetadata': 'This is Device MetaData'
      },
    };
    const returned = sessionReducer(initialState, actionObj);
    expect(returned.appVersion).toEqual(APP_VERSION);
    expect(returned.deviceMetadata).toEqual('This is Device MetaData');
  });

  it('Testing UPDATE_NOTIFICATIONS', () => {
    const actionObj = {
      type: actions.UPDATE_NOTIFICATIONS,
      payload: {
        daily: {'daily': 'This is daily data'},
        weekly: {'weekly': 'This is weekly data'}
      },
    };
    const returned = sessionReducer(initialState, actionObj);
    expect(returned.notifications.daily.daily).toEqual('This is daily data');
    expect(returned.notifications.weekly.weekly).toEqual('This is weekly data');
  });

});
