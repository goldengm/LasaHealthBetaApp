import React from 'react';
import {StyleSheet, View} from 'react-native';
import {shallow} from 'enzyme';
import Bubble from '../../components/Bubble';
import TouchableOpacity from '../../components/TouchableOpacity';
import {theme, styles} from '../../constants';

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
  Text: () => 'Text',
}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => 'Icon');

it('Testing Bubble instantiation', async () => {
  const componantInstance = shallow(
    <Bubble
      style={{
        ...styles.petal3Bubble,
        borderColor: styles.petal3Bubble['backgroundColor'],
        borderWidth: 2,
        width: styles.petal3Bubble.width,
        height: styles.petal3Bubble.height,
        marginHorizontal: 2,
      }}
      disabled={true}
      iconName=""
      bubbleName=""
      customOnPress={() => {}}
      viewBackgroundColor={theme.COLORS.ELEMENT_BACKGROUND}
    />,
  );
  expect(Bubble).toBeTruthy();
  expect(componantInstance).toBeTruthy();
  expect(componantInstance.instance()).toBeTruthy();
  expect(componantInstance.find(TouchableOpacity)).toBeTruthy();
});

it('Testing Bubble reduceBubbleName', async () => {
  const componantInstance = shallow(
    <Bubble
      style={{
        ...styles.petal3Bubble,
        borderColor: styles.petal3Bubble['backgroundColor'],
        borderWidth: 2,
        width: styles.petal3Bubble.width,
        height: styles.petal3Bubble.height,
        marginHorizontal: 2,
      }}
      disabled={true}
      iconName=""
      bubbleName=""
      customOnPress={() => {}}
      viewBackgroundColor={theme.COLORS.ELEMENT_BACKGROUND}
    />,
  );
  // expect(componantInstance).toBeTruthy();
  // expect(componantInstance).toBeTruthy();
  expect(componantInstance.instance().reduceBubbleName).toBeTruthy();
  expect(
    componantInstance
      .instance()
      .reduceBubbleName('Helloooooooo testingggggggg'),
  ).toEqual('Helloooo\n testing');
  expect(componantInstance.instance().reduceBubbleName('')).toEqual('');
});

it('Testing Bubble onPress', async () => {
  const componantInstance = shallow(
    <Bubble
      style={{
        ...styles.petal3Bubble,
        borderColor: styles.petal3Bubble['backgroundColor'],
        borderWidth: 2,
        width: styles.petal3Bubble.width,
        height: styles.petal3Bubble.height,
        marginHorizontal: 2,
      }}
      disabled={false}
      iconName=""
      bubbleName=""
      customOnPress={() => {}}
      viewBackgroundColor={theme.COLORS.ELEMENT_BACKGROUND}
    />,
  );
  // expect(componantInstance.find('.in-bar')).toEqual(1);
  // expect(componantInstance).toBeTruthy();
  expect(componantInstance).toBeTruthy();
  expect(componantInstance.find({testID: 'BubbleButton'})).toBeDefined();
  expect(componantInstance.instance().state.selected).toEqual(false);
  expect(componantInstance.find({testID: 'BubbleButton'}).length).toEqual(1);
  await componantInstance.find({testID: 'BubbleButton'}).simulate('press');
  expect(componantInstance.instance().state.selected).toEqual(true);
});

// // //  TODO:
// // // reduceBubbleName
