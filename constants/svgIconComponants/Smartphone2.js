import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgSmartphone2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M202.5 395h80v30h-80z" />
    <Path d="M87.5 0v485h310V0h-310zm280 455h-250v-90h250v90zm0-120h-250V100h250v235zm0-265h-250V30h250v40z" />
    <Circle cx={302.5} cy={217.5} r={15} />
    <Circle cx={182.5} cy={217.5} r={15} />
    <Circle cx={242.5} cy={217.5} r={15} />
  </Svg>
);

export default SvgSmartphone2;
