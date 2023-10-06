import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgXing = (props) => (
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
      d="M0 0v455h455V0H0zm78.75 289.756 54.653-89.993-40.981-72.205h69.366l41.002 72.205-54.657 89.993H78.75zM337.369 385h-73.605l-70.442-123.493L302.663 70h73.587L266.91 261.507 337.369 385z"
    />
  </Svg>
);

export default SvgXing;
