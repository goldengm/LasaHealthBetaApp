import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPlus = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 426 426"
    style={{
      enableBackground: "new 0 0 426 426",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M278.04 148V0l-130 .682V148H.039l.683 130H148.04v148l130-.683V278h147.922V148H278.04zm117.922 100H248.04v147.476l-70 .367V248H30.565l-.368-70H178.04V30.524l70-.367V178h147.922v70z" />
  </Svg>
);

export default SvgPlus;
