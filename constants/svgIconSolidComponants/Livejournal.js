import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLivejournal = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    style={{
      enableBackground: "new 0 0 455 455",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="m268.769 306.818 50.575 10.875-10.874-50.586-10.602-44.864c.043-.022-.011-.086-.011-.086L178.027 102.34c-33.126 14.218-59.977 40.248-75.28 72.787l121.135 121.132 44.887 10.559zm23.558-77.353 7.897 34.674c-14.714 7.363-27.06 19.708-34.421 34.432l-34.674-7.896c12.472-27.187 34.011-48.725 61.198-61.21z"
    />
    <Path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M0 0v455h455V0H0zm236.071 385c-81.348 0-147.288-65.94-147.288-147.277 0-22.392 5.027-43.594 13.965-62.596l-31.096-31.088A228.024 228.024 0 0 1 145.69 70l32.337 32.34c17.818-7.646 37.431-11.895 58.043-11.895 81.337 0 147.277 65.94 147.277 147.277S317.408 385 236.071 385z"
    />
  </Svg>
);

export default SvgLivejournal;
