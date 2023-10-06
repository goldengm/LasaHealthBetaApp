import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTrash = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M94.316 183.242h86.232V512H94.316zM331.453 183.242h86.232V512h-86.232zM212.884 183.242h86.232V512h-86.232zM347.621 64.674V0H164.379v64.674H72.758v86.232h366.484V64.674h-91.621zm-32.337 0H196.716V32.337h118.568v32.337z" />
  </Svg>
);

export default SvgTrash;
