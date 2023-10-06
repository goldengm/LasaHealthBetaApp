import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../constants';
import {Text, CheckBox as CheckBoxElement} from 'react-native-elements';
import Icon from './Icon';
import TouchableOpacity from './TouchableOpacity';

class CheckBox extends React.Component {
  render() {
    const {
      style,
      containerStyle,
      customTextStyle,
      testID,
      rightText,
      rightIcon,
      customTitle,
      customSubtitle,
      customOnPress,
      ...props
    } = this.props;

    const checkBoxStyles = {
      ...styles.checkBox,
      ...style,
    };

    const containerStyles = {
      ...styles.checkBoxContainer,
      ...containerStyle,
    };

    const textStyles = {...customTextStyle};

    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <CheckBoxElement
            testID={testID}
            style={checkBoxStyles}
            containerStyle={containerStyles}
            textStyle={textStyles}
            {...props}
          />

          {customTitle && (
            <TouchableOpacity disabled>
              <Text
                style={{
                  marginTop: 9,
                  flexWrap: 'wrap',
                  fontFamily: theme.FONTS.TEXT,
                }}>
                {customTitle}
              </Text>
              {customSubtitle && (
                <Text
                  style={{
                    color: theme.COLORS.TEXT3,
                    flexWrap: 'wrap',
                    fontFamily: theme.FONTS.TEXT,
                  }}>
                  {customSubtitle}
                </Text>
              )}
            </TouchableOpacity>
          )}
        </View>

        {rightText && (
          <TouchableOpacity
            onPress={() => {
              customOnPress ? customOnPress() : null;
            }}>
            <Text style={{marginTop: 11}}>{rightText}</Text>
          </TouchableOpacity>
        )}

        {rightIcon && (
          <TouchableOpacity
            onPress={() => {
              customOnPress ? customOnPress() : null;
            }}>
            <Icon
              name="chevron-forward-outline"
              type="ionicon"
              fill={theme.COLORS.PRIMARY2}
              color={theme.COLORS.PRIMARY2}
              style={{marginTop: 4}}
              width={24}
              height={24}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  checkBox: {
    fontFamily: theme.FONTS.TEXT,
  },
  checkBoxContainer: {
    paddingVertical: 0,
    marginVertical: 0,
    backgroundColor: theme.COLORS.WHITE,
    borderWidth: 0,
    fontFamily: theme.FONTS.TEXT,
  },
});

export default CheckBox;
