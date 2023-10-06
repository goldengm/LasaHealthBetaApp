import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLeftArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M207.615 183.772V48.385L0 255.999l207.615 207.616V328.227H512V183.772H207.615zm273.431 113.5H176.66v91.612L43.776 255.999 176.66 123.116v91.611h304.385v82.545z" />
  </Svg>
);

export default SvgLeftArrow;
