import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg201PhotoCamera = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M384 73.143V0H128v73.143H0V512h512V73.143H384zM256 384c-60.593 0-109.714-49.121-109.714-109.714 0-60.593 49.121-109.714 109.714-109.714s109.714 49.121 109.714 109.714S316.593 384 256 384z" />
    <Circle cx={256} cy={274.286} r={54.857} />
  </Svg>
);

export default Svg201PhotoCamera;
