import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBloodTest = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M380 127V0H250v127h-45V0H75v127H0v328h455V127h-75zm-80 0h30v199h-30V127zm-175 0h30v199h-30V127zm300 298H30V157h45v162.5c0 35.898 29.102 65 65 65 35.898 0 65-29.102 65-65V157h45v162.5c0 35.898 29.102 65 65 65 35.898 0 65-29.102 65-65V157h45v268z" />
  </Svg>
);

export default SvgBloodTest;
