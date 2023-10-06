import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPine = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512.001 512.001"
    style={{
      enableBackground: "new 0 0 512.001 512.001",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M367.917 298.167h49.643l-76.753-109.841h46.788L256 0 124.404 188.326h46.788L94.44 298.167h49.643L70.186 403.922h132.293v108.079h95.632V403.922h143.704l-73.898-105.755zM256 58.297l67.527 96.637H188.474L256 58.297zm-44.071 130.029h88.143l53.418 76.449H158.51l53.419-76.449zm52.789 290.282H235.87v-74.687h28.847v74.687zM134.255 370.53l50.565-72.363h142.363l50.563 72.363H134.255z" />
  </Svg>
);

export default SvgPine;
