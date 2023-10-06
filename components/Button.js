import React from 'react';
import debounce from 'lodash.debounce';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {theme} from '../constants';
class ArButton extends React.Component {
  componentDidMount() {
    this.allOnPress = () => {
      this.props.onPress && this.props.onPress();
    };
    this.debounceLen = this.props.customDebounceLength
      ? this.props.customDebounceLength
      : 2000;
    this.onPressDebounce = debounce(this.allOnPress, this.debounceLen, {
      leading: true,
      trailing: false,
    });
  }

  render() {
    const {children, style, testID, onPress, ...props} = this.props;
    return (
      <Button
        onPress={() => this.onPressDebounce()}
        testID={testID}
        buttonStyle={{fontSize: 12, fontWeight: '700', ...style}}
        titleStyle={{
          color: style.color ? style.color : styles.defaultButton.color,
        }}
        title={children}
        {...props}>
        {children}
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  defaultButton: {
    color: theme.COLORS.DEFAULT,
    fontFamily: theme.FONTS.TEXT,
  },
});

export default ArButton;
