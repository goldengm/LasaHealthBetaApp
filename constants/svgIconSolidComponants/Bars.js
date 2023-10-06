import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBars = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 302 302"
    style={{
      enableBackground: "new 0 0 302 302",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 36h302v30H0zM0 236h302v30H0zM0 136h302v30H0z" />
  </Svg>
);

export default SvgBars;
