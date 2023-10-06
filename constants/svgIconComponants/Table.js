import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTable = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 445 445"
    style={{
      enableBackground: "new 0 0 445 445",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 37.215v370.57h445V37.215H0zm276.667 240.38H168.333v-70.19h108.334v70.19zm30-70.19H415v70.19H306.667v-70.19zm-30 100.19v70.19H168.333v-70.19h108.334zM30 207.405h108.333v70.19H30v-70.19zm138.333-30v-70.19h108.334v70.19H168.333zm-30-70.19v70.19H30v-70.19h108.333zM30 307.595h108.333v70.19H30v-70.19zm276.667 70.19v-70.19H415v70.19H306.667zM415 177.405H306.667v-70.19H415v70.19z" />
  </Svg>
);

export default SvgTable;
