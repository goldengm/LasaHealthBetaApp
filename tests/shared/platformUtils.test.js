import { 
    getOS
} from '../../shared/PlatformUtils';

jest.mock('react-native-keychain', () => ({}));
jest.mock('react-native-device-info', () => ({}));
jest.mock('expo-print', () => ({}));
jest.mock('expo-sharing', () => ({}));

jest.mock("react-native-elements", () => ({
    createTheme: jest.fn(() => {})
  }));

jest.mock("../../shared/PlatformUtils", () => ({
    getOS: jest.fn(() => "android"),
}));

describe('Testing PlatformUtils', () => {
    it('Testing PlatformUtils Instantiation', () => {

        expect(getOS).toBeTruthy();
    });

})
