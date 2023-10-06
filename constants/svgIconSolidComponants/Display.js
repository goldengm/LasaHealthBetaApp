import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDisplay = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455.5 455.5"
    style={{
      enableBackground: "new 0 0 455.5 455.5",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M.5 0h395v395H.5z" />
    <Path d="M425.5 60.5V425H60v30.5h395v-395z" />
  </Svg>
);

export default SvgDisplay;
