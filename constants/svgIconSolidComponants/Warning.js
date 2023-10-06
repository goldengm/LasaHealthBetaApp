import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgWarning = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 34.297 0 477.703h512L256 34.297zm0 387.753c-9.22 0-16.696-7.475-16.696-16.696s7.475-16.696 16.696-16.696c9.22 0 16.696 7.475 16.696 16.696S265.22 422.05 256 422.05zm-16.696-77.913V177.181h33.391v166.956h-33.391z" />
  </Svg>
);

export default SvgWarning;
