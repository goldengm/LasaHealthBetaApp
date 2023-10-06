
import React from "react";
import { shallow } from "enzyme";
import QnACard from "../../components/QnACard";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing QnACard', () => { 
    it("Testing QnACard instantiation", async () => {
        expect(QnACard).toBeTruthy();
      
        const element = shallow(<QnACard />)
        expect(element.find({ testID: 'testID' })).toBeDefined();
    });

    it("Testing QnACard style", () => {
        const element = shallow(<QnACard pollOptions={[1,2,3]}/>)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const styles = element.find({ testID: 'testID' }).prop('style');
        expect(styles.justifyContent).toEqual('center');
        expect(styles.alignItems).toEqual('center');
    });
})
