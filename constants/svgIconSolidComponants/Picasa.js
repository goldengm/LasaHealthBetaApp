import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPicasa = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm227.5 70c20.887 0 40.822 4.077 59.063 11.46v109.82L174.448 79.168C191.028 73.238 208.884 70 227.5 70zM70 227.5c0-59.49 32.985-111.265 81.656-138.061l49.468 49.469L74.608 265.423A157.789 157.789 0 0 1 70 227.5zm78.748 136.423c-29.097-16.834-52.303-42.711-65.788-73.789l65.788-65.792v139.581zM227.5 385c-20.89 0-40.822-4.077-59.063-11.461v-67.291h195.486C336.688 353.325 285.794 385 227.5 385zm146.039-98.437h-67.291V91.076C353.325 118.308 385 169.203 385 227.5c0 20.887-4.077 40.822-11.461 59.063z"
    />
  </Svg>
);

export default SvgPicasa;
