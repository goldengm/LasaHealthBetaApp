import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPaperclip = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M277.5 0C226.495 0 185 41.495 185 92.5v265c0 31.706 25.794 57.5 57.5 57.5s57.5-25.794 57.5-57.5v-265h-30v265c0 15.164-12.336 27.5-27.5 27.5S215 372.664 215 357.5v-265c0-34.463 28.038-62.5 62.5-62.5S340 58.037 340 92.5v265c0 53.762-43.738 97.5-97.5 97.5S145 411.262 145 357.5v-265h-30v265c0 70.304 57.196 127.5 127.5 127.5S370 427.804 370 357.5v-265C370 41.495 328.505 0 277.5 0z" />
  </Svg>
);

export default SvgPaperclip;
