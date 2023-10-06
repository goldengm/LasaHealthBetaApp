import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201Circle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 173.714c-45.372 0-82.286 36.913-82.286 82.286s36.913 82.286 82.286 82.286 82.286-36.913 82.286-82.286-36.912-82.286-82.286-82.286z" />
    <Path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm0 393.143c-75.621 0-137.143-61.522-137.143-137.143S180.379 118.857 256 118.857 393.143 180.379 393.143 256 331.621 393.143 256 393.143z" />
  </Svg>
);

export default Svg201Circle;
