import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgShare = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M512 253.001 295.204 36.204v144.388C132.168 180.592 0 312.76 0 475.796c59.893-109.171 178.724-165.462 295.204-151.033v145.034L512 253.001z" />
  </Svg>
);

export default SvgShare;
