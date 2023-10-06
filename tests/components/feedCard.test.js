import React from 'react';
import {shallow} from 'enzyme';
import FeedCard from '../../components/FeedCard';
import {render, screen, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));

describe('Testing FeedCard', () => {
  it('Testing FeedCard instantiation', async () => {
    expect(FeedCard).toBeTruthy();

    const element = shallow(<FeedCard />);
    // expect(element.find({ title: 'Default Title' })).toHaveLength(1);
    expect(
      element.findWhere(node => {
        return node.text() === 'Default Title';
      }),
    ).toBeDefined();
  });

  it('Testing FeedCard style', () => {
    const element = shallow(<FeedCard />);
    // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
    // const styles = element.find({ testID: 'logHistoryButton' }).prop('style');
    expect(
      element.findWhere(node => {
        return node.props().testID == 'testID';
      }).length,
    ).toEqual(2);

    const styles = element.find({testID: 'testID'}).first().prop('style');
    expect(styles.justifyContent).toEqual('center');
    expect(styles.alignItems).toEqual('center');
    expect(styles.borderTopWidth).toEqual(6);
  });

  it('Calls componentDidMount when mounted', () => {
    const componentDidMount = jest.spyOn(
      FeedCard.prototype,
      'componentDidMount',
    );
    const wrapper = shallow(<FeedCard />);
    expect(componentDidMount).toHaveBeenCalled();
  });
});
