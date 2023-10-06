import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSave = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 340.571 340.571"
    style={{
      enableBackground: "new 0 0 340.571 340.571",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M85 0h170.571v65H85zM85 185.286h170.571v155.286H85z" />
    <Path d="M285.571 15v80H55V0H0v340.571h55V155.286h230.571v185.285h55V70z" />
  </Svg>
);

export default SvgSave;
