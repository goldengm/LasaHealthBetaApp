import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {KeyboardAvoidingView} from 'react-native';

import {theme} from '../../constants';
import {termsOfService} from '../../constants/legal/termsOfService';
import {Footer} from '../../components';
import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

class TermsOfServiceScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <StatusBar
            style={{
              backgroundColor: theme.COLORS.TRANSPARENT,
              fontFamily: theme.FONTS.TEXT,
            }}
            backgroundColor={theme.COLORS.TRANSPARENT}
          />

          <KeyboardAvoidingView
            style={{
              flex: 1,
            }}
            behavior="padding"
            enabled={iosPlatform()}>
            <ScrollView
              testID="pageScrollview"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{width}}>
              <View testID="tosView">{termsOfService()}</View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
        <Footer navigation={navigation} tabName="TOS" />
      </View>
    );
  }
}

export default TermsOfServiceScreen;
