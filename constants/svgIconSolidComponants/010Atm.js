import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";

const Svg010Atm = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M0 271h76v-15c0-16.948 5.865-32.426 15.383-45H46v-30h420v30h-45c-24.814 0-45 20.186-45 45v15h136V120H0zM106 512h45c0-24.814-20.186-45-45-45zM346 467c-24.814 0-45 20.186-45 45h45z" />
    <Path d="M106 256v181c41.353 0 75 33.647 75 75h90c0-41.353 33.647-75 75-75V256c0-16.948 5.865-32.426 15.383-45H151c-24.814 0-45 20.186-45 45zm120 15c33.647 0 60 19.761 60 45s-26.353 45-60 45-60-19.761-60-45 26.353-45 60-45z" />
    <Ellipse cx={226} cy={316} rx={30} ry={15} />
    <Path d="M352.211 0H159.789L256 96.211z" />
  </Svg>
);

export default Svg010Atm;
