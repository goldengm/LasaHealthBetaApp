import React from "react";
import { shallow } from "enzyme";
import LottiePlayer from "../../components/LottiePlayer";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing LottiePlayer', () => { 
    it("Testing LottiePlayer instantiation", async () => {
        expect(LottiePlayer).toBeTruthy();
      
        const element = shallow(<LottiePlayer />)
        expect(element.find({ testID: 'testID' })).toHaveLength(1);
    });

    it("Testing LottiePlayer style", () => {
        const element = shallow(<LottiePlayer lottieWidth={10}/>)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const styles = element.find({ testID: 'testID' }).prop('style');
        expect(styles.marginTop).toEqual(10);
        expect(styles.width).toEqual(10);
    });

})
