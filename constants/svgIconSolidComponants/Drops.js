import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDrops = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512.001 512.001"
    style={{
      enableBackground: "new 0 0 512.001 512.001",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M290.207 230.052 173.419 113.264 56.632 230.052c-64.5 64.5-64.5 169.074 0 233.574s169.074 64.5 233.574 0 64.501-169.074.001-233.574zM479.556 58.393 421.163 0 362.77 58.393c-32.251 32.251-32.251 84.536 0 116.787 32.251 32.251 84.536 32.249 116.787 0 32.25-32.251 32.25-84.535-.001-116.787z" />
  </Svg>
);

export default SvgDrops;
