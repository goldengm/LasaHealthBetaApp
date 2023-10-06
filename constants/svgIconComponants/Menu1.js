import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgMenu1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 377 377"
    style={{
      enableBackground: "new 0 0 377 377",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={15} cy={88.5} r={15} />
    <Path d="M75 73.5h302v30H75z" />
    <Circle cx={15} cy={288.5} r={15} />
    <Path d="M75 273.5h302v30H75z" />
    <Circle cx={15} cy={188.5} r={15} />
    <Path d="M75 173.5h302v30H75z" />
  </Svg>
);

export default SvgMenu1;
