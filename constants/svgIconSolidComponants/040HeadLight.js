import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Svg040Headlight = (props) => (
  <Svg
    height={512}
    viewBox="0 0 510 510"
    width={512}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M60 225v150h48.052c-24.08-46.99-24.083-103.006 0-150H60zM401.948 375H450V225h-48.052c24.08 46.99 24.083 103.006 0 150z" />
    <Circle cx={255} cy={300} r={30} />
    <Path d="M255 165c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.56 135-135-60.56-135-135-135zm0 195c-33.084 0-60-26.916-60-60s26.916-60 60-60 60 26.916 60 60-26.916 60-60 60zM480 255h30v90h-30zM0 255h30v90H0zM240 75h30v60h-30zM129.505 112.641l25.98-15 30 51.96-25.98 15zM324.506 149.613l30-51.96 25.98 15-30 51.96z" />
  </Svg>
);

export default Svg040Headlight;
