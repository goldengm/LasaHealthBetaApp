import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgScale = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 106h30V30h76V0H0zM379 0v30h76v76h30V0zM455 455h-76v30h106V379h-30zM30 379H0v106h106v-30H30z" />
  </Svg>
);

export default SvgScale;
