import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSoap = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M242.5 415h30v40h-30zM137.5 345h30v39h-30zM83.5 0v83.285c71.451-17.839 110.159-8.326 147.59.899 36.054 8.886 70.109 17.281 136.648.043l3.762-.974V0h-288z" />
    <Path d="M223.91 113.313c-36.054-8.886-70.109-17.281-136.648-.043l-3.762.974V315h139v70h70v-70h79V114.217c-29.401 7.341-53.273 10.061-73.773 10.062-29.325 0-51.786-5.537-73.817-10.966z" />
  </Svg>
);

export default SvgSoap;
