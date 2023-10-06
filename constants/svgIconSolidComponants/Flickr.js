import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFlickr = (props) => (
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
      d="M0 0v455h455V0H0zm140.599 297.5C101.601 297.5 70 266.158 70 227.517c0-38.675 31.601-70.018 70.599-70.018 38.981 0 70.582 31.343 70.582 70.018 0 38.641-31.6 69.983-70.582 69.983zm173.802 0c-38.981 0-70.582-31.343-70.582-69.983 0-38.675 31.601-70.018 70.582-70.018 38.999 0 70.599 31.343 70.599 70.018 0 38.641-31.601 69.983-70.599 69.983z"
    />
  </Svg>
);

export default SvgFlickr;
