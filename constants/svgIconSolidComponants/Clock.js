import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgClock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.614 0 0 114.614 0 256s114.614 256 256 256 256-114.614 256-256S397.386 0 256 0zm111.807 399.75L233.412 265.356V75.294h45.177v171.35l121.163 121.16-31.945 31.946z" />
  </Svg>
);

export default SvgClock;
