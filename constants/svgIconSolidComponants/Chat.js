import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChat = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v400.696h89.044V512l111.304-111.304H512V0H0zm420.73 283.826H91.27v-33.391h329.46v33.391zm0-66.783H91.27v-33.391h329.46v33.391zm0-66.782H91.27V116.87h329.46v33.391z" />
  </Svg>
);

export default SvgChat;
