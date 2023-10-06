import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgSun = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512.001 512.001"
    style={{
      enableBackground: "new 0 0 512.001 512.001",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={256.001} cy={256.001} r={122.435} />
    <Path d="M239.305 0h33.391v89.044h-33.391zM63.175 86.785l23.611-23.611 62.962 62.962-23.61 23.61zM.001 239.305h89.044v33.391H.001zM63.175 425.208l62.963-62.963 23.61 23.611-62.962 62.963zM239.305 422.957h33.391v89.044h-33.391zM362.236 385.856l23.61-23.611 62.963 62.962-23.611 23.611zM422.958 239.305h89.043v33.391h-89.043zM362.236 126.135l62.962-62.962 23.61 23.611-62.961 62.962z" />
  </Svg>
);

export default SvgSun;
