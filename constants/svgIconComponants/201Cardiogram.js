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
    <Path d="M0 0v512h512V0H0zm462.452 462.452H49.548V280.774h102.745l51.245-64.056 99.097 165.161 80.884-101.105h78.932v181.678zm0-231.226H359.705l-51.245 64.056-99.097-165.161-80.884 101.105H49.548V49.548h412.903v181.678z" />
  </Svg>
);

export default Svg201Cardiogram;
