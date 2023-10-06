import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEraser = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 489.021 489.021"
    style={{
      enableBackground: "new 0 0 489.021 489.021",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M489.021 212.193 280.426 3.597 0 284.023l201.401 201.401h275.785v-30H245.79l243.231-243.231zM154.354 395.951h108.484l-30 30h-48.484l-30-30zM295.389 363.4l-2.551 2.551H124.354l-30-30H267.94l27.449 27.449zm151.207-151.207L316.602 342.188l-166.171-166.17L280.426 46.022l166.17 166.171zm-298.657 3.758 30 30H80.498l30-30h37.441zm-97.441 60h157.441l30 30H64.354l-21.928-21.928 8.072-8.072z" />
  </Svg>
);

export default SvgEraser;
