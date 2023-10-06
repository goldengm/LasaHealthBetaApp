import { Dimensions, View } from 'react-native';

import { theme, styles } from '../constants';

const { width } = Dimensions.get('screen');

export default function RoundedTopContainer({ style, children }) {
  return (
    <View
      testID='testID'
      style={{
        ...styles.standardAppBackgroundContainer,
        backgroundColor: theme.COLORS.WHITE,
        borderTopLeftRadius: theme.SIZES.HEADERRADIUS,
        borderTopRightRadius: theme.SIZES.HEADERRADIUS,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.18,
        shadowRadius: 26,
        
        elevation: 8,
        // minHeight: height - theme.SIZES.BASE * 8.6,
        marginTop: theme.SIZES.BASE * 2,
        width: width,
        ...style
      }}>
        {children}
      </View>
  );
}