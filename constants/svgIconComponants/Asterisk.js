import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAsterisk = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 495.021 495.021"
    style={{
      enableBackground: "new 0 0 495.021 495.021",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m495.021 191.213-75-129.904-97.511 56.298V5.011h-150v112.596L75 61.309 0 191.213l97.511 56.298L0 303.809l75 129.904 97.511-56.298v112.596h150V377.415l97.511 56.298 75-129.904-97.511-56.298 97.51-56.298zm-40.98 123.576-45 77.943-116.53-67.278v134.557h-90V325.454L85.98 392.732l-45-77.943 116.53-67.278-116.53-67.279 45-77.943 116.53 67.278V35.011h90v134.557l116.53-67.278 45 77.943-116.53 67.278 116.531 67.278z" />
  </Svg>
);

export default SvgAsterisk;
