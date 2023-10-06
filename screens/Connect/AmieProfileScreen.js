import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';

import {
  Button,
  Footer,
  EditableListitemCard,
  RoundedTopContainer,
} from '../../components';
import {Images, theme, styles} from '../../constants';
import {getSVG} from '../../constants/SVGs';
import {auth} from '../../shared/firebaseUtils';
import {sendFriendRequest} from '../../shared/ServerUtils';
import {setCurrentCRIDAction} from '../../redux/actions/connectActions';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';

import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

const defaultAmiePublicProfile = {
  uid: -1,
  name: 'Anonymous',
  location: 'Not provided',
  description: 'Description not added',
  avatar: '',
  healthConditions: ['Update', 'Conditions', 'Here'],
};

class AmieProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendRequestSent: false,
    };
  }

  setFriendRequestSent = value => {
    this.setState({friendRequestSent: value});
  };

  getIconColor = index => {
    if (index % 3 == 0) {
      return theme.COLORS.PRIMARY4;
    } else if (index % 3 == 1) {
      return theme.COLORS.SECONDARY3;
    } else {
      return theme.COLORS.TERTIARY2;
    }
  };

  getCridForFrid = frid => {
    let matchingCrid = -1;

    Object.entries(this.props.connect.chatroomList).forEach(
      (chatroomItem, i) => {
        if (chatroomItem[1].publicProfile.uid == frid) {
          matchingCrid = chatroomItem[1].crid;
          return;
        }
      },
    );

    console.log('Matching CRID: ', matchingCrid);
    return matchingCrid;
  };

  renderProfile = () => {
    const {navigation} = this.props;

    return (
      <ScrollView
        testID="pageScrollview"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <View
          testID={'amieProfileView'}
          style={{
            flex: 1,
          }}>
          <View
            style={{
              marginBottom: theme.SIZES.BASE,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.COLORS.TRANSPARENT,
            }}>
            <View
              style={{
                width: 120,
                height: 120,
                marginTop: theme.SIZES.BASE,
                alignContent: 'center',
              }}>
              {getSVG(
                this.props.connect.currentAmieProfile
                  ? this.props.connect.currentAmieProfile.avatar
                  : defaultAmiePublicProfile.avatar,
              )}
            </View>

            <Text
              style={{
                fontSize: theme.SIZES.H6,
                fontWeight: 'bold',
                color: theme.COLORS.TEXT1,
              }}>
              {this.props.connect.currentAmieProfile
                ? this.props.connect.currentAmieProfile.name
                : defaultAmiePublicProfile.name}
            </Text>
            <Text style={{fontSize: theme.SIZES.B1, color: theme.COLORS.TEXT2}}>
              {this.props.connect.currentAmieProfile
                ? this.props.connect.currentAmieProfile.location
                : defaultAmiePublicProfile.location}
            </Text>
          </View>

          {this.props.connect.currentAmieProfile.uid !=
            auth.currentUser['uid'] &&
            this.props.connect.currentAmieProfile.uid != '' && (
              <View
                style={{
                  paddingHorizontal: theme.SIZES.BASE * 2,
                  alignItems: 'center',
                  marginBottom: theme.SIZES.BASE * 0.5,
                }}>
                {Object.keys(this.props.connect.friendsList).includes(
                  this.props.connect.currentAmieProfile.uid,
                ) && (
                  <Button
                    testID="messageButton"
                    style={{
                      ...styles.button,
                      color: theme.COLORS.DEFAULT,
                      width: width - theme.SIZES.BASE * 10,
                    }}
                    title="Message"
                    titleStyle={{
                      color: theme.COLORS.WHITE,
                      fontFamily: theme.FONTS.TEXT,
                      fontSize: theme.SIZES.H6,
                    }}
                    onPress={async () => {
                      const matchingCrid = this.getCridForFrid(
                        this.props.connect.currentAmieProfile.uid,
                      );

                      if (matchingCrid != -1 && matchingCrid != '-1') {
                        Promise.resolve()
                          .then(() => {
                            console.log('setting new crid to: ', matchingCrid);
                            this.props.dispatch(
                              setCurrentCRIDAction(matchingCrid),
                            );
                          })
                          .then(() => {
                            navigation.navigate('Chat');
                          })
                          .catch(error => console.log(error));
                      }
                    }}
                  />
                )}

                {!Object.keys(this.props.connect.friendsList).includes(
                  this.props.connect.currentAmieProfile.uid,
                ) && (
                  <Button
                    testID="requestFriendButton"
                    disabled={this.state.friendRequestSent}
                    style={{
                      ...styles.button,
                      color: theme.COLORS.DEFAULT,
                      width: width - theme.SIZES.BASE * 10,
                    }}
                    title={
                      this.state.friendRequestSent
                        ? 'Request Sent'
                        : 'Send Friend Request'
                    }
                    titleStyle={{
                      color: theme.COLORS.WHITE,
                      fontFamily: theme.FONTS.TEXT,
                      fontSize: theme.SIZES.H6,
                    }}
                    onPress={async () => {
                      // if (this.state.friendRequestSent) {
                      Promise.resolve()
                        .then(() =>
                          sendFriendRequest(
                            this.props.connect.currentAmieProfile.uid,
                            this.props.userPublicProfile,
                          ),
                        )
                        .then(() => this.setFriendRequestSent(true))
                        .catch(error => console.log(error));
                      // }
                    }}
                  />
                )}
              </View>
            )}

          <RoundedTopContainer
            style={{
              paddingHorizontal: theme.SIZES.BASE,
              minHeight: height - theme.SIZES.BASE * 15.6,
              marginTop: theme.SIZES.BASE * 0.8,
            }}>
            <View
              style={{
                marginVertical: theme.SIZES.BASE,
                marginTop: theme.SIZES.BASE * 2,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: theme.FONTS.TEXT,
                  fontSize: theme.SIZES.H5,
                }}>
                My Story
              </Text>
            </View>

            <View>
              <Text
                style={{color: theme.COLORS.TEXT2, fontSize: theme.SIZES.B1}}>
                {this.props.connect.currentAmieProfile
                  ? this.props.connect.currentAmieProfile.description
                  : defaultAmiePublicProfile.description}
              </Text>
            </View>

            <View
              style={{
                marginVertical: theme.SIZES.BASE,
                marginTop: theme.SIZES.BASE * 2,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: theme.FONTS.TEXT,
                  fontSize: theme.SIZES.H5,
                }}>
                My Health
              </Text>
            </View>

            <View
              style={{
                marginVertical: theme.SIZES.BASE * 0.5,
              }}>
              {this.props.connect.currentAmieProfile &&
                this.props.connect.currentAmieProfile.healthConditions.map(
                  (val, index) => {
                    return (
                      <View
                        key={index}
                        style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                        <EditableListitemCard
                          name={val}
                          value={null}
                          iconName={'bandage-outline'}
                          iconType={'ionicon'}
                          iconBackgroundColor={this.getIconColor(index)}
                          dispatch={this.props.dispatch}
                          inputName={'None'}
                          inputType={'None'}
                          singleOptionList={[]}
                          multiOptionList={[]}
                        />
                      </View>
                    );
                  },
                )}
            </View>
          </RoundedTopContainer>
        </View>
      </ScrollView>
    );
  };

  render() {
    const {navigation} = this.props;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customHeaderPaddingHeight={iosPlatform() ? 216 : 206}
        customImageName={Images.ui.BackgroundGradient3}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{...styles.home, flex: 1, alignContent: 'center'}}>
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
              {this.renderProfile()}
            </KeyboardAvoidingView>
          </View>
          <Footer navigation={navigation} tabName="Connect" />
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userPublicProfile: state.userPublicProfile,
    connect: state.connect,
  };
};
export default connect(mapStateToProps)(AmieProfileScreen);
