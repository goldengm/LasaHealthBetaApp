import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAi = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M245.177 287.077h-15.859l-27.756 76.086h18.003l5.788-17.039h23.683l5.894 17.039h18.003l-27.756-76.086zm-17.038 46.938 9.109-26.898 8.895 26.898h-18.004zM285.791 287.077h17.575v76.086h-17.575z" />
    <Path d="M346.747 0H47.628v512h416.744V117.625L346.747 0zm10.462 60.979 46.184 46.184h-46.184V60.979zm71.442 415.3H83.349v-35.721h345.302v35.721zm0-71.442H83.349v-154.79h345.302v154.79zm0-190.511H83.349V35.721h238.14v107.163h107.163v71.442z" />
  </Svg>
);

export default SvgAi;
