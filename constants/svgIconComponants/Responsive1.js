import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgResponsive1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M458.667 101.333V48H0v352h170.667v32h-37.333v32h192v-32H288v-32h170.667v-74.667H512v-224h-53.333zM256 432h-53.333v-32H256v32zm170.667-64H32v-32h394.667v32zM480 293.333h-85.333V256h-32v48H32V80h394.667v21.333h-64v69.333h32v-37.333H480v160z" />
    <Path d="m474.667 213.329-48.578-48.59v32.594H128.578v-32.594L80 213.329l48.578 48.603v-32.599h297.511v32.599z" />
  </Svg>
);

export default SvgResponsive1;
