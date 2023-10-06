import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLock2 = (props) => (
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
    <Path d="M227.5 338.047v53.568h30v-53.569c11.814-5.628 20-17.682 20-31.616 0-19.299-15.701-35-35-35s-35 15.701-35 35c0 13.935 8.186 25.99 20 31.617z" />
  </Svg>
);

export default SvgLock2;
