import React from "react";
import { shallow } from "enzyme";
import LoadingIndicator from "../../components/LoadingIndicator";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing LoadingIndicator', () => { 
    it("Testing LoadingIndicator instantiation", async () => {
        expect(LoadingIndicator).toBeTruthy();
      
        const element = shallow(<LoadingIndicator />)
        expect(element.find({ testID: 'testID' })).toHaveLength(1);
    });

    it("Testing LoadingIndicator style", () => {
        const element = shallow(<LoadingIndicator />)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const styles = element.find({ testID: 'testID' }).prop('overlayStyle');
        expect(styles.marginHorizontal).toEqual(0);
        expect(styles.padding).toEqual(0);
    });

    it('Calls componentDidMount when mounted', () => {
        const componentDidMount = jest.spyOn(LoadingIndicator.prototype, 'componentDidMount');
        const wrapper = shallow(<LoadingIndicator />);
        expect(componentDidMount).toHaveBeenCalled();
    });

})
