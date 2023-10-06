import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgYandex = (props) => (
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
      d="M239.617 96.701c-4.959.81-40.899 8.884-40.899 71.393 0 28.536 7.16 45.725 15.384 56.06 7.921 9.948 20.203 15.413 32.918 15.413h22.249V96.62h-28.596c-.355 0-.7.021-1.056.081z"
    />
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm303.619 385h-33.414V267.415h-23.518L193.466 385h-42.085l66.839-120.68s-56.312-25.99-56.312-90.354C161.908 109.611 206.782 70 244.446 70h59.173v315z"
    />
  </Svg>
);

export default SvgYandex;
