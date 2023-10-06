import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEnvelope = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 73.143v365.714h512V73.143H0zm454.416 31.347L256 277.025 57.584 104.49h396.832zM31.347 123.217 184.048 256 31.347 388.784V123.217zM57.584 407.51l150.35-130.74L256 318.566l48.065-41.796 150.35 130.74H57.584zm423.069-18.725L327.952 256l152.701-132.783v265.568z" />
  </Svg>
);

export default SvgEnvelope;
