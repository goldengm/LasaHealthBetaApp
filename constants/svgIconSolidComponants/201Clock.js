import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201Clock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm109.714 301.714H210.286V146.286h54.857v100.571h100.571v54.857z" />
  </Svg>
);

export default Svg201Clock;
