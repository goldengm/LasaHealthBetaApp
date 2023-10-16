import {
  getWeeklyPNMessage,
  getDailyPNMessage,
} from '../../shared/NotificationManager';

jest.mock('react-native-keychain', () => ({}));
jest.mock('react-native-device-info', () => ({}));
jest.mock('expo-print', () => ({}));
jest.mock('expo-sharing', () => ({}));
jest.mock('@react-native-firebase/functions', () => ({}));
jest.mock('@react-native-firebase/messaging', () => ({}));
jest.mock('@notifee/react-native', () => ({}));

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

describe('Testing NotificationManager', () => {
  it('Testing NotificationManager Instantiation', () => {
    const [pnTitle1, pnBody1] = getWeeklyPNMessage();
    const [pnTitle2, pnBody2] = getDailyPNMessage();

    expect(pnTitle1).toBeTruthy();
    expect(pnBody1).toBeTruthy();
    expect(pnTitle2).toBeTruthy();
    expect(pnBody2).toBeTruthy();
  });
});
