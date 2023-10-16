import React from 'react';
import {Dimensions, KeyboardAvoidingView, View, Image} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
// import Purchases from 'react-native-purchases';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  auth,
  db,
  syncServerUserSaveState,
  getLoginCredentials,
  saveLoginCredentials,
  deleteLoginCredentials,
  encryptPassword,
} from '../../shared/firebaseUtils';
import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';
// import {hasPremiumAccess} from '../../shared/ServerUtils';
import {
  Button,
  CheckBox,
  Icon,
  Input,
  LoadingIndicator,
  Modal,
  TouchableOpacity,
} from '../../components';
import {Images, theme, styles} from '../../constants';
import {
  regenerateMenstrualCycleAction,
  regenerateChartStatsAction,
  resetUserAnalyticsInteractiveParamsAction,
} from '../../redux/actions/userAnalyticsActions';
import {
  resetTrackingLogStagingToDefaultAction,
  recoverLeftoverTrackLogStaging,
} from '../../redux/actions/trackActions';
import {termsOfService} from '../../constants/legal/termsOfService';
import {privacyPolicy} from '../../constants/legal/privacyPolicy';
import {
  syncDeviceTokenFCM,
  refreshPushNotifications,
  removeAllPushNotifications,
} from '../../shared/NotificationManager';
import {GardenContext} from '../../garden/GardenProvider';

const {width} = Dimensions.get('screen');

import {getOS} from '../../shared/PlatformUtils';
import CustomDialog from '../../components/CustomDialog';

const iosPlatform = () => getOS() == 'ios';

