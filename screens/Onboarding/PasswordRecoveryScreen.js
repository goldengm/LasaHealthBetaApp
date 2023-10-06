import React from 'react';
import {Dimensions, KeyboardAvoidingView, View, Image} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
// import Purchases from 'react-native-purchases';
import 'firebase/compat/firestore';

import {auth, deleteLoginCredentials} from '../../shared/firebaseUtils';
import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';
import {Button, Input} from '../../components';
import {Images, theme, styles} from '../../constants';
import {getOS} from '../../shared/PlatformUtils';

const {width} = Dimensions.get('screen');
const iosPlatform = () => getOS() == 'ios';

// const passwordComplexityRegex =
//   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;

class PasswordRecoveryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;
    this.state = {
      email: '',
    };
  }

  resetLocalAuth = () => {
    Promise.resolve()
      .then(() => auth.signOut(auth))
      .then(() => deleteLoginCredentials())
      //  FIXMETUNA:  add for revenuecat
      // .then(() => Purchases.logOut())
      .catch(error => {
        console.log(error);
      });
  };

  requestPasswordRecoveryEmail = async () => {
    const {navigation} = this.props;
    console.log('Trying to get recovery email for: ', this.state.email);

    if (this.state.email && !(this.state.email == '')) {
      auth
        .sendPasswordResetEmail(this.state.email)
        .then(results => {
          console.log(results);
          alert(
            'Password recovery email sent! Please check your email to continue.',
          );
          navigation.navigate('LoginMain');
        })
        .catch(error => {
          console.log(error);
          alert(error);
          alert('Password recovery failed, please try again later.');
          navigation.navigate('LoginMain');
        });
    }
  };

  componentDidMount() {
    // const {navigation, route} = this.props;
    this.mixpanel.track('passwordRecoveryScreen_reached');
    this.resetLocalAuth();
  }

  setEmail = async email => {
    this.setState({email: email.toString().toLowerCase().trim()});
  };

  render() {
    // const {navigation} = this.props;

    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar style="grey" />

        <KeyboardAvoidingView
          style={{
            flex: 1,
            ...styles.registerContainer,
          }}
          behavior="padding"
          enabled={iosPlatform()}>
          <ScrollView testID="pageScrollview" style={{flex: 1}}>
            <View>
              <KeyboardAvoidingView
                style={{
                  flex: 1,
                  ...styles.registerContainer,
                }}
                behavior="padding"
                enabled={iosPlatform()}>
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <Image
                    source={Images.onboarding.LoginLogo}
                    style={{
                      ...styles.headerIconSmall,
                      height: 140,
                      width: 270,
                      marginVertical: theme.SIZES.BASE * 0.5,
                    }}
                  />

                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: 'bold',
                      paddingVertical: 0,
                      marginTop: 0,
                      marginBottom: theme.SIZES.BASE * 0.5,
                      color: theme.COLORS.TEXT1,
                    }}>
                    Recover Password
                  </Text>
                </View>

                <View style={{width: width * 0.9}}>
                  <Input
                    testID="emailInput"
                    placeholder="Email"
                    style={{
                      marginVertical: theme.SIZES.BASE,
                    }}
                    onChangeText={this.setEmail}
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{marginBottom: theme.SIZES.BASE}}>
                    <Button
                      customDebounceLength={8000}
                      testID="resetPasswordEmailButton"
                      style={{
                        ...styles.button,
                        width: width * 0.9,
                      }}
                      onPress={() => {
                        console.log('Sending email to reset password');
                        this.requestPasswordRecoveryEmail();
                      }}
                      titleStyle={{
                        color: theme.COLORS.WHITE,
                        fontFamily: theme.FONTS.HEADER,
                      }}
                      title="Send Recovery Email"
                    />
                  </View>
                </View>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
    connect: state.connect,
    localState: state,
  };
};
export default connect(mapStateToProps)(PasswordRecoveryScreen);
