import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMedicalResult = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M340.154 118.627V0H53.219v512h405.563V118.627H340.154zM262.083 88.21h49.681v30.417h-49.681V88.21zm-141.185 25.256h35.397V78.071h30.417v35.396h35.396v30.417h-35.396v35.396h-30.417v-35.396h-35.397v-30.418zm156.901 108.568v30.417H131.036v-30.417h146.763zm-146.763 101.39h72.748v30.417h-72.748v-30.417zm184.373 131.808H196.592v-30.417h118.817v30.417zm65.555-50.695H131.036V374.12h249.928v30.417zm0-50.695H234.201v-30.417h146.763v30.417zm0-50.696H131.036v-30.417h249.928v30.417zm0-50.695h-72.748v-30.417h72.748v30.417zm0-83.128H262.083v-30.417h118.881v30.417z" />
    <Path d="M370.572 0v88.21h88.21z" />
  </Svg>
);

export default SvgMedicalResult;
