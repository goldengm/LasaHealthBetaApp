import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgSnow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={236.439} cy={478.616} r={26.256} />
    <Circle cx={167.831} cy={401.567} r={26.256} />
    <Circle cx={249.869} cy={401.567} r={26.256} />
    <Circle cx={331.934} cy={401.567} r={26.256} />
    <Path d="M426.667 177.794c0-94.257-76.41-170.667-170.667-170.667S85.333 83.537 85.333 177.794C38.206 177.794 0 216 0 263.127s38.206 85.333 85.333 85.333h341.333c47.128 0 85.333-38.206 85.333-85.333s-38.205-85.333-85.332-85.333zM184.225 324.525c-14.5 0-26.256-11.755-26.256-26.256s11.756-26.256 26.256-26.256c14.503 0 26.256 11.755 26.256 26.256s-11.753 26.256-26.256 26.256zm82.041 0c-14.5 0-26.256-11.755-26.256-26.256s11.756-26.256 26.256-26.256c14.503 0 26.256 11.755 26.256 26.256s-11.753 26.256-26.256 26.256zm82.062 0c-14.5 0-26.256-11.755-26.256-26.256s11.756-26.256 26.256-26.256c14.503 0 26.256 11.755 26.256 26.256s-11.753 26.256-26.256 26.256z" />
  </Svg>
);

export default SvgSnow;
