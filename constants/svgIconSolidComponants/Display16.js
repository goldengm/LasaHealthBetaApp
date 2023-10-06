import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDisplay16 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0h455v131H0zM0 161h294v132H0zM324 161h131v294H324zM0 323h294v132H0z" />
  </Svg>
);

export default SvgDisplay16;
