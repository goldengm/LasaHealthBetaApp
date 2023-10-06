import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCream = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M211.341 442.895 209.618 512h31.192v-69.105zM151.415 442.895 147.969 512h31.251l1.723-69.105zM344.249 115.236c-1.095-21.948-18.643-39.287-40.365-40.336L298.215 0h-84.429l-5.671 74.9c-21.722 1.049-39.27 18.388-40.364 40.337l-1.969 39.497h129.741l10.384 208.278h-150.51l-2.466 49.467h206.137l-14.819-297.243zM300.659 442.895h-29.47V512h31.192zM360.585 442.895h-29.528L332.78 512h31.251z" />
    <Path d="M266.584 185.15H164.265l-1.654 33.166h87.193v30.417h-88.71l-1.01 20.278h89.72v30.418h-91.236l-1.654 33.165h117.021z" />
  </Svg>
);

export default SvgCream;
