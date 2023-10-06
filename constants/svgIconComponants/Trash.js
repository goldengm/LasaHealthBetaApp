import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTrash = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M344.816 62.694V0H167.184v62.694H62.694v114.939h20.898V512h344.816V177.633h20.898V62.694h-104.49zM198.531 31.347H313.47v31.347H198.531V31.347zm-10.449 449.306h-73.143v-303.02h73.143v303.02zm104.489 0h-73.143v-303.02h73.143v303.02zm104.49 0h-73.143v-303.02h73.143v303.02zm20.898-334.367H94.041V94.041h323.918v52.245z" />
  </Svg>
);

export default SvgTrash;
