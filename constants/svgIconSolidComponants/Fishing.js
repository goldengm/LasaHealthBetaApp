import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFishing = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M343.415 349.937v62.161h-37.463v-62.161c-94.656 2.821-168.585 26.778-168.585 55.917 0 31.036 83.864 56.195 187.317 56.195S512 436.89 512 405.854c0-29.139-73.929-53.097-168.585-55.917z" />
    <Path d="M324.683 12.488C157.029 12.488 7.982 181.204.351 393.366h74.916C81.534 217.952 186.603 77.027 305.951 63.514v286.422a631.065 631.065 0 0 1 37.464.002V53.945c3.875-4.399 6.244-10.158 6.244-16.481 0-13.795-11.182-24.976-24.976-24.976zM0 430.829h74.927v68.683H0z" />
  </Svg>
);

export default SvgFishing;
