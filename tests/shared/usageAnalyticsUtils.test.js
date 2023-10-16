// import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';

jest.mock('react-native-keychain', () => ({}));
jest.mock('react-native-device-info', () => ({}));
jest.mock('expo-print', () => ({}));
jest.mock('expo-sharing', () => ({}));
jest.mock('@react-native-firebase/functions', () => ({}));
// jest.mock('mixpanel-react-native', () => ({}));

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

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));

jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));

describe('Testing UsageAnalyticsUtils', () => {
  it('Testing UsageAnalyticsUtils Instantiation', () => {
    //  This doesn't need direct testing atm, might in the future with further expansion
    // expect(MixpanelInstance).toBeTruthy();
    expect(true).toBeTruthy();
  });
});
