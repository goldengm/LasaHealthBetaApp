import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDisplay1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M425 60V0H0v425h60v60h425V60h-60zM30 395V30h365v30H60v335H30zm425 60H90V90h365v365z" />
  </Svg>
);

export default SvgDisplay1;
