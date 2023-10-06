import React from 'react';
import {Switch} from 'react-native';
import {theme} from '../constants';

import {getOS} from '../shared/PlatformUtils';

class MkSwitch extends React.Component {
  render() {
    const {value, ...props} = this.props;
    const thumbColor =
      getOS() === 'ios'
        ? null
        : getOS() === 'android' && value
        ? theme.COLORS.SWITCH_ON
        : theme.COLORS.SWITCH_OFF;

    return (
      <Switch
        testID='testID'
        value={value}
        thumbColor={thumbColor}
        ios_backgroundColor={theme.COLORS.SWITCH_OFF}
        trackColor={{
          false: theme.COLORS.SWITCH_ON,
          true: theme.COLORS.SWITCH_ON,
        }}
        {...props}
      />
    );
  }
}

export default MkSwitch;
