import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDevices = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M491.52 373.76V199.68h-20.48V56.32H30.72v184.32H0v215.04h133.12v-61.44h20.48v15.36c0 25.409 20.67 46.08 46.08 46.08h266.24c25.409 0 46.08-20.671 46.08-46.08v-35.84h-20.48zm-389.12 51.2H30.72v-153.6h71.68v153.6zm71.68-61.44h-40.96V332.8h40.96v30.72zm0-61.44h-40.96v-61.44H61.44V87.04h378.88v112.64H174.08v102.4zM460.8 230.4v143.36h-256V230.4h256zm20.48 179.2c0 8.469-6.889 15.36-15.36 15.36H199.68c-8.469 0-15.36-6.891-15.36-15.36v-5.12h296.96v5.12z" />
  </Svg>
);

export default SvgDevices;
