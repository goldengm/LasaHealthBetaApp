import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUser = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 318.75 318.75"
    style={{
      enableBackground: "new 0 0 318.75 318.75",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M159.375 150c41.355 0 75-33.645 75-75s-33.645-75-75-75-75 33.645-75 75 33.645 75 75 75zm0-120c24.813 0 45 20.187 45 45s-20.187 45-45 45-45-20.187-45-45 20.187-45 45-45zM159.375 180c-68.236 0-123.75 55.514-123.75 123.75v15h247.5v-15c0-68.236-55.514-123.75-123.75-123.75zM66.824 288.75c7.202-44.588 45.962-78.75 92.551-78.75s85.35 34.162 92.551 78.75H66.824z" />
  </Svg>
);

export default SvgUser;
