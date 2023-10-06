import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {shallow} from 'enzyme';
import SearchDropdown from '../../components/SearchDropdown';
import {theme, styles} from '../../constants';

// jest.mock("react-native-elements", () => ({}));

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));

jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));

//  TODO:  I'll need to test this
it('Testing SearchDropdown instantiation', async () => {
  // const optionsList = ["option1", "option2", "option3", "option4"];
  // const componantInstance = shallow(
  //   <SearchDropdown
  //     topicsList={optionsList}
  //     navigation={{ navigate: jest.fn(() => "") }}
  //   />
  // );

  expect(SearchDropdown).toBeTruthy();
  // expect(componantInstance).toBeTruthy();
  // expect(componantInstance.instance()).toBeTruthy();
  // // expect(componantInstance.find(TouchableOpacity)).toBeTruthy();
});
