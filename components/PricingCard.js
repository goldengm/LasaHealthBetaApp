import React from 'react';
import debounce from 'lodash.debounce';

import {PricingCard} from 'react-native-elements';
import {theme} from '../constants';
class ArButton extends React.Component {
  componentDidMount() {
    this.allOnPress = () => {
      this.props.onButtonPress && this.props.onButtonPress();
    };
    this.debounceLen = this.props.customDebounceLength
      ? this.props.customDebounceLength
      : 8000;
    this.onPressDebounce = debounce(this.allOnPress, this.debounceLen, {
      leading: true,
      trailing: false,
    });
  }

  render() {
    const {children, testID, onButtonPress, ...props} = this.props;
    return (
      <PricingCard
        onButtonPress={() => this.onPressDebounce()}
        testID={testID}
        {...props}>
        {children}
      </PricingCard>
    );
  }
}

// const styles = StyleSheet.create({
//   defaultButton: {
//     color: theme.COLORS.DEFAULT,
//     fontFamily: theme.FONTS.TEXT,
//   },
// });

export default ArButton;
