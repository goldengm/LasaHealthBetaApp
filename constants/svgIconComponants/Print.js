import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgPrint = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M142.5 372.5h200v30h-200zM142.5 302.5h200v30h-200z" />
    <Path d="M485 92.5h-77.5V0h-330v92.5H0v310h77.5V485h330v-82.5H485v-310zM107.5 30h270v62.5h-270V30zm270 425h-270V262.5h270V455zm77.5-82.5h-47.5v-140h-330v140H30v-250h425v250z" />
    <Circle cx={392.5} cy={177.5} r={15} />
  </Svg>
);

export default SvgPrint;
