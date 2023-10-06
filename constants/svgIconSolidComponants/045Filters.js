import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Svg045Filters = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={121} cy={60} r={60} />
    <Circle cx={391} cy={60} r={60} />
    <Circle cx={121} cy={240} r={60} />
    <Circle cx={391} cy={240} r={60} />
    <Path d="M226 270v242h60V270h20.53c-3.362-9.43-5.53-19.429-5.53-30s2.166-20.57 5.528-30H301c-8.276 0-15-6.724-15-15v-90c0-8.276 6.724-15 15-15h5.53c-3.362-9.43-5.53-19.429-5.53-30s2.166-20.57 5.528-30H205.472C208.834 39.43 211 49.429 211 60s-2.166 20.57-5.528 30H211c8.276 0 15 6.724 15 15v90c0 8.276-6.724 15-15 15h-5.528c3.362 9.43 5.528 19.429 5.528 30s-2.166 20.57-5.528 30z" />
  </Svg>
);

export default Svg045Filters;
