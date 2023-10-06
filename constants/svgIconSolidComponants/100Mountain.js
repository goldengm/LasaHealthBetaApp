import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg100Mountain = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M105.203 210.405.975 364.481v117.835l144.084-212.993zM398.903 375.939l-45.638 41.614-48.64-44.351-48.633 44.352-48.634-44.351-48.632 44.352-45.631-41.615L21.054 512h469.89zM406.797 210.405l-39.857 58.918 144.085 212.993V364.481z" />
    <Path d="M272.632 189.277V68.479h83.16V12.936L239.368 0v189.277L131.93 348.097l26.796 24.438 48.631-44.352 48.635 44.353 48.633-44.352 48.64 44.353 26.803-24.44z" />
  </Svg>
);

export default Svg100Mountain;
