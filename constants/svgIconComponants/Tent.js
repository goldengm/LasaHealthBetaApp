import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M471.525 459.35 275.4 128.38l54.575-92.098-28.727-17.023-45.255 76.37-45.255-76.37-28.727 17.023 54.575 92.098L40.461 459.35H0v33.391h512V459.35h-40.475zm-181.005 0H221.482v-53.626c0-19.033 15.485-34.518 34.519-34.518s34.519 15.485 34.519 34.518v53.626zm33.39 0v-53.626c0-37.445-30.464-67.909-67.91-67.909s-67.91 30.464-67.91 67.909v53.626H79.275l176.718-298.221L432.712 459.35H323.91z" />
  </Svg>
);

export default SvgTent;
