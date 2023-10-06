import React from 'react';
import {
  Dimensions,
  FlatList,
  View,
  RefreshControl,
  DeviceEventEmitter,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {Text, SpeedDial} from 'react-native-elements';
import {connect} from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';
import XDate from 'xdate';
import {StatusBar} from 'expo-status-bar';

import PencilSvg from '../../assets/amie/connect/icons/pencil.svg';
import CheckInSvg from '../../assets/amie/connect/icons/check-in.svg';
import HelpSvg from '../../assets/amie/connect/icons/help.svg';
import {
  Button,
  Footer,
  StatusCard,
  FeedCard,
  Input,
  QnACard,
  EmojiPicker,
  RoundedTopContainer,
  PollCard,
} from '../../components';
import {statsConstants} from '../../shared/AnalysisUtils';
import {auth} from '../../shared/firebaseUtils';

import {Images, theme, styles, utils} from '../../constants';
import {
  setCurrentAmieProfileAction,
  setCurrentAmieUIDAction,
  setCachedFeedAction,
  addStatusToCachedFeedAction,
  setLocalFeedUpdatesAction,
  resetLocalFeedUpdatesAction,
  updateCachedPublicProfileAction,
  setUrgentFriendStatusReceivedAction,
  attemptCachedPublicProfileUpdateAction,
  appendToCachedFeedAction,
  setLastFeedSnapshotAction,
} from '../../redux/actions/connectActions';
import {setAppIntroTutorialCompleteAction} from '../../redux/actions/userProfileActions';
import {setCurrentCRIDAction} from '../../redux/actions/connectActions';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import ServerProxy from '../../tests/ServerProxy';

import {
  getNextFeed,
  syncLocalFeed,
  postUrgentStatusUpdate,
} from '../../shared/ServerUtils';
import {getOS} from '../../shared/PlatformUtils';
import {dummyJSON} from '../../constants/learn/pollcardData';
// import AddButton from './addButton';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

class ConnectScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
      selectedCRID: -1,
      speedDialMenuOpen: false,
      checkInVisible: false,
      checkInText: '',
      checkInStatus: '',
      needHelpVisible: false,
      needHelpText: '',
      needHelpStatus: '',
      refreshing: false,
      nextFeedLoading: false,
      cardLists: [],
    };

    this.TestServerProxy = new ServerProxy();
  }

  componentDidMount() {
    console.log(
      'ConnectDev Screen Did Mount, tutorial complete:',
      this.props.userProfile.appIntroTutorialComplete.includes(4),
    );
    this.fetchFeed();

    this.setCardLists(dummyJSON[Math.floor(Math.random() * 7)]);

    if (!this.props.userProfile.appIntroTutorialComplete.includes(4)) {
      //  testing the chatbot public profile setup tutorial
      setTimeout(() => {
        console.log('Showing tutorial for connect screen');
        DeviceEventEmitter.emit('event.amieModalVisible', 'amieValidationType');

        this.props.dispatch(setAppIntroTutorialCompleteAction(4));
      }, 1000);
    }
  }

  setCardLists = item => {
    let temp_item = [item['id'], item];
    let temp_result = Object.entries(this.props.connect.cachedFeed).sort(
      ([a], [b]) => b - a,
    );
    temp_result.push(temp_item);

    this.setState({cardLists: temp_result});
  };

  lastSnapshotHasExpired = lastFeedSnapshot => {
    //  FIXMETUNA: this path might not be stable and might need to be updated in the future
    //  a little hacky
    const secondsTS =
      lastFeedSnapshot?._delegate?._document?.readTime?.timestamp?.seconds;
    if (!(secondsTS == null)) {
      const currentDateObj = new XDate();
      const snapshotDateObj = new XDate(parseInt(secondsTS) * 1000);
      if (
        snapshotDateObj == null ||
        snapshotDateObj.diffDays(currentDateObj) > 1
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  fetchFeed = () => {
    const currentDateObj = new XDate();
    const lastUpdatedDateObj = new XDate(
      this.props.connect.lastCachedFeedRefreshTS,
    );

    Promise.resolve()
      .then(() => {
        //  if refreshing and it's been over an hour since the last update,
        //  then set lastFeedSnapshot to null so the whole feed can refresh
        //  otherwise leave the feed and snapshot as is
        if (
          (this.state.refreshing &&
            !(this.props.connect.lastFeedSnapshot == null) &&
            lastUpdatedDateObj.diffHours(currentDateObj) > 1) ||
          (!(this.props.connect.lastFeedSnapshot == null) &&
            this.lastSnapshotHasExpired(this.props.connect.lastFeedSnapshot))
        ) {
          return this.props.dispatch(setLastFeedSnapshotAction(null));
        } else {
          return null;
        }
      })
      .then(() => {
        //  if more then an hour has passed since the last update, update cached feed
        //  FIXMETUNA:  for now pull to refresh only has an effect once an hour to prevent abuse
        //  might need to decrease the timeout in the future
        if (
          this.props.connect.urgentFriendStatusReceived ||
          (!(this.props.connect.lastFeedSnapshot == null) &&
            !this.state.refreshing) ||
          lastUpdatedDateObj.diffHours(currentDateObj) > 1
        ) {
          Promise.resolve()
            .then(() => {
              this.setNextFeedLoading(true);
              return getNextFeed(this.props.connect.lastFeedSnapshot);
            })
            .then(([nextFeed, nextLastSnapshot]) => {
              // console.log(
              //   'GET NEXT FEED*********************: ',
              //   !(nextFeed == null),
              //   !(nextLastSnapshot == null),
              //   //   JSON.stringify(nextFeed),
              // );
              if (!(nextFeed == null) && !(nextLastSnapshot == null)) {
                //  FIXMETUNA:
                //  FIXMETUNA:
                //  FIXMETUNA: use this feed to update cachedPublicProfiles here
                Object.entries(nextFeed).forEach(([feedTSKey, feedVal]) => {
                  this.props.dispatch(
                    attemptCachedPublicProfileUpdateAction(
                      feedTSKey,
                      feedVal['content']['publicProfile'],
                    ),
                  );
                });

                if (!(this.props.connect.lastFeedSnapshot == null)) {
                  this.props.dispatch(
                    setLastFeedSnapshotAction(nextLastSnapshot),
                  );
                  return this.props.dispatch(
                    appendToCachedFeedAction(nextFeed),
                  );
                } else if (!(nextFeed == null) && nextFeed != {}) {
                  this.props.dispatch(
                    setLastFeedSnapshotAction(nextLastSnapshot),
                  );
                  return this.props.dispatch(setCachedFeedAction(nextFeed));
                } else {
                  return null;
                }
              }
            })
            .then(() => {
              if (this.props.connect.urgentFriendStatusReceived) {
                this.props.dispatch(setUrgentFriendStatusReceivedAction(false));
              }
              this.setRefreshing(false);
              this.setNextFeedLoading(false);
            })
            .catch(error => {
              console.log(error);
              this.setRefreshing(false);
              this.setNextFeedLoading(false);
            });
        } else {
          this.setRefreshing(false);
          this.setNextFeedLoading(false);
        }
      });
  };

  handleRefresh = () => {
    console.log('REFRESHING');
    //  reset the feed completely on reset
    //  FIXMETUNA:  I might need logic to prevent abuse here
    Promise.resolve()
      // .then(() => this.setLastFeedSnapshot(null))
      .then(() => this.setRefreshing(true))
      .then(() => this.fetchFeed())
      .catch(error => console.log(error));
  };

  // updateCachedFeedPublicProfiles = () => {
  //   console.log('Updating public profiles in the cached feed');
  //   Object.entries(this.props.connect.cachedFeed).forEach((feedItem, i) => {
  //     const fid = feedItem[0];
  //     const feedObj = feedItem[1];
  //     // console.log('FEED ITEM: ', fid, JSON.stringify(feedItem));
  //     const cachedFeedUid = feedObj['content']['publicProfile']['uid'];
  //     // console.log('This FEED ITEM ID is fine: ', fid);
  //     if (!(cachedFeedUid == null) && cachedFeedUid != '') {
  //       Promise.resolve()
  //         .then(() =>
  //           getCachedPublicProfile(
  //             cachedFeedUid,
  //             this.props.connect.cachedPublicProfiles,
  //           ),
  //         )
  //         .then(([updatedCache, cachedPublicProfile]) => {
  //           // console.log(
  //           //   'REEEEESULTS: ',
  //           //   JSON.stringify(updatedCache),
  //           //   JSON.stringify(cachedPublicProfile),
  //           // );
  //           if (!(updatedCache == null)) {
  //             this.props.dispatch(setCachedPublicProfilesAction(updatedCache));
  //           }

  //           let updatedFeedItem = cloneDeep(feedObj);
  //           updatedFeedItem['content']['publicProfile'] = cachedPublicProfile;
  //           updatedFeedItem['content']['name'] = cachedPublicProfile['name'];
  //           this.props.dispatch(
  //             updateCachedFeedItemAction(fid, updatedFeedItem),
  //           );
  //         })
  //         .catch(error => console.log(fid, error));
  //       // this.props.dispatch(
  //       //   updateCachedPublicProfileAction(
  //       //     publicProfileItem[0],
  //       //     publicProfileItem[1],
  //       //   ),
  //       // );
  //     }
  //     // this.props.dispatch(
  //     //   addChatroomAction(feedItem[0], feedItem[1]),
  //     // );
  //   });

  //   // Object.entries(newCachedPublicProfiles).forEach(
  //   //   (publicProfileItem, i) => {
  //   //     console.log(
  //   //       'Adding a new cached public profile: ',
  //   //       JSON.stringify(publicProfileItem),
  //   //     );
  //   //     this.props.dispatch(
  //   //       updateCachedPublicProfileAction(
  //   //         publicProfileItem[0],
  //   //         publicProfileItem[1],
  //   //       ),
  //   //     );
  //   //   },
  //   // );
  // };

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

  setCheckInVisible = value => {
    this.setState({checkInVisible: value});
  };

  setCheckInText = checkInTextP => {
    this.setState({checkInText: checkInTextP});
  };

  setCheckInStatus = checkInStatusP => {
    this.setState({checkInStatus: checkInStatusP});
  };

  setNeedHelpVisible = value => {
    this.setState({needHelpVisible: value});
  };

  setNeedHelpText = needHelpTextP => {
    this.setState({needHelpText: needHelpTextP});
  };

  setNeedHelpStatus = needHelpStatusP => {
    this.setState({needHelpStatus: needHelpStatusP});
  };

  // setLastFeedSnapshot = lastFeedSnapshotP => {
  //   // console.log(
  //   //   'Setting last Feed snapshot to**************: ',
  //   //   !(lastFeedSnapshotP == null),
  //   // );
  //   this.setState({lastFeedSnapshot: lastFeedSnapshotP});
  // };

  setRefreshing = refreshingP => {
    this.setState({refreshing: refreshingP});
  };

  setNextFeedLoading = nextFeedLoadingP => {
    this.setState({nextFeedLoading: nextFeedLoadingP});
  };

  getDailyPrompt = () => {
    const numPrompts = Object.keys(utils.checkinPrompts).length;
    const currentDate = new XDate();
    const currentTSDays = Math.floor(
      currentDate.getTime() / statsConstants.dayLengthMilliseconds,
    ).toString();

    const sdbm = str => {
      let arr = str.split('');
      return arr.reduce(
        (hashCode, currentVal) =>
          (hashCode =
            currentVal.charCodeAt(0) +
            (hashCode << 6) +
            (hashCode << 16) -
            hashCode),
        0,
      );
    };
    let dailyPromptHash = sdbm(currentTSDays);
    if (dailyPromptHash < 0) {
      dailyPromptHash *= -1;
    }
    return utils.checkinPrompts[dailyPromptHash % numPrompts];
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

  findIndexOfChatroom = (sympArray, crid) => {
    let sympIndexTmp = -1;
    let currentInd = -1;
    for (let val of sympArray) {
      currentInd += 1;
      if (!(val == null) && val.crid === crid) {
        sympIndexTmp = currentInd;
        break;
      }
    }
    return sympIndexTmp;
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

  // renderHeader = () => (
  //   <Text
  //     style={{
  //       fontSize: 25,
  //       fontWeight: '700',
  //       marginVertical: 15,
  //       marginHorizontal: 10,
  //     }}>
  //     RN News
  //   </Text>
  // );

  renderFooter = () => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        backgroundColor: theme.COLORS.WHITE,
      }}>
      {this.state.nextFeedLoading && <ActivityIndicator />}
      {!this.state.nextFeedLoading && <Text>End of feed reached</Text>}
    </View>
  );

  renderEmpty = () => (
    <View
      style={{
        // marginVertical: theme.SIZES.BASE,
        // marginTop: theme.SIZES.BASE,
        // marginHorizontal: theme.SIZES.BASE,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: theme.COLORS.WHITE,
        height: height,
      }}>
      <View>
        <Text
          style={{
            fontFamily: theme.FONTS.TEXT,
            fontSize: theme.SIZES.H5,
            marginTop: theme.SIZES.BASE,
            marginBottom: 0,
            paddingBottom: 0,
            textAlign: 'center',
          }}>
          Feed Empty
        </Text>
        <Text
          style={{
            fontStyle: 'italic',
            fontFamily: theme.FONTS.TEXT,
            fontSize: theme.SIZES.H6,
            marginTop: 0,
            textAlign: 'center',
          }}>
          (find new friends above!)
        </Text>
        {/* <StatusCard
          key={1}
          name={'StatusCardName'}
          status={'StatusCardStatus'}
          prompt={'StatusCardPrompt'}
          time={'StatusCardTime'}
          avatar={'StatusCardAvatar'}
          reactionCounts={'StatusCardReactionCounts'}
          urgent={'StatusCardUrgent'}
          messageEnabled={true}
          onPress={() => {}}
          onPressMessage={() => {}}
          onReaction={() => {}}
        />
        <StatusCard
          key={2}
          name={'StatusCardName2'}
          status={'StatusCardStatus2'}
          prompt={'StatusCardPrompt2'}
          time={'StatusCardTime2'}
          avatar={'StatusCardAvatar2'}
          reactionCounts={'StatusCardReactionCounts2'}
          urgent={'StatusCardUrgent2'}
          messageEnabled={true}
          onPress={() => {}}
          onPressMessage={() => {}}
          onReaction={() => {}}
        />
        <FeedCard key={3} title={'FeedCardTitle'} body={'FeedCardBody'} /> */}
      </View>
    </View>
  );

  // [
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'First Item',
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Second Item',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Third Item',
  //   },
  // ]

  renderItem = itemObj => {
    if (!(itemObj == null)) {
      const fid = itemObj['item'][0];
      const item = itemObj['item'][1];
      if (item['type'] == 'statusUpdate') {
        if (Object.keys(item['content']).includes('newStatusUpdate')) {
          return <View key={i}></View>;
        } else {
          return (
            <View>
              <StatusCard
                key={fid}
                name={item['content']['name']}
                status={item['content']['status']}
                prompt={item['content']['prompt']}
                time={item['content']['timestamp']}
                avatar={item['content']['publicProfile']['avatar']}
                reactionCounts={item['content']['reactionCounts']}
                urgent={item['content']['urgent']}
                messageEnabled={
                  !(item?.content?.publicProfile?.uid == null) &&
                  item?.content?.publicProfile?.uid != '' &&
                  item?.content?.publicProfile?.uid != auth.currentUser['uid']
                }
                onPress={() => {
                  Promise.resolve()
                    .then(() =>
                      this.props.dispatch(
                        updateCachedPublicProfileAction(
                          item['content']['publicProfile']['uid'],
                          item['content']['publicProfile'],
                        ),
                      ),
                    )
                    .then(() =>
                      this.navigateToAmiesProfileScreen(
                        item['content']['publicProfile']['uid'],
                      ),
                    )
                    .catch(error => {
                      console.log(error);
                    });
                }}
                onPressMessage={() => {
                  const messageUid = item?.content?.publicProfile?.uid;
                  if (
                    !(messageUid == null) &&
                    messageUid != auth.currentUser['uid']
                  ) {
                    this.props.connect.chatroomList;

                    const matchingCrid = this.getCridForFrid(messageUid);

                    if (matchingCrid != -1 && matchingCrid != '-1') {
                      Promise.resolve()
                        .then(() => {
                          console.log('setting new crid to: ', matchingCrid);
                          this.props.dispatch(
                            setCurrentCRIDAction(matchingCrid),
                          );
                        })
                        .then(() => {
                          this.props.navigation.navigate('Chat');
                        })
                        .catch(error => console.log(error));
                    }
                  }
                }}
                onReaction={newReactionDiff => {
                  // console.log('Starting passed OnReaching method!!');
                  // localFeedUpdates: {
                  //   newStatusUpdates: {
                  //     timestamp: {statusUpdate: {statusUpdate}}
                  //   },
                  //   newStatusReactions: {
                  //     UID: {
                  //       timestamp: "",
                  //        reactionDiff: {
                  //          heart: 0,
                  //          smile: 1,
                  //          strong: -1,
                  //          tear: 0,
                  //          thumbsUp: 0,
                  //        },
                  //      }
                  //   }
                  // },
                  let newLocalFeedUpdates = cloneDeep(
                    this.props.connect.localFeedUpdates,
                  );

                  if (newLocalFeedUpdates['newStatusReactions'][fid]) {
                    //  agregate the local reaction changes if they already exist
                    let updatedReactionDiff = cloneDeep(
                      newLocalFeedUpdates['newStatusReactions'][fid][
                        'reactionDiff'
                      ],
                    );
                    for (let key in Object.keys(updatedReactionDiff)) {
                      updatedReactionDiff[key] =
                        updatedReactionDiff[key] + newReactionDiff[key];
                    }

                    newLocalFeedUpdates['newStatusReactions'][fid][
                      'reactionDiff'
                    ] = updatedReactionDiff;
                  } else {
                    newLocalFeedUpdates['newStatusReactions'][fid] = {
                      timestamp: item['content']['timestamp'],
                      reactionDiff: newReactionDiff,
                      uid: item?.content?.publicProfile?.uid,
                    };
                  }

                  this.props.dispatch(
                    setLocalFeedUpdatesAction(newLocalFeedUpdates),
                  );

                  //  update local feed react values
                  //  update the reaction values
                  let updatedCachedFeed = cloneDeep(
                    this.props.connect.cachedFeed,
                  );
                  let updatedStatusReactions = cloneDeep(
                    updatedCachedFeed[item['content']['timestamp']]['content'][
                      'reactionCounts'
                    ],
                  );

                  console.log(
                    'UPDATED STATUS REACTIONS OBJ: ',
                    JSON.stringify(updatedStatusReactions),
                  );

                  if (!(updatedStatusReactions == null)) {
                    updatedStatusReactions['heart'] =
                      updatedStatusReactions['heart'] +
                      newReactionDiff['heart'];
                    updatedStatusReactions['smile'] =
                      updatedStatusReactions['smile'] +
                      newReactionDiff['smile'];
                    updatedStatusReactions['cry'] =
                      updatedStatusReactions['cry'] + newReactionDiff['cry'];
                    updatedStatusReactions['muscle'] =
                      updatedStatusReactions['muscle'] +
                      newReactionDiff['muscle'];
                    updatedStatusReactions['thumbsUp'] =
                      updatedStatusReactions['thumbsUp'] +
                      newReactionDiff['thumbsUp'];

                    updatedCachedFeed[item['content']['timestamp']]['content'][
                      'reactionCounts'
                    ] = updatedStatusReactions;

                    this.props.dispatch(setCachedFeedAction(updatedCachedFeed));
                  }
                }}
              />
            </View>
          );
        }
      } else if (item['type'] == 'qnaQuestion') {
        return (
          <QnACard
            key={fid}
            question={item['content']['question']}
            answer={item['content']['answer']}
            tags={item['content']['tags']}
            numLikes={item['content']['upvotes']}
            numComments={
              item['content']['discussion']
                ? Object.keys(item['content']['discussion']).length
                : 0
            }
            qnaObject={item[1]}
            qid={item[0]}
          />
        );
      } else if (item['type'] == 'pollcard') {
        return (
          <PollCard
            key={fid}
            title={item['title']}
            subtitle={item['subtitle']}
            pollOptions={item['options']}
          />
        );
      } else {
        return (
          <FeedCard
            key={fid}
            title={item['content']['title']}
            body={item['content']['body']}
          />
        );
      }
    }
  };

  renderHeader = () => {
    return (
      <RoundedTopContainer
        style={{
          marginTop: theme.SIZES.BASE * 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: theme.SIZES.BASE * 1.5,
            marginBottom: theme.SIZES.BASE,
          }}>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              marginBottom: theme.SIZES.BASE * 0.5,
              paddingTop: 0,
              marginTop: 0,
            }}>
            <Button
              testID="viewFriendsButton"
              style={{
                ...styles.button,
                width: width / 2.0 - theme.SIZES.BASE * 2.0,
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
                borderRadius: 8,
              }}
              titleStyle={{
                color: theme.COLORS.WHITE,
                fontFamily: theme.FONTS.TEXT,
              }}
              title="View friends"
              onPress={() => {
                this.props.navigation.navigate('ViewFriendsScreen');
              }}></Button>
          </View>

          <View
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              marginBottom: theme.SIZES.BASE * 0.5,
              paddingTop: 0,
              marginTop: 0,
            }}>
            <Button
              testID="addNewFriendButton"
              style={{
                ...styles.outlinedButton,
                width: width / 2.0 - theme.SIZES.BASE * 2.0,
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
                borderRadius: 8,
                borderColor: theme.COLORS.PRIMARY2,
              }}
              titleStyle={{
                color: theme.COLORS.PRIMARY2,
                fontFamily: theme.FONTS.TEXT,
              }}
              title="Add a new friend"
              onPress={() => {
                this.props.navigation.navigate('FindAFriendScreen');
              }}></Button>
          </View>
        </View>
      </RoundedTopContainer>
    );
  };

  renderFriendsList = () => {
    const {navigation} = this.props;
    const {refreshing} = this.state;

    return (
      <FlatList
        testID="pageScrollview"
        contentContainerStyle={{flexGrow: 1}}
        // data={this.state.cardLists}
        data={Object.entries(this.props.connect.cachedFeed).sort(
          ([a], [b]) => b - a,
        )}
        renderItem={this.renderItem}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        ListEmptyComponent={this.renderEmpty}
        onEndReachedThreshold={0.2}
        onEndReached={this.fetchFeed}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={this.handleRefresh}
          />
        }
      />
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

              <SpeedDial
                isOpen={this.state.speedDialMenuOpen}
                icon={{name: 'border-color', color: theme.COLORS.WHITE}}
                openIcon={{name: 'close', color: theme.COLORS.WHITE}}
                buttonStyle={{
                  backgroundColor: theme.COLORS.PRIMARY2,
                  color: theme.COLORS.WHITE,
                }}
                onOpen={() =>
                  this.setSpeedDialMenuOpen(!this.state.speedDialMenuOpen)
                }
                onClose={() =>
                  this.setSpeedDialMenuOpen(!this.state.speedDialMenuOpen)
                }>
                <SpeedDial.Action
                  icon={<CheckInSvg />}
                  buttonStyle={{
                    backgroundColor: theme.COLORS.WHITE,
                    borderRadius: 12,
                  }}
                  title="Check in"
                  onPress={() => {
                    console.log('Add Something');
                    this.setCheckInVisible(true);
                    this.setSpeedDialMenuOpen(false);
                  }}
                />
                <SpeedDial.Action
                  icon={<HelpSvg />}
                  buttonStyle={{
                    backgroundColor: theme.COLORS.WHITE,
                    borderRadius: 12,
                  }}
                  title="I need help"
                  onPress={() => {
                    console.log('Delete Something');
                    this.setNeedHelpVisible(true);
                    this.setSpeedDialMenuOpen(false);
                  }}
                />
              </SpeedDial>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.state.checkInVisible}
                  customOnBackdropPress={() => {
                    this.setCheckInVisible(!this.state.checkInVisible);
                  }}
                  onRequestClose={() => {
                    this.setCheckInVisible(!this.state.checkInVisible);
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
                      <View
                        style={{
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontFamily: theme.FONTS.TEXT,
                            fontSize: theme.SIZES.H5,
                            marginBottom: theme.SIZES.BASE * 0.5,
                            color: theme.COLORS.PRIMARY2,
                          }}>
                          Check In
                        </Text>
                      </View>

                      <View
                        style={{
                          justifyContent: 'center',
                          width: width - theme.SIZES.BASE * 8,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontFamily: theme.FONTS.TEXT,
                              fontSize: theme.SIZES.H6,
                              // marginBottom: theme.SIZES.BASE,
                              textAlign: 'center',
                            }}>
                            How are you feeling?
                          </Text>
                        </View>
                      </View>

                      <EmojiPicker
                        emojiList={[
                          '😩',
                          '😕',
                          '😴',
                          '🙂',
                          '🥰',
                          '😭',
                          '🤕',
                          '😬',
                          '😠',
                          '😂',
                        ]}
                        onSelect={selectedEmoji => {
                          this.setCheckInStatus(selectedEmoji);
                        }}
                      />

                      <View
                        style={{
                          justifyContent: 'center',
                          width: width - theme.SIZES.BASE * 8,
                          marginTop: theme.SIZES.BASE * 0.5,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontFamily: theme.FONTS.TEXT,
                              fontSize: theme.SIZES.H6,
                              marginBottom: theme.SIZES.BASE,
                              textAlign: 'center',
                            }}>
                            Daily prompt: {this.getDailyPrompt()}
                          </Text>
                        </View>
                      </View>

                      <Input
                        placeholder="Enter value"
                        inputContainerStyle={{
                          width: width - theme.SIZES.BASE * 10,
                          marginVertical: 0,
                          borderBottomWidth: 0,
                          fontFamily: theme.FONTS.TEXT,
                        }}
                        leftIcon={null}
                        onChangeText={value => {
                          this.setCheckInText(value);
                        }}
                      />

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
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
                            title="Cancel"
                            onPress={() => {
                              this.setCheckInVisible(
                                !this.state.checkInVisible,
                              );
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
                            testID="logHistoryButton"
                            style={{
                              ...styles.button,
                              width: width / 2.0 - theme.SIZES.BASE * 5.0,
                              fontSize: 16,
                              fontWeight: '700',
                              textAlign: 'center',
                            }}
                            titleStyle={{
                              color: theme.COLORS.WHITE,
                              fontFamily: theme.FONTS.TEXT,
                            }}
                            title="Update"
                            onPress={() => {
                              //  create new Feed object
                              const currentDate = new XDate();
                              const currentTS = currentDate.getTime();
                              const newStatusUpdate = {
                                timestamp: currentTS,
                                name: this.props.userPublicProfile['name'],
                                status: this.state.checkInStatus,
                                prompt: this.state.checkInText,
                                urgent: false,
                                reactionCounts: {
                                  heart: 0,
                                  smile: 0,
                                  muscle: 0,
                                  cry: 0,
                                  thumbsUp: 0,
                                },
                                publicProfile: this.props.userPublicProfile,
                              };

                              Promise.resolve()
                                .then(() => {
                                  let newLocalFeedUpdates = cloneDeep(
                                    this.props.connect.localFeedUpdates,
                                  );

                                  newLocalFeedUpdates['newStatusUpdates'][
                                    currentTS
                                  ] = newStatusUpdate;

                                  return this.props.dispatch(
                                    setLocalFeedUpdatesAction(
                                      newLocalFeedUpdates,
                                    ),
                                  );
                                })
                                .then(() => {
                                  //  add to local list
                                  return syncLocalFeed(
                                    this.props.connect.localFeedUpdates,

                                    Object.keys(this.props.connect.friendsList),
                                  );
                                })
                                .then(qid => {
                                  //  reset updates
                                  return this.props.dispatch(
                                    resetLocalFeedUpdatesAction(),
                                  );
                                })
                                .then(() => {
                                  //  add to local feed
                                  return this.props.dispatch(
                                    addStatusToCachedFeedAction(currentTS, {
                                      content: newStatusUpdate,
                                      type: 'statusUpdate',
                                      timestamp: currentTS,
                                    }),
                                  );
                                })
                                .then(() => {
                                  return this.setCheckInVisible(
                                    !this.state.checkInVisible,
                                  );
                                })
                                .catch(error => {
                                  console.log(error);
                                  this.setCheckInVisible(
                                    !this.state.checkInVisible,
                                  );
                                });
                            }}></Button>
                        </View>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.state.needHelpVisible}
                  customOnBackdropPress={() => {
                    this.setNeedHelpVisible(!this.state.needHelpVisible);
                  }}
                  onRequestClose={() => {
                    this.setNeedHelpVisible(!this.state.needHelpVisible);
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
                      <View
                        style={{
                          justifyContent: 'center',
                          width: width - theme.SIZES.BASE * 8,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontFamily: theme.FONTS.TEXT,
                              fontSize: theme.SIZES.H6,
                              // marginBottom: theme.SIZES.BASE,
                              textAlign: 'center',
                            }}>
                            I'm sorry you're having a hard time. How are you
                            feeling?
                          </Text>
                        </View>
                      </View>

                      <EmojiPicker
                        emojiList={['😩', '😕', '😴', '😭', '🤕', '😬', '😠']}
                        onSelect={selectedEmoji => {
                          this.setNeedHelpStatus(selectedEmoji);
                        }}
                      />

                      <View
                        style={{
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontFamily: theme.FONTS.TEXT,
                            fontSize: theme.SIZES.H5,
                            marginBottom: theme.SIZES.BASE * 0.5,
                          }}>
                          What do you need help with?
                        </Text>
                      </View>
                      <Input
                        placeholder="Enter message"
                        inputContainerStyle={{
                          width: width - theme.SIZES.BASE * 10,
                          marginVertical: 0,
                          borderBottomWidth: 0,
                          fontFamily: theme.FONTS.TEXT,
                        }}
                        leftIcon={null}
                        onChangeText={value => {
                          this.setNeedHelpText(value);
                        }}
                      />

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
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
                            title="Cancel"
                            onPress={() => {
                              this.setNeedHelpVisible(
                                !this.state.needHelpVisible,
                              );
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
                            testID="logHistoryButton"
                            style={{
                              ...styles.button,
                              width: width / 2.0 - theme.SIZES.BASE * 5.0,
                              fontSize: 16,
                              fontWeight: '700',
                              textAlign: 'center',
                            }}
                            titleStyle={{
                              color: theme.COLORS.WHITE,
                              fontFamily: theme.FONTS.TEXT,
                            }}
                            title="Update"
                            onPress={() => {
                              //  create new Feed object
                              const currentDate = new XDate();
                              const currentTS = currentDate.getTime();
                              const newStatusUpdate = {
                                timestamp: currentTS,
                                name: this.props.userPublicProfile['name'],
                                status: this.state.needHelpStatus,
                                prompt: this.state.needHelpText,
                                urgent: true,
                                reactionCounts: {
                                  heart: 0,
                                  smile: 0,
                                  muscle: 0,
                                  cry: 0,
                                  thumbsUp: 0,
                                },
                                publicProfile: this.props.userPublicProfile,
                              };

                              Promise.resolve()
                                .then(() => {
                                  //  sync to server
                                  return postUrgentStatusUpdate(
                                    newStatusUpdate,
                                    currentTS,
                                    Object.keys(this.props.connect.friendsList),
                                  );
                                })
                                .then(qid => {
                                  //  add to local feed
                                  return this.props.dispatch(
                                    addStatusToCachedFeedAction(currentTS, {
                                      content: newStatusUpdate,
                                      type: 'statusUpdate',
                                      timestamp: currentTS,
                                    }),
                                  );
                                })

                                .then(() => {
                                  this.setNeedHelpVisible(
                                    !this.state.needHelpVisible,
                                  );
                                })
                                .catch(error => {
                                  console.log(error);
                                  this.setNeedHelpVisible(
                                    !this.state.needHelpVisible,
                                  );
                                });
                            }}></Button>
                        </View>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
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
    userProfile: state.userProfile,
    connect: state.connect,
  };
};
export default connect(mapStateToProps)(ConnectScreen);
