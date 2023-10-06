import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPipette = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M465.507 411.631c3.853-21.312-2.833-43.155-18.476-58.799l-15.545-15.545H243.088l109.744 109.744c15.645 15.645 37.484 22.332 58.799 18.476L458.124 512 512 458.124l-46.493-46.493zM281.819 187.621l-94.198 94.198 25.032 25.032h188.396zM246.155 107.463l-22.248 22.248L113.676 19.478c-25.97-25.97-68.227-25.971-94.198 0-25.971 25.971-25.971 68.227 0 94.198L129.71 223.908l-22.248 22.248 36.39 36.39 138.694-138.694-36.391-36.389z" />
  </Svg>
);

export default SvgPipette;
