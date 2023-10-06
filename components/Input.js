import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {Input} from 'react-native-elements';
import {theme} from '../constants';

import Icon from './Icon';

class ArInput extends React.Component {
  render() {
    const {
      style,
      iconContent = (
        <Icon
          size={14}
          fill={theme.COLORS.ICON}
          name="Svg040Search"
          family="amielineal"
        />
      ),
      testID,
    } = this.props;

    return (
      <Input
        shadowless={false}
        success={false}
        error={false}
        testID={testID}
        placeholder="write something here"
        containerStyle={{
          ...styles.input,
          ...style,
        }}
        leftIconContainerStyle={{
          marginVertical: 0,
          fontFamily: theme.FONTS.TEXT,
        }}
        leftIcon={iconContent}
        inputContainerStyle={{
          height: 16,
          marginTop: 10,
          paddingTop: 10,
          borderBottomWidth: 0,
        }}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    backgroundColor: theme.COLORS.BACKGROUND2,
    fontFamily: theme.FONTS.TEXT,
    marginVertical: 0,
  },
  success: {
    borderColor: theme.COLORS.INPUT_SUCCESS,
    fontFamily: theme.FONTS.TEXT,
  },
  error: {
    borderColor: theme.COLORS.INPUT_ERROR,
    fontFamily: theme.FONTS.TEXT,
  },
});

export default ArInput;
