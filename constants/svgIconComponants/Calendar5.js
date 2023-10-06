import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCalendar5 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 425 425"
    style={{
      enableBackground: "new 0 0 425 425",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M245.462 210.825 212.5 243.787l-32.962-32.962-21.213 21.213L191.287 265l-32.962 32.962 21.213 21.213 32.962-32.962 32.962 32.962 21.213-21.213L233.713 265l32.962-32.962z" />
    <Path d="M293.333 45V20h-30v25H161.667V20h-30v25H0v360h425V45H293.333zM131.667 75v25h30V75h101.667v20h30V75H395v50H30V75h101.667zM30 375V155h365v220H30z" />
  </Svg>
);

export default SvgCalendar5;
