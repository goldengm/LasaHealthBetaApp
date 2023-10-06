import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgColumns = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 415 415"
    style={{
      enableBackground: "new 0 0 415 415",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 29.715h415v55H0zM0 114.715h192.5v270.57H0zM222.5 114.715H415v270.57H222.5z" />
  </Svg>
);

export default SvgColumns;
