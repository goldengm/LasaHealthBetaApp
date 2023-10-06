import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPaste = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 472 472"
    style={{
      enableBackground: "new 0 0 472 472",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M136 0h100v50H136z" />
    <Path d="M306 30h-40v50H106V30H66v332h70V110h170zM321 155v70h70z" />
    <Path d="M291 255V140H166v332h240V255z" />
  </Svg>
);

export default SvgPaste;
