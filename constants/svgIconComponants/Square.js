import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSquare = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v485h485V0H0zm455 455H30V30h425v425z" />
  </Svg>
);

export default SvgSquare;
