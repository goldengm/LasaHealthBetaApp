import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgForrst = (props) => (
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
      d="M0 0v455h455V0H0zm309.711 385v-.564h-68.478v-49.542l54.565-27.361-6.409-12.972-48.156 24.115v-18.1l32.008-16.918-7.162-13.16-24.846 13.108v-31.907h-34.37v50.229l-25.104-17.141-8.137 12.049 33.241 22.798v64.802H96.224L227.373 70l131.403 315h-49.065z"
    />
  </Svg>
);

export default SvgForrst;
