import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg023Survey = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M180 16h-30v480h30v-30h272V346H180v-30h152V196H180v-30h332V46H180z" />
    <Circle cx={60} cy={106} r={60} />
    <Circle cx={60} cy={256} r={60} />
    <Circle cx={60} cy={406} r={60} />
  </Svg>
);

export default Svg023Survey;
