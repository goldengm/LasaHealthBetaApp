import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgContrast = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 338 338"
    style={{
      enableBackground: "new 0 0 338 338",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M169 0h-15v.673C67.814 8.29 0 80.868 0 169s67.814 160.71 154 168.327V338h15c93.187 0 169-75.813 169-169S262.187 0 169 0zM30 169C30 97.423 84.384 38.316 154 30.812v276.377C84.384 299.684 30 240.577 30 169z" />
  </Svg>
);

export default SvgContrast;
