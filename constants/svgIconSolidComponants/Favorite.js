import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFavorite = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M372.87 8.348c-49.003 0-92.083 25.336-116.87 63.62-24.786-38.283-67.867-63.62-116.87-63.62C62.29 8.348 0 70.639 0 147.478c0 33.479 11.828 64.194 31.529 88.201L256 503.652 480.471 235.68C500.172 211.673 512 180.959 512 147.478c0-76.84-62.29-139.13-139.13-139.13z" />
  </Svg>
);

export default SvgFavorite;
