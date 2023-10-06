import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBinoculars = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M81.25 146.25C36.449 146.25 0 182.699 0 227.5s36.449 81.25 81.25 81.25 81.25-36.449 81.25-81.25-36.449-81.25-81.25-81.25zM373.75 146.25c-44.802 0-81.25 36.449-81.25 81.25s36.448 81.25 81.25 81.25S455 272.301 455 227.5s-36.448-81.25-81.25-81.25zM242.5 179.718V147.5h-30v32.218l-25.77 12.4a110.796 110.796 0 0 1 5.77 35.382c0 12.223-1.987 23.99-5.646 35h81.292a110.789 110.789 0 0 1-5.646-35c0-12.364 2.03-24.262 5.77-35.382l-25.77-12.4z" />
  </Svg>
);

export default SvgBinoculars;
