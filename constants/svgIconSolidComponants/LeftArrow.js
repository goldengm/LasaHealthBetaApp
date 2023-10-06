import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLeftArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M183.652 194.783V72.348L0 256l183.652 183.652V317.217H512V194.783z" />
  </Svg>
);

export default SvgLeftArrow;
