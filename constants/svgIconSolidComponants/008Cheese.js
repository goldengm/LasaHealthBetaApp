import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg008Cheese = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M0 343.335v30h28.476v29c0 16.569 13.431 30 30 30h395.047c16.569 0 30-13.431 30-30v-29H512v-30z" />
    <Circle cx={269} cy={173.335} r={15} />
    <Circle cx={143} cy={241.665} r={15} />
    <Path d="M374 79.665h85v233.669h-85zM344 79.665H181c0 16.569-13.431 30-30 30s-30-13.431-30-30H53v233.669h291zm-201 207c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45zm128-3.33h-30v-30h30zm-2-65c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z" />
  </Svg>
);

export default Svg008Cheese;
