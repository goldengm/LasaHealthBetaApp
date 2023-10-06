import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';
import {StatusBar} from 'expo-status-bar';
import XDate from 'xdate';

import Icon from '../../components/Icon';
import {
  Footer,
  TouchableOpacity,
  MessageCard,
  RoundedTopContainer,
} from '../../components';
import {
  getChatroomUpdates,
  getFriendRequests,
  updateFriendRequests,
  getCachedPublicProfile,
} from '../../shared/ServerUtils';
import {Images, theme, styles} from '../../constants';
import {getSVG} from '../../constants/SVGs';
import {
  setCurrentAmieProfileAction,
  setCurrentAmieUIDAction,
  setCachedFriendRequestsAction,
  updateAllChatroomsAction,
  addChatroomAction,
  updateCachedPublicProfileAction,
  setCachedPublicProfilesAction,
  updatePublicProfileForCachedChatroomAction,
} from '../../redux/actions/connectActions';
import {setCurrentCRIDAction} from '../../redux/actions/connectActions';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import {auth} from '../../shared/firebaseUtils';

import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

const {width, height} = Dimensions.get('screen');

class FriendRequest extends React.Component {
  navigateToAmiesProfileScreen = amieUID => {
    const {navigation} = this.props;
    Promise.resolve()
      .then(() => this.props.dispatch(setCurrentAmieUIDAction(amieUID)))
      .then(() =>
        this.props.dispatch(
          setCurrentAmieProfileAction(
            cloneDeep(
              this.props.connect.cachedPublicProfiles[amieUID]?.publicProfile,
            ),
          ),
        ),
      )
      .then(() => navigation.navigate('AmieProfile'))
      .catch(function (err) {
        console.warn(err);
      });
  };

