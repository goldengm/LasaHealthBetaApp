import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDisplay3 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v485h485V0H0zm30 30h273.333v425H30V30zm425 425H333.333V30H455v425z" />
  </Svg>
);

export default SvgDisplay3;
