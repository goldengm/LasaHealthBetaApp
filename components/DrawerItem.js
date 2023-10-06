import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {theme} from '../constants';
import TouchableOpacity from './TouchableOpacity';

class DrawerItem extends React.Component {
  renderIcon = () => {
    // const {title, focused} = this.props;
    return null;
  };

  render() {
    const {focused, title, navigation, testID} = this.props;

    const isFocused = !(focused == null) && focused;
    return (
      <TouchableOpacity
        testID={testID}
        style={{height: 35}}
        onPress={() => navigation.navigate(title)}>
        <View style={{...styles.defaultStyle, flex: 1, flexDirection: 'row'}}>
          <View style={{marginRight: 5, flex: 0.1, alignContent: 'center'}}>
            {this.renderIcon()}
          </View>
          <View
            style={{
              flex: 0.9,
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: isFocused ? theme.COLORS.MUTED : theme.COLORS.BLACK,
                fontFamily: theme.FONTS.TEXT,
                fontSize: 24,
              }}
              titleStyle={{
                fontWeight: 'bold',
                color: isFocused ? theme.COLORS.MUTED : theme.COLORS.BLACK,
                fontFamily: theme.FONTS.TEXT,
                fontSize: 24,
              }}>
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingHorizontal: 16,
    fontFamily: theme.FONTS.TEXT,
  },
  activeStyle: {
    backgroundColor: theme.COLORS.ACTIVE,
    borderRadius: 4,
    fontFamily: theme.FONTS.TEXT,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    fontFamily: theme.FONTS.TEXT,
  },
});

export default DrawerItem;
