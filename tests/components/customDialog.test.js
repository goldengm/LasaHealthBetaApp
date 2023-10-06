import React from "react";
import { shallow } from "enzyme";
import CustomDialog from "../../components/CustomDialog";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing CustomDialog', () => { 
    it("Testing CustomDialog instantiation", async () => {
        expect(CustomDialog).toBeTruthy();
      
    });

})
