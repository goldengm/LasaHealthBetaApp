import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgResponsive = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M62.694 0v512h386.612V0H62.694zm355.265 480.653H94.041V135.837h31.347v104.49h261.224v-104.49h31.347v344.816zM156.735 208.98V94.041h198.531V208.98H156.735zm261.224-104.49h-31.347V62.694H125.388v41.796H94.041V31.347h323.918v73.143z" />
    <Path d="M188.082 135.837h78.367v31.347h-78.367zM125.388 271.673v177.633h261.224V271.673H125.388zm229.877 146.286h-198.53V303.02h198.531v114.939z" />
    <Path d="M188.082 344.816h78.367v31.347h-78.367z" />
    <Circle cx={303.02} cy={151.51} r={20.898} />
    <Circle cx={303.02} cy={360.49} r={20.898} />
  </Svg>
);

export default SvgResponsive;
