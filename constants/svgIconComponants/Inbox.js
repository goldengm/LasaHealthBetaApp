import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgInbox = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m313.106 207.273-21.212-21.212-34.394 34.394V65h-30v155.455l-34.394-34.393-21.212 21.212 70.606 70.607z" />
    <Path d="M385 315V0H100v315H30v170h425V315h-70zM130 30h225v285h-36.314l-20 70H186.314l-20-70H130V30zm295 425H60V345h83.686l20 70h157.629l20-70H425v110z" />
  </Svg>
);

export default SvgInbox;
