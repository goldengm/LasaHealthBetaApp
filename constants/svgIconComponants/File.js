import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 445 445"
    style={{
      enableBackground: "new 0 0 445 445",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M278.713 0H57.5v445h330V108.787L278.713 0zm8.787 51.213L336.287 100H287.5V51.213zM87.5 415V30h170v100h100v285h-270z" />
  </Svg>
);

export default SvgFile;
