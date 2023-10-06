import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgOutbox = (props) => (
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
    <Path d="m162.629 285 6.217 21.758L182.629 355h89.742l13.783-48.242L292.371 285H355V0H100v285H162.629zM227.5 58.787l70.606 70.606-21.213 21.213-34.393-34.393v155.455h-30V116.213l-34.394 34.394-21.213-21.213L227.5 58.787z" />
  </Svg>
);

export default SvgOutbox;
