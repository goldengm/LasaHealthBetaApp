import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";

const SvgSmartphone = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.999 511.999"
    style={{
      enableBackground: "new 0 0 511.999 511.999",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M371.332 0H140.667c-25.461 0-46.175 20.714-46.175 46.175v419.65c0 25.461 20.714 46.175 46.175 46.175h230.665c25.461 0 46.175-20.714 46.175-46.175V46.175C417.507 20.714 396.793 0 371.332 0zM127.884 46.175c0-7.049 5.734-12.783 12.783-12.783h230.665c7.049 0 12.783 5.734 12.783 12.783v32.941H127.884V46.175zm0 66.331h256.232v255.331H127.884V112.506zm256.232 353.319c-.001 7.049-5.735 12.783-12.784 12.783H140.667c-7.049 0-12.783-5.734-12.783-12.783V401.23h256.233v64.595z" />
    <Ellipse cx={255.999} cy={439.919} rx={24.587} ry={24.387} />
  </Svg>
);

export default SvgSmartphone;
