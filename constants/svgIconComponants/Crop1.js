import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCrop1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M453.713 85.399 512 27.112 484.89 0l-58.287 58.287H95.855V.774H57.513v57.513H0v38.342h57.513v357.858h357.858V512h38.342v-57.513h57.513v-38.342h-57.513V85.399zM95.855 96.629h292.404L95.855 389.034V96.629zm319.516 319.516H122.966L415.37 123.741v292.404z" />
  </Svg>
);

export default SvgCrop1;
