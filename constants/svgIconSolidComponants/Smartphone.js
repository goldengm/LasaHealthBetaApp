import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSmartphone = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M87.5 85h280v235h-280zM87.5 0h280v55h-280zM87.5 455h280V350h-280v105zm100-67.5h80v30h-80v-30z" />
  </Svg>
);

export default SvgSmartphone;
