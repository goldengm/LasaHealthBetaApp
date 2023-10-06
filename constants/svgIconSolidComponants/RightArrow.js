import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRightArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M512 256 328.348 72.348v122.435H0v122.434h328.348v122.435z" />
  </Svg>
);

export default SvgRightArrow;
