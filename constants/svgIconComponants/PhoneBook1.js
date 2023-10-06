import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgPhoneBook1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 484.849 484.849"
    style={{
      enableBackground: "new 0 0 484.849 484.849",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Circle cx={294.924} cy={194.924} r={44.138} />
    <Path d="M374.924 334.062c0-44.183-35.817-80-80-80s-80 35.817-80 80h160z" />
    <Path d="M49.924 0v113.712h-22.5v30h22.5v83.712h-25v30h25v83.712h-25v30h25v113.712h410V0h-410zm30 371.136h25v-30h-25v-83.712h25v-30h-25v-83.712h25v-30h-25V30h50v424.849h-50v-83.713zm350 83.713h-270V30h270v424.849z" />
  </Svg>
);

export default SvgPhoneBook1;
