import React from "react";
import { shallow } from "enzyme";
import Notification from "../../components/Notification";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing Notification', () => { 
    it("Testing Notification instantiation", async () => {
        expect(Notification).toBeTruthy();
      
        const element = shallow(<Notification testID={'testID'}/>)
        expect(element.find({ testID: 'testID' })).toBeDefined();
    });

    it("Testing Notification style", () => {
        const element = shallow(<Notification lottieWidth={10}/>)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const styles = element.find({ testID: 'testID' }).prop('style');
        expect(styles.alignContent).toEqual('center');
        expect(styles.alignItems).toEqual('flex-start');
    });
})
