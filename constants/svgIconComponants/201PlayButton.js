import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201PlayButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M132.129 0v132.129H0V512h379.871V379.871H512V0H132.129zm198.194 462.452H49.548V181.677h280.774v280.775zm132.129-132.129h-82.581V132.129H181.677V49.548h280.774v280.775z" />
    <Path d="M156.903 228.636v186.857l93.429-93.428z" />
  </Svg>
);

export default Svg201PlayButton;
