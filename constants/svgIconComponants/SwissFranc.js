import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSwissFranc = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 440.153 440.153"
    style={{
      enableBackground: "new 0 0 440.153 440.153",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M413.34 30.153v-30H180.696v440h30V232.584H373.38v-30H210.696V30.153zM121.195 318.717H56.813v-91.218h-30V440h30v-91.283h64.382V440h30V227.499h-30zM88.836 212.5c34.2 0 62.023-27.824 62.023-62.023h-30c0 17.658-14.365 32.023-32.023 32.023s-32.023-14.366-32.023-32.023V62.023C56.813 44.366 71.178 30 88.836 30s32.023 14.366 32.023 32.023h30C150.86 27.824 123.037 0 88.836 0S26.813 27.824 26.813 62.023v88.453c0 34.2 27.823 62.024 62.023 62.024z" />
  </Svg>
);

export default SvgSwissFranc;
