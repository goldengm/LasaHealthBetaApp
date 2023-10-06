import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUpload = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 448.107h485v30H0zM227.5 64.32v338.787h30V64.32l34.394 34.393L313.106 77.5 242.5 6.893 171.894 77.5l21.212 21.213z" />
  </Svg>
);

export default SvgUpload;
