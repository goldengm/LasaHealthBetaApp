import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPlaceholder = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.999 511.999"
    style={{
      enableBackground: "new 0 0 511.999 511.999",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M405.961 62.116c-82.823-82.82-217.1-82.822-299.922 0-82.82 82.82-82.82 217.1 0 299.922L255.998 512 405.96 362.038c82.822-82.822 82.821-217.1.001-299.922zM302.863 258.94c-25.883 25.881-67.844 25.883-93.727 0-25.881-25.881-25.881-67.844 0-93.727 25.883-25.883 67.845-25.881 93.727 0 25.883 25.885 25.883 67.844 0 93.727z" />
  </Svg>
);

export default SvgPlaceholder;
