import React from "react";
import { shallow } from "enzyme";
import MessageCard from "../../components/MessageCard";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing MessageCard', () => { 
    it("Testing MessageCard instantiation", async () => {
        expect(MessageCard).toBeTruthy();
      
        const element = shallow(<MessageCard title={'Name'}/>)
        expect(element.find({ title: 'Name' })).toBeDefined();
    });

    it("Testing MessageCard style", () => {
        const element = shallow(<MessageCard lottieWidth={10}/>)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const styles = element.find({ testID: 'testID' }).prop('style');
        expect(styles.justifyContent).toEqual('center');
        expect(styles.alignItems).toEqual('center');
    });

})
