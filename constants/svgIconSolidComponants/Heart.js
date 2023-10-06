import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHeart = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M329.579 3.592c-42.087 0-79.329 20.732-102.079 52.539-22.75-31.807-59.992-52.539-102.079-52.539C56.153 3.592 0 59.745 0 129.013c0 30.111 10.612 57.741 28.299 79.36L227.5 451.408l199.201-243.035C444.388 186.754 455 159.124 455 129.013 455 59.745 398.847 3.592 329.579 3.592z" />
  </Svg>
);

export default SvgHeart;
