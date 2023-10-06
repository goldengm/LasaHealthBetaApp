import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBing = (props) => (
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
      d="M227.5 184.411c-55.362 0-100.251 32.157-100.251 71.779 0 39.691 44.889 71.899 100.251 71.899 55.375 0 100.262-32.247 100.262-71.899.001-39.622-44.887-71.779-100.262-71.779zm0 119.306c-36.593.052-66.283-21.211-66.283-47.526 0-26.221 29.69-47.445 66.283-47.445 36.605 0 66.201 21.224 66.201 47.445.001 26.328-29.595 47.526-66.201 47.526z"
    />
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm227.5 364.025c-85.508 0-154.914-46.673-157.224-104.827H70V90.975h57.25v82.082c27.3-15.381 62.227-24.62 100.251-24.62 87.019 0 157.5 48.272 157.5 107.715C385 315.699 314.52 364.025 227.5 364.025z"
    />
  </Svg>
);

export default SvgBing;
