import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 470 470"
    style={{
      enableBackground: "new 0 0 470 470",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M162.5 102.5c0-39.977 32.523-72.5 72.5-72.5s72.5 32.523 72.5 72.5V160h30v-57.5C337.5 45.981 291.519 0 235 0S132.5 45.981 132.5 102.5V160h30v-57.5zM77.5 190h315v280h-315z" />
  </Svg>
);

export default SvgLock;
