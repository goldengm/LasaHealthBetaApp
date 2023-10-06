import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgColumns = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 445 445"
    style={{
      enableBackground: "new 0 0 445 445",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 37.215v370.57h445V37.215H0zm30 70h177.5v270.57H30v-270.57zm385 270.57H237.5v-270.57H415v270.57z" />
  </Svg>
);

export default SvgColumns;
