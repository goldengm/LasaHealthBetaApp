
import React from "react";
import { shallow } from "enzyme";
import StatusCard from "../../components/StatusCard";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing StatusCard', () => { 
    it("Testing StatusCard instantiation", async () => {
        expect(StatusCard).toBeTruthy();
      
        const element = shallow(<StatusCard />)
        expect(element.find({ testID: 'testID' })).toBeDefined();
    });

    it("Testing StatusCard style", () => {
        const element = shallow(<StatusCard />)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const styles = element.find({ testID: 'testID' }).prop('style');
        expect(styles.justifyContent).toEqual('center');
        expect(styles.alignItems).toEqual('center');
    });
})
