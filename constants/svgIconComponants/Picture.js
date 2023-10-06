import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPicture = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M274.405 175c26.191 0 47.5-21.309 47.5-47.5S300.597 80 274.405 80s-47.5 21.309-47.5 47.5 21.309 47.5 47.5 47.5zM405 308.179l-58.642-61.875-71.117 41.368-99.004-70.75L80 318.465V405h325z" />
    <Path d="M0 0v485h485V0H0zm455 455H30V30h425v425z" />
  </Svg>
);

export default SvgPicture;
