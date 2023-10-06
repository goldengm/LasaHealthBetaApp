import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201Text = (props) => (
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
    <Path d="M132.129 140.387v90.839h49.548v-41.291h49.549v148.646h-41.291v49.548h132.13v-49.548h-41.291V189.935h49.549v41.291h49.548v-90.839z" />
  </Svg>
);

export default Svg201Text;
