import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgMobilePhone2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 490 490"
    style={{
      enableBackground: "new 0 0 490 490",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={305} cy={202.5} r={15} />
    <Circle cx={185} cy={202.5} r={15} />
    <Circle cx={245} cy={202.5} r={15} />
    <Path d="M120 55V0H90v490h310V55H120zm250 30v40H120V85h250zm0 70v95H120v-95h250zM120 460V280h250v180H120z" />
    <Path d="M230 320h30v30h-30zM300 320h30v30h-30zM160 390h30v30h-30zM230 390h30v30h-30zM160 320h30v30h-30zM300 390h30v30h-30z" />
  </Svg>
);

export default SvgMobilePhone2;
