import { createAndSavePDF, getDateFromTS } from '../../shared/AnalysisUtils';

jest.mock('react-native-keychain', () => ({}));
jest.mock('react-native-device-info', () => ({}));
jest.mock('react-native-elements', () => ({}));
jest.mock('expo-print', () => ({}));
jest.mock('expo-sharing', () => ({}));

it('Testing AnalysisUtils getDateFromTS', () => {

    expect(createAndSavePDF).toBeTruthy();
    expect(getDateFromTS).toBeTruthy();
    expect(getDateFromTS(null)).toEqual('');
  });