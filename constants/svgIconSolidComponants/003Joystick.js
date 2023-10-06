import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg003Joystick = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M0 446.476h512V512H0zM368.251 355.3h-79.322V206.497c-10.579 3.29-21.635 4.997-32.929 4.997s-22.35-1.707-32.929-4.997V355.3h-79.322l-22.734 61.176h269.97z" />
    <Circle
      cx={256}
      cy={90.516}
      transform="rotate(-45 256.003 90.57)"
      r={90.516}
    />
  </Svg>
);

export default Svg003Joystick;
