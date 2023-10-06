import React from 'react';
import {shallow} from 'enzyme';
import SwipeableListitemCard from '../../components/SwipeableListitemCard';
import {render, screen, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

describe('Testing SwipeableListitemCard', () => {
  it('Testing SwipeableListitemCard instantiation', async () => {
    expect(SwipeableListitemCard).toBeTruthy();

    const element = shallow(<SwipeableListitemCard />);
    expect(element.find({testID: 'testID'})).toBeDefined();
  });

  it('Testing SwipeableListitemCard style', () => {
    const element = shallow(<SwipeableListitemCard />);
    // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
    const styles = element.find({testID: 'testID'}).prop('style');
    expect(styles.justifyContent).toEqual('center');
    expect(styles.alignItems).toEqual('center');
  });
});