// const initialDateValue = new Date(1598051730000);
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;
    this.state = {
      email: '',
      password: '',

      loadingVisible: false,
      readTosModalVisible: false,
      readPrivacyModalVisible: false,
      rememberMe: false,
      passwordVisible: false,

      loginAttempts: 0,
      visibleDialog: false,

      // assessment: [],
    };
  }

  showModal = () => this.setState({visibleDialog: !this.state.visibleDialog});

  //  FIXMETUNA:
  //  FIXMETUNA:  this might be causing lots of problems
  //  FIXMETUNA:
  async componentDidMount() {
    // await AsyncStorage.setItem('GUEST_MODE', 'true');
    // let assessmentData = await AsyncStorage.getItem('SAVED_RISK_ASSESSMENTS');
    // assessmentData = JSON.parse(assessmentData);
    // this.setState({assessment: assessmentData || []});

    let value = this.context;
    /* perform a side-effect at mount using the value of GardenContext */
    console.log('Component did mount login');
    this.mixpanel.track('loginScreen_reached');
    Promise.resolve()
      .then(() => auth.signOut(auth))
      .then(() => removeAllPushNotifications())
      .then(() => {
        // Sign-out successful.
        this.attemptLoginWithSavedCredentials(value);
      })
      .catch(error => {
        console.log(error);
        this.resetLoginAfterError(error, value);
      });
  }

  componentWillUnmount() {
    this.setLoadingVisible(false)
  }

  setEmail = async emailP => {
    this.setState({email: emailP.toString().toLowerCase().trim()});
  };
  setPassword = async passwordP => {
    this.setState({password: passwordP.toString().trim()});
  };

  setLoadingVisible = async loadingVisibleP => {
    this.setState({loadingVisible: loadingVisibleP});
  };
  setPasswordVisible = async passwordVisibleP => {
    this.setState({passwordVisible: passwordVisibleP});
  };

  setLoginAttempts = async loginAttemptsP => {
    this.setState({loginAttempts: loginAttemptsP});
  };

  incrementLoginAttempts = async () => {
    this.setState({loginAttempts: this.state.loginAttempts + 1});
  };

  setReadTosModalVisible = async visible => {
    this.setState({readTosModalVisible: visible});
  };
  setReadPrivacyModalVisible = async visible => {
    this.setState({readPrivacyModalVisible: visible});
  };

  setRememberMe = async rememberMeP => {
    this.setState({rememberMe: rememberMeP});
  };

  toggleRememberMe = async () => {
    this.setState({rememberMe: !this.state.rememberMe});
  };

  // loginAttemptPart1 = (key, value) => (dispatch) => {
  //   Promise.resolve()
  //     .then(() => {
  //       return getUserPublicProfilesForAllChatrooms(
  //         this.props.connect.chatroomList
  //       );
  //     })
  //     .then((updatedPublicProfiles) => {
  //       //  FIXMETUNA: dispatch an action to add the public profile list to redux
  //       dispatch(setAmiePublicProfilesAction(updatedPublicProfiles));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // An error happened.
  //     });

  //   return Promise.resolve();
  // };

  loginAttemptPart2 = (key, value) => dispatch => {
    dispatch(
      recoverLeftoverTrackLogStaging(
        this.getCurrentTimestampMinutes(),
        this.props.trackingLogStaging,
      ),
    );
    return Promise.resolve();
  };

  loginAttemptPart3 = (key, value) => dispatch => {
    dispatch(
      regenerateMenstrualCycleAction(
        this.props.trackingLog,
        this.props.userProfile,
      ),
    );
    return Promise.resolve();
  };

  loginAttemptPart3_1 = (key, value) => dispatch => {
    dispatch(resetUserAnalyticsInteractiveParamsAction());
    return Promise.resolve();
  };

  loginAttemptPart4 = (key, value) => dispatch => {
    dispatch(
      regenerateChartStatsAction(
        this.props.trackingLog,
        this.props.userProfile,
        this.props.userAnalytics,
        this.props.customSymptoms,
      ),
    );
    return Promise.resolve();
  };

  loginAttemptPart5 = (key, value) => dispatch => {
    dispatch(resetTrackingLogStagingToDefaultAction());
    return Promise.resolve();
  };

  checkForFirstTimeLogin = async () => {
    const uid = auth.currentUser?.uid;
    const setupProgress = await db
      .collection('Users')
      .doc(uid)
      .get()
      .then(snapshot => {
        const snapshotData = snapshot.data();
        if (snapshotData == null) {
          return null;
        } else {
          return snapshotData['firstTimeSetupProgress'];
        }
      })
      .catch(error => {
        console.log(error);
      });

    return setupProgress;
  };

  //  FIXMETUNA:
  //  FIXMETUNA:  the error happens somewhere here to set off alert
  //  FIXMETUNA:
  resetLoginAfterError = (error, garden) => {
    Promise.resolve()
      .then(() => getLoginCredentials())
      .then(userCredentials => {
        if (
          userCredentials &&
          !(userCredentials == null) &&
          !(userCredentials['username'] == null) &&
          !(userCredentials['password'] == null) &&
          !(userCredentials['username'] == '') &&
          !(userCredentials['password'] == '') &&
          this.state.loginAttempts < 2
        ) {
          this.attemptLoginWithSavedCredentials(garden);
        } else {
          Promise.resolve()
            .then(() => {
              this.setLoadingVisible(false);
              return this.setRememberMe(false);
            })
            .then(() => auth.signOut(auth))
            .then(() => deleteLoginCredentials())
            //  FIXMETUNA:  add for revenuecat
            // .then(() => Purchases.logOut())
            .then(() => {
              this.props.navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'LoginMain',
                    state: {
                      routes: [{name: 'LoginMain'}],
                    },
                  },
                ],
              });
            })
            .catch(error => {
              console.log('ERROR2: ', error);
            });
        }
      })
      .catch(error => {
        console.log('ERROR3: ', error);
      });
  };

  onLoginAttempt = (garden, passedCredentials = null) => {
    this.incrementLoginAttempts();
    let firstTimeLogin = -1;

    if (
      (!(this.state.email == null) &&
        !(this.state.password == null) &&
        !(this.state.email == '') &&
        !(this.state.password == '')) ||
      (!(passedCredentials == null) &&
        !(passedCredentials.username == null) &&
        !(passedCredentials.password == null) &&
        !(passedCredentials.username == '') &&
        !(passedCredentials.password == ''))
    ) {
      Promise.resolve()
        // .then(() => {
        //   console.log("1");
        //   if (this.state.rememberMe || !(passedCredentials == null)) {
        //     return auth.setPersistence(firebaseLocalPersistance);
        //   } else {
        //     return auth.setPersistence(firebaseSessionPersistance);
        //   }
        // })

        .then(() => this.setLoadingVisible(true))
        .then(() => {
          console.log('Pre encrypt 0');
          return encryptPassword(
            this.state.email.toString().toLowerCase().trim(),
            this.state.password.toString().trim(),
          );
        })
        .then(newEncryptedPassword => {
          console.log('2');

          // firebase auth has 15 seconds to authenticate, otherwise throw an error
          setTimeout(() => {
            console.log('AUTH TIMEOUT check triggered');
            if (auth.currentUser == null) {
              this.resetLoginAfterError(
                {
                  code: -1,
                  message: 'Login has timed out, please try again later.',
                },
                garden,
              );
            }
          }, 15000);

          if (!(passedCredentials == null)) {
            console.log('LOGGING IN WITH SAVED CREDENTIALS');
            //  FIXMETUNA:  these are already hashed
            if (
              !(passedCredentials.username == null) &&
              !(passedCredentials.password == null) &&
              !(passedCredentials.username == '') &&
              !(passedCredentials.password == '')
            ) {
              return auth.signInWithEmailAndPassword(
                passedCredentials.username.toString().trim(),
                passedCredentials.password.toString().trim(),
              );
            }
          } else {
            console.log('LOGGING IN WITH EMAIL');
            if (
              !(this.state.email == null) &&
              !(newEncryptedPassword == null) &&
              !(this.state.email == '') &&
              !(newEncryptedPassword == '')
            ) {
              console.log('Email and password are valid');
              return auth.signInWithEmailAndPassword(
                this.state.email.toString().trim(),
                newEncryptedPassword.toString().trim(),
              );
            } else {
              console.log('EmPass Not valid');
              return null;
            }
          }
        })
        .then(userCredential => {
          if (!(auth.currentUser == null)) {
            // Signed in
            const user = userCredential.user;
            return null;
          } else {
            return null;
          }
        })
        .then(() => {
          if (!(auth.currentUser == null)) {
            // //  FIXMETUNA:
            // //  FIXMETUNA:  Add in revenuecat uid login here
            // //  FIXMETUNA:
            // // Later log in provided user Id
            // Promise.resolve()
            //   .then(() => {
            //     return Purchases.logIn(auth.currentUser?.uid);
            //   })
            //   .then(({purchaserInfo, created}) => {
            //     // purchaserInfo updated for my_app_user_id
            //   });

            return null;
          } else {
            //  if login didn't work set remember me to false
            console.log('Remember Me login failed');
            deleteLoginCredentials();
            return this.setRememberMe(false);
          }
        })
        .then(() => {
          console.log('33');
          // Signed in
          if (!(auth.currentUser == null)) {
            if (this.state.rememberMe) {
              console.log('SAVE credentials');
              if (
                !(this.state.email == null) &&
                !(this.state.password == null) &&
                !(this.state.email == '') &&
                !(this.state.password == '')
              ) {
                saveLoginCredentials(this.state.email, this.state.password);
              }
            } else {
              console.log('Delete credentials');
              deleteLoginCredentials();
              return this.setRememberMe(false);
            }
            return null;
          } else {
            console.log('NO AUTH 1');
            return null;
          }
        })
        .then(() => {
          console.log('44');
          if (!(auth.currentUser == null)) {
            return this.checkForFirstTimeLogin();
          } else {
            console.log('NO AUTH 2');
            return null;
          }
        })
        .then(firstTimeLoginVal => {
          firstTimeLogin = firstTimeLoginVal;
          if (!(auth.currentUser == null)) {
            console.log('Checking for first time login');
            if (firstTimeLogin <= 0) {
              console.log('First time login confirmed');
              // this.setLoadingVisible(false);
              return this.props.navigation.replace('ChatbotIntro');
            }
          } else {
            console.log('NO AUTH 3');
            return null;
          }
        })
        .then(() => {
          if (!(auth.currentUser == null) && firstTimeLogin > 0) {
            console.log('Syncing server state');
            return syncServerUserSaveState(
              this.props.dispatch,
              this.props.localState,
            );
          } else {
            return null;
          }
        })
        .then(() => {
          if (!(auth.currentUser == null) && firstTimeLogin > 0) {
            return this.props.dispatch(this.loginAttemptPart2(1, 2));
          } else {
            return null;
          }
        })
        .then(() => {
          if (!(auth.currentUser == null) && firstTimeLogin > 0) {
            return this.props.dispatch(this.loginAttemptPart3(1, 2));
          } else {
            return null;
          }
        })
        .then(() => {
          if (!(auth.currentUser == null) && firstTimeLogin > 0) {
            return this.props.dispatch(this.loginAttemptPart3_1(1, 2));
          } else {
            return null;
          }
        })
        .then(() => {
          if (!(auth.currentUser == null) && firstTimeLogin > 0) {
            return this.props.dispatch(this.loginAttemptPart4(1, 2));
          } else {
            return null;
          }
        })
        .then(() => {
          if (!(auth.currentUser == null) && firstTimeLogin > 0) {
            return this.props.dispatch(this.loginAttemptPart5(1, 2));
          } else {
            return null;
          }
        })
        .then(() => {
          if (!(auth.currentUser == null) && firstTimeLogin > 0) {
            return syncDeviceTokenFCM();
          } else {
            return null;
          }
        })
        .then(() => {
          if (!(auth.currentUser == null) && firstTimeLogin > 0) {
            return garden.loadGardenStateForNewUser(
              this.props.gardenStateRedux,
            );
          } else {
            return null;
          }
        })

        .then(result => {
          if (!(auth.currentUser == null) && firstTimeLogin > 0) {
            console.log(
              'AUTH SUCCESS RIGHT BEFORE NAVIGATE - load visible false results - DEBUG',
              result,
            );
            return true;
          } else {
            return null;
          }
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
        .then(result => {
          if (!(auth.currentUser == null)) {
            // Signed in
            // identify must be called before
            // user profile properties can be set
            this.mixpanel.identify(auth.currentUser?.uid);

            // // Sets user's "Plan" attribute to "Premium"
            // Promise.resolve()
            //   .then(() => hasPremiumAccess(this.props.userProfile))
            //   .then(result => {
            //     // console.log('Has premium asscess 2: ', result);
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
        .then(() => {
          if (!(auth.currentUser == null)) {
            if (firstTimeLogin > 0) {
              console.log('GETTING READY TO JUMP TO APP - DEBUG');
              // this.setLoadingVisible(false);
              if (firstTimeLogin < 4) {
                console.log(
                  'Login with unfinished profile setup confirmed: ',
                  firstTimeLogin,
                );
                return this.props.navigation.replace('ProfileSetup', {
                  profileSetupProgress: firstTimeLogin,
                });
              } else {
                return this.props.navigation.replace('App');
              }
            }
          } else {
            //  delete rememberme and login credentials if login ever fails for any reason
            //  and there isn't any auth'd user at this point, don't allow remember me on first
            //  time login as well
            this.resetLoginAfterError(
              {
                code: -1,
                message: 'Login error, please try again later.',
              },
              garden,
            );
          }
        })

        .catch(error => {
          console.log('Login ERROR Caught', error);
          alert(error.message);
          this.resetLoginAfterError(error, garden);
        });
    }
  };

  //  FIXMETUNA:
  //  FIXMETUNA:  the error happens somewhere here to set off alert
  //  FIXMETUNA:
  getCurrentTimestampMinutes = () => {
    return Math.floor(Date.now() / 60000.0);
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

  //  FIXMETUNA:
  //  FIXMETUNA:  this might be causing problems
  //  FIXMETUNA:
  attemptLoginWithSavedCredentials = async garden => {
    // const {navigation} = this.props;
    try {
      // Retrieve the credentials
      const userCredentials = await getLoginCredentials();
      if (
        userCredentials &&
        !(userCredentials == null) &&
        !(userCredentials['username'] == '') &&
        !(userCredentials['password'] == '')
      ) {
        console.log(
          'Credentials successfully loaded for user ',
          userCredentials['username'],
        );

        Promise.resolve()
          .then(() => this.setRememberMe(true))
          .then(() => this.onLoginAttempt(garden, userCredentials))

          .catch(error => {
            this.resetLoginAfterError(error, garden);
          });
      } else {
        console.log('No credentials stored');
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
  };

  render() {
    const {navigation} = this.props;
    return (
      <GardenContext.Consumer>
        {garden => (
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <StatusBar style="grey" />

            <CustomDialog
              visibleFlag={this.state.visibleDialog}
              okAction={() => this.showModal()}
              title="Risk Assessment Info"
              content="Please login or sign up to view your endometriosis risk assessment results"
            />
            <KeyboardAvoidingView
              style={{
                flex: 1,
              }}
              behavior="padding"
              enabled={iosPlatform()}>
              <ScrollView testID={'pageScrollview'} style={{flex: 1}}>
                <View style={{...styles.registerContainer, flex: 1}}>
                  <KeyboardAvoidingView
                    style={{
                      flex: 1,
                      ...styles.registerContainer,
                    }}
                    behavior="padding"
                    enabled={iosPlatform()}>
                    <View style={{flex: 1}}>
                      {this.state.loadingVisible && (
                        <LoadingIndicator
                          loadingVisible={this.state.loadingVisible}
                        />
                      )}
                      {this.readPrivacyModal(navigation)}
                      {this.readTosModal(navigation)}

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
                            fontSize: theme.SIZES.H5,
                            fontWeight: '700',
                            paddingVertical: 0,
                            marginBottom: 0,
                            marginTop: theme.SIZES.BASE * 2.5,
                            color: theme.COLORS.TEXT1,
                          }}>
                          Hi, Welcome Back!
                        </Text>

                        <Text
                          style={{
                            fontSize: theme.SIZES.C1,
                            paddingVertical: 0,
                            marginVertical: theme.SIZES.BASE,
                            color: theme.COLORS.TEXT3,
                          }}>
                          Sign In to your account
                        </Text>

                        {/* <Button
                          customDebounceLength={100}
                          testID="assmtButton"
                          style={{
                            ...styles.button,
                            width: width * 0.4,
                            height: theme.SIZES.BASE * 2.5,
                            marginHorizontal: 30
                          }}
                          onPress={
                            // () => this.showModal()
                            this.state.assessment.length > 0 ?
                              () => alert('Please login or sign up to view your endometriosis risk assessment results')
                            :
                              () => this.props.navigation.navigate('AssessmentNew')
                          }
                          titleStyle={{
                            color: theme.COLORS.WHITE,
                            fontFamily: theme.FONTS.HEADER,
                          }}
                          title={this.state.assessment.length > 0 ? "View Assessment" : "Take Assessment"}
                        /> */}
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

                      <View>
                        <Input
                          testID="passwordInput"
                          placeholder="Password"
                          secureTextEntry={!this.state.passwordVisible}
                          onChangeText={this.setPassword}
                          rightIcon={
                            <TouchableOpacity
                              testID="passwordVisibleButton"
                              onPress={() =>
                                this.setPasswordVisible(
                                  !this.state.passwordVisible,
                                )
                              }>
                              <Icon
                                name="SvgSolid201Eye"
                                family="amiesolid"
                                style={styles.inputIcons}
                                fill={theme.COLORS.TEXT2}
                                width={16}
                                height={16}
                              />
                            </TouchableOpacity>
                          }
                        />
                        <View
                          style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            marginTop: theme.SIZES.BASE,
                          }}>
                          <CheckBox
                            testID="rememberMeButton"
                            checkedColor={theme.COLORS.DEFAULT}
                            title="Remember me"
                            containerStyle={{}}
                            customTextStyle={{
                              ...styles.textButton,
                              marginBottom: 2,
                              paddingBottom: 2,
                              color: theme.COLORS.TEXT2,
                            }}
                            checked={this.state.rememberMe}
                            onPress={() => {
                              this.toggleRememberMe();
                            }}
                          />
                          <Button
                            testID="forgotPasswordButton"
                            style={{
                              ...styles.textButton,
                            }}
                            titleStyle={{
                              color: theme.COLORS.PRIMARY2,
                              marginRight: theme.SIZES.BASE * 0.5,
                              fontSize: theme.SIZES.C1,
                            }}
                            onPress={() => {
                              this.props.navigation.navigate(
                                'PasswordRecovery',
                              );
                            }}
                            title="Forgot password?"></Button>
                        </View>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          alignContent: 'center',
                        }}>
                        <View style={{marginBottom: theme.SIZES.BASE}}>
                          <Button
                            customDebounceLength={8000}
                            testID="loginButton"
                            style={{
                              ...styles.button,
                              width: width * 0.9,
                            }}
                            onPress={() => {
                              this.onLoginAttempt(garden);
                            }}
                            titleStyle={{
                              color: theme.COLORS.WHITE,
                              fontFamily: theme.FONTS.HEADER,
                            }}
                            title="Login"
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{fontSize: theme.SIZES.B1, marginTop: 1}}>
                            Don't have an account?
                          </Text>
                          <Button
                            style={{
                              ...styles.textButton,
                              marginTop: 0,
                              paddingTop: 0,
                            }}
                            onPress={() =>
                              this.props.navigation.navigate('Register')
                            }
                            title="Sign Up"></Button>
                        </View>
                      </View>
                    </View>
                  </KeyboardAvoidingView>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        )}
      </GardenContext.Consumer>
    );
  }
}
LoginScreen.contextType = GardenContext; // This part is important to access context values

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
    trackingLog: state.trackLog.logHistory,
    trackingLogStaging: state.trackLogStaging,
    userAnalytics: state.userAnalytics,
    endoCourse: state.learn.endo101Course,
    connect: state.connect,
    gardenStateRedux: state.garden,
    session: state.session,
    settings: state.settings,
    customSymptoms: state.trackCustomSymptoms.customSymptoms,
    localState: state,
    // assessment: state.assessment.selectLog,
  };
};
export default connect(mapStateToProps)(LoginScreen);
