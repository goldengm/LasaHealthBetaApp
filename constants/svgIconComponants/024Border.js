import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg024Border = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M90 0h60v30H90zM362 0h60v30h-60zM362 482h60v30h-60zM90 482h60v30H90zM482 362h30v60h-30zM482 90h30v60h-30z" />
    <Path d="M482 211H301V30h31V0H180v30h31v181H30v-31H0v152h30v-31h181v181h-31v30h152v-30h-31V301h181v31h30V180h-30zm-211 60v211h-30V271H30v-30h211V30h30v211h211v30zM482 482h-30v30h60v-60h-30zM452 0v30h30v30h30V0z" />
    <Path d="M0 362h30v60H0zM0 90h30v60H0zM30 452H0v60h60v-30H30zM30 30h30V0H0v60h30z" />
  </Svg>
);

export default Svg024Border;
