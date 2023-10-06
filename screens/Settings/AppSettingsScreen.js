import React from 'react';
import {ScrollView, Dimensions, Linking, View, Modal} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';

import {theme, styles, Images} from '../../constants';
import {
  Button,
  Switch,
  Footer,
  TouchableOpacity,
  RoundedTopContainer,
} from '../../components';
import {setPushNotificationsEnabledAction} from '../../redux/actions/settingsActions';
import {auth, syncServerUserSaveState} from '../../shared/firebaseUtils';
import {syncDeviceTokenFCM} from '../../shared/NotificationManager';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

class AppSettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'switch-1': true,
      'switch-2': false,
      'switch-3': this.props.settings.pushNotificationsEnabled,
      'switch-4': false,
      'switch-5': false,

      deletionModalVisible: false,
    };
  }

  toggleSwitch = switchId => this.setState({[switchId]: !this.state[switchId]});

  getIconColor = index => {
    if (index % 3 == 0) {
      return theme.COLORS.PRIMARY4;
    } else if (index % 3 == 1) {
      return theme.COLORS.SECONDARY3;
    } else {
      return theme.COLORS.TERTIARY2;
    }
  };

  renderSettings = navigation => {
    return (
      <RoundedTopContainer
        style={{
          ...styles.group,
          minHeight: height - theme.SIZES.BASE * 8.6,
          marginTop: theme.SIZES.BASE * 0.8,
        }}>
        <View
          style={{
            marginHorizontal: theme.SIZES.BASE,
            marginVertical: theme.SIZES.BASE * 0.5,
          }}>
          <TouchableOpacity
            disabled
            style={{
              marginLeft: theme.SIZES.BASE,
              marginBottom: theme.SIZES.BASE,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.H5,
                marginTop: theme.SIZES.BASE,
              }}>
              Notification Settings
            </Text>
          </TouchableOpacity>

          <View style={{paddingHorizontal: theme.SIZES.BASE}}>
            <View
              style={{
                marginBottom: theme.SIZES.BASE,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: theme.SIZES.B1, fontWeight: '300'}}>
                Enable Notifications
              </Text>
              <Switch
                value={this.state['switch-3']}
                onValueChange={() => {
                  this.props.dispatch(
                    setPushNotificationsEnabledAction(!this.state['switch-3']),
                  );
                  this.toggleSwitch('switch-3');
                }}
                trackColor={{
                  false: theme.COLORS.SWITCH_ON,
                  true: theme.COLORS.PRIMARY2,
                }}
              />
            </View>
          </View>

          <TouchableOpacity
            disabled
            style={{
              marginLeft: theme.SIZES.BASE,
              marginBottom: theme.SIZES.BASE,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.H5,
                marginTop: theme.SIZES.BASE,
              }}>
              Connected Accounts
            </Text>
          </TouchableOpacity>

          <View
            style={{
              // flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              marginBottom: theme.SIZES.BASE * 0.5,
              paddingTop: 0,
              marginTop: 0,
            }}>
            <Button
              customDebounceLength={8000}
              testID="cloudBackupButton"
              style={{
                ...styles.button,
                width: width / 2.0,
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
              }}
              titleStyle={{
                color: theme.COLORS.WHITE,
                fontFamily: theme.FONTS.TEXT,
              }}
              title="Backup to cloud"
              onPress={() => {
                if (!(auth.currentUser == null)) {
                  Promise.resolve()
                    .then(() => {
                      return syncServerUserSaveState(
                        this.props.dispatch,
                        this.props.localState,
                      );
                    })
                    .catch(error => {
                      console.log(error);
                    });
                }
              }}></Button>
          </View>

          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              marginBottom: theme.SIZES.BASE * 0.5,
              paddingTop: 0,
              marginTop: 0,
            }}>
            <Button
              customDebounceLength={8000}
              testID="syncTokenButton"
              style={{
                ...styles.button,
                width: width / 2.0,
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
              }}
              titleStyle={{
                color: theme.COLORS.WHITE,
                fontFamily: theme.FONTS.TEXT,
              }}
              title="Sync Device to Server"
              onPress={() => {
                syncDeviceTokenFCM();
              }}></Button>
          </View>

          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              marginBottom: theme.SIZES.BASE * 0.5,
              paddingTop: 0,
              marginTop: 0,
            }}>
            <Button
              testID="deleteAccountButton"
              style={{
                ...styles.button,
                width: width / 2.0,
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
                backgroundColor: theme.COLORS.ERROR3,
              }}
              titleStyle={{
                color: theme.COLORS.WHITE,
                fontFamily: theme.FONTS.TEXT,
              }}
              title="Delete Account"
              onPress={() => {
                this.setDeletionModalVisible(true);
              }}></Button>
          </View>

          <TouchableOpacity
            style={{marginLeft: theme.SIZES.BASE}}
            onPress={() => {
              Linking.openURL('https://www.lasahealth.com/privacy-policy');
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.H5,
                marginTop: theme.SIZES.BASE,
              }}>
              Privacy Policy
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginLeft: theme.SIZES.BASE}}
            onPress={() => {
              Linking.openURL('https://www.lasahealth.com/tos');
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.H5,
                marginTop: theme.SIZES.BASE,
              }}>
              Terms of Service
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginLeft: theme.SIZES.BASE}}
            onPress={() => {
              Linking.openURL('https://www.lasahealth.com');
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.H5,
                marginTop: theme.SIZES.BASE,
              }}>
              About Lasa Health
            </Text>
          </TouchableOpacity>
        </View>
      </RoundedTopContainer>
    );
  };

  setDeletionModalVisible = async deletionModalVisibleP => {
    Promise.resolve()
      .then(() => this.setState({deletionModalVisible: deletionModalVisibleP}))
      .catch(error => {
        console.log(error);
      });
  };

  deletionModal = dispatch => {
    const {deletionModalVisible} = this.state;

    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={deletionModalVisible}
          customOnBackdropPress={() => {
            this.setDeletionModalVisible(!deletionModalVisible);
          }}
          onRequestClose={() => {
            this.setDeletionModalVisible(!deletionModalVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: theme.COLORS.WHITE,
                borderRadius: 20,
                padding: theme.SIZES.BASE * 2,
                alignItems: 'center',
                shadowColor: theme.COLORS.BLACK,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <Text
                style={{
                  fontFamily: theme.FONTS.TEXT,
                  fontSize: theme.SIZES.H6,
                  marginTop: theme.SIZES.BASE,
                  textAlign: 'center',
                }}>
                {' '}
                Please submit your account deletion request to
              </Text>

              <TouchableOpacity
                style={{marginLeft: theme.SIZES.BASE}}
                onPress={() => {
                  Linking.openURL(
                    'mailto:support@lasahealth.com?subject=Customer%20Support&body=Dear%20Lasa%20Health%20support%20team,',
                  );
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontFamily: theme.FONTS.TEXT,
                    fontSize: theme.SIZES.H5,
                    marginTop: theme.SIZES.BASE,
                    color: theme.COLORS.PRIMARY2,
                  }}>
                  support@lasahealth.com
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  fontFamily: theme.FONTS.TEXT,
                  fontSize: theme.SIZES.H6,
                  marginTop: theme.SIZES.BASE,
                  marginBottom: theme.SIZES.BASE,
                  textAlign: 'center',
                }}>
                {' '}
                and your account and data will be promptly erased.
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: theme.SIZES.BASE,

                  width: width - theme.SIZES.BASE * 8,
                }}>
                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    marginBottom: theme.SIZES.BASE * 0.5,
                    paddingTop: 0,
                    marginTop: 0,
                  }}>
                  <Button
                    style={{
                      ...styles.outlinedButton,
                      width: width / 2.0 - theme.SIZES.BASE * 5.0,
                      fontSize: 16,
                      fontWeight: '700',
                      textAlign: 'center',
                      borderColor: theme.COLORS.PRIMARY2,
                    }}
                    titleStyle={{
                      color: theme.COLORS.PRIMARY2,
                      fontFamily: theme.FONTS.TEXT,
                    }}
                    title="Close"
                    onPress={() => {
                      this.setDeletionModalVisible(!deletionModalVisible);
                    }}></Button>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  render() {
    const {navigation, dispatch} = this.props;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customImageName={Images.ui.BackgroundGradient1}>
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
                {this.deletionModal(dispatch)}
                {this.renderSettings(navigation)}
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
          <Footer navigation={navigation} tabName="Settings" />
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
    connect: state.connect,
    settings: state.settings,
    localState: state,
  };
};
export default connect(mapStateToProps)(AppSettingsScreen);
