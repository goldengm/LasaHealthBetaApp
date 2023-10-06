import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFlask = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.999 511.999"
    style={{
      enableBackground: "new 0 0 511.999 511.999",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M174.219 0v58.165H337.78V0zM321.953 227.453V88.582H190.046v138.872l-75.751 126.234h283.409v-.001l-75.751-126.234zm-18.98 105.956h-93.947v-30.417h93.947v30.417zM433.514 413.36l-17.556-29.256H96.042l-17.456 29.09-.098.165a64.986 64.986 0 0 0-9.324 33.569c0 35.88 29.19 65.07 65.07 65.07h243.533c35.88 0 65.069-29.19 65.069-65.07a64.994 64.994 0 0 0-9.322-33.568zm-130.541 21.439h-93.947v-30.417h93.947v30.417z" />
  </Svg>
);

export default SvgFlask;
