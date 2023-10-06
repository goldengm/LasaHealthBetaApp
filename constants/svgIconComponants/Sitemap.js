import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSitemap = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M455.111 329.956v-68.267H273.067v-34.133h113.777V34.133H125.156v193.422h113.778v34.133H56.889v68.267H0v147.911h147.911v-147.91H91.022v-34.133h147.911v34.133h-56.889v147.911h147.911V329.956h-56.889v-34.133h147.911v34.133h-56.889v147.911H512V329.956h-56.889zm-341.333 34.133v79.644H34.133v-79.644h79.645zm182.044 0v79.644h-79.644v-79.644h79.644zM159.289 193.422V68.267H352.71v125.156H159.289zm318.578 250.311h-79.644v-79.644h79.644v79.644z" />
  </Svg>
);

export default SvgSitemap;
