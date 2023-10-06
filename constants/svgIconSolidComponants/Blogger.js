import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBlogger = (props) => (
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
      d="M170.242 189.447h57.177c10.024 0 18.322-8.286 18.322-18.322 0-10.078-8.244-18.322-18.322-18.322h-57.177c-10.052 0-18.336 8.286-18.336 18.322.001 10.078 8.245 18.322 18.336 18.322z"
    />
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm384.805 288.618c0 53.001-44.783 96.382-96.382 96.382H161.915c-46.493 0-91.72-42.909-91.72-95.452V170.047C70.195 114.082 114.277 70 170.242 70h66.608c42.304 0 91.397 47.248 91.397 92.233v8.838c0 9.915 8.003 18.376 21.556 18.376h13.81c17.096 0 21.192 9.485 21.192 23.537v75.634z"
    />
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M283.841 266.726H170.242c-10.052 0-18.336 8.298-18.336 18.336 0 10.078 8.258 18.322 18.336 18.322h113.599c10.024 0 18.336-8.3 18.336-18.322 0-10.092-8.244-18.336-18.336-18.336z"
    />
  </Svg>
);

export default SvgBlogger;
