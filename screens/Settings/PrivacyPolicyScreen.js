import React from 'react';
import {ScrollView, StyleSheet, Dimensions, Image, View} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';

import {tabs, theme, styles} from '../../constants';
import Images from '../../constants/Images';
import {privacyPolicy} from '../../constants/legal/privacyPolicy';
import {
  Button,
  Select,
  Icon,
  Input,
  Header,
  Switch,
  Footer,
} from '../../components';
import {auth} from '../../shared/firebaseUtils';
import {KeyboardAvoidingView} from 'react-native';
import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

const {width, height} = Dimensions.get('screen');

class PrivacyPolicyScreen extends React.Component {
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
            style={{backgroundColor: theme.COLORS.TRANSPARENT}}
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
              <View testID="ppView">{privacyPolicy()}</View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
        <Footer navigation={navigation} tabName="Privacy" />
      </View>
    );
  }
}

export default PrivacyPolicyScreen;
