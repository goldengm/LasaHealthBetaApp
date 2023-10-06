import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLayers = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M369.116 142.884V0H0v369.116h142.884V512H512V142.884H369.116zM35.721 333.395V35.721h297.674v297.674H35.721zm440.558 142.884H178.605V369.116h190.512V178.605H476.28v297.674z" />
  </Svg>
);

export default SvgLayers;
