import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgGroup = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 469.421 469.421"
    style={{
      enableBackground: "new 0 0 469.421 469.421",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={389.421} cy={177.21} r={44.138} />
    <Circle cx={80} cy={177.21} r={44.138} />
    <Path d="M389.421 251.348c-19.914 0-38.114 7.289-52.11 19.332 15.877 17.402 26.864 38.185 32.278 60.668h99.832c0-44.182-35.817-80-80-80zM234.71 255.335c-60.061 0-108.75 48.689-108.75 108.75h217.5c0-60.061-48.689-108.75-108.75-108.75zM80 251.348c-44.183 0-80 35.817-80 80h99.832c5.413-22.483 16.401-43.266 32.278-60.668-13.996-12.042-32.196-19.332-52.11-19.332z" />
    <Circle cx={234.71} cy={165.335} r={60} />
  </Svg>
);

export default SvgGroup;
