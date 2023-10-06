import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgParagraph = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 310 310"
    style={{
      enableBackground: "new 0 0 310 310",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M286.875 0h-180c-46.18 0-83.75 37.57-83.75 83.75s37.57 83.75 83.75 83.75h35V310h30V30h40v280h30V30h45V0zm-145 137.5h-35c-29.638 0-53.75-24.112-53.75-53.75S77.237 30 106.875 30h35v107.5z" />
  </Svg>
);

export default SvgParagraph;
