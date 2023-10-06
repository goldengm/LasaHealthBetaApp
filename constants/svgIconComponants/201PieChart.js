import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201PieChart = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.842 0 0 114.842 0 256s114.842 256 256 256 256-114.842 256-256S397.158 0 256 0zm-24.774 51.04v180.186H51.04C62.342 137.152 137.152 62.342 231.226 51.04zM256 462.452c-105.454 0-192.682-79.479-204.96-181.677h194.699l137.612 137.612c-35.105 27.591-79.34 44.065-127.351 44.065zm162.387-79.101L280.774 245.739V51.04C382.973 63.318 462.452 150.546 462.452 256c0 48.011-16.474 92.246-44.065 127.351z" />
  </Svg>
);

export default Svg201PieChart;
