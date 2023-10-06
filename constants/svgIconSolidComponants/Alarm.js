import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAlarm = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M227.5 455c27.922 0 52.019-16.353 63.255-40h-126.51c11.236 23.647 35.333 40 63.255 40zM415 355v-40l-30-30v-80.366C385 127.909 330.135 64.01 257.5 50V30c0-16.542-13.458-30-30-30s-30 13.458-30 30v20C124.865 64.01 70 127.909 70 204.634V285l-30 30v40H10v30h435v-30h-30z" />
  </Svg>
);

export default SvgAlarm;
