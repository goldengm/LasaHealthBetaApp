import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDisplay16 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v485h485V0H0zm455 30v121.667H30V30h425zM303.333 303.333H30V181.667h273.333v121.666zM30 333.333h273.333V455H30V333.333zM333.333 455V181.667H455V455H333.333z" />
  </Svg>
);

export default SvgDisplay16;
