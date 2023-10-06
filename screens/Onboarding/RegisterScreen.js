import React from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Linking,
  View,
  Image,
} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
// import Purchases from 'react-native-purchases';
import {updateProfile, createUserWithEmailAndPassword} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import {
  auth,
  syncServerUserSaveState,
  db,
  encryptPassword,
} from '../../shared/firebaseUtils';
import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';
// import {hasPremiumAccess} from '../../shared/ServerUtils';
import {
  Button,
  CheckBox,
  Input,
  Modal,
  TouchableOpacity,
} from '../../components';
import {Images, theme, styles} from '../../constants';
import {termsOfService} from '../../constants/legal/termsOfService';
import {privacyPolicy} from '../../constants/legal/privacyPolicy';
import {createUserProfileAction} from '../../redux/actions/userProfileActions';
import {initializeEndo101CourseAction} from '../../redux/actions/learnActions';
import {updateUserPublicProfileUIDAction} from '../../redux/actions/userPublicProfileActions';
import {
  makeUserDbOwnerAction,
  resetDBToDefaultAction,
} from '../../redux/actions/sessionManagementActions';
import {
  syncDeviceTokenFCM,
  refreshPushNotifications,
  removeAllPushNotifications,
} from '../../shared/NotificationManager';

import {getOS} from '../../shared/PlatformUtils';

