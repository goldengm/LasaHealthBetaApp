import React from "react";
import { shallow } from "enzyme";
import CommentCard from "../../components/CommentCard";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing CommentCard', () => { 
    it("Testing CommentCard instantiation", async () => {
        expect(CommentCard).toBeTruthy();
      
        const element = shallow(<CommentCard text={'This is CommentCard'}/>)
        expect(element.find({ children: 'This is CommentCard' })).toHaveLength(1);
    });

    it("Testing CommentCard style", () => {
        const element = shallow(<CommentCard />)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        const styles = element.find({ testID: 'testID' }).prop('style');
        expect(styles.justifyContent).toEqual('center');
        expect(styles.alignItems).toEqual('center');
    });

    it('Calls componentDidMount when mounted', () => {
        const componentDidMount = jest.spyOn(CommentCard.prototype, 'componentDidMount');
        const wrapper = shallow(<CommentCard />);
        expect(componentDidMount).toHaveBeenCalled();
    });

    it('Testing Event', () => {
        const element = shallow(<CommentCard />);
        element.find({ testID: 'testID' }).simulate('press');
        // expect(element.find({ testID: 'testID' })).toBeVisible();
    });
})
