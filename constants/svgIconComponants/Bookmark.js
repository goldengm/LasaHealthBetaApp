import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBookmark = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M70.715 0v512L256 326.715 441.285 512V0H70.715zm340.524 439.462L256 284.224 100.761 439.462V30.046h310.477v409.416z" />
  </Svg>
);

export default SvgBookmark;
