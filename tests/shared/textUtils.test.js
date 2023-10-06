import React from 'react';
import {shallow} from 'enzyme';
import {generateDataTable} from '../../shared/TextUtils';
import {render, screen, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));
jest.mock('victory-native', () => ({}));
jest.mock('react-native-gesture-handler', () => ({}));
jest.mock('react-native-device-info', () => ({}));

describe('Testing generateDataTable', () => {
  it('Testing generateDataTable instantiation', async () => {
    expect(generateDataTable).toBeTruthy();

    const element = shallow(generateDataTable([]));
    expect(element.find({testID: 'testID'})).toBeDefined();
  });

  it('Testing generateDataTable style', () => {
    const element = shallow(generateDataTable([]));
    const styles = element.find({testID: 'dataTableID'}).prop('style');
    expect(styles.flex).toEqual(1);
    expect(styles.alignItems).toEqual('center');
    expect(styles.justifyContent).toEqual('center');
  });
});
