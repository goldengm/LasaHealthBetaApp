import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMoon2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.842 0 0 114.84 0 256s114.842 256 256 256 256-114.84 256-256S397.158 0 256 0zm-72.083 410.391c14.691 19.4 32.16 36.588 51.623 51.048C131.272 451.133 49.548 362.934 49.548 256S131.272 60.867 235.542 50.561c-19.463 14.46-36.933 31.648-51.623 51.048-33.881 44.742-51.79 98.131-51.79 154.391s17.908 109.649 51.788 154.391z" />
  </Svg>
);

export default SvgMoon2;
