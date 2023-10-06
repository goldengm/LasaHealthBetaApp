import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgKickstarter = (props) => (
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
      d="M0 0v455h455V0H0zm341.887 373.953c-22.724 17.728-55.513 13.681-73.242-9.043l-71.26-91.334v59.228c0 28.832-23.362 52.197-52.183 52.197s-52.183-23.365-52.183-52.197v-210.61C93.019 93.362 116.381 70 145.202 70s52.183 23.362 52.183 52.194v46.693l56.055-75.314c17.209-23.122 49.902-27.918 73.022-10.717 23.119 17.209 27.918 49.899 10.717 73.033l-48.446 65.082 62.206 79.737c17.728 22.724 13.68 55.513-9.052 73.245z"
    />
  </Svg>
);

export default SvgKickstarter;
