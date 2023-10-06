import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCrop = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 475.606 475.606"
    style={{
      enableBackground: "new 0 0 475.606 475.606",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m410 86.819 65.606-65.606L454.394 0l-65.606 65.606H95v-65H65v65H0v30h65v315h315v65h30v-65h65v-30h-65V86.819zm-51.213 8.787L95 359.394V95.606h263.787zm-242.574 285L380 116.819v263.787H116.213z" />
  </Svg>
);

export default SvgCrop;
