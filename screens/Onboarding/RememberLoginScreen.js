import React from 'react';
import {Dimensions, View, Image} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {ScrollView} from 'react-native-gesture-handler';
// import Purchases from 'react-native-purchases';
import {connect} from 'react-redux';

import {
  auth,
  db,
  syncServerUserSaveState,
  getLoginCredentials,
  deleteLoginCredentials,
} from '../../shared/firebaseUtils';
import {
  syncDeviceTokenFCM,
  refreshPushNotifications,
  removeAllPushNotifications,
} from '../../shared/NotificationManager';

import {
  resetTrackingLogStagingToDefaultAction,
  recoverLeftoverTrackLogStaging,
} from '../../redux/actions/trackActions';
import {
  regenerateMenstrualCycleAction,
  regenerateChartStatsAction,
  resetUserAnalyticsInteractiveParamsAction,
} from '../../redux/actions/userAnalyticsActions';
import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';
import {LoadingIndicator} from '../../components';
import {GardenContext} from '../../garden/GardenProvider';
const logo = require('../../assets/amieSplash.png');

class RememberLoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;
    this.state = {
      loadingVisible: false,
    };
  }

  setLoadingVisible = async loadingVisibleP => {
    this.setState({loadingVisible: loadingVisibleP});
  };

  getCurrentTimestampMinutes = () => {
    return Math.floor(Date.now() / 60000.0);
  };

  resetLoginAfterError = (error = 'default') => {
    console.log('RESET LOGIN AFTER ERROR');
    Promise.resolve()
      .then(() => auth.signOut(auth))
      .then(() => deleteLoginCredentials())
      //  FIXMETUNA:  add for revenuecat
      // .then(() => Purchases.logOut())
      .then(() => {
        // this.props.navigation.reset({
        //   index: 0,
        //   routes: [
        //     {
        //       name: 'LoginMain',
        //       state: {
        //         routes: [{name: 'AppIntro'}],
        //       },
        //     },
        //   ],
        // });

        this.props.navigation.navigate('AppIntro');
      })
      .catch(error => {
        console.log('ERROR2: ', error);
        // this.props.navigation.reset({
        //   index: 0,
        //   routes: [
        //     {
        //       name: 'LoginMain',
        //       state: {
        //         routes: [{name: 'AppIntro'}],
        //       },
        //     },
        //   ],
        // });

        this.props.navigation.navigate('AppIntro');
      });
  };

  componentDidMount() {
    let value = this.context;
    //  if the user used rememberMe, then skip straight to login page
    //  because the user has already seen the intro
    this.mixpanel.track('rememberLoginScreen_reached');

    removeAllPushNotifications();

    try {
      Promise.resolve()
        .then(() => {
          return getLoginCredentials();
        })
        .then(userCredentials => {
          if (
            userCredentials &&
            !(userCredentials == null) &&
            !(userCredentials.username == null) &&
            !(userCredentials.password == null) &&
            !(userCredentials.username == '') &&
            !(userCredentials.password == '')
          ) {
            this.setLoadingVisible(true);

            // firebase auth has 15 seconds to authenticate, otherwise throw an error
            setTimeout(() => {
              console.log('REMEMBERME TIMEOUT check triggered');
              let gardenValue = this.context;
              if (auth.currentUser == null) {
                this.resetLoginAfterError(
                  {
                    code: -1,
                    message: 'Login has timed out, please try again later.',
                  },
                  gardenValue,
                );
              }
            }, 10000);
            this.onLoginAttempt(value, userCredentials);
          } else {
            // deleteLoginCredentials();
            // this.props.navigation.navigate('AppIntro');
            this.resetLoginAfterError({}, value);
          }
        });
    } catch (error) {
      console.log(error);
      // deleteLoginCredentials();
      // this.props.navigation.navigate('AppIntro');
      this.resetLoginAfterError(error, value);
    }
  }

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

  onLoginAttempt = (garden, passedCredentials = null) => {
    let firstTimeLogin = -1;
    Promise.resolve()
      .then(() => this.setLoadingVisible(true))
      .then(() => {
        console.log('LOGGING IN WITH SAVED CREDENTIALS');
        return auth.signInWithEmailAndPassword(
          passedCredentials.username.toString().trim(),
          passedCredentials.password.toString().trim(),
        );
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          // //  FIXMETUNA:
          // //  FIXMETUNA:  Add in revenuecat uid login here
          // //  FIXMETUNA:
          // // Later log in provided user Id
          // console.log('LOGGING IN WITH PURCHASE');
          // // Promise.resolve()
          // //   .then(() => {
          // //     return Purchases.logIn(auth.currentUser?.uid);
          // //   })
          // //   .then(({purchaserInfo, created}) => {
          // //     // purchaserInfo updated for my_app_user_id
          // //   });

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
      .then(f => {
        firstTimeLogin = f;
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
          return garden.loadGardenStateForNewUser(this.props.gardenStateRedux);
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
      .then(() => {
        if (!(auth.currentUser == null) && firstTimeLogin > 0) {
          console.log('GETTING READY TO JUMP TO APP - DEBUG');
          this.setLoadingVisible(false);
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
        } else {
          //  delete rememberme and login credentials if login ever fails for any reason
          //  and there isn't any auth'd user at this point, don't allow remember me on first
          //  time login as well
          this.resetLoginAfterError({}, garden);
        }
      })

      .catch(error => {
        console.log('RememberLogin ERROR Caught', error);
        alert(error.message);
        this.resetLoginAfterError(error, garden);
      });
  };

  render() {
    return (
      <GardenContext.Consumer>
        {garden => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              {this.state.loadingVisible && (
                <LoadingIndicator loadingVisible={this.state.loadingVisible} />
              )}
              <Image
                resizeMode="cover"
                style={{
                  width: 160,
                  height: 285,
                }}
                source={logo}
              />
            </View>
          </View>
        )}
      </GardenContext.Consumer>
    );
  }
}

RememberLoginScreen.contextType = GardenContext; // This part is important to access context values

const mapStateToProps = state => {
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
  };
};
export default connect(mapStateToProps)(RememberLoginScreen);
