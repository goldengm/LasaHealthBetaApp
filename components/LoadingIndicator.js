import React from 'react';
import {View} from 'react-native';
import {theme} from '../constants';
import {Overlay} from 'react-native-elements';
import {ActivityIndicator} from 'react-native-paper';

class LoadingIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {loadingVisible, ...props} = this.props;

    return (
      <Overlay
        testID="testID"
        isVisible={loadingVisible}
        fullScreen={false}
        animationType="slide"
        overlayStyle={{
          backgroundColor: theme.COLORS.TRANSPARENT,
          marginHorizontal: 0,
          padding: 0,
          marginTop: theme.SIZES.BASE * 3,
          shadowColor: theme.COLORS.TRANSPARENT,
        }}>
        <View
          style={{
            margin: 0,
            backgroundColor: theme.COLORS.TRANSPARENT,
            borderRadius: 50,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator
            animating={true}
            color={theme.COLORS.DEFAULT}
            size={80}
          />
        </View>
      </Overlay>
    );
  }
}

export default LoadingIndicator;
