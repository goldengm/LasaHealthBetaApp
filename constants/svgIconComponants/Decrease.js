import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDecrease = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v512h512V0H0zm477.867 477.867H34.133V34.133h443.733v443.734z" />
    <Path d="M193.422 96.713v72.574L97.401 73.266 73.266 97.401l96.023 96.023H96.711v34.134h130.845V96.713zM96.712 284.447v34.133h72.576l-96.021 96.022 24.135 24.134 96.021-96.02v72.575h34.134V284.447zM342.716 318.58h72.573v-34.133H284.444v130.844h34.134v-72.577l96.021 96.022 24.135-24.134zM438.734 97.401l-24.135-24.135-96.021 96.021V96.713h-34.134v130.845h130.845v-34.134h-72.578z" />
  </Svg>
);

export default SvgDecrease;
