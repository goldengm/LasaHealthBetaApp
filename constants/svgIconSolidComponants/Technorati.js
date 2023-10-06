import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTechnorati = (props) => (
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
      d="M227.493 155.737c-52.134 0-94.407 26.549-94.407 59.299 0 32.739 42.272 59.287 94.407 59.287 52.137 0 94.409-26.547 94.409-59.287.001-32.75-42.272-59.299-94.409-59.299z"
    />
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm227.493 339.916c-15.91 0-31.267-1.89-45.747-5.367l-78.799 30.307 19.678-56.667C90.336 285.317 70 252.065 70 215.036c0-68.977 70.511-124.893 157.493-124.893C314.478 90.144 385 146.06 385 215.036c0 68.964-70.522 124.88-157.507 124.88z"
    />
  </Svg>
);

export default SvgTechnorati;
