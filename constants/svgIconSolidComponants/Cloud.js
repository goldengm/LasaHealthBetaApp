import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCloud = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M426.667 256c0-94.257-76.41-170.667-170.667-170.667S85.333 161.743 85.333 256C38.206 256 0 294.206 0 341.333c0 47.128 38.206 85.333 85.333 85.333h341.333c47.128 0 85.333-38.206 85.333-85.333C512 294.206 473.794 256 426.667 256z" />
  </Svg>
);

export default SvgCloud;
