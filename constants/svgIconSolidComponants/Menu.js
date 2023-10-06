import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMenu = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 377 377"
    style={{
      enableBackground: "new 0 0 377 377",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M75 73.5h302v30H75zM0 73.5h30v30H0zM0 273.5h30v30H0zM75 273.5h302v30H75zM0 173.5h30v30H0zM75 173.5h302v30H75z" />
  </Svg>
);

export default SvgMenu;
