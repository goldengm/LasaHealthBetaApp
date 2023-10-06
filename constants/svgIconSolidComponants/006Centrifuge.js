import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg006Centrifuge = (props) => (
  <Svg
    height={512}
    viewBox="0 0 510 510"
    width={512}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M225 75h60V30h45V0H180v30h45zM30 270v180h450V270zm90 135H90v-30h30zm0-60H90v-30h30zm75 60c-24.813 0-45-20.186-45-45 0-24.813 20.187-45 45-45s45 20.187 45 45c0 24.814-20.187 45-45 45zm120 0c-24.814 0-45-20.186-45-45 0-24.813 20.186-45 45-45 24.813 0 45 20.187 45 45 0 24.814-20.187 45-45 45zm105 0h-30v-30h30zm0-60h-30v-30h30z" />
    <Circle cx={315} cy={360} r={15} />
    <Circle cx={195} cy={360} r={15} />
    <Path d="M75 480h60v30H75zM375 480h60v30h-60zM225 105h60v45h-60zM30 180h450v60H30z" />
  </Svg>
);

export default Svg006Centrifuge;
