import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPause = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M172.522 161.391h33.391v189.217h-33.391z" />
    <Path d="M256 0C114.615 0 0 114.616 0 256s114.615 256 256 256 256-114.616 256-256S397.385 0 256 0zm-16.696 384H139.13V128h100.174v256zm133.566 0H272.696V128H372.87v256z" />
    <Path d="M306.087 161.391h33.391v189.217h-33.391z" />
  </Svg>
);

export default SvgPause;
