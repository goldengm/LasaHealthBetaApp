import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMoon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.616 0 0 114.616 0 256s114.616 256 256 256 256-114.616 256-256C370.616 256 256 141.384 256 0z" />
  </Svg>
);

export default SvgMoon;
