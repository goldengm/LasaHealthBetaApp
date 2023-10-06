import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgVenus = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 414.693 414.693"
    style={{
      enableBackground: "new 0 0 414.693 414.693",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M355.578 148.231C355.578 66.496 289.082 0 207.347 0S59.115 66.496 59.115 148.231c0 76.672 58.514 139.933 133.231 147.476v47.601h-41.568v30h41.568v41.385h30v-41.385h41.568v-30h-41.568v-47.601c74.718-7.543 133.232-70.804 133.232-147.476zm-266.463 0C89.115 83.038 142.153 30 207.347 30s118.231 53.038 118.231 118.231-53.038 118.231-118.231 118.231S89.115 213.424 89.115 148.231z" />
  </Svg>
);

export default SvgVenus;
