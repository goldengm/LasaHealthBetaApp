import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPowerButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 458.621 458.621"
    style={{
      enableBackground: "new 0 0 458.621 458.621",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M214.311 0h30v199.088h-30z" />
    <Path d="M305.42 100.692 293.2 128.09c56.585 25.237 93.148 81.561 93.148 143.492 0 86.591-70.447 157.039-157.039 157.039S72.272 358.174 72.272 271.583c0-61.931 36.563-118.255 93.148-143.492l-12.22-27.398c-67.387 30.054-110.929 97.132-110.929 170.89 0 103.133 83.905 187.039 187.039 187.039s187.039-83.905 187.039-187.039c0-73.758-43.542-140.836-110.929-170.891z" />
  </Svg>
);

export default SvgPowerButton;
