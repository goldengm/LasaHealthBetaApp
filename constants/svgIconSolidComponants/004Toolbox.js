import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg004Toolbox = (props) => (
  <Svg
    height={512}
    viewBox="0 0 510 510"
    width={512}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M240 300h30v30h-30z" />
    <Path d="M300 300v60h-90v-60H0v75l180 135h150l180-135v-75zM510 510v-97.5L380 510zM0 510h130L0 412.5zM150 90h30v90h-30z" />
    <Path d="M150 210H90v-30h30V60h90v120h30v30h-60v60h150v-90h30v-30h-45v-30h-30v15h-30V75h30v15h30V60h45c41.355 0 75 33.645 75 75v15h-45v30h30v90h60V0H30v270h120z" />
    <Path d="M360 210h30v60h-30zM360 90h-15v30h57.43c-6.191-17.461-22.873-30-42.43-30z" />
  </Svg>
);

export default Svg004Toolbox;
