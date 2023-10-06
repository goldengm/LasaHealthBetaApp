import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPen = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M302.741 115H152.259L90.728 234.237C134.389 296.81 160 372.913 160 455h52.5V280.214c-8.964-5.188-15-14.874-15-25.977 0-16.569 13.431-30 30-30s30 13.431 30 30c0 11.102-6.036 20.789-15 25.977V455H295c0-82.087 25.611-158.19 69.272-220.763L302.741 115zM301 85l34-85H120l34 85z" />
  </Svg>
);

export default SvgPen;
