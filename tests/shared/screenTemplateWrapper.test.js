import React from "react";
import { shallow } from "enzyme";
import ScreenTemplate from "../../shared/ScreenTemplateWrapper";
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
jest.mock("react-native-gesture-handler", () => ({}));
jest.mock("react-native-device-info", () => ({}));

describe('Testing ScreenTemplate', () => { 
    it("Testing ScreenTemplate instantiation", async () => {
        expect(ScreenTemplate).toBeTruthy();
      
        const element = shallow(<ScreenTemplate customImageName={true}/>)
        expect(element.find({ testID: 'testID' })).toBeDefined();
    });

    it("Testing ScreenTemplate style", () => {
        const element = shallow(<ScreenTemplate customImageName={true}/>)
        const styles = element.find({ testID: 'testID' }).prop('style');
        expect(styles.justifyContent).toEqual('center');
        expect(styles.marginTop).toEqual(0);
    });
})
