import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCoffeeCup = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M443.775 70.457 403.507 0H108.493L68.225 70.457H38.957v103.955H73.36L110.522 512h290.956l37.162-337.587h34.403V70.457h-29.268zM127.869 33.391h256.263l21.183 37.065h-298.63l21.184-37.065zm243.693 445.218H140.439l-7.964-72.348h247.05l-7.963 72.348zm11.639-105.739H128.799l-10.624-96.515h275.65l-10.624 96.515zm14.3-129.907H114.499l-7.546-68.55h298.093l-7.545 68.55zm42.151-101.942H72.348v-37.173h367.304v37.173z" />
  </Svg>
);

export default SvgCoffeeCup;
