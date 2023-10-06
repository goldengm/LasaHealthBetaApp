import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgExclamation = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 417.959c-25.927 0-47.02 21.093-47.02 47.02 0 25.927 21.093 47.02 47.02 47.02s47.02-21.093 47.02-47.02c0-25.926-21.093-47.02-47.02-47.02zm0 62.694c-8.642 0-15.673-7.031-15.673-15.673s7.031-15.674 15.673-15.674 15.673 7.031 15.673 15.674c0 8.642-7.031 15.673-15.673 15.673zM208.98 0v386.612h94.041V0H208.98zm62.693 355.265h-31.347V31.347h31.347v323.918z" />
  </Svg>
);

export default SvgExclamation;
