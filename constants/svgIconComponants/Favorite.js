import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFavorite = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v485h485V0H0zm455 455H30V30h425v425z" />
    <Path d="m163.087 365.331 79.413-35.494 79.413 35.494-9.217-86.494 58.298-64.557-85.11-17.962-43.384-75.393-43.384 75.393-85.11 17.962 58.298 64.557-9.217 86.494zm8.126-132.464 47.218-9.965 24.069-41.828 24.069 41.828 47.218 9.965-32.343 35.816 5.113 47.986-44.057-19.692-44.058 19.692 5.113-47.986-32.342-35.816z" />
  </Svg>
);

export default SvgFavorite;
