import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgImport = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 450 450"
    style={{
      enableBackground: "new 0 0 450 450",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 210h150v30H0zM365 32.5v70h70z" />
    <Path d="M335 132.5v-115H150V210h113.787l-34.393-34.394 21.212-21.212L321.213 225l-70.607 70.606-21.212-21.212L263.787 240H150v192.5h300v-300z" />
  </Svg>
);

export default SvgImport;