const {width} = Dimensions.get('screen');
const iosPlatform = () => getOS() == 'ios';
const passwordComplexityRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;
    this.state = {
      tosModalVisible: false,
      tosWarningVisible: false,
      readTosModalVisible: false,
      readPrivacyModalVisible: false,
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      allTosAccepted: false,
      tos1Accepted: false,
      tos2Accepted: false,
      tos3Accepted: false,
      tos4Accepted: false,
      tos5Accepted: false,
    };
  }

  registerUserFB = async newEncryptedPassword => {
    return auth
      .createUserWithEmailAndPassword(
        this.state.email.toString().trim(),
        newEncryptedPassword.toString().trim(),
      )
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: this.state.username,
        })
          .then(() => {
            // Profile updated!
          })
          .catch(error => {
            console.log(error);
          });
      })

      .then(result => {
        if (!(auth.currentUser == null)) {
          // Signed in
          // identify must be called before
          // user profile properties can be set
          this.mixpanel.identify(auth.currentUser?.uid);

          // // Sets user 13793's "Plan" attribute to "Premium"
          // Promise.resolve()
          //   .then(() => hasPremiumAccess(this.props.userProfile))
          //   .then(result => {
          //     this.mixpanel
          //       .getPeople()
          //       .set('Plan', result ? 'Premium' : 'Standard');
          //   });

          let initialConditionNames = [];
          Object.keys(
            this.props.userProfile.OnboardingAnswers.onboarding
              .initialConditions,
          ).forEach(entry => {
            initialConditionNames = initialConditionNames.concat(
              entry.toLowerCase(),
            );
          });

          let hasEndo = 'No';
          if (
            initialConditionNames.includes('endo') ||
            initialConditionNames.includes('endometriosis')
          ) {
            hasEndo = 'Yes';
          }
          if (
            !this.props.endoCourse.week1.module2Q1HasEndo == '' &&
            !this.props.endoCourse.week1.module2Q1HasEndo ==
              "I don't think I have endometriosis, but I am interested in learning more."
          ) {
            hasEndo = this.props.endoCourse.week1.module2Q1HasEndo;
          }

          const birthYear =
            this.props.userProfile.OnboardingAnswers.onboarding.birthday.split(
              '/',
            )[2];
          this.mixpanel.getPeople().set('BirthYear', birthYear);
          this.mixpanel.getPeople().set('Conditions', initialConditionNames);
          this.mixpanel.getPeople().set('HasEndo', hasEndo);
          return null;
        } else {
          return null;
        }
      })

      .catch(error => {
        console.log(error);
        alert(error.message);
        // ..
      });
  };

  componentDidMount() {
    // const {navigation, route} = this.props;
    this.mixpanel.track('registerScreen_reached');
  }

  resetDBToDefault = async () => {
    return this.props.dispatch(resetDBToDefaultAction());
  };

  setDbOwnership = async () => {
    return this.props.dispatch(makeUserDbOwnerAction());
  };

  registerRedux = async () => {
    return this.props.dispatch(
      createUserProfileAction(this.state.username, this.state.email),
    );
  };

  setupEndo101CourseRedux = async () => {
    return this.props.dispatch(initializeEndo101CourseAction());
  };

  setUsername = async username => {
    this.setState({username: username.toString().toLowerCase().trim()});
  };

  setEmail = async email => {
    this.setState({email: email.toString().toLowerCase().trim()});
  };
  setPassword = async password => {
    this.setState({password: password.toString().trim()});
  };
  setConfirmPassword = async confirmPassword => {
    this.setState({confirmPassword: confirmPassword.toString().trim()});
  };

  setTosModalVisible = async visible => {
    this.setState({tosModalVisible: visible});
  };

  setTosWarningVisible = async visible => {
    this.setState({tosWarningVisible: visible});
  };

  setReadTosModalVisible = async visible => {
    this.setState({readTosModalVisible: visible});
  };
  setReadPrivacyModalVisible = async visible => {
    this.setState({readPrivacyModalVisible: visible});
  };

  checkAllTosAccepted = async () => {
    if (
      this.state.tos1Accepted &&
      this.state.tos2Accepted &&
      this.state.tos3Accepted &&
      this.state.tos4Accepted &&
      this.state.tos5Accepted
    ) {
      this.setState({allTosAccepted: true});
    } else {
      this.setState({allTosAccepted: false});
    }
  };

  setAllTos = async value => {
    this.setState({tos1Accepted: value});
    this.setState({tos2Accepted: value});
    this.setState({tos3Accepted: value});
    this.setState({tos4Accepted: value});
    this.setState({tos5Accepted: value});
    this.setState({allTosAccepted: value});
  };
  setTos1 = async value => {
    this.setState({tos1Accepted: value}, () => this.checkAllTosAccepted());
  };
  setTos2 = async value => {
    this.setState({tos2Accepted: value}, () => this.checkAllTosAccepted());
  };
  setTos3 = async value => {
    this.setState({tos3Accepted: value}, () => this.checkAllTosAccepted());
  };
  setTos4 = async value => {
    this.setState({tos4Accepted: value}, () => this.checkAllTosAccepted());
  };
  setTos5 = async value => {
    this.setState({tos5Accepted: value}, () => this.checkAllTosAccepted());
  };

  tosModal = navigation => {
    const {tosModalVisible} = this.state;
    return (
      <Modal
        modalVisible={tosModalVisible}
        customOnPressText={'Get Started'}
        customOnBackdropPress={() => {
          this.setTosModalVisible(false);
        }}
        customOnPress={() => {
          if (this.state.allTosAccepted) {
            this.onRegisterAttempt();
          } else {
            // this.setTosWarningVisible(true);
          }
        }}>
        <View
          style={{
            marginVertical: theme.SIZES.BASE,
            flex: 1,
          }}>
          <View
            style={{
              // flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text>Agree to terms</Text>
          </View>
          <CheckBox
            containerStyle={{
              paddingVertical: theme.SIZES.BASE * 0.25,
              fontFamily: theme.FONTS.TEXT,
            }}
            checkedColor={theme.COLORS.PRIMARY}
            title="Agree to all:"
            textStyle={{
              fontFamily: theme.FONTS.TEXT,
              color: theme.COLORS.BLACK,
            }}
            onPress={() => {
              this.setAllTos(!this.state.allTosAccepted);
            }}
            checked={this.state.allTosAccepted}
          />
          <CheckBox
            containerStyle={{
              paddingVertical: theme.SIZES.BASE * 0.25,
              fontFamily: theme.FONTS.TEXT,
            }}
            checkedColor={theme.COLORS.PRIMARY}
            title="I understand Lasa Health complies with all required privacy and data protection laws. I am 16+ years of age and give permission for Lasa Health to process my account information and all logged data in the United States."
            textStyle={{
              fontFamily: theme.FONTS.TEXT,
              color: theme.COLORS.BLACK,
            }}
            onPress={() => {
              this.setTos1(!this.state.tos1Accepted);
            }}
            checked={this.state.tos1Accepted}
          />
          <CheckBox
            containerStyle={{
              paddingVertical: theme.SIZES.BASE * 0.25,
              fontFamily: theme.FONTS.TEXT,
            }}
            checkedColor={theme.COLORS.PRIMARY}
            title="I understand Lasa Health uses its own proprietary software to provide individual correlations derived from my logged data. I allow Lasa Health to use in-app notifications and email to communicate with me."
            textStyle={{
              fontFamily: theme.FONTS.TEXT,
              color: theme.COLORS.BLACK,
            }}
            onPress={() => {
              this.setTos2(!this.state.tos2Accepted);
            }}
            checked={this.state.tos2Accepted}
          />
          <CheckBox
            containerStyle={{
              paddingVertical: theme.SIZES.BASE * 0.25,
              fontFamily: theme.FONTS.TEXT,
            }}
            checkedColor={theme.COLORS.PRIMARY}
            title="I understand I can withdraw my consent to any of the above by contacting Lasa Health by the methods laid out in Lasa Health’s privacy policy or by deleting my account"
            textStyle={{
              fontFamily: theme.FONTS.TEXT,
              color: theme.COLORS.BLACK,
            }}
            onPress={() => {
              this.setTos3(!this.state.tos3Accepted);
            }}
            checked={this.state.tos3Accepted}
          />
          <CheckBox
            containerStyle={{
              paddingVertical: theme.SIZES.BASE * 0.25,
              fontFamily: theme.FONTS.TEXT,
            }}
            checkedColor={theme.COLORS.PRIMARY}
            title="I understand that Lasa Health does not provide medical advice or treatment suggestions. Prior to making adjustments based on correlations identified by Lasa Health, I agree to first consult a medical professional to discuss these potential changes."
            textStyle={{
              fontFamily: theme.FONTS.TEXT,
              color: theme.COLORS.BLACK,
            }}
            onPress={() => {
              this.setTos4(!this.state.tos4Accepted);
            }}
            checked={this.state.tos4Accepted}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: width - theme.SIZES.BASE * 2,
            }}>
            <View style={{flex: 0.7}}>
              <CheckBox
                containerStyle={{
                  paddingVertical: theme.SIZES.BASE * 0.25,
                  fontFamily: theme.FONTS.TEXT,
                }}
                checkedColor={theme.COLORS.PRIMARY}
                title="I agree with the"
                textStyle={{
                  fontFamily: theme.FONTS.TEXT,
                  color: theme.COLORS.BLACK,
                }}
                onPress={() => {
                  this.setTos5(!this.state.tos5Accepted);
                }}
                checked={this.state.tos5Accepted}
              />
            </View>
            <View style={{flex: 0.2}}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  borderRadius: theme.SIZES.BASE,
                }}
                onPress={() => {
                  Linking.openURL('https://www.lasahealth.com/privacy-policy');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={{justifyContent: 'space-evenly'}}>
                    <Text
                      style={{
                        fontSize: theme.SIZES.B3,
                        color: theme.COLORS.PRIMARY2,
                      }}>
                      Privacy Policy.
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.2}}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  borderRadius: theme.SIZES.BASE,
                }}
                onPress={() => {
                  Linking.openURL('https://www.lasahealth.com/tos');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={{justifyContent: 'space-evenly'}}>
                    <Text
                      style={{
                        fontSize: theme.SIZES.B3,
                        color: theme.COLORS.PRIMARY2,
                      }}>
                      and Terms of Service
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  readTosModal = navigation => {
    const {readTosModalVisible} = this.state;
    return (
      <Modal
        modalVisible={readTosModalVisible}
        customOnPressText={'Close'}
        customOnBackdropPress={() => {
          this.setReadTosModalVisible(false);
        }}
        customOnPress={() => {
          this.setReadTosModalVisible(false);
        }}>
        <View
          style={{
            marginTop: theme.SIZES.BASE,
            marginBottom: 0,
            paddingBottom: 0,
            backgroundColor: theme.COLORS.WHITE,
          }}>
          <View>{termsOfService()}</View>
        </View>
      </Modal>
    );
  };

  readPrivacyModal = navigation => {
    const {readPrivacyModalVisible} = this.state;
    return (
      <Modal
        modalVisible={readPrivacyModalVisible}
        customOnPressText={'Close'}
        customOnBackdropPress={() => {
          this.setReadPrivacyModalVisible(false);
        }}
        customOnPress={() => {
          this.setReadPrivacyModalVisible(false);
        }}>
        <View
          style={{
            marginTop: theme.SIZES.BASE,
            marginBottom: 0,
            paddingBottom: 0,
            backgroundColor: theme.COLORS.WHITE,
          }}>
          <View>{privacyPolicy()}</View>
        </View>
      </Modal>
    );
  };

  getPasswordSecurityCheck = () => {
    if (this.state.password.length < 8 || this.state.password.length > 20) {
      // alert("Password must be between 8 and 20 charaters long.");
      return (
        <View>
          <Text
            style={{
              color: theme.COLORS.ERROR,
              fontWeight: 'bold',
              fontFamily: theme.FONTS.TEXT,
            }}>
            weak, must be between
          </Text>
          <Text
            style={{
              color: theme.COLORS.ERROR,
              fontWeight: 'bold',
              fontFamily: theme.FONTS.TEXT,
            }}>
            8-20 characters
          </Text>
        </View>
      );
    } else if (!this.state.password.match(passwordComplexityRegex)) {
      // alert("Password must contain lower + upper + number + special character");
      return (
        <View>
          <Text
            style={{
              color: theme.COLORS.INFO,
              fontWeight: 'bold',
              fontFamily: theme.FONTS.TEXT,
            }}>
            average, must contain lower +
          </Text>
          <Text
            style={{
              color: theme.COLORS.INFO,
              fontWeight: 'bold',
              fontFamily: theme.FONTS.TEXT,
            }}>
            upper + number + special character
          </Text>
        </View>
      );
    } else if (!(this.state.password === this.state.confirmPassword)) {
      // alert("Passwords must match");
      return (
        <View>
          <Text
            style={{
              color: theme.COLORS.INFO,
              fontWeight: 'bold',
              fontFamily: theme.FONTS.TEXT,
            }}>
            strong, but
          </Text>

          <Text
            style={{
              color: theme.COLORS.INFO,
              fontWeight: 'bold',
              fontFamily: theme.FONTS.TEXT,
            }}>
            passwords do not match
          </Text>
        </View>
      );
    } else {
      return (
        <Text
          style={{
            color: theme.COLORS.SUCCESS,
            fontWeight: 'bold',
            fontFamily: theme.FONTS.TEXT,
          }}>
          strong
        </Text>
      );
    }
  };

  onSignUpAttempt = () => {
    Promise.resolve()
      .then(() => {
        if (!(this.state.password === this.state.confirmPassword)) {
          alert('Passwords must match');
          throw {
            code: -1,
            message: 'Passwords do not match',
          };
        } else if (
          this.state.password.length < 8 ||
          this.state.password.length > 20
        ) {
          alert('Password must be between 8 and 20 charaters long.');
          throw {
            code: -1,
            message: 'Password must be between 8 and 20 characters',
          };
        } else if (!this.state.password.match(passwordComplexityRegex)) {
          alert(
            'Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character',
          );
          throw {
            code: -1,
            message:
              'Password is too simple. Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.',
          };
        } else {
          return null;
        }
      })
      .then(() => {
        return this.onRegisterAttempt();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(error);
      });
  };

  onRegisterAttempt = () => {
    Promise.resolve()
      .then(() => {
        if (!(this.state.password === this.state.confirmPassword)) {
          alert('Passwords must match');
          throw {
            code: -1,
            message: 'Passwords do not match',
          };
        } else if (
          this.state.password.length < 8 ||
          this.state.password.length > 20
        ) {
          alert('Password must be between 8 and 20 charaters long.');
          throw {
            code: -1,
            message: 'Password must be between 8 and 20 characters',
          };
        } else if (!this.state.password.match(passwordComplexityRegex)) {
          alert(
            'Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character',
          );
          throw {
            code: -1,
            message:
              'Password is too simple. Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.',
          };
        } else {
          return null;
        }
      })
      .then(() => encryptPassword(this.state.email, this.state.password))

      .then(newEncryptedPassword =>
        this.registerUserFB(newEncryptedPassword.toString().trim()),
      )

      // .then(() => {
      //   if (!(auth.currentUser == null)) {
      //     //  FIXMETUNA: add all newly registered users as participants to superchat chatroom
      //     //  FIXMETUNA:  need to fix this later, make it custom to each user
      //     console.log("auth'd user: ", auth.currentUser);
      //     db.collection('Chatrooms')
      //       .doc('endo101fall2022group1')
      //       .update({
      //         participants: firebase.firestore.FieldValue.arrayUnion(
      //           auth.currentUser['uid'],
      //         ),
      //       });
      //   } else {
      //     return null;
      //   }
      // })
      .then(() => {
        if (!(auth.currentUser == null)) {
          return syncDeviceTokenFCM();
        } else {
          return null;
        }
      })
      .then(() => {
        //  FIXMETUNA: this might fix the potential claiming another user's db bug below

        if (!(auth.currentUser == null)) {
          return this.resetDBToDefault();
        } else {
          return null;
        }
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          //  FIXMETUNA:  there might be a bug here where someone else gets part of the last user's db, if someone logs out,
          //  FIXMETUNA:  then another person immediately registers without closing/restarting the app, watch out for this
          return this.setDbOwnership();
        } else {
          return null;
        }
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          return this.registerRedux();
        } else {
          return null;
        }
      })

      .then(() => {
        if (!(auth.currentUser == null)) {
          // one time setup of endo101 course for newly registered useer
          return this.setupEndo101CourseRedux();
        } else {
          return null;
        }
      })

      .then(() => {
        if (!(auth.currentUser == null)) {
          // one time setup of endo101 course for newly registered useer
          return this.props.dispatch(
            updateUserPublicProfileUIDAction(auth.currentUser['uid']),
          );
        } else {
          return null;
        }
      })

      .then(() => {
        if (!(auth.currentUser == null)) {
          console.log('CURRENT LOCAL REDUX: ', this.props.localState);
          return syncServerUserSaveState(
            this.props.dispatch,
            this.props.localState,
          );
        } else {
          return null;
        }
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          // Later log in provided user Id
          // Promise.resolve()
          //   .then(() => {
          //     return Purchases.logIn(auth.currentUser?.uid);
          //   })
          //   .then(({purchaserInfo, created}) => {
          //     // purchaserInfo updated for my_app_user_id
          //   });
        } else {
          return null;
        }
      })
      .then(result => {
        return removeAllPushNotifications();
      })
      .then(result => {
        if (!(auth.currentUser == null)) {
          if (this.props.settings.pushNotificationsEnabled) {
            return refreshPushNotifications(
              this.props.dispatch,
              this.props.session.notifications,
            );
          }
        } else {
          return null;
        }
      })

      .then(() => {
        if (!(auth.currentUser == null)) {
          // send verification email on registration
          return auth.currentUser.sendEmailVerification();
          //  FIXMETUNA:  I need to send proper custom confirmation emails with
          //  the necessary metadata to save any email confirmation
          // return auth.currentUser.sendEmailVerification({
          //   url:
          //     'https://amie-health.web.app/?mode=verifyEmail&email=' +
          //     this.props.userProfile.Email +
          //     '$oobCode=none',
          // });
          // return auth.currentUser.sendEmailVerification({
          //   url:
          //     'https://amie-health.web.app/?mode=verifyEmail&email=' +
          //     this.props.userProfile.Email +
          //     '$oobCode=none',
          // });
        } else {
          return null;
        }
      })
      // .then(() => this.setTosModalVisible(false))
      .then(() => {
        if (!(auth.currentUser == null)) {
          return this.props.navigation.replace('ChatbotIntro');
        } else {
          return null;
        }
      })

      // .then(() => {
      //   return getUserPublicProfilesForAllChatrooms(
      //     this.props.connect.chatroomList
      //   );
      // })
      // .then((updatedPublicProfiles) => {
      //   //  FIXMETUNA: dispatch an action to add the public profile list to redux
      //   return this.props.dispatch(
      //     setAmiePublicProfilesAction(updatedPublicProfiles)
      //   );
      // })

      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.setTosModalVisible(false);
        alert(errorMessage);
        console.log(error);
      });
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
              {this.tosModal(navigation)}
              {this.readPrivacyModal(navigation)}
              {this.readTosModal(navigation)}
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
                    Create New Account
                  </Text>
                </View>

                <View style={{width: width * 0.9}}>
                  <Input
                    testID="nameInput"
                    placeholder="Full Name"
                    style={{
                      marginVertical: theme.SIZES.BASE,
                    }}
                    onChangeText={this.setUsername}
                  />
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

                <View style={{width: width * 0.9}}>
                  <Input
                    testID="passwordInput"
                    secureTextEntry={true}
                    placeholder="Password"
                    style={{
                      marginVertical: theme.SIZES.BASE,
                    }}
                    onChangeText={this.setPassword}
                  />
                </View>

                <View
                  style={{
                    ...styles.passwordCheck,
                    flexDirection: 'row',

                    marginVertical: 0,
                    paddingVertical: 0,
                  }}>
                  <Text
                    style={{
                      color: theme.COLORS.TEXT3,
                      fontFamily: theme.FONTS.TEXT,
                    }}>
                    password strength:{' '}
                  </Text>
                  {this.getPasswordSecurityCheck()}
                </View>

                <View
                  style={{
                    width: width * 0.9,
                    marginBottom: theme.SIZES.BASE * 2.0,
                  }}>
                  <Input
                    testID="confirmPasswordInput"
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                    style={{}}
                    onChangeText={this.setConfirmPassword}
                  />
                </View>

                <View
                  style={{
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    marginBottom: theme.SIZES.BASE,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: 0,
                      paddingBottom: 0,
                      height: theme.SIZES.BASE * 1.5,
                    }}>
                    <Text style={{fontSize: theme.SIZES.C2}}>
                      By clicking sign up, you agree with our
                    </Text>
                    <Button
                      testID="tosButton"
                      style={{
                        ...styles.textButton,
                        paddingHorizontal: 4,
                        height: theme.SIZES.BASE * 1.5,
                      }}
                      onPress={() => {
                        Linking.openURL('https://www.lasahealth.com/tos');
                      }}>
                      <Text
                        style={{
                          fontSize: theme.SIZES.C2,
                          color: styles.textButton.color,
                        }}>
                        Terms
                      </Text>
                    </Button>
                    <Text style={{fontSize: theme.SIZES.C2}}>and</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 0,
                      paddingVertical: 0,
                    }}>
                    <Button
                      testID="tosButton"
                      style={{
                        ...styles.textButton,
                        paddingHorizontal: 4,
                        height: theme.SIZES.BASE * 1.5,
                      }}
                      onPress={() => {
                        Linking.openURL('https://www.lasahealth.com/tos');
                      }}>
                      <Text
                        style={{
                          fontSize: theme.SIZES.C2,
                          color: styles.textButton.color,
                        }}>
                        Privacy Policy.
                      </Text>
                    </Button>
                    <Text style={{fontSize: theme.SIZES.C2}}>
                      Please read both before continuing.
                    </Text>
                  </View>
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
                      testID="signupButton"
                      style={{
                        ...styles.button,
                        width: width * 0.9,
                      }}
                      onPress={() => {
                        this.onSignUpAttempt();
                      }}
                      titleStyle={{
                        color: theme.COLORS.WHITE,
                        fontFamily: theme.FONTS.HEADER,
                      }}
                      title="Sign Up"
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: theme.SIZES.BASE,
                    }}>
                    <Text style={{marginTop: 1, fontSize: theme.SIZES.B1}}>
                      Already have an account?
                    </Text>
                    <Button
                      style={{
                        ...styles.textButton,
                        marginTop: 0,
                        paddingTop: 0,
                        paddingHorizontal: 8,
                      }}
                      onPress={() => navigation.navigate('LoginMain')}
                      title="Log in"></Button>
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
    endoCourse: state.learn.endo101Course,
    session: state.session,
    settings: state.settings,
    localState: state,
  };
};
export default connect(mapStateToProps)(RegisterScreen);
