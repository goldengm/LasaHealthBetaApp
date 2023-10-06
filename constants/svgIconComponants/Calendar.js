import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCalendar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 425 425"
    style={{
      enableBackground: "new 0 0 425 425",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M293.333 45V20h-30v25H161.667V20h-30v25H0v360h425V45H293.333zM131.667 75v25h30V75h101.667v20h30V75H395v50H30V75h101.667zM30 375V155h365v220H30z" />
    <Path d="M97.5 285h50v50h-50zM187.5 285h50v50h-50zM277.5 285h50v50h-50zM187.5 195h50v50h-50zM277.5 195h50v50h-50zM97.5 195h50v50h-50z" />
  </Svg>
);

export default SvgCalendar;
