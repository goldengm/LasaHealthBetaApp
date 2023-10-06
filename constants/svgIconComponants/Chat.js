import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChat = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M10.623 0v390.6h80.123V512l121.4-121.4h289.232V0H10.623zm460.708 360.554H199.7l-78.908 78.908v-78.908H40.669V30.046h430.662v330.508z" />
    <Path d="M107.775 120.185h296.456v30.046H107.775zM107.775 180.277h296.456v30.046H107.775zM107.775 240.369h296.456v30.046H107.775z" />
  </Svg>
);

export default SvgChat;
