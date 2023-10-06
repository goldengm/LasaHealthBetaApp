import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgIndent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M153 132.5h302v30H153zM0 52.5h455v30H0zM0 372.5h455v30H0zM153 292.5h302v30H153zM153 212.5h302v30H153zM5 289.963 67.463 227.5 5 165.037z" />
  </Svg>
);

export default SvgIndent;
