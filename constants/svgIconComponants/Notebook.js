import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNotebook = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M367.425 0H65.642v512h301.784c43.523 0 78.931-35.409 78.931-78.932V78.932C446.357 35.409 410.948 0 367.425 0zM225.342 478.609H99.034V33.391h126.308v445.218zm70.837 0h-37.446V33.391h37.446v445.218zm116.786-45.541c0 25.111-20.429 45.54-45.54 45.54h-37.856V33.391h37.856c25.111 0 45.54 20.429 45.54 45.54v354.137z" />
  </Svg>
);

export default SvgNotebook;
