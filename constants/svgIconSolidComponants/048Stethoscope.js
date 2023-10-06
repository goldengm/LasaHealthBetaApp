import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Svg048Stethoscope = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={151} cy={90} r={90} />
    <Path d="M136 315c0-24.81 20.19-45 45-45s45 20.19 45 45c0 19.55-12.54 36.24-30 42.42V420h90V315c0-74.44-60.56-135-135-135S16 240.56 16 315v105h150v-62.58c-17.46-6.18-30-22.87-30-42.42z" />
    <Circle cx={181} cy={315} r={15} />
    <Path d="M436 120v30h30v45c0 41.355-33.645 75-75 75s-75-33.645-75-75v-45h30v-30h-60v75c0 52.805 39.183 96.623 90 103.924V437c0 24.81-20.19 45-45 45h-90c-24.81 0-45-20.19-45-45v-17h-30v17c0 41.35 33.65 75 75 75h90c41.36 0 75-33.65 75-75V298.924c50.817-7.301 90-51.119 90-103.924v-75z" />
  </Svg>
);

export default Svg048Stethoscope;
