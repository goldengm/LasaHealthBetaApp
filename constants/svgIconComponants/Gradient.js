import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGradient = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m444.082 193.31-47.587-47.61v31.933H67.918v31.347h328.577v31.929z" />
    <Path d="M512 94.041H0v198.531h30.079L0 322.651v95.308h114.939v-95.308L84.86 292.572h342.281l-30.079 30.079v95.308H512v-95.308l-30.079-30.079H512V94.041zM83.592 386.612H31.347v-50.977l26.122-26.122 26.122 26.122v50.977zm397.061 0h-52.245v-50.977l26.122-26.122 26.122 26.122v50.977zm0-125.388H31.347V125.388h449.306v135.836z" />
  </Svg>
);

export default SvgGradient;
