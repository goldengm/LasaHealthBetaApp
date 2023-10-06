import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201PlayButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 146.286V512h365.714V146.286H0zm146.286 286.295V225.704l103.439 103.439-103.439 103.438z" />
    <Path d="M146.286 0v109.714h256v256H512V0z" />
  </Svg>
);

export default Svg201PlayButton;
