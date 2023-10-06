import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHome = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M256 0 0 256v1.113h55.652V512h133.565V333.913h133.566V512h133.565V257.113H512V256z" />
  </Svg>
);

export default SvgHome;