  render() {
    const {requestName, uid, publicProfile} = this.props;

    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width - theme.SIZES.BASE * 2,
          marginVertical: theme.SIZES.BASE * 0.25,
        }}
        onPress={() => {
          console.log('Friend Request View Profile');

          Promise.resolve()
            .then(() =>
              this.props.dispatch(
                updateCachedPublicProfileAction(
                  publicProfile['uid'],
                  publicProfile,
                ),
              ),
            )
            .then(() => this.navigateToAmiesProfileScreen(publicProfile['uid']))
            .catch(error => {
              console.log(error);
            });
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: theme.COLORS.TEXT3,
            borderRadius: theme.SIZES.BASE * 2,
            paddingHorizontal: theme.SIZES.BASE * 1.3,
            paddingVertical: theme.SIZES.BASE * 0.5,
            width: width - theme.SIZES.BASE * 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  marginRight: theme.SIZES.BASE * 0.5,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('Friend Request View Profile');

                    Promise.resolve()
                      .then(() =>
                        this.props.dispatch(
                          updateCachedPublicProfileAction(
                            publicProfile['uid'],
                            publicProfile,
                          ),
                        ),
                      )
                      .then(() =>
                        this.navigateToAmiesProfileScreen(publicProfile['uid']),
                      )
                      .catch(error => {
                        console.log(error);
                      });
                  }}>
                  {getSVG(
                    this.props.publicProfile
                      ? this.props.publicProfile['avatar']
                      : '',
                  )}
                </TouchableOpacity>
              </View>
              <View style={{justifyContent: 'space-evenly'}}>
                <Text
                  style={{
                    fontSize: theme.SIZES.B1,
                    fontWeight: 'bold',
                    color: theme.COLORS.TEXT1,
                  }}>
                  {requestName}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                testID="friendAcceptButton"
                onPress={() => {
                  console.log('Friend Request Accepted');
                  let updatedFriendRequestsLocal = cloneDeep(
                    this.props.connect.cachedFriendRequests,
                  );
                  updatedFriendRequestsLocal['requested'][uid]['status'] =
                    'accepted';

                  // //  FIXMETUNA:  need to update the new local chatrooms here
                  // this.props.dispatch()
                  //  FIXMETUNA: I also need to update the local friends list at some point
                  this.props.updateFriendRequestsLocal(
                    updatedFriendRequestsLocal,
                  );
                }}
                style={{
                  width: theme.SIZES.BASE * 2.5,
                  height: theme.SIZES.BASE * 2.5,
                  borderRadius: theme.SIZES.BASE * 3,
                  borderColor: theme.COLORS.SUCCESS,
                  borderWidth: 2,
                  backgroundColor: theme.COLORS.TRANSPARENT,
                  opacity: 1.0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Icon
                  family="ionicon"
                  name="checkmark"
                  fill={theme.COLORS.SUCCESS}
                  color={theme.COLORS.SUCCESS}
                />
              </TouchableOpacity>
              <TouchableOpacity
                testID="friendRejectButton"
                onPress={() => {
                  console.log('Friend Request Rejected');
                  let updatedFriendRequestsLocal = cloneDeep(
                    this.props.connect.cachedFriendRequests,
                  );
                  updatedFriendRequestsLocal['requested'][uid]['status'] =
                    'rejected';

                  // //  FIXMETUNA:  need to update the new local chatrooms here
                  // this.props.dispatch()
                  //  FIXMETUNA: I also need to update the local friends list at some point
                  this.props.updateFriendRequestsLocal(
                    updatedFriendRequestsLocal,
                  );

                  console.log('Friend Request Rejected2');
                }}
                style={{
                  width: theme.SIZES.BASE * 2.5,
                  height: theme.SIZES.BASE * 2.5,
                  borderRadius: theme.SIZES.BASE * 3,
                  borderColor: theme.COLORS.ERROR1,
                  borderWidth: 2,
                  backgroundColor: theme.COLORS.TRANSPARENT,
                  opacity: 1.0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Icon
                  family="ionicon"
                  name="close"
                  fill={theme.COLORS.ERROR1}
                  color={theme.COLORS.ERROR1}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class ConnectScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
      selectedCRID: -1,
      speedDialMenuOpen: false,
    };
  }

  componentDidMount() {
    console.log('ViewFriends Screen Did Mount');

    this.fetchChatroomUpdates();
  }

  fetchChatroomUpdates = () => {
    const currentDateObj = new XDate();
    const lastUpdatedDateObj = new XDate(
      this.props.connect.lastCachedFriendRequestsRefreshTS,
    );
    //  if more then an hour has passed since the last update, update chatroom and friendrequests
    //  FIXMETUNA: changed to if 10 minutes have passed, check again
    if (lastUpdatedDateObj.diffMinutes(currentDateObj) > 10) {
      Promise.resolve()
        .then(() => getChatroomUpdates())
        .then(chatroomUpdates => {
          console.log('Chatroom Updates: ', JSON.stringify(chatroomUpdates));
          return this.props.dispatch(
            updateAllChatroomsAction(auth.currentUser['uid'], chatroomUpdates),
          );
        })
        .then(() => this.updateChatroomPublicProfiles())
        .then(() => getFriendRequests())
        .then(friendRequests => {
          console.log('Friend requests: ', JSON.stringify(friendRequests));
          return this.props.dispatch(
            setCachedFriendRequestsAction(friendRequests),
          );
        })
        .then(() => {
          const currentFriendRequestsLocal = cloneDeep(
            this.props.connect.cachedFriendRequests,
          );
          this.updateFriendRequestsLocal(currentFriendRequestsLocal);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  updateChatroomPublicProfiles = () => {
    //  update publicProfiles for each chatroom, get cached public profile which will update as needed
    Object.entries(this.props.connect.chatroomList).forEach(
      ([chatroomKey, chatroomVal]) => {
        if (!(chatroomVal['publicProfile'] == null)) {
          const chatroomUID = chatroomVal['publicProfile']['uid'];

          console.log(
            '**************************GETTING CACHED PUBLIC PROFILE**********',
            chatroomUID,
            JSON.stringify(chatroomVal),
          );

          Promise.resolve()
            .then(() =>
              getCachedPublicProfile(
                chatroomUID,
                this.props.connect.cachedPublicProfiles,
              ),
            )
            .then(([updatedCache, cachedPublicProfile]) => {
              console.log(
                'Cached Public Profile RESULTS: ',
                JSON.stringify(updatedCache),
                JSON.stringify(cachedPublicProfile),
              );
              if (!(updatedCache == null)) {
                this.props.dispatch(
                  setCachedPublicProfilesAction(updatedCache),
                );
              }
              if (!(cachedPublicProfile == null)) {
                this.props.dispatch(
                  updatePublicProfileForCachedChatroomAction(
                    chatroomKey,
                    cachedPublicProfile,
                  ),
                );
              }
            })
            .catch(error => console.log(error));
        }
      },
    );
  };

  updateFriendRequestsLocal = updatedFriendRequestsLocal => {
    return Promise.resolve()
      .then(() => {
        console.log('Friend Request Rejected3');
        return updateFriendRequests(
          this.props.userPublicProfile,
          updatedFriendRequestsLocal,
        );
      })
      .then(ufrResults => {
        if (!(ufrResults == null)) {
          console.log(
            'Friend request rejected results: ',
            JSON.stringify(ufrResults),
          );
          const newFriendRequestsLocal = ufrResults[0];
          const newChatrooms = ufrResults[1];
          const newCachedPublicProfiles = ufrResults[2];
          this.props.dispatch(
            setCachedFriendRequestsAction(newFriendRequestsLocal),
          );

          Object.entries(newChatrooms).forEach((chatroomItem, i) => {
            console.log(
              'Adding a new chatroom: ',
              JSON.stringify(chatroomItem),
            );
            this.props.dispatch(
              addChatroomAction(chatroomItem[0], chatroomItem[1]),
            );
          });

          Object.entries(newCachedPublicProfiles).forEach(
            (publicProfileItem, i) => {
              console.log(
                'Adding a new cached public profile: ',
                JSON.stringify(publicProfileItem),
              );
              this.props.dispatch(
                updateCachedPublicProfileAction(
                  publicProfileItem[0],
                  publicProfileItem[1],
                ),
              );
            },
          );
        }
      });
  };

  navigateToAmiesProfileScreen = amieUID => {
    const {navigation} = this.props;
    Promise.resolve()
      .then(() => this.props.dispatch(setCurrentAmieUIDAction(amieUID)))
      .then(() =>
        this.props.dispatch(
          setCurrentAmieProfileAction(
            cloneDeep(
              this.props.connect.cachedPublicProfiles[amieUID]?.publicProfile,
            ),
          ),
        ),
      )
      .then(() => navigation.navigate('AmieProfile'))
      .catch(function (err) {
        console.warn(err);
      });
  };

  handleOnSelect = value => {
    this.setMenuVisible(false);
  };

  setMenuVisible = value => {
    this.setState({menuVisible: value});
  };

  setSelectedCRID = value => {
    this.setState({selectedCRID: value});
  };

  setSpeedDialMenuOpen = value => {
    this.setState({speedDialMenuOpen: value});
  };

  renderFriendRequests = () => {
    return (
      <View>
        <View
          style={{
            marginVertical: theme.SIZES.BASE,
            marginTop: theme.SIZES.BASE,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: theme.FONTS.TEXT,
              fontSize: theme.SIZES.H5,
              marginTop: theme.SIZES.BASE,
            }}>
            Friend Requests
          </Text>
        </View>

        <View>
          {this.props.connect.cachedFriendRequests &&
            this.props.connect.cachedFriendRequests.requested &&
            Object.entries(
              this.props.connect.cachedFriendRequests.requested,
            ).map((item, i) => {
              return (
                <FriendRequest
                  testID={'friendRequest'}
                  key={i}
                  uid={item[0]}
                  status={item[1]['status']}
                  publicProfile={item[1]['publicProfile']}
                  requestName={item[1]['publicProfile']['name']}
                  navigation={this.props.navigation}
                  dispatch={this.props.dispatch}
                  connect={this.props.connect}
                  updateFriendRequestsLocal={this.updateFriendRequestsLocal}
                />
              );
            })}
        </View>
      </View>
    );
  };

  renderFriendMessages = () => {
    console.log('rendering chatroom list');
    console.log(JSON.stringify(this.props.connect.chatroomList));
    return (
      <View>
        {this.props.connect.chatroomList &&
          Object.entries(this.props.connect.chatroomList).map(
            ([itemKey, itemVal]) => {
              if (
                itemVal == null ||
                (!(itemVal['publicProfile'] == null) &&
                  itemVal['publicProfile'] != {} &&
                  itemVal['publicProfile']['uid'] === -1)
              ) {
                return null;
              }
              return (
                <MessageCard
                  key={itemKey}
                  title={itemVal['username']}
                  subtitle={itemVal['lastMessage']}
                  time={itemVal['lastMessageTS']}
                  numUnread={itemVal['numMessages'] - itemVal['numRead']}
                  publicProfile={itemVal['publicProfile']}
                  crid={itemVal['crid']}
                  onPress={() => {
                    Promise.resolve()
                      .then(() => {
                        console.log('setting new crid to: ', itemVal['crid']);
                        this.props.dispatch(
                          setCurrentCRIDAction(itemVal['crid']),
                        );
                      })
                      .then(() => {
                        this.props.navigation.navigate('Chat');
                      })
                      .catch(error => console.log(error));
                  }}
                  onPressAvatar={() => {
                    if (
                      !(itemVal['publicProfile'] == null) &&
                      itemVal['publicProfile'] != {} &&
                      itemVal['publicProfile']['uid'] != -1
                    ) {
                      Promise.resolve()
                        .then(() =>
                          this.props.dispatch(
                            updateCachedPublicProfileAction(
                              itemVal['publicProfile']['uid'],
                              itemVal['publicProfile'],
                            ),
                          ),
                        )
                        .then(() =>
                          this.navigateToAmiesProfileScreen(
                            itemVal['publicProfile']['uid'],
                          ),
                        )
                        .catch(error => {
                          console.log(error);
                        });
                    }
                  }}
                />
              );
            },
          )}
      </View>
    );
  };

  renderFriendsList = () => {
    const {navigation} = this.props;

    return (
      <ScrollView
        testID="pageScrollview"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          ...styles.articles,
          backgroundColor: theme.COLORS.TRANSPARENT,
        }}
        style={{
          backgroundColor: theme.COLORS.TRANSPARENT,
        }}>
        <RoundedTopContainer
          style={{
            paddingHorizontal: theme.SIZES.BASE,
            minHeight: height - theme.SIZES.BASE * 8.6,
            marginTop: theme.SIZES.BASE * 0.8,
          }}>
          {this.props.connect.cachedFriendRequests &&
            this.props.connect.cachedFriendRequests.requested &&
            Object.keys(this.props.connect.cachedFriendRequests.requested)
              .length > 0 &&
            this.renderFriendRequests()}

          <View
            testID={'MessagesView'}
            style={{
              marginVertical: theme.SIZES.BASE,
              marginTop: theme.SIZES.BASE,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.H5,
                marginTop: theme.SIZES.BASE,
              }}>
              Messages
            </Text>
          </View>

          {this.renderFriendMessages()}
        </RoundedTopContainer>
      </ScrollView>
    );
  };

  render() {
    const {navigation} = this.props;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customImageName={Images.ui.BackgroundGradient3}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.COLORS.TRANSPARENT,
          }}>
          <View
            style={{
              ...styles.home,
              flex: 1,
              alignContent: 'center',
              backgroundColor: theme.COLORS.TRANSPARENT,
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
                backgroundColor: theme.COLORS.TRANSPARENT,
              }}
              behavior="padding"
              enabled={iosPlatform()}>
              {this.renderFriendsList()}
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
    amieChatbot: state.amieChatbot,
    connect: state.connect,
  };
};
export default connect(mapStateToProps)(ConnectScreen);
