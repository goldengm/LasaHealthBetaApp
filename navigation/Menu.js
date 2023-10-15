import React from 'react';
import {ScrollView, Dimensions, Linking, View, Image} from 'react-native';
import {Text, ListItem, Avatar} from 'react-native-elements';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
// import Purchases from 'react-native-purchases';
import {theme, styles, Images} from '../constants';
import {getSVG} from '../constants/SVGs';
import {APP_VERSION} from '../constants/AppVersion';
import {Button, Icon, LoadingIndicator, TouchableOpacity} from '../components';
import {
  auth,
  checkForDailyServerSync,
  syncServerUserSaveState,
  deleteLoginCredentials,
} from '../shared/firebaseUtils';
import SessionController from './SessionController';

import {getOS} from '../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width} = Dimensions.get('screen');

const settingsMainList = [
  {name: 'Basic Information', value: '', pageRedirect: 'BasicInfoSettings'},
  {name: 'Health Profile', value: '', pageRedirect: 'HealthProfileSettings'},
  // {name: 'Lasa Premium', value: '', pageRedirect: 'PremiumOptions'},
  {name: 'Settings', value: '', pageRedirect: 'AppSettings'},
  {name: 'Contact Us', value: '', pageRedirect: 'CustomerSupport'},
];

class CustomDrawerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'switch-1': true,
      'switch-2': false,
      loadingVisible: false,
    };
  }

  componentDidMount() {
    if (!(auth.currentUser == null)) {
      return Promise.resolve().then(() => {
        if (!(auth.currentUser == null)) {
          return checkForDailyServerSync(
            this.props.dispatch,
            this.props.localState,
          );
        } else {
          return null;
        }
      });
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProp, prevState) {}

  resetLoginAfterError = (error = 'Default') => {
    Promise.resolve()
      .then(() => auth.signOut(auth))
      .then(() => deleteLoginCredentials())
      //  FIXMETUNA:  add for revenuecat
      // .then(() => Purchases.logOut())
      .then(() => {
        this.setState({loadingVisible: false});
        this.props.navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Login',
              state: {
                routes: [{name: 'LoginMain'}],
              },
            },
          ],
        });
      })
      .catch(error => {
        console.log('ERROR MENU2: ', error);
      });
  };

  render() {
    const {navigation} = this.props;

    return (
      <ScrollView testID="pageScrollview" style={{flex: 1}}>
        <View
          style={{
            ...styles.container,
            backgroundColor: theme.COLORS.WHITE,
            marginTop: theme.SIZES.BASE,
          }}
          forceInset={{top: 'always', horizontal: 'never'}}>
          <SessionController navigation={navigation} />

          <View style={{...styles.group, flex: 1}}>
            {this.state.loadingVisible && (
              <LoadingIndicator loadingVisible={this.state.loadingVisible} />
            )}
            <View style={{marginTop: iosPlatform() ? theme.SIZES.BASE * 2 : 0}}>
              <LinearGradient
                style={{
                  marginHorizontal: theme.SIZES.BASE * 2,
                  marginVertical: theme.SIZES.BASE,
                  paddingVertical: theme.SIZES.BASE,
                  borderRadius: theme.SIZES.BASE,
                }}
                colors={[theme.COLORS.TERTIARY4, theme.COLORS.PRIMARY4]}
                locations={[0.0, 0.95]}
                start={{x: 0, y: 0.0}}
                end={{x: 1, y: 1.0}}>
                <TouchableOpacity
                  testID="userProfileMenuButton"
                  onPress={() => {
                    navigation.reset({
                      index: 0,
                      routes: [
                        {
                          name: 'Connect',
                          state: {
                            routes: [{name: 'Connect'}, {name: 'UserProfile'}],
                          },
                        },
                      ],
                    });
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <View style={{height: 70, width: 70}}>
                      <Avatar
                        size={68}
                        rounded
                        containerStyle={{
                          backgroundColor: theme.COLORS.TRANSPARENT,
                        }}>
                        <TouchableOpacity
                          testID="userAvatarButton"
                          onPress={() => {
                            navigation.reset({
                              index: 0,
                              routes: [
                                {
                                  name: 'Connect',
                                  state: {
                                    routes: [
                                      {name: 'Connect'},
                                      {name: 'UserProfile'},
                                    ],
                                  },
                                },
                              ],
                            });
                          }}>
                          {getSVG(this.props.userPublicProfile.avatar)}
                        </TouchableOpacity>
                        <Avatar.Accessory
                          size={24}
                          style={{backgroundColor: theme.COLORS.DEFAULT}}
                        />
                      </Avatar>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                      <Text style={{color: theme.COLORS.TEXT1}}>
                        {this.props.userProfile.Name}
                      </Text>
                      <Text style={{color: theme.COLORS.TEXT2}}>
                        @
                        {
                          this.props.userProfile.OnboardingAnswers.onboarding
                            .nickname
                        }
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            <View
              style={{
                marginHorizontal: theme.SIZES.BASE,
                // marginTop: theme.SIZES.BASE,
              }}>
              {this.props.userProfile.OnboardingAnswers.onboarding
                .associatedClinic == 'ceaps' && (
                <TouchableOpacity
                  key={'ceaps'}
                  onPress={() => {
                    Promise.resolve()
                      .then(async () => {
                        try {
                          const url = 'https://iceaps.com/contact-us';
                          const supported = await Linking.canOpenURL(url);

                          if (supported) {
                            await Linking.openURL(url);
                          } else {
                            console.error(`Cannot open URL: ${url}`);
                          }
                        } catch (error) {
                          console.error(`An error occurred: ${error}`);
                        }
                      })
                      .catch(error => {
                        console.log(error);
                      });
                  }}>
                  <ListItem
                    topDivider
                    containerStyle={{borderColor: theme.COLORS.TRANSPARENT}}>
                    <ListItem.Content>
                      <ListItem.Title>
                        <View>
                          <Image
                            source={Images.onboarding.CeapsLogo}
                            style={{
                              width: 140,
                              height: 109,
                            }} // origin: 262 * 204
                          />
                          <TouchableOpacity
                            onPress={() => {
                              Linking.openURL(`tel:${7868829966}`);
                            }}>
                            <Text
                              style={{
                                marginTop: theme.SIZES.BASE * 0.5,
                                textAlign: 'center',
                                color: theme.COLORS.PRIMARY2,
                                fontWeight: 'bold',
                              }}>
                              Call Clinic
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </ListItem.Title>
                    </ListItem.Content>

                    {/* <View style={{height: 26, width: 26}}>
                      <Icon
                        family="ionicon"
                        name="chevron-forward-outline"
                        fill={theme.COLORS.DEFAULT}
                      />
                    </View> */}
                  </ListItem>
                </TouchableOpacity>
              )}
              {settingsMainList.map((l, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    Promise.resolve()
                      .then(() => {
                        if (l.pageRedirect.length > 0) {
                          navigation.navigate('Settings', {
                            screen: l.pageRedirect,
                          });
                        }
                      })
                      .catch(error => {
                        console.log(error);
                      });
                  }}>
                  <ListItem
                    topDivider
                    containerStyle={{borderColor: theme.COLORS.TRANSPARENT}}>
                    <ListItem.Content>
                      <ListItem.Title>{l.name}</ListItem.Title>
                      {l.value.length > 0 && (
                        <ListItem.Subtitle>{l.value}</ListItem.Subtitle>
                      )}
                    </ListItem.Content>

                    <View style={{height: 26, width: 26}}>
                      <Icon
                        family="ionicon"
                        name="chevron-forward-outline"
                        fill={theme.COLORS.DEFAULT}
                      />
                    </View>
                  </ListItem>
                </TouchableOpacity>
              ))}
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                marginVertical: 8,
                paddingHorizontal: 8,
              }}>
              <Button
                testID={'logoutButton'}
                customDebounceLength={8000}
                style={{
                  ...styles.button,
                  backgroundColor: theme.COLORS.PRIMARY2,

                  fontSize: 16,
                  fontWeight: '700',
                  width: width - theme.SIZES.BASE * 10,
                }}
                onPress={() => {
                  this.setState({loadingVisible: true});
                  Promise.resolve()
                    .then(() => {
                      if (!(auth.currentUser == null)) {
                        return syncServerUserSaveState(
                          this.props.dispatch,
                          this.props.localState,
                        );
                      } else {
                        return null;
                      }
                    })
                    .then(() => this.resetLoginAfterError())
                    .catch(error => {
                      this.resetLoginAfterError(error);
                    });
                }}
                titleStyle={{
                  color: theme.COLORS.WHITE,
                  fontFamily: theme.FONTS.HEADER,
                }}
                title="Sign Out"
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 0,
                paddingTop: 0,
              }}>
              <Text
                style={{
                  color: theme.COLORS.BLACK,
                  fontFamily: theme.FONTS.TEXT,
                  fontSize: 12,
                  marginVertical: 6,
                }}>
                App Version: beta {APP_VERSION}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://www.lasahealth.com/privacy-policy');
                }}>
                <Text
                  style={{
                    color: theme.COLORS.HEADER,
                    fontFamily: theme.FONTS.TEXT,
                    fontSize: 12,
                  }}>
                  Privacy Policy
                </Text>
              </TouchableOpacity>
              <Text style={{fontSize: 12}}> | </Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://www.lasahealth.com/tos');
                }}>
                <Text
                  style={{
                    color: theme.COLORS.HEADER,
                    fontFamily: theme.FONTS.TEXT,
                    fontSize: 12,
                  }}>
                  Terms of Serice
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProfile: state.userProfile,
    userPublicProfile: state.userPublicProfile,
    connect: state.connect,
    localState: state,
  };
};
export default connect(mapStateToProps)(CustomDrawerContent);
