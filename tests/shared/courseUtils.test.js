import {
  getWeeklyDueDate,
  isWeekOfCourseUnlocked,
  getCourseWeekUnlockDate,
  calculateCurrentCourseCompletionPercent,
  getEndo101ProgressMessage,
} from '../../shared/CourseUtils';

jest.mock('react-native-keychain', () => ({}));
jest.mock('react-native-device-info', () => ({}));
jest.mock('expo-print', () => ({}));
jest.mock('expo-sharing', () => ({}));
jest.mock('@react-native-firebase/functions', () => ({}));

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));

jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));

describe('Testing CourseUtils', () => {
  it('Testing CourseUtils Instantiation', () => {
    expect(getWeeklyDueDate).toBeTruthy();
    expect(isWeekOfCourseUnlocked).toBeTruthy();
    expect(getCourseWeekUnlockDate).toBeTruthy();
    expect(calculateCurrentCourseCompletionPercent).toBeTruthy();
    expect(getEndo101ProgressMessage).toBeTruthy();
  });

  it('Testing CourseUtils Behavior', () => {
    expect(getCourseWeekUnlockDate(10, 1)).toEqual(10);
    expect(calculateCurrentCourseCompletionPercent).toBeTruthy();
    expect(getEndo101ProgressMessage(0, 0)).toEqual('YOUR COURSE');
  });
});
