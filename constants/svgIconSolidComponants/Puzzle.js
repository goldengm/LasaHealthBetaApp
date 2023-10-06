import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPuzzle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M372.065 208.478a69.662 69.662 0 0 1 31.956 7.727V101.956H289.773A69.668 69.668 0 0 0 297.5 70c0-38.66-31.34-70-70-70s-70 31.34-70 70a69.662 69.662 0 0 0 7.727 31.956H50.978v114.248a69.668 69.668 0 0 1 31.956-7.727c38.66 0 70 31.34 70 70s-31.34 70-70 70a69.662 69.662 0 0 1-31.956-7.727V455h353.043V340.752a69.668 69.668 0 0 1-31.956 7.727c-38.66 0-70-31.34-70-70 0-38.661 31.34-70.001 70-70.001z" />
  </Svg>
);

export default SvgPuzzle;
