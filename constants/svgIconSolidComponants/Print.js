import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPrint = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M77.5 7.5h300V70h-300zM92.5 447.5h270V255h-270v192.5zm35-152.5h200v30h-200v-30zm0 70h200v30h-200v-30z" />
    <Path d="M0 100v280h62.5V225h330v155H455V100H0zm377.5 75c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15s15 6.716 15 15c0 8.284-6.716 15-15 15z" />
  </Svg>
);

export default SvgPrint;
