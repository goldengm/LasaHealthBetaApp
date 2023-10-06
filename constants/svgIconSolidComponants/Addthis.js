import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAddthis = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm385 272.506H272.506V385h-90.012V272.506H70v-90.012h112.494V70h90.012v112.494H385v90.012z"
    />
  </Svg>
);

export default SvgAddthis;
