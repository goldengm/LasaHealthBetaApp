import React from "react";
import { shallow } from "enzyme";
import PollCard from "../../components/PollCard";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing PollCard', () => { 
    it("Testing PollCard instantiation", async () => {
        expect(PollCard).toBeTruthy();
      
        const element = shallow(<PollCard testID={'testID'} pollOptions={[1,2,3]}/>)
        expect(element.find({ testID: 'testID' })).toBeDefined();
    });

    it("Testing PollCard style", () => {
        const element = shallow(<PollCard pollOptions={[1,2,3]}/>)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const styles = element.find({ testID: 'testID' }).prop('style');
        expect(styles.justifyContent).toEqual('center');
        expect(styles.alignItems).toEqual('center');
    });
})
