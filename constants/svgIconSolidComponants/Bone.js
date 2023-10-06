import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBone = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M411.839 67.5H387.5V43.161C387.5 19.323 367.837 0 344 0s-43.5 19.324-43.5 43.161v36.933L80.093 300.5H43.161C19.324 300.5 0 320.163 0 344c-.001 23.836 19.323 43.5 43.16 43.5H67.5v24.338C67.5 435.677 87.163 455 111 455s43.5-19.324 43.5-43.161v-36.933L374.906 154.5h36.933C435.676 154.5 455 134.837 455 111s-19.323-43.5-43.161-43.5z" />
  </Svg>
);

export default SvgBone;
