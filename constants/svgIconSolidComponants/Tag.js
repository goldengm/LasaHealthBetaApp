import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M275.888 0 0 275.888 236.112 512 512 236.112V0H275.888zm141.667 141.667c-13.04 13.04-34.183 13.04-47.223 0s-13.04-34.183 0-47.223 34.183-13.04 47.223 0c13.04 13.042 13.04 34.183 0 47.223z" />
  </Svg>
);

export default SvgTag;
