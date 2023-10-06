import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFont = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 305 305"
    style={{
      enableBackground: "new 0 0 305 305",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v85h30V30h107.5v245h-55v30h140v-30h-55V30H275v55h30V0z" />
  </Svg>
);

export default SvgFont;
