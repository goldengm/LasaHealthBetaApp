import React from 'react';
import {shallow} from 'enzyme';
import GardenScreen from '../../../screens/Garden/GardenScreen';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
// import store from '../../redux/store/configureStore';
// import configureStore from "./custom-mock-up";
// import {configureMockStore} from '@jedmao/redux-mock-store';

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import {rootReducer} from '../../redux/store/configureStore'
// import { store } from '../../redux/store/configureStore';

const reduxMockStore = require('redux-mock-store');

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));
jest.mock('../../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../../components/Icon', () => ({}));

jest.mock('expo-status-bar', () =>
  require('../../__mocks__/expo-status-bar.mock'),
);
jest.mock('react-native-gesture-handler', () =>
  require('../../__mocks__/react-native-gesture-handler.mock.js'),
);
//jest.mock('react-native-purchases', () =>
//  require('../../__mocks__/react-native-purchases.mock.js'),
//);

jest.mock('react-native-device-info', () => ({}));
jest.mock('mixpanel-react-native', () =>
  jest.fn().mockImplementation(() => ({
    init: jest.fn(),
    track: jest.fn(),
    identify: jest.fn(),
    alias: jest.fn(),
    people: {
      set: jest.fn(),
    },
    setLoggingEnabled: jest.fn(() => {}),
  })),
);
jest.mock('@react-native-firebase/messaging', () => ({}));
jest.mock('@notifee/react-native', () => ({}));
jest.mock('victory-native', () => ({}));
jest.mock('@react-native-async-storage/async-storage', () => ({}));
jest.mock('react-native-gesture-handler/Swipeable', () => ({}));
jest.mock('expo-print', () => ({}));
jest.mock('expo-sharing', () => ({}));
jest.mock('@react-native-firebase/functions', () => ({}));

jest.mock('redux', () => ({
  createStore: jest.fn(() => {}),
  combineReducers: jest.fn(() => {}),
  applyMiddleware: jest.fn(() => {}),
  compose: jest.fn(() => {}),
  apply: jest.fn(() => {}),
}));
jest.mock('redux-persist-transform-encrypt', () => ({
  encryptTransform: jest.fn(() => {}),
}));

const mockStorage = {
  getItem: jest.fn(() => null),
  setItem: jest.fn(() => null),
  removeItem: jest.fn(() => null),
};
jest.mock('redux-persist', () => ({
  persistReducer: jest.fn(() => {}),
  persistStore: jest.fn(() => {}),
  storage: mockStorage,
}));

jest.mock('firebase/compat/app', () => ({
  apps: [0],
  app: jest.fn(() => {
    return {
      firestore: () => {
        return {
          settings: () => {},
        };
      },
      functions: () => {},
    };
  }),
  auth: function auth() {
    auth.Auth = {
      Persistence: {
        LOCAL: '_',
        SESSION: '_',
      },
    };

    return {
      setPersistence: () => Promise.resolve(),
      // signInWithEmailAndPassword: (email, password) =>
      //     new Promise<void>((res, rej) => { /* ...code */}),
    };
  },
}));

jest.mock('../../../shared/UsageAnalyticsUtils', () => ({
  track: jest.fn(() => {}),
}));

// // const mockStore = configureStore();
// // const store = mockStore({});
// const middlewares = [thunkMiddleware];
// const mockStore = configureStore(middlewares);

// let state = {};
// const store = mockStore(() => state);
// // const mockStore = createStore(
// //   rootReducer,
// //   applyMiddleware(...middlewares)
// // );
// // const mockStore = reduxMockStore.configureStore(middlewares);
// // const store = mockStore({});

// // let store = configureStore({
// //   reducer: rootReducer,
// // });

const store = {getState: () => {}};

describe('Testing GardenScreen', () => {
  it('Testing GardenScreen instantiation', async () => {
    shallow(
      <Provider store={store}>
        <GardenScreen />
      </Provider>,
    );
  });
});
