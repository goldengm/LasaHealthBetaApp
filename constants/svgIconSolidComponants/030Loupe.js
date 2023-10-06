import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg030Loupe = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M211 467h90v45h-90zM211 392h90v45h-90z" />
    <Circle cx={256} cy={165} r={75} />
    <Path d="M256 0C165.019 0 91 74.019 91 165c0 74.004 49.775 139.896 120 159.774V362h90v-37.226c70.225-19.878 120-85.77 120-159.774C421 74.019 346.981 0 256 0zm0 270c-57.891 0-105-47.109-105-105S198.109 60 256 60s105 47.109 105 105-47.109 105-105 105z" />
  </Svg>
);

export default Svg030Loupe;
