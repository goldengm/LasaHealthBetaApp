import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMinus1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v485h485V0H0zm455 455H30V30h425v425z" />
    <Path d="M387.914 290.467v-95.935H97.007l.504 95.935h290.403zm-30-65.934v35.935h-230.56l-.188-35.935h230.748z" />
  </Svg>
);

export default SvgMinus1;
