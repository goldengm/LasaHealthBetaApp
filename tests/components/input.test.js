import React from "react";
import { shallow } from "enzyme";
import ArInput from "../../components/Input";
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


describe('Testing ArInput', () => { 
    it("Testing ArInput instantiation", async () => {
        expect(ArInput).toBeTruthy();
      
    });

})
