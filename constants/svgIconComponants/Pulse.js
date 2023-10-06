import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPulse = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M450 207.5c-13.934 0-25.988 8.186-31.616 20H332.76l-59.937 159.385-140.647-374L51.471 227.5H0v30h72.24l59.937-159.385 140.647 374L353.529 257.5h64.855c5.628 11.814 17.682 20 31.616 20 19.299 0 35-15.701 35-35s-15.701-35-35-35z" />
  </Svg>
);

export default SvgPulse;
