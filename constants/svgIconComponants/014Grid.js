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
    <Path d="M0 0v210h210V0H0zm180 180H30V30h150v150zM302 0v210h210V0H302zm180 180H332V30h150v150zM0 302v210h210V302H0zm180 180H30V332h150v150zM302 302v210h210V302H302zm180 180H332V332h150v150z" />
  </Svg>
);

export default Svg014Grid;
