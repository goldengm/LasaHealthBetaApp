
import React from "react";
import { shallow } from "enzyme";
import TouchableOpacity from "../../components/TouchableOpacity";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing TouchableOpacity', () => { 
    it("Testing TouchableOpacity instantiation", async () => {
        expect(TouchableOpacity).toBeTruthy();
      
        const element = shallow(<TouchableOpacity testID='testID'/>)
        expect(element.find({ testID: 'testID' })).toBeDefined();
    });

})
