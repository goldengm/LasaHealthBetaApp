import React from 'react';
import {withNavigation} from '@react-navigation/compat';
import PropTypes from 'prop-types';
import {StyleSheet, Image, View} from 'react-native';
import {Text} from 'react-native-elements';
import {theme} from '../constants';
import TouchableWithoutFeedback from './TouchableWithoutFeedback';
class Card extends React.Component {
  render() {
    const {
      // navigation,
      item,
      // full,
      style,
      // ctaColor, imageStyle,
      customOnPress,
    } = this.props;

    return (
      <View
        style={{
          ...styles.card,
          ...style,
        }}>
        <TouchableWithoutFeedback onPress={customOnPress}>
          <View style={{flex: 1}}>
            <View style={{flex: 2}}>
              <View
                style={{
                  // flex: 1,
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={{uri: item.image}} style={styles.headerImage} />
              </View>
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  ...styles.cardDescription,
                }}>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    borderRadius: theme.SIZES.CARD_BORDER_RADIUS,
    marginHorizontal: theme.SIZES.BASE * 0.5,
    fontFamily: theme.FONTS.TEXT,
    width: 190,
    height: 200,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: theme.FONTS.TEXT,
  },
  cardDescription: {
    backgroundColor: theme.COLORS.MUTED,
    padding: theme.SIZES.BASE / 2,
    fontFamily: theme.FONTS.TEXT,
    alignItems: 'center',
  },
  headerImage: {
    width: 190,
    height: 190,

    borderRadius: 20,
    resizeMode: 'cover',
  },

  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
    fontFamily: theme.FONTS.TEXT,
  },
});

export default withNavigation(Card);
