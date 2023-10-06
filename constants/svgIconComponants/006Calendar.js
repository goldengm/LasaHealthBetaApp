import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg006Calendar = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M452 45c0-24.813-20.187-45-45-45s-45 20.187-45 45H150c0-24.813-20.187-45-45-45S60 20.187 60 45H0v467h512V45zm30 180H30v-30h452zM392 45c0-8.271 6.729-15 15-15s15 6.729 15 15v60h-30zM90 45c0-8.271 6.729-15 15-15s15 6.729 15 15v60H90zM60 75v60h90V75h212v60h90V75h30v90H30V75zM30 482V255h452c0 24.813-20.187 45-45 45H300v137c0 24.813-20.187 45-45 45zm395.64-152L330 425.64V330zM316.065 482 482 316.065V482z" />
  </Svg>
);

export default Svg006Calendar;
