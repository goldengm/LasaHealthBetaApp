import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEmail = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 425 425"
    style={{
      enableBackground: "new 0 0 425 425",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 54.729v315.542h425V54.729H0zm212.5 172.589L54.086 84.729h316.828L212.5 227.318zM151.194 212.5 30 321.588V103.412L151.194 212.5zm22.422 20.182 38.884 35 38.884-35 119.53 107.589H54.086l119.53-107.589zm100.19-20.182L395 103.412v218.176L273.806 212.5z" />
  </Svg>
);

export default SvgEmail;
