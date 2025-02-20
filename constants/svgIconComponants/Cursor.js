import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCursor = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M366.26 277.388 512 183.086 0 0l183.086 512 94.303-145.74 74.075 74.075c11.867 11.867 27.648 18.404 44.433 18.406h.006c16.784 0 32.563-6.536 44.433-18.406 24.501-24.503 24.501-64.371 0-88.872l-74.076-74.075zm44.453 133.324a20.798 20.798 0 0 1-14.808 6.136h-.003a20.817 20.817 0 0 1-14.814-6.135l-110.72-110.721-76.388 118.053L69.258 69.258 418.044 193.98l-118.053 76.388 110.72 110.72c8.169 8.167 8.169 21.457.002 29.624z" />
  </Svg>
);

export default SvgCursor;
