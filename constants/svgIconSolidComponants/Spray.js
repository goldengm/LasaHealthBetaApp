import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSpray = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M439.207 164.749h-14.775v-26.362H272.843v26.362h-14.775c-26.51 0-48.076 21.567-48.076 48.076v22.897h214.43v205.305h-214.43V512h277.292V212.825c0-26.51-21.567-48.076-48.077-48.076z" />
    <Path d="M209.991 266.139v31.679h148.527v30.417H209.991v20.278h148.527v30.417H209.991v31.679h184.013v-144.47zM394.772 0h-92.269c-26.51 0-48.076 21.567-48.076 48.076v5.909H111.774V34.388H24.716V104h87.057V84.403h142.651v23.567H442.85V48.076C442.849 21.567 421.281 0 394.772 0z" />
  </Svg>
);

export default SvgSpray;
