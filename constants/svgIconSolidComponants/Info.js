import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgInfo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.615 0 0 114.616 0 256s114.615 256 256 256 256-114.616 256-256S397.385 0 256 0zm50.087 439.652H205.913V205.913h100.174v233.739zM256 172.522c-27.618 0-50.087-22.469-50.087-50.087 0-27.618 22.469-50.087 50.087-50.087 27.618 0 50.087 22.469 50.087 50.087 0 27.618-22.469 50.087-50.087 50.087z" />
    <Path d="M239.304 239.304h33.391V406.26h-33.391zM256 105.739c-9.206 0-16.696 7.49-16.696 16.696 0 9.206 7.49 16.696 16.696 16.696 9.206 0 16.696-7.49 16.696-16.696 0-9.206-7.49-16.696-16.696-16.696z" />
  </Svg>
);

export default SvgInfo;
