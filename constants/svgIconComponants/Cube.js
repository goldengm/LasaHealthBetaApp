import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCube = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 490.452 490.452"
    style={{
      enableBackground: "new 0 0 490.452 490.452",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M245.226 0 43.836 126.814v236.823l201.39 126.814 201.39-126.814V126.814L245.226 0zm158.239 135.095-158.239 99.643-158.239-99.643 158.239-99.643 158.239 99.643zM73.836 162.267l156.39 98.477v184.81l-156.39-98.478V162.267zm186.39 283.288v-184.81l156.39-98.478v184.81l-156.39 98.478z" />
  </Svg>
);

export default SvgCube;
