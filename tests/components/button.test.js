import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { shallow } from "enzyme";
import Button from "../../components/Button";
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
  expect(Button).toBeTruthy();
  
  const element = shallow(
    <Button title="NewButton" 
        style={{
            ...styles.button,
            width: theme.SIZES.BASE * 2,
        }}
    />,
  );
  expect(element).toBeTruthy();
  expect(
    element.findWhere((node) => {
      return node.props().title == "NewButton";
    }).length
  ).toEqual(1);
});
