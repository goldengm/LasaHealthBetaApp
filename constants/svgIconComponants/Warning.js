import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgWarning = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 34.297 0 477.703h512L256 34.297zm0 60.004 204.036 353.4H51.965L256 94.301z" />
    <Circle cx={256} cy={397.7} r={15.001} />
    <Path d="M240.998 192.685H271v160.012h-30.002z" />
  </Svg>
);

export default SvgWarning;
