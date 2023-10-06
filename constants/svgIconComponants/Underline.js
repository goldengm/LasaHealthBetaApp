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
    <Path d="M62.877 330h234.245v30H62.877zM180 290c-61.825 0-112.123-50.298-112.123-112.122V0h30v177.878C97.877 223.16 134.717 260 180 260s82.123-36.84 82.123-82.122V0h30v177.878C292.123 239.702 241.825 290 180 290z" />
  </Svg>
);

export default SvgUnderline;
