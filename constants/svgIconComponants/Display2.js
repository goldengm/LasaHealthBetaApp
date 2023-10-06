import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDisplay2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v485h485V0H0zm30 30h121.667v425H30V30zm425 425H181.667V30H455v425z" />
  </Svg>
);

export default SvgDisplay2;
