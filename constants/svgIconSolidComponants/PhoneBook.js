import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPhoneBook = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M55 98.788H19.625v30H55V212.5H15v30h40v83.712H15v30h40V455h70V0H55zM155 0v455h285V0H155zm191.8 307.399c-18.176 1.675-51.221-17.565-81.428-47.771-30.207-30.207-49.446-63.252-47.771-81.428 1.251-13.579 19.862-30.699 19.862-30.699l38.944 38.944-15.532 15.532 62.148 62.148 15.532-15.532 38.944 38.944c.001-.001-17.12 18.61-30.699 19.862z" />
  </Svg>
);

export default SvgPhoneBook;
