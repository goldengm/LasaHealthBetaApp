import React from 'react';
import {
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Image,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';

import {theme, styles} from '../constants';
import Images from '../constants/Images';
import {Button, Input, Footer} from '../components';
import {auth, db} from '../shared/firebaseUtils';
import {getOS} from '../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width} = Dimensions.get('screen');

class ReferAFriendScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    };
  }

  handleFirstNameChange = firstName => {
    this.setState({firstName});
  };
  handleLastNameChange = lastName => {
    this.setState({lastName});
  };
  handleEmailChange = email => {
    this.setState({email});
  };
  handlePhoneChange = phone => {
    this.setState({phone});
  };
  handleMessageChange = message => {
    this.setState({message});
  };

  renderSocial = () => {
    const {navigation} = this.props;

    return (
      <View style={{...styles.group, flex: 1}}>
        <View style={{paddingHorizontal: theme.SIZES.BASE}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
              }}>
              <Image
                source={Images.amieBranding.LogoText}
                style={styles.headerIconSmall}
              />
            </View>
            <View
              style={{
                flex: 2,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                h2
                style={{
                  marginBottom: theme.SIZES.BASE / 2,
                  textAlign: 'center',
                  color: theme.COLORS.DEFAULT,
                  fontFamily: theme.FONTS.TEXT,
                }}>
                Who else could {'\n'}we help?
              </Text>
            </View>
          </View>
        </View>

        <Text h3 style={{...styles.title, fontWeight: 'bold'}}>
          Name
        </Text>
        <View
          style={{
            paddingHorizontal: theme.SIZES.BASE,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
            }}>
            <Input
              testID="firstNameInput"
              placeholder="first"
              iconContent={<View />}
              onChangeText={this.handleFirstNameChange}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <Input
              testID="lastNameInput"
              placeholder="last"
              iconContent={<View />}
              onChangeText={this.handleLastNameChange}
            />
          </View>
        </View>
        <Text h3 style={{...styles.title, fontWeight: 'bold'}}>
          Contact
        </Text>
        <View style={{paddingHorizontal: theme.SIZES.BASE}}>
          <Input
            testID="emailInput"
            placeholder="email address"
            iconContent={<View />}
            onChangeText={this.handleEmailChange}
          />
          <Input
            testID="mobileNumberInput"
            placeholder="mobile number"
            iconContent={<View />}
            onChangeText={this.handlePhoneChange}
          />
        </View>
        <Text h3 style={{...styles.title, fontWeight: 'bold'}}>
          Message
        </Text>
        <View style={{paddingHorizontal: theme.SIZES.BASE}}>
          <Input
            testID="messageInput"
            placeholder="I think you would really like Lasa Health! You should try it!"
            style={{
              borderColor: theme.COLORS.DEFAULT,
              borderRadius: 4,
              backgroundColor: '#fff',
            }}
            multiline={true}
            iconContent={<View />}
            onChangeText={this.handleMessageChange}
          />
        </View>
        <View
          style={{
            paddingHorizontal: theme.SIZES.BASE * 2,
            alignItems: 'flex-end',

            marginVertical: theme.SIZES.BASE,
          }}>
          <Button
            testID="submitButton"
            style={{...styles.button, color: theme.COLORS.DEFAULT}}
            title="Submit"
            titleStyle={{
              color: theme.COLORS.WHITE,
              fontFamily: theme.FONTS.TEXT,
            }}
            onPress={() => {
              const {firstName, lastName, email, phone, message} = this.state;
              const uid = auth.currentUser['uid'];
              Promise.resolve()
                .then(() => {
                  db.collection('ReferAFriend').add({
                    uid,
                    firstName,
                    lastName,
                    email,
                    phone,
                    message,
                  });
                })
                .then(() => {
                  return navigation.navigate('Home');
                })
                .catch(error => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  alert(errorMessage);
                  return errorMessage;
                });
            }}></Button>
        </View>
      </View>
    );
  };

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
              <KeyboardAvoidingView
                style={{
                  flex: 1,
                }}
                enabled>
                {this.renderSocial()}
              </KeyboardAvoidingView>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
        <Footer navigation={navigation} tabName="Refer" />
      </View>
    );
  }
}

export default ReferAFriendScreen;
