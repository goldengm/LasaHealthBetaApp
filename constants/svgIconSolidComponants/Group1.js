import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgGroup1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 335.436 335.436"
    style={{
      enableBackground: "new 0 0 335.436 335.436",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={255.436} cy={110.304} r={44.138} />
    <Path d="M100.725 187.928C45.096 187.928 0 233.024 0 288.653h201.45c0-55.629-45.096-100.725-100.725-100.725zM255.436 184.442c-20.787 0-39.711 7.938-53.931 20.938 14.212 17.138 23.672 37.368 27.712 59.062h106.219c0-44.183-35.818-80-80-80z" />
    <Circle cx={100.725} cy={102.355} r={55.573} />
  </Svg>
);

export default SvgGroup1;
