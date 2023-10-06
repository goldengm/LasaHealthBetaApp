import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M351.771 140 133.229 30.73V0h-30v455h30V249.27L351.771 140zm-67.083 0-151.459 75.73V64.27L284.688 140z" />
  </Svg>
);

export default SvgFlag;
