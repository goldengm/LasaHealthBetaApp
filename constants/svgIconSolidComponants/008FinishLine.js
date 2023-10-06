import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg008Finishline = (props) => (
  <Svg
    height={512}
    viewBox="0 0 510 510"
    width={512}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M270 360h45v75h-45zM195 360h45v150h-45z" />
    <Circle cx={255} cy={60} r={45} />
    <Path d="M0 270h510v60H0zM0 360h30v150H0zM480 360h30v150h-30zM360 22.5v37.459C360 84.835 339.834 105 314.959 105c-30.093 39.995-89.83 39.989-119.918 0C170.165 105 150 84.835 150 59.959V22.5C150 10.074 139.926 0 127.5 0S105 10.074 105 22.5V60c0 49.706 40.294 90 90 90v90h120v-90c49.706 0 90-40.294 90-90V22.5C405 10.074 394.927 0 382.5 0S360 10.074 360 22.5z" />
  </Svg>
);

export default Svg008Finishline;
