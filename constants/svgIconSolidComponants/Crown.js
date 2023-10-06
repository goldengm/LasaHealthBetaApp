import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgCrown = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m227.495 150-93.749 50-88.279-50 38.8 180h286.466l38.8-180-88.286 50zM87.5 360h280v55h-280z" />
    <Circle cx={40} cy={80} r={40} />
    <Circle cx={415} cy={80} r={40} />
    <Circle cx={227.5} cy={80} r={40} />
  </Svg>
);

export default SvgCrown;
