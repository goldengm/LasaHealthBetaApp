import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRuble = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 440 440"
    style={{
      enableBackground: "new 0 0 440 440",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M232.522 242.428c63.913 0 115.91-54.382 115.91-121.227C348.432 54.37 296.435 0 232.522 0H120.568v282.428h-29v30h29V440h30V312.428h101.955v-30H150.568v-40h81.954zM150.568 30h81.955c47.371 0 85.91 40.912 85.91 91.201 0 50.303-38.539 91.227-85.91 91.227h-81.955V30z" />
  </Svg>
);

export default SvgRuble;
