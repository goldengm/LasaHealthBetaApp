import React from "react";
import { shallow } from "enzyme";
import EditableText from "../../components/EditableText";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing EditableText', () => { 
    it("Testing EditableText instantiation", async () => {
        expect(EditableText).toBeTruthy();
      
        const element = shallow(<EditableText />)
        expect(element.find({ testID: 'testID' })).toHaveLength(1);
        expect(element.find({ testID: 'testMODAL' })).toHaveLength(1);
    });

    it("Testing EditableText style", () => {
        const element = shallow(<EditableText />)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        // const styles = element.find({ testID: 'logHistoryButton' }).prop('style');
        expect(
            element.findWhere((node) => {
              return node.props().testID == "logHistoryButton";
            }).length
        ).toEqual(1);
    });

    it('Calls componentDidMount when mounted', () => {
        const componentDidMount = jest.spyOn(EditableText.prototype, 'componentDidMount');
        const wrapper = shallow(<EditableText />);
        expect(componentDidMount).toHaveBeenCalled();
    });

    it('Testing Event', () => {
        const element = shallow(<EditableText />);
        element.find({ testID: 'testID' }).simulate('press');
        // expect(element.find({ testID: 'testMODAL' })).toBeOnTheScreen();
    });
})
