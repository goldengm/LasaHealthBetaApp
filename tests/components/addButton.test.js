import React from 'react';
import {shallow} from 'enzyme';
import AddButton from '../../screens/Connect/addButton';
import {Provider} from 'react-redux';

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));
jest.mock('victory-native', () => ({}));
jest.mock('react-native-device-info', () => ({}));
jest.mock('expo-print', () => ({}));
jest.mock('expo-sharing', () => ({}));
jest.mock('@react-native-firebase/functions', () => ({}));
//jest.mock('react-native-purchases', () => ({}));

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

describe('Testing AddButton', () => {
  it('Testing AddButton instantiation', async () => {
    // expect(<AddButton />).toBeTruthy();

    const element = shallow(
      <Provider store={store}>
        <AddButton />
      </Provider>,
    );
    expect(element.find({testID: 'addButtonID'})).toBeDefined();
  });

  // it('Testing AddButton style', () => {
  //   // const element = shallow(<AddButton pollOptions={[1, 2, 3]} />);
  //   const element = shallow(
  //     <Provider store={store}>
  //       <AddButton testID={'addButtonComponentID'} pollOptions={[1, 2, 3]} />
  //     </Provider>,
  //   );
  //   // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
  //   const styles = element.find({testID: 'addButtonComponentID'}).prop('style');
  //   expect(styles.width).toEqual(130);
  //   expect(styles.height).toEqual(80);
  // });
});
