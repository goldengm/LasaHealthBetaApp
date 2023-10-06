import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Svg041Teaching = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={197} cy={347} r={45} />
    <Circle cx={45} cy={77} r={45} />
    <Path d="M242 137v-15H45c-24.814 0-45 20.186-45 45v345h90V212h77c41.353 0 75-33.647 75-75z" />
    <Circle cx={317} cy={347} r={45} />
    <Circle cx={437} cy={347} r={45} />
    <Path d="M437 392c-24.62 0-46.318 12.085-60 30.463C363.318 404.085 341.62 392 317 392s-46.318 12.085-60 30.463C243.318 404.085 221.62 392 197 392c-41.353 0-75 33.647-75 75v45h390v-45c0-41.353-33.647-75-75-75zM122 0v92h150v45c0 57.891-47.109 105-105 105h-45v30h390V0zm360 182H302v-30h180zm0-60H302V92h180zm0-60H212V32h270z" />
  </Svg>
);

export default Svg041Teaching;
