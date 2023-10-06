import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgShorts = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 45.166v421.668h215.643V355.898h80.715v110.936H512V45.166H0zm33.391 114.216h88.917c-7.182 45.611-43.305 81.734-88.917 88.917v-88.917zm205.913 163.125h-57.052v110.936H33.391V282c64.048-7.629 114.987-58.568 122.616-122.617h83.297v163.124zm0-196.516H33.391V78.557h205.913v47.434zm239.305 307.452H329.748V322.507h-57.052V159.382h83.297C363.621 223.431 414.561 274.37 478.609 282v151.443zm0-185.144c-45.611-7.182-81.733-43.305-88.917-88.917h88.917v88.917zm0-122.308H272.696V78.557h205.913v47.434z" />
  </Svg>
);

export default SvgShorts;
