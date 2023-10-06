
import React from "react";
import { shallow } from "enzyme";
import RoundedTopContainer from "../../components/RoundedTopContainer";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing RoundedTopContainer', () => { 
    it("Testing RoundedTopContainer instantiation", async () => {
        expect(RoundedTopContainer).toBeTruthy();
      
        const element = shallow(<RoundedTopContainer />)
        expect(element.find({ testID: 'testID' })).toBeDefined();
    });

    it("Testing RoundedTopContainer style", () => {
        const element = shallow(<RoundedTopContainer pollOptions={[1,2,3]}/>)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const styles = element.find({ testID: 'testID' }).prop('style');
        expect(styles.shadowOpacity).toEqual(0.18);
        expect(styles.shadowRadius).toEqual(26);
    });
})
