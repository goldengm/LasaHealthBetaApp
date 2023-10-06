import React from "react";
import { shallow } from "enzyme";
import IconExtra from "../../components/Icon";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

jest.mock("victory-native", () => ({}));


describe('Testing IconExtra', () => { 
    it("Testing IconExtra instantiation", async () => {
        expect(IconExtra).toBeTruthy();
      
    });

})
