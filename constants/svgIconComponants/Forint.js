import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgForint = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 445 445"
    style={{
      enableBackground: "new 0 0 445 445",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M88.897 35h202.644V5H58.897v440h30V247.431h162.685v-30H88.897z" />
    <Path d="M386.103 141.215v-30H346.13V0h-30v111.215h-39.978v30h39.978v242.919c0 30.804 25.062 55.865 55.865 55.865h14.107v-30h-14.107c-14.262 0-25.865-11.603-25.865-25.865V141.215h39.973z" />
  </Svg>
);

export default SvgForint;
