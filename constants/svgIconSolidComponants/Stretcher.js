import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgStretcher = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={52} cy={382.26} r={30.351} />
    <Path d="M369 112.389v70h20v78H67v-78h20v-70H0v70h37v141.408c4.798-1.231 9.823-1.888 15-1.888s10.202.657 15 1.888v-33.408h322v33.408c4.798-1.231 9.823-1.888 15-1.888s10.202.657 15 1.888V182.389h36v-70h-86z" />
    <Circle cx={404} cy={382.26} r={30.351} />
    <Path d="M117 112.389h222v70H117zM117 72.389h222v40h30v-70H87v70h30z" />
  </Svg>
);

export default SvgStretcher;
