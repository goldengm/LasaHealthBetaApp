import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSquare = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0h455v455H0z" />
  </Svg>
);

export default SvgSquare;
