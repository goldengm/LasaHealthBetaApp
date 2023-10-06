import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPrevious = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.615 0 0 114.616 0 256s114.615 256 256 256 256-114.616 256-256S397.384 0 256 0zm116.87 396.222-133.565-77.114V384H139.13V128h100.174v64.892l133.565-77.114v280.444z" />
    <Path d="M205.913 250.726v-89.335h-33.391v189.218h33.391v-89.337l133.565 77.114V173.613z" />
  </Svg>
);

export default SvgPrevious;
