import React from "react";
import { shallow } from "enzyme";
import EditableListitemCard from "../../components/EditableListitemCard";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing EditableListitemCard', () => { 
    it("Testing EditableListitemCard instantiation", async () => {
        expect(EditableListitemCard).toBeTruthy();
      
        const element = shallow(<EditableListitemCard name={'This is EditableListitemCard'}/>)
        expect(element.find({ children: 'This is EditableListitemCard' })).toHaveLength(1);
    });

    it("Testing EditableListitemCard style", () => {
        const element = shallow(<EditableListitemCard />)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        // const styles = element.find({ testID: 'logHistoryButton' }).prop('style');
        expect(
            element.findWhere((node) => {
              return node.props().testID == "logHistoryButton";
            }).length
        ).toEqual(3);
    });

    it('Calls componentDidMount when mounted', () => {
        const componentDidMount = jest.spyOn(EditableListitemCard.prototype, 'componentDidMount');
        const wrapper = shallow(<EditableListitemCard />);
        expect(componentDidMount).toHaveBeenCalled();
    });

    it('Testing Event', () => {
        const element = shallow(<EditableListitemCard />);
        element.find({ testID: 'testID' }).simulate('press');
        // expect(element.find({ testID: 'testID' })).toBeVisible();
    });
})
