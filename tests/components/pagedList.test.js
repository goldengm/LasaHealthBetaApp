import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {shallow} from 'enzyme';
import PagedList from '../../components/PagedList';
import {theme, styles} from '../../constants';

// jest.mock("react-native-elements", () => ({}));
jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));

it('Testing PagedList instantiation', async () => {
  const optionsList = ['option1', 'option2', 'option3', 'option4'];
  const componantInstance = shallow(
    <PagedList passedOptionsList={optionsList} />,
  );
  // <PagedList
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
  expect(PagedList).toBeTruthy();
  expect(componantInstance).toBeTruthy();
  expect(componantInstance.instance()).toBeTruthy();
  // expect(componantInstance.find(TouchableOpacity)).toBeTruthy();
});

it('Testing inline PagedList pagination', async () => {
  const optionsList = ['option1', 'option2', 'option3', 'option4'];
  const componantInstance = shallow(
    <PagedList passedOptionsList={optionsList} navButtonsInline={true} />,
  ).dive();
  expect(PagedList).toBeTruthy();
  expect(componantInstance).toBeTruthy();
  expect(componantInstance.instance()).toBeTruthy();

  expect(componantInstance.find({testID: 'forwardButton1'}).length).toEqual(1);
  expect(componantInstance.find({testID: 'backButton1'}).length).toEqual(1);
});

it('Testing PagedList pagination', async () => {
  const optionsList = ['option1', 'option2', 'option3', 'option4'];
  const componantInstance = shallow(
    <PagedList passedOptionsList={optionsList} />,
  ).dive();
  expect(PagedList).toBeTruthy();
  expect(componantInstance).toBeTruthy();
  expect(componantInstance.instance()).toBeTruthy();

  expect(componantInstance.find({testID: 'forwardButton2'}).length).toEqual(1);
  expect(componantInstance.find({testID: 'backButton2'}).length).toEqual(1);
});
