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
    <Path d="M242.5 485C172.196 485 115 427.804 115 357.5v-265h30v265c0 53.762 43.738 97.5 97.5 97.5s97.5-43.738 97.5-97.5v-265c0-34.463-28.038-62.5-62.5-62.5S215 58.037 215 92.5v265c0 15.164 12.336 27.5 27.5 27.5s27.5-12.336 27.5-27.5v-265h30v265c0 31.706-25.794 57.5-57.5 57.5S185 389.206 185 357.5v-265C185 41.495 226.495 0 277.5 0S370 41.495 370 92.5v265c0 70.304-57.196 127.5-127.5 127.5z" />
  </Svg>
);

export default SvgPaperclip;
