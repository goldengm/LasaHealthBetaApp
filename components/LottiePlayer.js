import React, {useState} from 'react';
import {Animated} from 'react-native';
// import {theme, styles} from '../constants';
import LottieView from 'lottie-react-native';

import {DEBUG_TESTING} from '../constants/AppVersion';

// import {getOS} from '../shared/PlatformUtils';
// const iosPlatform = () => getOS() == 'ios';

function LottierPlayer({
  // route,
  // dispatch,
  lottieFile,
  lottieWidth,
  lottieHeight,
  customStyle,
}) {
  // if (false) {
  //  FIXMETUNA:  revert this for detox testing later
  if (DEBUG_TESTING) {
    return (
      <LottieView
        testID="testID"
        style={{
          marginTop: 10,
          width: lottieWidth,
          height: lottieHeight,
          ...customStyle,
        }}
        source={lottieFile}
        progress={0.5}
      />
    );
  } else {
    const [progress, setProgress] = useState(new Animated.Value(0));

    const durationModifier = Math.floor(Math.random() * 5000);
    const animationDuration = 10000 + durationModifier;
    Animated.loop(
      Animated.sequence([
        Animated.timing(
          progress, // <------ Change here
          {
            toValue: 1,
            duration: animationDuration,
            useNativeDriver: true,
          },
        ),
        Animated.timing(
          progress, // <------ Change here
          {
            toValue: 0,
            duration: animationDuration,
            useNativeDriver: true,
          },
        ),
      ]),
    ).start();

    return (
      <LottieView
        testID="testID"
        style={{
          marginTop: 10,
          width: lottieWidth,
          height: lottieHeight,
          ...customStyle,
        }}
        source={lottieFile}
        progress={progress}
      />
    );
  }
}
export default LottierPlayer;
