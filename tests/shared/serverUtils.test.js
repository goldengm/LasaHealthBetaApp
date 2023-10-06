import {
  getCachedPublicProfile,
  getPublicProfile,
  createChatroom,
} from '../../shared/ServerUtils';

jest.mock('react-native-keychain', () => ({}));
jest.mock('react-native-device-info', () => ({}));
jest.mock('expo-print', () => ({}));
jest.mock('expo-sharing', () => ({}));
jest.mock('react-native-purchases', () => ({}));

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));

jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
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

describe('Testing ServerUtils', () => {
  it('Testing ServerUtils Instantiation', () => {
    expect(getCachedPublicProfile).toBeTruthy();
    expect(getPublicProfile).toBeTruthy();
    expect(createChatroom).toBeTruthy();
  });

  it('Testing ServerUtils Behavior', () => {
    expect(getPublicProfile(100)).toBeTruthy();
  });
});
