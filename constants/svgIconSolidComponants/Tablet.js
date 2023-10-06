import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTablet = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M122.435 66.783h267.13v311.652h-267.13z" />
    <Path d="M55.652 0v512h400.696V0H55.652zm217.044 478.609h-33.391v-33.391h33.391v33.391zm150.261-66.783H89.043V33.391h333.913v378.435z" />
  </Svg>
);

export default SvgTablet;
