import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDisplay1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455.5 455.5"
    style={{
      enableBackground: "new 0 0 455.5 455.5",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M60.5 60h395v395h-395z" />
    <Path d="M395 .5H0v395h30.5V30H395z" />
  </Svg>
);

export default SvgDisplay1;
