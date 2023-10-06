import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg005Calendar = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M91 62h90v30H91zM331 62h90v30h-90z" />
    <Path d="M0 0v512h512V0zm482 30v92H30V30zM30 482V152h452v330z" />
    <Path d="M301 212h-90v60h-60v90h60v60h90v-60h60v-90h-60zm30 90v30h-60v60h-30v-60h-60v-30h60v-60h30v60z" />
  </Svg>
);

export default Svg005Calendar;
