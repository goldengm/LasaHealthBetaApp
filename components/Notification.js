import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Text} from 'react-native-elements';
import Icon from './Icon';
import {theme} from '../constants';
import TouchableWithoutFeedback from './TouchableWithoutFeedback';

export default class Notification extends React.Component {
  render() {
    const {
      body,
      color,
      iconColor,
      iconFamily,
      iconName,
      iconSize,
      onPress,
      style,
      system,
      time,
      title,
      transparent,
    } = this.props;

    const iconContainer = [
      styles.iconContainer,
      {backgroundColor: color || theme.COLORS.PRIMARY},
      system && {width: 34, height: 34},
      !system && styles.iconShadow,
    ];

    const container = [
      styles.card,
      !transparent && {backgroundColor: theme.COLORS.WHITE},
      !transparent && styles.cardShadow,
      system && {height: 78},
      style,
    ];
    return (
      <View style={{...container, alignContent: 'center'}}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={{width: '95%', flexDirection: 'row'}}>
            <View
              testID='testID'
              style={{
                flex: {system} ? 0.12 : 0.2,
                alignContent: 'center',
                alignItems: 'center',
                alignItems: 'flex-start',
                alignSelf: 'flex-start',
              }}>
              <View style={{...iconContainer, alignContent: 'center'}}>
                <Icon
                  name={iconName}
                  family={iconFamily}
                  size={iconSize || system ? 16 : 22}
                  fill={
                    iconColor || system
                      ? theme.COLORS.DEFAULT
                      : theme.COLORS.WHITE
                  }
                />
              </View>
            </View>
            <View style={{paddingRight: 3, paddingLeft: 12, flex: 1}}>
              {system && (
                <View
                  style={{
                    height: 18,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    h3
                    style={{
                      fontFamily: theme.FONTS.HEADER,
                      color: theme.COLORS.MUTED,
                    }}>
                    {title}
                  </Text>
                  <View style={{marginTop: 3, flexDirection: 'row'}}>
                    <Icon
                      family="amielineal"
                      name="Svg045Clock"
                      size={12}
                      fill={theme.COLORS.MUTED}
                    />
                    <Text
                      h3
                      style={{
                        fontFamily: theme.FONTS.TEXT,
                        marginLeft: 3,
                        marginTop: -3,
                        color: theme.COLORS.MUTED,
                      }}>
                      {time}
                    </Text>
                  </View>
                </View>
              )}
              <Text
                h3
                style={{
                  fontFamily: theme.FONTS.TEXT,
                  color: theme.COLORS.DEFAULT,
                }}>
                {body}
              </Text>
            </View>
            {!system && (
              <View style={{marginTop: 3, flexDirection: 'row', flex: 0.2}}>
                <Icon
                  family="amielineal"
                  name="Svg045Clock"
                  size={12}
                  fill={theme.COLORS.MUTED}
                />
                <Text
                  h3
                  style={{
                    fontFamily: theme.FONTS.TEXT,
                    marginLeft: 3,
                    marginTop: -2,
                    color: theme.COLORS.MUTED,
                  }}>
                  {time}
                </Text>
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

Notification.propTypes = {
  body: PropTypes.string,
  color: PropTypes.string,
  iconColor: PropTypes.string,
  iconFamily: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  onPress: PropTypes.func,
  style: PropTypes.object,
  system: PropTypes.bool,
  time: PropTypes.string,
  title: PropTypes.string,
  transparent: PropTypes.bool,
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginTop: 2,
    fontFamily: theme.FONTS.TEXT,
  },
  iconShadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  card: {
    zIndex: 2,
    height: 127,
    borderRadius: 6,
    fontFamily: theme.FONTS.TEXT,
  },
  cardShadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
    fontFamily: theme.FONTS.TEXT,
  },
});
