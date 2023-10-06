import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCheck = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M464.778 51.369 149.961 366.186 47.222 263.447 0 310.669l149.961 149.962L512 98.592z" />
  </Svg>
);

export default SvgCheck;
