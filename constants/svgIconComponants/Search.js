import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSearch = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 480.606 480.606"
    style={{
      enableBackground: "new 0 0 480.606 480.606",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M480.606 459.394 352.832 331.619c30.306-35.168 48.654-80.918 48.654-130.876C401.485 90.053 311.433 0 200.743 0S0 90.053 0 200.743s90.053 200.743 200.743 200.743c49.958 0 95.708-18.348 130.876-48.654l127.775 127.775 21.212-21.213zM30 200.743C30 106.595 106.595 30 200.743 30s170.743 76.595 170.743 170.743-76.595 170.743-170.743 170.743S30 294.891 30 200.743z" />
  </Svg>
);

export default SvgSearch;
