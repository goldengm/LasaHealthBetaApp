import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCopy = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 442 442"
    style={{
      enableBackground: "new 0 0 442 442",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M291 0H51v332h70V80h170zM306 125v70h70z" />
    <Path d="M276 225V110H151v332h240V225z" />
  </Svg>
);

export default SvgCopy;
