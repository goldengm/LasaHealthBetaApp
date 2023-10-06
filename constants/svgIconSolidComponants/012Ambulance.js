import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg012Ambulance = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M271 91h75v120h-75zM477.16 211H376V91h65.16z" />
    <Path d="M241 241V91H0v180h512v-30zm-60-30h-30v30h-30v-30H91v-30h30v-30h30v30h30zM0 301h512v90h-46c0-33.08-26.92-60-60-60-33.09 0-60 26.92-60 60H166c0-33.08-26.92-60-60-60-33.09 0-60 26.92-60 60H0z" />
    <Circle cx={406.066} cy={391} r={30} />
    <Circle cx={106.066} cy={391} r={30} />
  </Svg>
);

export default Svg012Ambulance;
