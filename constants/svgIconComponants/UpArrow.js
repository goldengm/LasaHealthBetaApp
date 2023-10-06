import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUpArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0 48.385 207.615h135.389V512h144.454V207.615h135.388L256 0zm41.273 176.66v304.385h-82.545V176.66h-91.612L256 43.777 388.885 176.66h-91.612z" />
  </Svg>
);

export default SvgUpArrow;
