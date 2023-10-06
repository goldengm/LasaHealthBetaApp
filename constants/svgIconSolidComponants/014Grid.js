import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg014Grid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0h210v210H0zM302 0h210v210H302zM0 302h210v210H0zM302 302h210v210H302z" />
  </Svg>
);

export default Svg014Grid;
