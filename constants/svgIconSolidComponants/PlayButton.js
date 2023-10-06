import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPlayButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M198.564 173.614v164.772L341.262 256z" />
    <Path d="M256 0C114.616 0 0 114.616 0 256s114.616 256 256 256 256-114.616 256-256S397.384 0 256 0zm-90.828 396.222V115.778L408.045 256 165.172 396.222z" />
  </Svg>
);

export default SvgPlayButton;
