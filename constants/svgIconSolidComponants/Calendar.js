import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCalendar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 395 395"
    style={{
      enableBackground: "new 0 0 395 395",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M278.333 52.5v-40h-30v40H146.667v-40h-30v40H0v65h395v-65zM0 382.5h395v-235H0v235zM262.5 195h50v50h-50v-50zm0 90h50v50h-50v-50zm-90-90h50v50h-50v-50zm0 90h50v50h-50v-50zm-90-90h50v50h-50v-50zm0 90h50v50h-50v-50z" />
  </Svg>
);

export default SvgCalendar;
