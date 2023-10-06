import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgStop = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.615 0 0 114.616 0 256s114.615 256 256 256 256-114.616 256-256S397.385 0 256 0zm128 384H128V128h256v256z" />
    <Path d="M161.391 161.391h189.217v189.217H161.391z" />
  </Svg>
);

export default SvgStop;
