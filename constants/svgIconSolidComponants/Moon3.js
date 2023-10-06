import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMoon3 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.842 0 0 114.84 0 256s114.842 256 256 256c141.16 0 256-114.84 256-256S397.16 0 256 0zm0 462.452c-113.837 0-206.452-92.614-206.452-206.452S142.163 49.548 256 49.548v412.904z" />
  </Svg>
);

export default SvgMoon3;
