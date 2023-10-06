import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCross = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M512 79.448 432.551 0 256 176.551 79.449 0 0 79.449 176.551 256 0 432.551 79.449 512 256 335.449 432.551 512 512 432.551 335.449 256 512 79.448zm-52.966 353.103-26.482 26.482L256 282.482 79.449 459.034l-26.482-26.482L229.518 256 52.966 79.449l26.482-26.482L256 229.518 432.551 52.966l26.482 26.482L282.482 256l176.552 176.551z" />
  </Svg>
);

export default SvgCross;
