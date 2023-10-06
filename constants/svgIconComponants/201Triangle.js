import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201Triangle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.84 0 0 114.842 0 256s114.84 256 256 256 256-114.842 256-256S397.16 0 256 0zm0 462.452c-113.837 0-206.452-92.614-206.452-206.452S142.163 49.548 256 49.548 462.452 142.163 462.452 256 369.837 462.452 256 462.452z" />
    <Path d="M256.01 165.161 135.604 285.509h240.784z" />
  </Svg>
);

export default Svg201Triangle;
