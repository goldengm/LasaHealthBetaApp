import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTablet = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M52.245 0v512h407.51V0H52.245zm376.163 480.653H83.592V31.347h344.816v449.306z" />
    <Path d="M114.939 62.694v323.918h282.122V62.694H114.939zm250.775 292.571H146.286V94.041h219.429v261.224zM240.327 417.959h31.347v31.347h-31.347z" />
  </Svg>
);

export default SvgTablet;
