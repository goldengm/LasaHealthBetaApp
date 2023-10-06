import React from "react";
import { shallow } from "enzyme";
import EmojiPicker from "../../components/EmojiPicker";
import {render, screen, fireEvent} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

describe('Testing EmojiPicker', () => { 
    it("Testing EmojiPicker instantiation", async () => {
        expect(EmojiPicker).toBeTruthy();
      
        const element = shallow(<EmojiPicker emojiList={[
                          '😩',
                          '😕',
                          '😴',
                          '🙂',
                          '🥰',
                          '😭',
                          '🤕',
                          '😬',
                          '😠',
                          '😂',
                        ]}/>)
        expect(element.find({ testID: 'testID' })).toBeDefined();
    });

    it("Testing EmojiPicker style", () => {
        const element = shallow(<EmojiPicker emojiList={[
                          '😩',
                          '😕',
                          '😴',
                          '🙂',
                          '🥰',
                          '😭',
                          '🤕',
                          '😬',
                          '😠',
                          '😂',
                        ]}/>)
        // expect(element.find({ testID: 'testID' })).toHaveStyle({ justifyContent: 'center', alignItems: 'center' });
        // const styles = element.find({ testID: 'logHistoryButton' }).prop('style');
        expect(
            element.findWhere((node) => {
              return node.props().testID == "testID";
            }).length
        ).toBeGreaterThan(1);
    });

    it('Calls componentDidMount when mounted', () => {
        const componentDidMount = jest.spyOn(EmojiPicker.prototype, 'componentDidMount');
        const wrapper = shallow(<EmojiPicker emojiList={[
                          '😩',
                          '😕',
                          '😴',
                          '🙂',
                          '🥰',
                          '😭',
                          '🤕',
                          '😬',
                          '😠',
                          '😂',
                        ]}/>);
        expect(componentDidMount).toHaveBeenCalled();
    });

    it('Testing Event', () => {
        const element = shallow(<EmojiPicker emojiList={[
                          '😩',
                          '😕',
                          '😴',
                          '🙂',
                          '🥰',
                          '😭',
                          '🤕',
                          '😬',
                          '😠',
                          '😂',
                        ]}/>);
    });
})
