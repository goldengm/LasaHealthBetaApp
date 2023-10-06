import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201PieChart = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 231.226h231.226V0C103.523 0 0 103.523 0 231.226z" />
    <Path d="M280.774 49.548v231.226H49.548C49.548 408.477 153.071 512 280.774 512S512 408.477 512 280.774 408.477 49.548 280.774 49.548z" />
  </Svg>
);

export default Svg201PieChart;
