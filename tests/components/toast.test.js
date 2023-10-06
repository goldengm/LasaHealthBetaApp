
import React from "react";
import { shallow } from "enzyme";
import Toast from "../../components/Toast";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing Toast', () => { 
    it("Testing Toast instantiation", async () => {
        expect(Toast).toBeTruthy();
      
        const element = shallow(<Toast />)
        expect(element.find({ testID: 'testID' })).toBeDefined();
    });

    it("Testing Toast style", () => {
        const element = shallow(<Toast />)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const styles = element.find({ testID: 'testID' }).prop('style');
        expect(styles[0].width).toEqual('100%');
        expect(styles[0].alignItems).toEqual('center');
    });
})
