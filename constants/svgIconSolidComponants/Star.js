import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgStar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 425 425"
    style={{
      enableBackground: "new 0 0 425 425",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m425 164.791-140.753-29.705L212.5 10.403l-71.747 124.683L0 164.791l96.411 106.764-15.243 143.042L212.5 355.898l131.332 58.699-15.243-143.042z" />
  </Svg>
);

export default SvgStar;
