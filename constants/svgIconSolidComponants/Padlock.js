import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPadlock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M89.044 244.87V512h333.913V244.87H89.044zm183.652 145.783v49h-33.391v-49c-9.977-5.774-16.696-16.555-16.696-28.914 0-18.442 14.949-33.391 33.391-33.391s33.391 14.949 33.391 33.391c0 12.357-6.718 23.139-16.695 28.914zM256 0c-73.766 0-133.565 59.799-133.565 133.565v77.913h66.783v-77.913c0-36.824 29.959-66.783 66.783-66.783s66.783 29.959 66.783 66.783v77.913h66.783v-77.913C389.567 59.799 329.766 0 256 0z" />
  </Svg>
);

export default SvgPadlock;
