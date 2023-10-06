import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201Row = (props) => (
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
    <Path d="M99.097 305.548h313.806v66.065H99.097zM99.097 140.387h313.806v66.065H99.097z" />
  </Svg>
);

export default Svg201Row;
