import React from "react";
import { shallow } from "enzyme";
import PricingCard from "../../components/PricingCard";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing PricingCard', () => { 
    it("Testing PricingCard instantiation", async () => {
        expect(PricingCard).toBeTruthy();
      
        const element = shallow(<PricingCard testID={'testID'} pollOptions={[1,2,3]}/>)
        expect(element.find({ testID: 'testID' })).toBeDefined();
    });

})
