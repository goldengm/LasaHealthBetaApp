import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHourglass = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M385 82.273V30h55V0H15v30h55v52.273c0 64.95 39.319 120.71 95.45 144.796v.864C109.319 252.018 70 307.777 70 372.727V425H15v30h425v-30h-55v-52.273c0-64.95-39.319-120.71-95.45-144.795v-.864C345.681 202.982 385 147.223 385 82.273z" />
  </Svg>
);

export default SvgHourglass;
