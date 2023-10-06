import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgResize = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v512h512V0H0zm480.653 480.653H31.347V31.347h449.306v449.306z" />
    <Path d="m262.8 62.694 60.004 60.005-88.97 88.97 66.496 66.496 88.97-88.97 60.005 60.004V62.694H262.8zm155.159 110.828-28.658-28.658-88.97 88.97-22.165-22.165 88.97-88.97-28.657-28.657h79.481v79.48zM278.165 300.331l-66.497-66.497-88.97 88.97L62.694 262.8v186.506H249.2l-60.004-60.005 88.969-88.97zM94.041 417.959v-79.481l28.658 28.658 88.97-88.97 22.165 22.165-88.97 88.97 28.657 28.657h-79.48z" />
  </Svg>
);

export default SvgResize;
