import React from 'react';
import settingsReducer from '../../redux/reducers/settingsReducer';
import * as actions from '../../redux/constants/index';

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
    pushNotificationsEnabled: true,
};

describe('SessionReducer general tests', () => {
  it('Testing SET_PUSH_NOTIFICATIONS_ENABLED', () => {
    const actionObj = {
      type: actions.SET_PUSH_NOTIFICATIONS_ENABLED,
      payload: false,
    };
    const returned = settingsReducer(initialState, actionObj);
    expect(returned.pushNotificationsEnabled).toEqual(false);
  });
});
