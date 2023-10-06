import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Svg048Bargraph = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={302} cy={106} r={60} />
    <Circle cx={452} cy={256} r={60} />
    <Path d="M0 346v120h115.408C101.016 450.041 92 429.134 92 406s9.016-44.041 23.408-60z" />
    <Circle cx={182} cy={406} r={60} />
    <Path d="M0 196v120h385.408C371.016 300.041 362 279.134 362 256s9.016-44.041 23.408-60zM212 106c0-23.134 9.016-44.041 23.408-60H0v120h235.408C221.016 150.041 212 129.134 212 106z" />
  </Svg>
);

export default Svg048Bargraph;
