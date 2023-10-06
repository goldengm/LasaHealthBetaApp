import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDelicious = (props) => (
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
      d="M0 0v455h455V0H0zm385 235.009H235.009V385H70V219.991h149.991V70H385v165.009z"
    />
  </Svg>
);

export default SvgDelicious;
