import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBloodTest = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M131.652 127.461h30v214.496h-30zM323.348 127.461h30v214.496h-30z" />
    <Path d="M423.348 127.461V0h-170v127.461h-21.696V0h-170v127.461H0V485h485V127.461h-61.652zM283.348 30h110v300c0 30.327-24.673 55-55 55s-55-24.673-55-55V30zM91.652 30h110v300c0 30.327-24.673 55-55 55s-55-24.673-55-55V30zM455 455H30V157.461h31.652V330c0 46.869 38.131 85 85 85s85-38.131 85-85V157.461h21.696V330c0 46.869 38.131 85 85 85s85-38.131 85-85V157.461H455V455z" />
  </Svg>
);

export default SvgBloodTest;
