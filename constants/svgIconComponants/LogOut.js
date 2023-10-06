import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLogout = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M512 256 381.772 125.773v83.797H216.833v92.863h164.939v83.797L512 256zm-264.213 15.478V240.523h164.939v-40.021L468.224 256l-55.498 55.499v-40.021H247.787z" />
    <Path d="M340.499 163.137V70.273H0v371.453h340.499v-92.863H92.863V163.137h247.636zm-30.955 216.681v30.954H30.954V101.228h278.59v30.954H61.909v247.636h247.635z" />
  </Svg>
);

export default SvgLogout;
