import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201Padlock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M409.6 190.171V153.6C409.6 68.905 340.695 0 256 0S102.4 68.905 102.4 153.6v36.571H58.514V512h394.971V190.171H409.6zM146.286 153.6c0-60.496 49.218-109.714 109.714-109.714S365.714 93.104 365.714 153.6v36.571H146.286V153.6zM409.6 468.114H102.4V234.057h307.2v234.057z" />
    <Path d="M234.057 277.943h43.886v146.286h-43.886z" />
  </Svg>
);

export default Svg201Padlock;
