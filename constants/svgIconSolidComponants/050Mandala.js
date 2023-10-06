import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg050Mandala = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M482 121v60h-30V60H331V30h60V0H121v30h60v30H60v121H30v-60H0v270h30v-60h30v121h121v30h-60v30h270v-30h-60v-30h121V331h30v60h30V121zM120 392V120h272v272z" />
    <Path d="M150 362h212V150H150zm106-181c41.355 0 75 33.645 75 75s-33.645 75-75 75-75-33.645-75-75 33.645-75 75-75z" />
    <Circle cx={256} cy={256} r={45} />
  </Svg>
);

export default Svg050Mandala;
