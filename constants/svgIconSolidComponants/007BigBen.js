import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg007Bigben = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M173.5 467h165v45h-165z" />
    <Circle cx={256} cy={324.5} r={37.5} />
    <Path d="M143.5 212v225h225V212zM256 392c-37.22 0-67.5-30.28-67.5-67.5S218.78 257 256 257s67.5 30.28 67.5 67.5S293.22 392 256 392zM158.5 152h195v30h-195zM256 0l-80.65 122h161.3z" />
  </Svg>
);

export default Svg007Bigben;
