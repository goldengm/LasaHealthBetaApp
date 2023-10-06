import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAsterisk = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m347.49 227 107.01-61.788-59.992-103.924L287.5 123.077V0h-120v123.077L60.492 61.288.499 165.212 107.51 227 .5 288.788l59.992 103.924L167.5 330.923V455h120V330.923l107.008 61.789 59.993-103.924z" />
  </Svg>
);

export default SvgAsterisk;
