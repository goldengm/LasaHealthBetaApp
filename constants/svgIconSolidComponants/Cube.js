import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCube = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 445.555 445.555"
    style={{
      enableBackground: "new 0 0 445.555 445.555",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M237.777 243.019v202.536l171.389-107.924.001-202.536zM222.777 0 50.463 108.506l172.314 108.506 172.315-108.506zM36.388 337.631l171.389 107.924V243.019L36.388 135.095z" />
  </Svg>
);

export default SvgCube;
