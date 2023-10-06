
import React from "react";
import { shallow } from "enzyme";
import Tabs from "../../components/Tabs";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing Tabs', () => { 
    it("Testing Tabs instantiation", async () => {
        expect(Tabs).toBeTruthy();
      
        const element = shallow(<Tabs />)
        expect(element.find({ testID: 'testID' })).toBeDefined();
    });

    it("Testing Tabs style", () => {
        const element = shallow(<Tabs />)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const horizontal = element.find({ testID: 'testID' }).prop('horizontal');
        const showsHorizontalScrollIndicator = element.find({ testID: 'testID' }).prop('showsHorizontalScrollIndicator');
        expect(horizontal).toEqual(true);
        expect(showsHorizontalScrollIndicator).toEqual(false);
    });
})
