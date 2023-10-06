import React from 'react';
import {shallow} from 'enzyme';
import SurveyModal from '../../shared/SurveyModal';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));
jest.mock('victory-native', () => ({}));
jest.mock('react-native-gesture-handler', () => ({}));
jest.mock('react-native-device-info', () => ({}));
jest.mock('expo-print', () => ({}));
jest.mock('expo-sharing', () => ({}));
jest.mock('react-native-purchases', () => ({}));

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

const store = {getState: () => {}};

describe('Testing SurveyModal', () => {
  it('Testing SurveyModal instantiation', async () => {
    expect(SurveyModal).toBeTruthy();

    const element = shallow(
      <Provider store={store}>
        <SurveyModal />
      </Provider>,
    );
    expect(element.find({testID: 'surveyModalID'})).toBeDefined();
  });

  // it('Testing SurveyModal style', () => {
  //   // const element = shallow(<SurveyModal />);
  //   const element = shallow(
  //     <Provider store={store}>
  //       <SurveyModal />
  //     </Provider>,
  //   );
  //   const styles = element.find({testID: 'surveyModalID'}).prop('overlayStyle');
  //   expect(styles.elevation).toEqual(0);
  //   expect(styles.flex).toEqual(1);
  //   expect(styles.paddingVertical).toEqual(0);
  // });
});
