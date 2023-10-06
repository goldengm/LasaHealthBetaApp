import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNext = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M306.087 161.391v89.337l-133.565-77.114v164.773l133.565-77.113v89.335h33.391V161.391z" />
    <Path d="M256 0C114.615 0 0 114.616 0 256s114.615 256 256 256 256-114.616 256-256S397.385 0 256 0zm116.87 384H272.696v-64.892L139.13 396.221V115.778l133.565 77.114V128H372.87v256z" />
  </Svg>
);

export default SvgNext;
