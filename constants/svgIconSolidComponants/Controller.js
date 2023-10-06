import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgController = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={243} cy={242.5} r={40} />
    <Path d="M0 227.5v30h174.635c-1.06-4.836-1.635-9.851-1.635-15s.575-10.164 1.635-15H0zM313 242.5c0 5.149-.575 10.164-1.635 15H485v-30H311.365a69.971 69.971 0 0 1 1.635 15z" />
    <Circle cx={129.25} cy={90.833} r={40} />
    <Path d="M59.25 90.833c0-5.268.604-10.395 1.712-15.333H0v30h60.808a69.988 69.988 0 0 1-1.558-14.667zM197.538 75.5a69.942 69.942 0 0 1 1.712 15.333c0 5.03-.545 9.934-1.558 14.667H485v-30H197.538z" />
    <Circle cx={129.25} cy={394.167} r={40} />
    <Path d="M60.808 379.5H0v30h60.962a69.942 69.942 0 0 1-1.712-15.333c0-5.031.545-9.935 1.558-14.667zM199.25 394.167c0 5.268-.604 10.395-1.712 15.333H485v-30H197.692a69.988 69.988 0 0 1 1.558 14.667z" />
  </Svg>
);

export default SvgController;
