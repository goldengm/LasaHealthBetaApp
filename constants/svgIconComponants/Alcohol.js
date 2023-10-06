import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAlcohol = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M320.823 76.385V0H164.177v76.385C122.12 103.104 96.33 149.611 96.33 199.806V485h292.34V199.806c0-50.195-25.79-96.702-67.847-123.421zm-30-46.385v40h-96.646V30h96.646zm-107.818 70h118.99c30.73 18.348 51.132 49.735 55.7 84.806h-230.39c4.568-35.071 24.97-66.458 55.7-84.806zM358.67 214.806V385H126.33V214.806h232.34zM126.33 455v-40h232.34v40H126.33z" />
    <Path d="M180.839 314.903H227.5v46.661h30v-46.661h46.661v-30H257.5v-46.662h-30v46.662h-46.661z" />
  </Svg>
);

export default SvgAlcohol;
