import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDice = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v455h455V0H0zm227.5 262.5c-19.33 0-35-15.67-35-35s15.67-35 35-35 35 15.67 35 35-15.67 35-35 35z" />
  </Svg>
);

export default SvgDice;
