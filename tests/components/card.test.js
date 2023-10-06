import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { shallow } from "enzyme";
import Card from "../../components/Card";
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
  expect(Card).toBeTruthy();
  
});
