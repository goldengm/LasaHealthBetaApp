import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDong = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 440 440"
    style={{
      enableBackground: "new 0 0 440 440",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M316.562 35V0h-30v35h-40.414v30h40.414v82.911c-20.821-22.673-50.692-36.91-83.829-36.91-62.767 0-113.83 51.064-113.83 113.83v29.681c0 62.766 51.063 113.829 113.83 113.829 33.137 0 63.008-14.236 83.829-36.91v38.765h30V65h39.536V35h-39.536zm-113.83 303.341c-46.224 0-83.83-37.605-83.83-83.829v-29.681c0-46.224 37.606-83.83 83.83-83.83s83.829 37.606 83.829 83.83v29.681c.001 46.224-37.605 83.829-83.829 83.829zM83.902 410h237.659v30H83.902z" />
  </Svg>
);

export default SvgDong;
