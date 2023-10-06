import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgQuestion = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={256} cy={478.609} r={33.391} />
    <Path d="M256 0c-81.626 0-148.035 66.409-148.035 148.035h66.783c0-44.802 36.45-81.252 81.252-81.252s81.252 36.45 81.252 81.252c0 21.703-8.452 42.108-23.798 57.453-20.054 20.053-79.536 75.12-80.135 75.675l-10.711 9.913v120.751h66.783v-91.59c18.43-17.132 55.505-51.747 71.285-67.525 27.961-27.96 43.359-65.135 43.359-104.676C404.035 66.409 337.627 0 256 0z" />
  </Svg>
);

export default SvgQuestion;
