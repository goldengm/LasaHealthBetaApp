import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPicture = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v455h455V0H0zm259.405 80c17.949 0 32.5 14.551 32.5 32.5s-14.551 32.5-32.5 32.5-32.5-14.551-32.5-32.5 14.551-32.5 32.5-32.5zM375 375H80v-65.556l83.142-87.725 96.263 68.792 69.233-40.271L375 299.158V375z" />
  </Svg>
);

export default SvgPicture;
