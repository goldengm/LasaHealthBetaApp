import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgThermometer1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M316.952 338.355V60.952C316.952 27.29 289.663 0 256 0s-60.952 27.29-60.952 60.952v277.419c-22.287 17.874-36.571 45.314-36.571 76.105C158.476 468.339 202.138 512 256 512c53.86 0 97.524-43.661 97.524-97.524 0-30.795-14.281-58.247-36.572-76.121zM256 451.048c-20.197 0-36.571-16.374-36.571-36.571 0-20.196 16.374-36.571 36.571-36.571s36.571 16.375 36.571 36.571c0 20.196-16.374 36.571-36.571 36.571z" />
  </Svg>
);

export default SvgThermometer1;
