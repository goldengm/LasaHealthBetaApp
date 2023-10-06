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
    <Path d="M328.227 304.385V0H183.773v304.385H48.385L256 512l207.615-207.615H328.227zM123.116 335.34h91.612V30.954h82.545V335.34h91.612L256 468.224 123.116 335.34z" />
  </Svg>
);

export default SvgDownArrow;
