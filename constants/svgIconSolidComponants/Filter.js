import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFilter = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M222.949 302.964V512l66.102-44.067V302.964zM2.612 0h506.776v49.576H2.612zM19.137 82.627l187.287 187.286h99.152L492.863 82.627z" />
  </Svg>
);

export default SvgFilter;
