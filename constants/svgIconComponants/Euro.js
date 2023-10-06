import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEuro = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 435 435"
    style={{
      enableBackground: "new 0 0 435 435",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M235.642 405c-46.281 0-83.933-37.652-83.933-83.932V270.21h159.962v-30H151.709v-40h159.962v-30H151.709v-56.278c0-46.281 37.652-83.932 83.933-83.932 46.28 0 83.932 37.652 83.932 83.932h30C349.574 51.11 298.464 0 235.642 0c-62.823 0-113.933 51.11-113.933 113.932v56.278h-35v30h35v40H85.426v30h36.284v50.857c0 62.823 51.11 113.932 113.933 113.932 62.822 0 113.932-51.11 113.932-113.932h-30C319.574 367.348 281.922 405 235.642 405z" />
  </Svg>
);

export default SvgEuro;
