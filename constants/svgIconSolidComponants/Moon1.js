import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMoon1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 370.087h512v33.391H0zM256 108.522c-98.354 0-178.087 79.733-178.087 178.087 0 19.437 3.125 38.142 8.881 55.652h338.412c5.757-17.51 8.881-36.215 8.881-55.652-98.354 0-178.087-79.733-178.087-178.087z" />
  </Svg>
);

export default SvgMoon1;
