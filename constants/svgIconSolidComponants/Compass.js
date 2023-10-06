import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCompass = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.842 0 0 114.84 0 256s114.842 256 256 256 256-114.84 256-256S397.158 0 256 0zm-74.323 338.581L198.194 256l-16.516-82.581L363.355 256l-181.678 82.581z" />
  </Svg>
);

export default SvgCompass;
