import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHourglass = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M415 97.272V30h55V0H15v30h55v67.272A172.37 172.37 0 0 0 149.349 242.5 172.37 172.37 0 0 0 70 387.727V455H15v30h455v-30h-55v-67.273A172.368 172.368 0 0 0 335.651 242.5 172.37 172.37 0 0 0 415 97.272zM298.636 228.283l-9.085 3.898v20.636l9.085 3.898A142.425 142.425 0 0 1 385 387.727V455H100v-67.273c0-57.073 33.9-108.498 86.364-131.011l9.085-3.898v-20.636l-9.085-3.898A142.423 142.423 0 0 1 100 97.272V30h285v67.272a142.42 142.42 0 0 1-86.364 131.011z" />
  </Svg>
);

export default SvgHourglass;
