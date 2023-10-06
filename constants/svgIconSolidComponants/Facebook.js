import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFacebook = (props) => (
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
      d="M0 0v455h455V0H0zm301.004 125.217H265.44c-7.044 0-14.153 7.28-14.153 12.696v36.264h49.647c-1.999 27.807-6.103 53.235-6.103 53.235h-43.798V385h-65.266V227.395h-31.771v-53.029h31.771V131.01c0-7.928-1.606-61.009 66.872-61.009h48.366v55.216z"
    />
  </Svg>
);

export default SvgFacebook;
