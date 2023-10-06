import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";

const Svg042Tree = (props) => (
  <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="m302.397 374.8-31.485 26.809v-89.59c-4.917.849-9.923 1.29-15.006 1.29s-10.089-.441-15.006-1.29v89.572l-31.468-26.818a69.92 69.92 0 0 1-9.816 12.321 70.943 70.943 0 0 1-11.243 9.163l52.528 44.766V512h30.012v-70.973l52.557-44.752a70.93 70.93 0 0 1-11.273-9.182 69.924 69.924 0 0 1-9.8-12.293z" />
    <Ellipse cx={255.906} cy={142.155} rx={87.694} ry={142.155} />
    <Ellipse
      cx={114.642}
      cy={301.638}
      rx={55.502}
      ry={92.11}
      transform="rotate(-45 114.596 301.682)"
    />
    <Ellipse
      cx={397.358}
      cy={301.638}
      rx={92.11}
      ry={55.502}
      transform="rotate(-45 397.333 301.733)"
    />
  </Svg>
);

export default Svg042Tree;
