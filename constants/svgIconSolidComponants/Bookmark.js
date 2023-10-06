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
    <Path d="M66.783 0v512L256 322.783 445.217 512V0z" />
  </Svg>
);

export default SvgBookmark;
