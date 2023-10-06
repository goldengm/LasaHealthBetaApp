import React from 'react';
import {View, ScrollView} from 'react-native';
import {theme} from '../constants';
import {Text, Overlay} from 'react-native-elements';
import Button from './Button';

const maxBubbleNameLen = 12;

class CustomModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      navigation,
      modalVisible,
      customOnPress,
      customOnPressText,
      customOnBackdropPress,
      ...props
    } = this.props;

    return (
      <Overlay
        isVisible={modalVisible}
        onBackdropPress={customOnBackdropPress}
        fullScreen={false}
        animationType="slide"
        overlayStyle={{
          backgroundColor: 'transparent',
          marginHorizontal: 0,
          padding: 0,
          marginTop: theme.SIZES.BASE * 3,
          borderRadius: 50,
        }}>
        <ScrollView>
          <View
            testID='testID'
            style={{
              margin: 0,
              backgroundColor: theme.COLORS.WHITE,
              borderRadius: 20,
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {children}

            {customOnPressText && (
              <View style={{marginTop: theme.SIZES.BASE}}>
                <Button
                  style={{
                    borderRadius: 20,
                    padding: 10,
                    backgroundColor: theme.COLORS.DEFAULT,
                    fontFamily: theme.FONTS.TEXT,
                  }}
                  containerStyle={{
                    borderRadius: 20,
                    fontFamily: theme.FONTS.TEXT,
                  }}
                  onPress={customOnPress}>
                  <Text
                    style={{
                      color: theme.COLORS.WHITE,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontFamily: theme.FONTS.TEXT,
                    }}>
                    {customOnPressText}
                  </Text>
                </Button>
              </View>
            )}
          </View>
        </ScrollView>
      </Overlay>
    );
  }
}

// const styles = StyleSheet.create({
//   shadow: {
//     shadowColor: theme.COLORS.BLACK,
//     shadowOffset: {width: 0, height: 4},
//     shadowRadius: 4,
//     shadowOpacity: 0.1,
//     elevation: 2,
//     fontFamily: theme.FONTS.TEXT,
//   },
// });

export default CustomModal;
