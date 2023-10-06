import * as React from "react";
import Svg, { Circle } from "react-native-svg";

const SvgCircle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={227.5} cy={227.5} r={227.5} />
  </Svg>
);

export default SvgCircle;
