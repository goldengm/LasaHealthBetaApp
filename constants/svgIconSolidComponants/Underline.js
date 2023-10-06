import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUnderline = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 360 360"
    style={{
      enableBackground: "new 0 0 360 360",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M62.877 330h234.245v30H62.877zM180 290c61.825 0 112.123-50.298 112.123-112.122V0h-30v177.878C262.123 223.16 225.283 260 180 260s-82.123-36.84-82.123-82.122V0h-30v177.878C67.877 239.702 118.175 290 180 290z" />
  </Svg>
);

export default SvgUnderline;
