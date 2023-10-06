import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHome = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0 3.205 252.795v22.92h51.591V512h154.772V346.91h92.863V512h154.772V275.714h51.591v-22.92L256 0zm170.249 244.76v236.286h-92.863v-165.09H178.614v165.09H85.751V244.76H55.016L256 43.777 456.984 244.76h-30.735z" />
  </Svg>
);

export default SvgHome;
