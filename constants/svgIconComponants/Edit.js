import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEdit = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M30 30h76V0H0v106h30zM379 0v30h76v76h30V0zM197.16 0h91v30h-91zM197.16 455h91v30h-91zM455 455h-76v30h106V379h-30zM455 197h30v91h-30zM0 197h30v91H0zM36.456 367.226 2.932 482.068l114.842-33.525 216.585-216.585-81.316-81.317L36.456 367.226zm65.536 54.672-54.924 16.034 16.033-54.924 140.673-140.673 38.891 38.891-140.673 140.672zm161.886-161.885-38.89-38.891 28.055-28.054 38.891 38.891-28.056 28.054z" />
  </Svg>
);

export default SvgEdit;
