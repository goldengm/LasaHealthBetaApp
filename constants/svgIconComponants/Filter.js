import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFilter = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M8.959 0v81.89l201.666 201.666V512l90.75-60.5V283.556L503.041 81.89V0H8.959zm262.166 435.31-30.25 20.167V292.416h30.25V435.31zm8.86-173.144h-47.969L60.6 90.75h390.802L279.985 262.166zM472.791 60.5H39.209V30.25h433.582V60.5z" />
  </Svg>
);

export default SvgFilter;
