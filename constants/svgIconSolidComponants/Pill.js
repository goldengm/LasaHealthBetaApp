import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPill = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M37.837 234.47c-50.449 50.449-50.449 132.244 0 182.693s132.244 50.449 182.693 0l87.71-87.71L125.547 146.76l-87.71 87.71zM417.163 37.837c-50.449-50.449-132.244-50.449-182.693 0l-87.71 87.71L329.453 308.24l87.71-87.71c50.449-50.449 50.449-132.244 0-182.693z" />
  </Svg>
);

export default SvgPill;
