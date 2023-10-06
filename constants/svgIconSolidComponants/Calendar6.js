import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCalendar6 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M395 52.5H278.333v-40h-30v40H146.667v-40h-30v40H0v65h395zM425 112.5v300H60v30h395v-330z" />
    <Path d="M395 147.5H0v235h395v-235zM132.5 335h-50v-50h50v50zm0-90h-50v-50h50v50zm90 90h-50v-50h50v50zm0-90h-50v-50h50v50zm90 90h-50v-50h50v50zm0-90h-50v-50h50v50z" />
  </Svg>
);

export default SvgCalendar6;
