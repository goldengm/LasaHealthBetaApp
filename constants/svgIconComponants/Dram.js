import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDram = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 440 440"
    style={{
      enableBackground: "new 0 0 440 440",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M351.33 231.808v-30h-35v-87.932C316.33 51.084 265.266 0 202.5 0S88.67 51.084 88.67 113.876h30C118.67 67.627 156.276 30 202.5 30s83.83 37.627 83.83 83.876v87.932H202.5v30h83.83v40H202.5v30h83.83V440h30V301.808h35v-30h-35v-40h35z" />
  </Svg>
);

export default SvgDram;
