import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDownArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M317.217 328.348V0H194.783v328.348H72.348L256 512l183.652-183.652z" />
  </Svg>
);

export default SvgDownArrow;
