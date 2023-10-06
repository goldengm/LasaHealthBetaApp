
import React from "react";
import { shallow } from "enzyme";
import Switch from "../../components/Switch";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing Switch', () => { 
    it("Testing Switch instantiation", async () => {
        expect(Switch).toBeTruthy();
      
        const element = shallow(<Switch />)
        expect(element.find({ testID: 'testID' })).toBeDefined();
    });

    it("Testing Switch style", () => {
        const element = shallow(<Switch value={123}/>)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const styles = element.find({ testID: 'testID' }).prop('value');
        expect(styles).toEqual(123);
    });
})
