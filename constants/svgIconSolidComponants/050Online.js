import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg050Online = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M256 256c-36.226 0-66.519 25.811-73.491 60h146.982c-6.972-34.189-37.265-60-73.491-60z" />
    <Circle cx={256} cy={151} r={45} />
    <Path d="M0 406h512V16H0zm151-75c0-57.891 47.109-105 105-105-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75-33.647 75-75 75c57.891 0 105 47.109 105 105v15H151zM316.806 436H195.194l-9.999 30H121v30h270v-30h-64.195z" />
  </Svg>
);

export default Svg050Online;
