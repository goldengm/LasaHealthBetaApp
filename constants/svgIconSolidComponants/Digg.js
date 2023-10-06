import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDigg = (props) => (
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
      d="M241.496 199.498H262.5v56.004h-21.004zM332.5 199.498h24.509v56.004H332.5zM101.496 199.498h24.509v56.004h-24.509z"
    />
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm157.5 283.493H70V171.507h56.004v-56.004H157.5v167.99zm38.504 0h-31.496V171.507h31.496v111.986zm0-136.495h-31.496v-31.495h31.496v31.495zm97.992 192.5H210v-31.496h52.5v-24.509H210V171.507h83.996v167.991zm91.004 0h-83.996v-31.496h56.004v-24.509h-56.004V171.507H385v167.991z"
    />
  </Svg>
);

export default SvgDigg;
