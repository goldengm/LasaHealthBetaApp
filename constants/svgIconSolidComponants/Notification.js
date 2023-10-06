import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNotification = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M176.462 447.626C184.165 484.453 216.843 512 255.994 512s71.829-27.547 79.533-64.374H176.462zM454.566 299.678c0 .033-397.144.033-397.144.033a103.184 103.184 0 0 0-21.219 47.735h439.582c-2.914-17.821-10.403-34.193-21.219-47.768zM412.03 136.479C400.157 59.674 335.835 0 255.994 0S111.832 59.674 99.959 136.479c-4.309 27.87-16.934 97.687-22.791 129.841H434.82c-5.856-32.153-18.482-101.971-22.79-129.841zM34.844 380.839h442.312v33.391H34.844z" />
  </Svg>
);

export default SvgNotification;
