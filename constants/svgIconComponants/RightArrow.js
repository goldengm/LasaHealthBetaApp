import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRightArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M512 255.999 304.385 48.385v135.388H0v144.454h304.385v135.389L512 255.999zM30.954 297.272v-82.544H335.34v-91.612l132.884 132.883L335.34 388.884v-91.612H30.954z" />
  </Svg>
);

export default SvgRightArrow;
