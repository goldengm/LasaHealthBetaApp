import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201Cardiogram = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="m397.182 283.429-89.549 111.937-109.714-182.857-56.737 70.92H0V512h512V283.429z" />
    <Path d="M0 0v228.571h114.816l89.551-111.937 109.714 182.857 56.735-70.92H512V0z" />
  </Svg>
);

export default Svg201Cardiogram;
