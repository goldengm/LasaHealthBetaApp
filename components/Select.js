import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {ListItem} from 'react-native-elements';
import {theme} from '../constants';
import Button from './Button';
import {BottomSheet} from './BottomSheet';
import Icon from './Icon';

const {height} = Dimensions.get('screen');

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    const {
      // data, customTitleFilter, customContentFilter,
      customPrompt,
    } = this.props;
    this.state = {
      value: customPrompt ? customPrompt : 'Please select a category',
      menuVisible: false,
    };
  }

  handleOnSelect = (index, value) => {
    const {onSelect} = this.props;

    this.setState({value: value});
    onSelect && onSelect(index, value);
    this.setMenuVisible(false);
  };

  setMenuVisible = value => {
    this.setState({menuVisible: value});
  };

  render() {
    const {
      onSelect,
      iconName,
      iconFamily,
      iconSize,
      iconColor,
      color,
      style,
      options,
      customIconColor,
      customTextStyle,
      customButtonStyle,
      customContainerStyle,
      customListItemStyle,
      customTitleStyle,
      testID,
      ...props
    } = this.props;

    return (
      <View>
        <Button
          testID={testID}
          onPress={() => {
            this.setMenuVisible(true);
          }}
          title={this.state.value}
          style={{...styles.dropdown, ...customButtonStyle}}
          titleStyle={{
            color: theme.COLORS.WHITE,
            marginRight: 6,
            fontSize: 12,
            ...customTextStyle,
          }}
          icon={
            <Icon
              name="Svg201Down"
              family="amielineal"
              width={14}
              height={14}
              fill={customIconColor ? customIconColor : 'white'}
            />
          }
          iconRight
        />
        <BottomSheet
          isVisible={this.state.menuVisible}
          onBackdropPress={() => this.setMenuVisible(false)}
          containerStyle={{
            backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)',
          }}>
          <View
            style={{
              marginTop:
                options.length >= 9
                  ? height - 300
                  : height - 72 - 50 * options.length,
              ...customContainerStyle,
            }}>
            {options.map((l, i) => (
              <ListItem
                key={i}
                containerStyle={{
                  height: 50,
                  paddingVertical: 0,
                  ...l.containerStyle,
                  ...customListItemStyle,
                }}
                onPress={() => {
                  this.handleOnSelect(i, l.title);
                }}>
                <ListItem.Content
                  style={{alignItems: 'center', ...customTitleStyle}}>
                  <ListItem.Title style={l.titleStyle}>
                    {l.title}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
        </BottomSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 0,
    marginLeft: -16,
    width: '100%',
    backgroundColor: theme.COLORS.DEFAULT,
    fontFamily: theme.FONTS.TEXT,
    borderRadius: 10,
  },
});

export default DropDown;
