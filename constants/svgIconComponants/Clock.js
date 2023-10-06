import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgClock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M242.5 485c-64.774 0-125.671-25.225-171.474-71.026C25.225 368.171 0 307.274 0 242.5S25.225 116.829 71.026 71.026C116.829 25.225 177.726 0 242.5 0s125.671 25.225 171.474 71.026C459.775 116.829 485 177.726 485 242.5s-25.225 125.671-71.026 171.474C368.171 459.775 307.274 485 242.5 485zm0-455C125.327 30 30 125.327 30 242.5S125.327 455 242.5 455 455 359.673 455 242.5 359.673 30 242.5 30z" />
    <Path d="M257.5 257.244H85.003v-30H227.5V85h30z" />
  </Svg>
);

export default SvgClock;
