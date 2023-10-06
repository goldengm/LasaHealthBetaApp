import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgError = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0C114.616 0 0 114.616 0 256s114.616 256 256 256 256-114.616 256-256S397.384 0 256 0zm165.278 350.445-70.834 70.834L256 326.834l-94.445 94.445-70.834-70.834L185.166 256l-94.445-94.445 70.834-70.833L256 185.166l94.445-94.445 70.834 70.833L326.834 256l94.444 94.445z" />
    <Path d="m374.056 161.555-23.611-23.611L256 232.389l-94.445-94.445-23.611 23.611L232.388 256l-94.444 94.445 23.611 23.611L256 279.611l94.445 94.445 23.611-23.611L279.612 256z" />
  </Svg>
);

export default SvgError;
