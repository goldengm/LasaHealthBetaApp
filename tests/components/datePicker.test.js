import React from "react";
import { shallow } from "enzyme";
import DatePicker from "../../components/DatePicker";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing DatePicker', () => { 
    it("Testing DatePicker instantiation", async () => {
        expect(DatePicker).toBeTruthy();
      
        const element = shallow(<DatePicker testID={'testID'}/>)
        expect(element.find({ testID: 'testID' })).toHaveLength(1);
    });

    it("Testing DatePicker style", () => {
        const element = shallow(<DatePicker testID={'testID'}/>)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const styles = element.find({ testID: 'testID' }).prop('style');
        expect(styles.marginBottom).toEqual(16);
    });

    it('Calls componentDidMount when mounted', () => {
        const componentDidMount = jest.spyOn(DatePicker.prototype, 'componentDidMount');
        const wrapper = shallow(<DatePicker />);
        expect(componentDidMount).toHaveBeenCalled();
    });

    it('Testing Event', () => {
        const element = shallow(<DatePicker testID={'testID'}/>);
        element.find({ testID: 'testID' }).simulate('press');
        // expect(element.find({ testID: 'testID' })).toBeVisible();
        const property = element.find({ testID: 'dateTimePicker' }).prop('is24Hour');
        expect(property).toEqual(false);
    });
})
