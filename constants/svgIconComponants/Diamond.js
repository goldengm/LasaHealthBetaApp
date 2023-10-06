import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDiamond = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M416.634 43.12H95.366L0 189.166 256 468.88l256-279.714L416.634 43.12zm43.464 127.633h-78.312l29.491-74.766 48.821 74.766zM383.064 76.51l-30.721 77.886-61.788-77.886h92.509zm-60.365 94.243H189.301L256 86.678l66.699 84.075zM221.445 76.509l-61.788 77.886-30.721-77.886h92.509zM100.723 95.987l29.491 74.766H51.902l48.821-74.766zm-41.75 108.157h84.411l63.933 162.086L58.973 204.144zm120.307 0h153.44L256 398.649l-76.72-194.505zm125.403 162.085 63.933-162.084h84.411L304.683 366.229z" />
  </Svg>
);

export default SvgDiamond;
