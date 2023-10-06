import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPaste = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 497 497"
    style={{
      enableBackground: "new 0 0 497 497",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M333.5 143.787V25h-55V0h-160v25h-55v362h100v110h270V243.787l-100-100zm0 42.426L382.287 235H333.5v-48.787zM148.5 30h100v50h-100V30zm-55 327V55h25v55h160V55h25v80h-140v222h-70zm100 110V165h110v100h100v202h-210z" />
  </Svg>
);

export default SvgPaste;
