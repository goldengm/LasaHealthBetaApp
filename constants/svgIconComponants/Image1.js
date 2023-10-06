import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgImage1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M53.333 42.667V416H512V42.667H53.333zM480 384H85.333v-41.373L176 251.961l85.333 85.333 128-128L480 299.961V384zm0-129.294-90.667-90.667-128 128L176 206.706l-90.667 90.667V74.667H480v180.039z" />
    <Path d="M32 437.333V112H0v357.333h442.667v-32zM261.333 106.667c-26.468 0-48 21.533-48 48s21.532 48 48 48 48-21.532 48-48-21.531-48-48-48zm0 64c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.177 16-16 16z" />
  </Svg>
);

export default SvgImage1;
