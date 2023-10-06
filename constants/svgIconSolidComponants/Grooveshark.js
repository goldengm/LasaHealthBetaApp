import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGrooveshark = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M227.944 102.13c-69.241 0-125.363 56.125-125.363 125.366 0 3.053.114 6.077.331 9.07.681 9.202 4.564 18.086 11.667 23.986 4.007 3.334 8.603 5.518 13.74 5.518 21.574 0 50.044-28.934 50.044-67.044s-3.673-52.345-3.673-52.345 50.055 2.754 87.253 44.993c37.19 42.252 34.9 72.098 56.933 72.098 10.954 0 20.427-6.583 26.959-17.816 5.974-10.26 7.93-22.396 6.459-34.177-7.733-61.817-60.45-109.649-124.35-109.649z"
    />
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm227.499 385.005C140.513 385.005 70 314.481 70 227.496c0-86.988 70.513-157.501 157.499-157.501C314.487 69.995 385 140.508 385 227.496c0 86.985-70.513 157.509-157.501 157.509z"
    />
  </Svg>
);

export default SvgGrooveshark;
