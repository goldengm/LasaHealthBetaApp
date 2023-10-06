import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgInbox = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m315 315-20 70H160l-20-70H30v140h395V315z" />
    <Path d="m162.629 285 6.217 21.758L182.629 355h89.742l13.783-48.242L292.371 285H355V0H100v285H162.629zm15.477-113.938 34.394 34.394V50h30v155.455l34.394-34.394 21.213 21.213-70.607 70.607-70.606-70.606 21.212-21.213z" />
  </Svg>
);

export default SvgInbox;
