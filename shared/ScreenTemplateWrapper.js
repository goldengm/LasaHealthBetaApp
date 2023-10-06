import React from 'react';
import {ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useHeaderHeight} from '@react-navigation/elements';
import {HeaderHeightContext} from '@react-navigation/elements';
import {Images, theme, styles} from '../constants';

import {getOS} from '../shared/PlatformUtils';
const iosPlatform = () => getOS() == 'ios';

const ScreenTemplate = ({
  children,
  headerPadding,
  width,
  customImageName,
  customLinearGradient,
  customHeaderPaddingHeight = 0,
}) => {
  //useHeaderHeight is a hook that gives you the height of the header

  const headerHeight = iosPlatform()
    ? theme.SIZES.BASE * 4.3
    : theme.SIZES.BASE * 3.3;

  if (customImageName) {
    return (
      <ImageBackground
        testID='testID'
        source={customImageName}
        resizeMode="cover"
        style={{
          justifyContent: 'center',
          marginTop: 0,
          paddingTop: headerPadding ? headerHeight : 0,
          flex: 1,
          width: '100%',
          height: '120%',
        }}>
        {children}
      </ImageBackground>
    );
  } else {
    return (
      <LinearGradient
        colors={
          customLinearGradient
            ? customLinearGradient
            : [
                theme.COLORS.TERTIARY5,
                theme.COLORS.TERTIARY5,
                theme.COLORS.BACKGROUND1,
                theme.COLORS.BACKGROUND1,
                theme.COLORS.ERROR5,
              ]
        }
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={{
          flex: 1,
          paddingTop: headerPadding ? headerHeight : 0,
        }}>
        {children}
      </LinearGradient>
    );
  }
};

export default ScreenTemplate;
