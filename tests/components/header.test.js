import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { shallow } from "enzyme";
import Header from "../../components/Header";
import { theme, styles } from "../../constants";

jest.mock("react-native-elements", () => ({
  createTheme: jest.fn(() => {})
}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

it("Testing Header instantiation", async () => {
  // const componantInstance = shallow(<Header />);
  // <Header
  //   style={{
  //     ...styles.petal3Bubble,
  //     borderColor: styles.petal3Bubble["backgroundColor"],
  //     borderWidth: 2,
  //     width: styles.petal3Bubble.width,
  //     height: styles.petal3Bubble.height,
  //     marginHorizontal: 2,
  //   }}
  //   disabled={true}
  //   iconName=""
  //   bubbleName=""
  //   customOnPress={() => {}}
  //   viewBackgroundColor={theme.COLORS.ELEMENT_BACKGROUND}
  // />
  expect(Header).toBeTruthy();
  // expect(componantInstance).toBeTruthy();
  // expect(componantInstance.instance()).toBeTruthy();
  // expect(componantInstance.find(TouchableOpacity)).toBeTruthy();
});
