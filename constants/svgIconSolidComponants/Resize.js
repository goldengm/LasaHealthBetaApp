import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgResize = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m232.389 303.222-23.611-23.611-94.772 94.772-30.528-30.526v84.665h84.665l-30.526-30.528z" />
    <Path d="M0 0v512h512V0H0zm248.756 461.913H50.087V263.244l63.919 63.918 94.772-94.772 70.834 70.834-94.772 94.772 63.916 63.917zm213.157-213.157-63.919-63.918-94.772 94.772-70.834-70.834 94.772-94.772-63.917-63.918h198.669v198.67z" />
    <Path d="m343.857 83.478 30.526 30.528-94.772 94.772 23.611 23.611 94.772-94.772 30.528 30.526V83.478z" />
  </Svg>
);

export default SvgResize;
