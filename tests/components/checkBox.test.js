import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { shallow } from "enzyme";
import CheckBox from "../../components/CheckBox";
import { theme, styles } from "../../constants";
import {render, screen, fireEvent} from '@testing-library/react-native'

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

it("Testing Header instantiation", async () => {
  expect(CheckBox).toBeTruthy();

  const element = shallow(<CheckBox title='NewCheckBox' testID={'testID'}/>);
  expect(
    element.findWhere((node) => {
      return node.props().title == "NewCheckBox";
    }).length
  ).toEqual(1);

  const styles = element.find({ testID: 'testID' }).prop('containerStyle');
  expect(styles.paddingVertical).toEqual(0);
  expect(styles.marginVertical).toEqual(0);
  expect(styles.borderWidth).toEqual(0);
});
