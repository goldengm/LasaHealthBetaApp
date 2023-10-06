import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMonitor = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M512 416.744V23.814H0v392.93h190.512v35.721h-41.674v35.721h214.326v-35.721H321.49v-35.721H512zM35.721 59.535h440.558v250.046H35.721V59.535zm250.046 392.93h-59.535v-35.721h59.535v35.721zM35.721 381.023v-35.721h440.558v35.721H35.721z" />
    <Path d="M311.334 179.182 196.188 140.8l38.379 115.146 23.18-28.329 23.151 23.151 25.258-25.257-23.151-23.151z" />
  </Svg>
);

export default SvgMonitor;
