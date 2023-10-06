import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUpArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0 72.348 183.652h122.435V512h122.434V183.652h122.435z" />
  </Svg>
);

export default SvgUpArrow;
