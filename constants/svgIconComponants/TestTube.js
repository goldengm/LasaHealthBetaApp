import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTestTube = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M165.601 0v88.582h15.827v348.846C181.428 478.547 214.881 512 256 512s74.572-33.453 74.572-74.572V88.582h15.827V0H165.601zm134.554 437.428c0 24.346-19.809 44.155-44.155 44.155-24.347 0-44.155-19.808-44.155-44.155v-30.677h61.898v-30.417h-61.898v-20.278h88.309v81.372zm0-111.79h-88.309V305.36h61.898v-30.417h-61.898v-20.278h61.898v-30.417h-61.898V88.582h88.309v237.056zm15.827-267.473H196.018V30.417h119.963v27.748z" />
  </Svg>
);

export default SvgTestTube;
