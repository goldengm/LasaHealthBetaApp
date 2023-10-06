import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgInhaler = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M394.807 322.119v-22.658h-93.434L250 41.204l-21.142 4.205L219.826.005 12.114 41.32l9.033 45.405L0 90.932l83.759 421.063h311.049v-22.657H512V322.119H394.807zM195.917 35.785l3.095 15.561-47.386 9.426L50.991 80.789l-3.095-15.561 148.021-29.443zm168.461 445.779H108.731l-72.95-366.725 110.723-22.025 79.588-15.831L276.4 329.889h87.977v151.675zm74.591-22.656h-44.162v-106.36h44.162v106.36zm42.601 0h-12.172v-106.36h12.172v106.36z" />
  </Svg>
);

export default SvgInhaler;
