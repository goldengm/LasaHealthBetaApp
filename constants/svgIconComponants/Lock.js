import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M345 175v-72.5C345 45.981 299.019 0 242.5 0S140 45.981 140 102.5V175H70v310h345V175h-70zm-175-72.5c0-39.977 32.523-72.5 72.5-72.5S315 62.523 315 102.5V175H170v-72.5zM385 455H100V205h285v250z" />
  </Svg>
);

export default SvgLock;
