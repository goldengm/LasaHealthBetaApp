import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCalendar6 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M425 105V45H293.333V20h-30v25H161.667V20h-30v25H0v360h60v60h425V105h-60zM131.667 75v25h30V75h101.667v20h30V75H395v50H30V75h101.667zM30 155h365v220H30V155zm425 280H90v-30h335V135h30v300z" />
    <Path d="M97.5 285h50v50h-50zM187.5 285h50v50h-50zM277.5 285h50v50h-50zM187.5 195h50v50h-50zM277.5 195h50v50h-50zM97.5 195h50v50h-50z" />
  </Svg>
);

export default SvgCalendar6;
