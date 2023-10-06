import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201BarChart = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M49.548 462.452V0H0v512h512v-49.548z" />
    <Path d="M99.097 247.742h49.548v165.161H99.097zM198.194 115.613h49.548v297.29h-49.548zM297.29 247.742h49.548v165.161H297.29zM396.387 115.613h49.548v297.29h-49.548z" />
  </Svg>
);

export default Svg201BarChart;
