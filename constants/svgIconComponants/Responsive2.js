import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgResponsive2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M62.694 0v512h386.612V0H62.694zm355.265 480.653H94.041V240.327h323.918v240.326zM105.757 208.98l60.773-60.773 60.773 60.773H105.757zm312.202 0H246.818l96.039-96.039 75.102 75.102v20.937zm0-65.268L342.857 68.61 237.061 174.406l-70.531-70.531-72.49 72.49V31.347h323.918v112.365z" />
    <Path d="M125.388 271.673v177.633h261.224V271.673H125.388zm229.877 146.286h-198.53V303.02h198.531v114.939z" />
    <Path d="M188.082 344.816h78.367v31.347h-78.367z" />
    <Circle cx={303.02} cy={360.49} r={20.898} />
    <Circle cx={229.878} cy={83.592} r={20.898} />
  </Svg>
);

export default SvgResponsive2;
