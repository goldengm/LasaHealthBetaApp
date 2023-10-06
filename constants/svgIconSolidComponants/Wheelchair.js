import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgWheelchair = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 475.324 475.324"
    style={{
      enableBackground: "new 0 0 475.324 475.324",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M79 259.521v-108h252.496l-2.723 15.593c3.326-.198 6.675-.311 10.051-.311 6.853 0 13.607.423 20.243 1.228l22.326-127.849c.381-2.185 3.236-4.661 5.454-4.661H459v-30h-72.153c-16.747 0-32.124 13-35.006 29.498l-15.106 86.502H49v212h37v69.203a35.128 35.128 0 0 0-17.493 16.797H0v30h68.245c5.56 11.975 17.684 20.282 31.755 20.282 19.33 0 35-15.67 35-35 0-13.563-7.72-25.315-19-31.126v-70.156h56.327c0-.073-.003-.145-.003-.218 0-26.498 6.2-51.543 17.213-73.782H79z" />
    <Circle cx={338.824} cy={333.303} r={136.5} />
  </Svg>
);

export default SvgWheelchair;
