import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFile1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 415 415"
    style={{
      enableBackground: "new 0 0 415 415",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M272.5 15v70h70z" />
    <Path d="M242.5 115V0h-185v415h300V115h-115zm65 232.5h-200v-30h200v30zm0-70h-200v-30h200v30zm0-70h-200v-30h200v30z" />
  </Svg>
);

export default SvgFile1;
