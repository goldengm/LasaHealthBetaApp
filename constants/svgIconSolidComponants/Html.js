import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHtml = (props) => (
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
      d="m270.224 233.017-4.34 44.883-38.784 10.43-38.585-10.43-2.558-27.563h-34.453l4.329 54.736 71.267 19.682h.791v-.2l70.675-19.482 9.853-107.101H181.625l-2.948-35.63h132.691l3.15-34.456H140.482l9.252 105.131z"
    />
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm340.903 353.109L227.1 385l-113-31.891L88.897 70h277.207l-25.201 283.109z"
    />
  </Svg>
);

export default SvgHtml;
