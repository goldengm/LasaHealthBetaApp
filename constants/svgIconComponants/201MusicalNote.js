import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg201MusicalNote = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M0 0v512h512V0H0zm462.452 462.452H49.548V49.548h412.903v412.904z" />
    <Path d="M247.742 148.645v116.103a70.596 70.596 0 0 0-8.258-.491c-32.415 0-57.806 21.765-57.806 49.548s25.392 49.548 57.806 49.548 57.806-21.765 57.806-49.548V198.194h41.29v-49.548h-90.838z" />
  </Svg>
);

export default Svg201MusicalNote;
