import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg005Photograph = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M16 0v512h480V0H16zm400 272-80-80-96 96-64-64-80 80V96h320v176z" />
    <Circle cx={240} cy={176} r={32} />
  </Svg>
);

export default Svg005Photograph;
