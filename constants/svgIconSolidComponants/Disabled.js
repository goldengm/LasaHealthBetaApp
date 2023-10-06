import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDisabled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.615 0 0 114.616 0 256s114.615 256 256 256 256-114.616 256-256S397.385 0 256 0zM66.783 256c0-104.503 84.716-189.217 189.217-189.217 40.19 0 77.446 12.541 108.089 33.907l-263.4 263.399C79.323 333.446 66.783 296.19 66.783 256zM256 445.217c-40.19 0-77.446-12.541-108.089-33.907L411.31 147.911c21.366 30.643 33.907 67.899 33.907 108.089 0 104.501-84.716 189.217-189.217 189.217z" />
  </Svg>
);

export default SvgDisabled;
