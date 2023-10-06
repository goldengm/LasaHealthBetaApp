import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgList = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 377 377"
    style={{
      enableBackground: "new 0 0 377 377",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={15} cy={108.5} r={15} />
    <Circle cx={15} cy={28.5} r={15} />
    <Circle cx={15} cy={348.5} r={15} />
    <Circle cx={15} cy={268.5} r={15} />
    <Circle cx={15} cy={188.5} r={15} />
    <Path d="M75 93.5h302v30H75zM75 13.5h302v30H75zM75 333.5h302v30H75zM75 253.5h302v30H75zM75 173.5h302v30H75z" />
  </Svg>
);

export default SvgList;
