import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTestTube = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.999 511.999"
    style={{
      enableBackground: "new 0 0 511.999 511.999",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M165.601 0v58.165h180.797V0zM300.154 88.582H181.428v135.665h92.315v30.418h-92.315v20.278h92.315v30.417h-92.315v20.278h149.143V88.582zM181.428 356.055v20.278h92.315v30.417h-92.315v30.677c0 41.119 33.453 74.572 74.572 74.572s74.572-33.453 74.572-74.572v-81.372H181.428z" />
  </Svg>
);

export default SvgTestTube;
