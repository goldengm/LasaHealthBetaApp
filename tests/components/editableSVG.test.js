import React from "react";
import { shallow } from "enzyme";
import EditableSVG from "../../components/EditableSVG";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing EditableSVG', () => { 
    it("Testing EditableSVG instantiation", async () => {
        expect(EditableSVG).toBeTruthy();
      
        const element = shallow(<EditableSVG />)
        expect(element.find({ title: 'Cancel' })).toHaveLength(1);
    });

    it("Testing EditableSVG style", () => {
        const element = shallow(<EditableSVG />)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        // const styles = element.find({ testID: 'logHistoryButton' }).prop('style');
        expect(
            element.findWhere((node) => {
              return node.props().testID == "logHistoryButton";
            }).length
        ).toEqual(1);
    });

    it('Calls componentDidMount when mounted', () => {
        const componentDidMount = jest.spyOn(EditableSVG.prototype, 'componentDidMount');
        const wrapper = shallow(<EditableSVG />);
        expect(componentDidMount).toHaveBeenCalled();
    });

    it('Testing Event', () => {
        const element = shallow(<EditableSVG />);
        element.find({ testID: 'testID' }).simulate('press');
        // expect(element.find({ testID: 'testMODAL' })).toBeOnTheScreen();
    });
})
