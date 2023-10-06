import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPhoneBook = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 484.849 484.849"
    style={{
      enableBackground: "new 0 0 484.849 484.849",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M262.797 274.552c30.206 30.206 63.252 49.446 81.428 47.771 13.579-1.252 30.7-19.862 30.7-19.862l-38.945-38.944-15.532 15.532-62.148-62.148 15.532-15.532-38.945-38.944s-18.611 17.12-19.862 30.699c-1.674 18.176 17.565 51.221 47.772 81.428z" />
    <Path d="M49.924 0v113.712h-22.5v30h22.5v83.712h-25v30h25v83.712h-25v30h25v113.712h410V0h-410zm30 371.136h25v-30h-25v-83.712h25v-30h-25v-83.712h25v-30h-25V30h50v424.849h-50v-83.713zm350 83.713h-270V30h270v424.849z" />
  </Svg>
);

export default SvgPhoneBook;
