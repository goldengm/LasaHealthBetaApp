import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTimeLeft = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M415.681 99.628c-14.024-20.597-31.133-38.575-50.664-53.401h43.782v-30h-115v115h30V55.014C385.945 89.628 425 155.082 425 227.5 425 336.402 336.402 425 227.5 425S30 336.402 30 227.5 118.598 30 227.5 30c4.886 0 9.867.186 14.806.551L244.523.633A231.606 231.606 0 0 0 227.5 0C166.732 0 109.603 23.664 66.633 66.633S0 166.732 0 227.5s23.664 117.897 66.633 160.867S166.732 455 227.5 455s117.897-23.664 160.867-66.633C431.336 345.397 455 288.268 455 227.5c0-45.875-13.597-90.092-39.319-127.872z" />
    <Path d="m212.5 212.475-136.975-.23-.05 30 167.025.28V75.5h-30z" />
  </Svg>
);

export default SvgTimeLeft;
