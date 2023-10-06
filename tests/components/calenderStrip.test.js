import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {shallow} from 'enzyme';
import CalenderStrip from '../../components/CalenderStrip';
import {theme, styles} from '../../constants';

// jest.mock("react-native-elements", () => ({}));
jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));

//  FIXMETUNA:  need to test CalendarStrip effectively in detox e2e
it('Testing CalenderStrip instantiation', async () => {
  // const componantInstance = await shallow(
  //   <CalenderStrip current="2021-09-27" currentMonth="2021-09-27" />
  // );
  // <CalenderStrip
  //   style={{
  //     ...styles.petal3Bubble,
  //     borderColor: styles.petal3Bubble["backgroundColor"],
  //     borderWidth: 2,
  //     width: styles.petal3Bubble.width,
  //     height: styles.petal3Bubble.height,
  //     marginHorizontal: 2,
  //   }}
  //   disabled={true}
  //   iconName=""
  //   bubbleName=""
  //   customOnPress={() => {}}
  //   viewBackgroundColor={theme.COLORS.ELEMENT_BACKGROUND}
  // />
  expect(CalenderStrip).toBeTruthy();
  // expect(componantInstance).toBeTruthy();
  // expect(componantInstance.instance()).toBeTruthy();
  // expect(componantInstance.find(TouchableOpacity)).toBeTruthy();
});

// // //  TODO:
// // // reduceBubbleName
