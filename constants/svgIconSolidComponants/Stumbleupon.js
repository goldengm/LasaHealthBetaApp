import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgStumbleupon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm227.51 159.876c-9.211 0-16.68 7.449-16.68 16.66V278.46c0 38.89-31.533 70.411-70.423 70.411S70 317.35 70 278.46v-46.322h53.743v44.467c0 9.215 7.453 16.68 16.664 16.68 9.211 0 16.68-7.465 16.68-16.68V176.536c0-38.89 31.534-70.407 70.423-70.407 38.89 0 70.407 31.517 70.407 70.407v20.39l-29.57 10.185-24.177-10.185v-20.39c0-9.212-7.449-16.66-16.66-16.66zM385 278.46c0 38.89-31.517 70.411-70.407 70.411S244.17 317.35 244.17 278.46v-45.396l24.177 10.185 29.57-10.185v45.396c0 9.199 7.465 16.664 16.676 16.664s16.68-7.465 16.68-16.664v-44.467H385v44.467z"
    />
  </Svg>
);

export default SvgStumbleupon;
