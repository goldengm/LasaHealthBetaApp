import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgBrush1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={242.5} cy={72.5} r={15} />
    <Path d="M360 182.5h-45v-110C315 32.523 282.477 0 242.5 0S170 32.523 170 72.5v110h-45c-30.327 0-55 24.673-55 55V485h345V237.5c0-30.327-24.673-55-55-55zm-235 30h75v-140c0-23.435 19.065-42.5 42.5-42.5S285 49.065 285 72.5v140h75c13.785 0 25 11.215 25 25v35H100v-35c0-13.785 11.215-25 25-25zM336.25 455v-85h-30v85H257.5v-85h-30v85h-48.75v-85h-30v85H100V302.5h285V455h-48.75z" />
  </Svg>
);

export default SvgBrush1;
