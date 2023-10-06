import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgLock5 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 470 470"
    style={{
      enableBackground: "new 0 0 470 470",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={235} cy={312.5} r={157.5} />
    <Path d="M162.5 139.546V102.5c0-39.977 32.523-72.5 72.5-72.5s72.5 32.523 72.5 72.5v37.046c.164.069.329.132.493.201a186.953 186.953 0 0 1 29.507 15.724V102.5C337.5 45.981 291.519 0 235 0S132.5 45.981 132.5 102.5v52.97a187.161 187.161 0 0 1 29.507-15.724c.164-.068.329-.131.493-.2z" />
  </Svg>
);

export default SvgLock5;
