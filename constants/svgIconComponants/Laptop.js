import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLaptop = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M224.653 339.592h62.694v31.347h-62.694z" />
    <Path d="M470.204 290.028V15.673H41.796v274.355L0 415.415v80.912h512v-80.912l-41.796-125.387zM73.143 47.02h365.714v229.878H73.143V47.02zm-4.376 261.225h374.467l31.347 94.041H37.419l31.348-94.041zM480.653 464.98H31.347v-31.347h449.306v31.347z" />
  </Svg>
);

export default SvgLaptop;
