import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDropbox = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="m135.905 187.68 91.557 58.273 96.54-60.454-96.54-56.076z"
    />
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm324.123 315.34-96.661 63.299-96.358-63.769v-22.655l35.436 20.762 60.922-46.794 62.301 46.854 34.36-20.413v22.716zM385 237.321l-94.42 56.076-63.118-47.444-61.816 47.444L70 237.321l65.905-49.641L70 138.055l95.646-61.694 61.816 53.063 64.542-53.063L385 135.147l-60.998 50.352L385 237.321z"
    />
  </Svg>
);

export default SvgDropbox;
