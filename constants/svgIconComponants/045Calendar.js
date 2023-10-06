import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg045Calendar = (props) => (
  <Svg
    height={512}
    viewBox="0 0 510 510"
    width={512}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M450 75V15h-90v60H150V15H60v60H0v420h510V75zm-60-30h30v30h-30zm30 60v60H150v-60zM90 45h30v30H90zm-60 60h90v60H30zm450 360H30V195h450zm-30-300v-60h30v60z" />
    <Path d="M105 420h90v-45h120v45h90v-75h30v-30h-30v-75h-90v45H195v-45h-90v75H75v30h30zm240-150h30v120h-30V270zm-30 45v30H195v-30zm-180-45h30v120h-30z" />
  </Svg>
);

export default Svg045Calendar;
