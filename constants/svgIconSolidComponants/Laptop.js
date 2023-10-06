import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLaptop = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 445.217h512v50.087H0zM473.043 311.652H38.957L5.565 411.826h500.87l-33.392-100.174zm-183.652 66.783h-66.783v-33.391h66.783v33.391zM44.522 16.696h422.957v261.565H44.522z" />
  </Svg>
);

export default SvgLaptop;
