
import React from "react";
import { shallow } from "enzyme";
import Select from "../../components/Select";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing Select', () => { 
    it("Testing Select instantiation", async () => {
        expect(Select).toBeTruthy();
      
        const element = shallow(<Select testID='testID' options={[]}/>)
        expect(element.find({ testID: 'testID' })).toBeDefined();
    });

    it("Testing Select style", () => {
        const element = shallow(<Select testID='testID' options={[]}/>)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const styles = element.find({ testID: 'testID' }).prop('titleStyle');
        expect(styles.marginRight).toEqual(6);
        expect(styles.fontSize).toEqual(12);
    });
})
