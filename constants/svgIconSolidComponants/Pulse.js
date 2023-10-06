import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPulse = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485.5 485.5"
    style={{
      enableBackground: "new 0 0 485.5 485.5",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M450.5 207.75c-13.934 0-25.988 8.186-31.616 20H333.26l-59.937 159.385-140.647-374L51.971 227.75H0v30h72.74l59.937-159.385 140.647 374 80.705-214.615h64.855c5.628 11.814 17.682 20 31.616 20 19.299 0 35-15.701 35-35s-15.701-35-35-35z" />
  </Svg>
);

export default SvgPulse;
