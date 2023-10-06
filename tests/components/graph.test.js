import React from "react";
import { shallow } from "enzyme";
import {LineGraph} from "../../components/Graph";
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


describe('Testing LineGraph', () => { 
    it("Testing LineGraph instantiation", async () => {
        expect(LineGraph).toBeTruthy();
      
        const element = shallow(<LineGraph testID={'This is LineGraph'}/>)
        expect(element.find({ testID: 'This is LineGraph' })).toHaveLength(1);
    });

})
