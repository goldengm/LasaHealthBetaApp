import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgStar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 482.207 482.207"
    style={{
      enableBackground: "new 0 0 482.207 482.207",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m482.207 186.973-159.699-33.705-81.404-141.465L159.7 153.268 0 186.973l109.389 121.134-17.295 162.297 149.01-66.6 149.01 66.6-17.295-162.296 109.388-121.135zm-241.103 183.97L127.45 421.741l13.191-123.788-83.434-92.393 121.807-25.707 62.09-107.9 62.09 107.9L425 205.561l-83.434 92.393 13.191 123.788-113.653-50.799z" />
  </Svg>
);

export default SvgStar;
