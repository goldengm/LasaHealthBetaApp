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
    <Path d="M30 30h76V0H0v106h30zM379 0v30h76v76h30V0zM197.16 0h91v30h-91zM197.16 455h91v30h-91zM455 455h-76v30h106V379h-30zM455 197h30v91h-30zM0 197h30v91H0zM274.484 270.622l-60.103-60.104 38.661-38.661 60.104 60.103-38.662 38.662zM25 460l68.463-19.986-48.477-48.477L25 460zM60.383 364.508l132.781-132.781 60.104 60.104-132.781 132.781-60.104-60.104z" />
  </Svg>
);

export default SvgEdit;
