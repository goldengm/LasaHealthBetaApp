import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDice = (props) => (
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
    <Path d="M242.5 277.5c19.299 0 35-15.701 35-35s-15.701-35-35-35-35 15.701-35 35 15.701 35 35 35z" />
  </Svg>
);

export default SvgDice;
