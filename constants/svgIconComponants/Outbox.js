import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgOutbox = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M227.5 131.213v155.455h30V131.213l34.394 34.393 21.212-21.212L242.5 73.787l-70.606 70.607 21.212 21.212z" />
    <Path d="M385 315V0H100v315H30v170h425V315h-70zM130 30h225v285h-36.314l-20 70H186.314l-20-70H130V30zm295 425H60V345h83.686l20 70h157.629l20-70H425v110z" />
  </Svg>
);

export default SvgOutbox;
