import React from 'react';
import {shallow} from 'enzyme';
import ChatbotIntroScreen from '../../../screens/Onboarding/ChatbotIntroScreen';
import {Provider} from 'react-redux';

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
jest.mock('react-native-purchases', () =>
  require('../../__mocks__/react-native-purchases.mock.js'),
);

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

// describe('Testing AppIntroScreen', () => {
//   //   const initialState = {};
//   //   const mockStore = configureStore([]);
//   //   const store = mockStore(initialState);
//   // const store = mockStore({visibleDialog: false, assessment: []})

//   it('Testing LoginScreen instantiation', async () => {
//     expect(LoginScreen).toBeTruthy();

//     expect(screen.getByText('Login')).toBeTruthy();

//     // Your component wrapped with the Provider and your mock store
//     const {getByTestId} = render(
//       <Provider store={store}>
//         <LoginScreen />
//       </Provider>,
//     );
//   });
// });

const store = {getState: () => {}};

describe('Testing ChatbotIntroScreen', () => {
  it('Testing ChatbotIntroScreen instantiation', async () => {
    shallow(
      <Provider store={store}>
        <ChatbotIntroScreen />
      </Provider>,
    );
  });
});
