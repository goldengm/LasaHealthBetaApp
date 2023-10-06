import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201Star = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v512h512V0H0zm462.452 462.452H49.548V49.548h412.903v412.904z" />
    <Path d="m360.197 232.607-71.999-10.462L256 156.903l-32.198 65.242-71.999 10.462 52.099 50.783-12.298 71.707L256 321.242l64.396 33.855-12.297-71.707z" />
  </Svg>
);

export default Svg201Star;
