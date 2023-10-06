import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEnvelope = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M332.644 256 512 411.962V100.038zM0 100.038v311.924L179.356 256zM25.444 77.913 204.8 233.875l1.644-1.429 10.192 11.721L256 278.397l39.364-34.23 10.192-11.721 1.644 1.429L486.556 77.913z" />
    <Path d="M307.2 278.125 256 322.647l-51.2-44.522L25.444 434.087h461.112z" />
  </Svg>
);

export default SvgEnvelope;
