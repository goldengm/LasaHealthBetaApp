import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLightBolt = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M426.667 213.333H284.444V0L85.333 298.667h142.223V512z" />
  </Svg>
);

export default SvgLightBolt;
