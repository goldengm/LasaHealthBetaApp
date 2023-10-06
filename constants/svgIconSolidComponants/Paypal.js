import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPaypal = (props) => (
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
      d="M225.851 146.291h39.646c1.899 0 3.505.512 5.233.818-3.386-11.896-13.672-19.994-27.278-19.994h-39.629l-17.347 76.733h26.385l12.99-57.557z"
    />
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M225.952 203.696c20.151-.787 39.939-17.399 44.761-38.216.359-1.33.442-2.581.648-3.863h-35.923l-9.486 42.079z"
    />
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm135.276 70h137.931c40.434 0 87.518 29.82 73.504 95.462-12.407 57.986-58.651 92.098-113.973 92.098h-57.816l-19.823 92.951H74.161L135.276 70zm243.048 129.968c-12.39 57.986-58.669 92.098-113.969 92.098H206.54L186.717 385h-80.938l3.364-15.33h68.001l19.806-92.951h57.833c55.304 0 101.565-34.094 113.955-92.081 4.651-21.74 2.494-39.458-3.793-53.576 13.108 15.654 19.911 38.351 13.379 68.906z"
    />
  </Svg>
);

export default SvgPaypal;
