import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDisplay = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M425 60V0H0v425h60v60h425V60h-60zM30 30h365v365H30V30zm425 425H90v-30h335V90h30v365z" />
  </Svg>
);

export default SvgDisplay;
