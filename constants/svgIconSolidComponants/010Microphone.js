import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg010Microphone = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M411 256h-30c0 68.925-56.075 125-125 125s-125-56.075-125-125h-30c0 80.407 61.545 146.702 140 154.272V482h-65v30h160v-30h-65v-71.728c78.455-7.57 140-73.865 140-154.272z" />
    <Path d="M256 0c-52.383 0-95 42.617-95 95v161c0 52.383 42.617 95 95 95s95-42.617 95-95V95c0-52.383-42.617-95-95-95zm65 190H191v-30h130v30z" />
  </Svg>
);

export default Svg010Microphone;
