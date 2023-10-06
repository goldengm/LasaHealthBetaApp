import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPlus = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M289.391 222.609V0h-66.782v222.609H0v66.782h222.609V512h66.782V289.391H512v-66.782z" />
  </Svg>
);

export default SvgPlus;
