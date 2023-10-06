import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSwitch = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M356.25 113.75h-227.5C57.757 113.75 0 171.507 0 242.5s57.757 128.75 128.75 128.75h227.5c70.993 0 128.75-57.757 128.75-128.75s-57.757-128.75-128.75-128.75zM30 242.5c0-54.451 44.299-98.75 98.75-98.75s98.75 44.299 98.75 98.75-44.299 98.75-98.75 98.75S30 296.951 30 242.5zm326.25 98.75H211.266c28.24-23.636 46.234-59.129 46.234-98.75s-17.994-75.114-46.234-98.75H356.25c54.451 0 98.75 44.299 98.75 98.75s-44.299 98.75-98.75 98.75z" />
  </Svg>
);

export default SvgSwitch;
