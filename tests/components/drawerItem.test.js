import React from 'react';
import {shallow} from 'enzyme';
import DrawerItem from '../../components/DrawerItem';
import {render, screen, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));

describe('Testing DrawerItem', () => {
  it('Testing DrawerItem instantiation', async () => {
    expect(DrawerItem).toBeTruthy();

    const element = shallow(
      <DrawerItem testID={'testID'} navigation={{navigate: () => {}}} />,
    );
    expect(element.find({testID: 'testID'})).toHaveLength(1);
  });

  it('Testing DrawerItem style', () => {
    const element = shallow(
      <DrawerItem testID={'testID'} navigation={{navigate: () => {}}} />,
    );
    // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
    const styles = element.find({testID: 'testID'}).prop('style');
    expect(styles.height).toEqual(35);
  });

  it('Testing Event', () => {
    const element = shallow(
      <DrawerItem testID={'testID'} navigation={{navigate: () => {}}} />,
    );
    element.find({testID: 'testID'}).simulate('press');
    const activeScreen = element.find({testID: 'testID'});
    expect(activeScreen.length).toBe(1);
  });
});
