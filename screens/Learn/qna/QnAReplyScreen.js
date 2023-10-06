import React from 'react';
import {Dimensions, ScrollView, View, Modal} from 'react-native';
import {ListItem, Text, SpeedDial} from 'react-native-elements';
import {connect} from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';
import produce from 'immer';
import {StatusBar} from 'expo-status-bar';
import {KeyboardAvoidingView} from 'react-native';

import {
  Button,
  Icon,
  Footer,
  BottomSheet,
  SocialCard,
  TouchableOpacity,
  MessageCard,
  StatusCard,
  PollCard,
  FeedCard,
  Input,
  RoundedTopContainer,
} from '../../../components';
import {auth} from '../../../shared/firebaseUtils';
import {Images, theme, styles} from '../../../constants';
import {userAvatarDir} from '../../../constants/userAvatarDir';
import {
  setCurrentAmieProfileAction,
  setCurrentAmieUIDAction,
} from '../../../redux/actions/connectActions';
import {setReportedUIDAction} from '../../../redux/actions/connectActions';
import ScreenTemplateWrapper from '../../../shared/ScreenTemplateWrapper';

import {getOS} from '../../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

const {width, height} = Dimensions.get('screen');

class QnAReplyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
      selectedCRID: -1,
      speedDialMenuOpen: false,
      checkInVisible: false,
      checkInText: '',
      checkInHashtags: [],
      needHelpVisible: false,
      needHelpText: '',
    };
  }

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

  addCheckInHashtag = value => {
    if (this.state.checkInHashtags.length < 3) {
      this.setState(
        produce(draft => {
          if (!draft.checkInHashtag.includes(value)) {
            draft.checkInHashtag = draft.checkInHashtag.concat(value);
          }
        }),
      );
    }
  };

  removeCheckInHashtag = value => {
    // console.log("REMOVVVVE", symptomName);
    this.setState(
      produce(draft => {
        if (draft.checkInHashtag.includes(value)) {
          draft.checkInHashtag = draft.checkInHashtag.filter(
            item => item !== value,
          );
        }
      }),
    );
  };

  setNeedHelpVisible = value => {
    this.setState({needHelpVisible: value});
  };

  setNeedHelpText = needHelpTextP => {
    this.setState({needHelpText: needHelpTextP});
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
                }}
                titleStyle={{
                  color: theme.COLORS.WHITE,
                  fontFamily: theme.FONTS.TEXT,
                }}
                title="View friends"
                onPress={() => {
                  navigation.navigate('ViewFriendsScreen');
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
                  borderColor: theme.COLORS.PRIMARY2,
                }}
                titleStyle={{
                  color: theme.COLORS.PRIMARY2,
                  fontFamily: theme.FONTS.TEXT,
                }}
                title="Add a new friend"
                onPress={() => {
                  navigation.navigate('FindAFriendScreen');
                }}></Button>
            </View>
          </View>

          <StatusCard
            name={'Name'}
            status={'Feeling a feeling'}
            prompt={
              "I believe the prompt was good. We're all just trying our best, that's all you can ask for."
            }
            time={'8:27pm'}
          />

          <StatusCard
            name={'Name2'}
            status={'Feeling a feeling'}
            prompt={
              "I believe the prompt was good. We're all just trying our best, that's all you can ask for."
            }
            time={'8:27pm'}
          />

          <PollCard
            title={'COMMUNITY POLL'}
            subtitle={'Extended body of the message.'}
            pollOptions={['Option1', 'Option2', 'Option3']}
          />

          <StatusCard
            name={'Name3'}
            status={'Feeling a feeling'}
            prompt={
              "I believe the prompt was good. We're all just trying our best, that's all you can ask for."
            }
            time={'8:27pm'}
            // numUnread={3}
          />

          <FeedCard
            title={'Feed title (ex. New Q&A)'}
            body={
              'Extended body of the message. These will probably be quite long. We could use these for general annoucements, as well as general Q&A posts. I will likely need to add expandability for Images and profile/author cards. This will likely need to be a very expandable / flexible componant.'
            }
          />

          <FeedCard
            title={'Feed title2 (ex. New Q&A)'}
            body={
              'Extended body of the message. These will probably be quite long. We could use these for general annoucements, as well as general Q&A posts. I will likely need to add expandability for Images and profile/author cards. This will likely need to be a very expandable / flexible componant.'
            }
          />

          <PollCard
            title={'COMMUNITY POLL2'}
            subtitle={'Extended body of the message.'}
            pollOptions={['Option1', 'Option2', 'Option3', 'Option4']}
          />

          <StatusCard
            name={'Name3'}
            status={'Feeling a feeling'}
            prompt={
              "I believe the prompt was good. We're all just trying our best, that's all you can ask for."
            }
            time={'8:27pm'}
            // numUnread={3}
          />

          <FeedCard
            title={'Feed title3 (ex. New Q&A)'}
            body={
              'Extended body of the message. These will probably be quite long. We could use these for general annoucements, as well as general Q&A posts. I will likely need to add expandability for Images and profile/author cards. This will likely need to be a very expandable / flexible componant.'
            }
          />

          <FeedCard
            title={'Feed title4 (ex. New Q&A)'}
            body={
              'Extended body of the message. These will probably be quite long. We could use these for general annoucements, as well as general Q&A posts. I will likely need to add expandability for Images and profile/author cards. This will likely need to be a very expandable / flexible componant.'
            }
          />

          <PollCard
            title={'COMMUNITY POLL3'}
            subtitle={'Extended body of the message.'}
            pollOptions={['Option1', 'Option2']}
          />

          <StatusCard
            name={'Name4'}
            status={'Feeling a feeling'}
            prompt={
              "I believe the prompt was good. We're all just trying our best, that's all you can ask for."
            }
            time={'8:27pm'}
            // numUnread={3}
          />

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
              Messages
            </Text>
          </View>
          <MessageCard
            title={'Name'}
            subtitle={'Last Message'}
            time={'9:01pm'}
            // numUnread={3}
          />
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
              Status Card
            </Text>
          </View>

          <StatusCard
            name={'Name'}
            status={'Feeling a feeling'}
            prompt={
              "I believe the prompt was good. We're all just trying our best, that's all you can ask for."
            }
            time={'8:27pm'}
            // numUnread={3}
          />

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
              Poll Card
            </Text>
          </View>

          <PollCard
            title={'COMMUNITY POLL'}
            subtitle={'Extended body of the message.'}
            pollOptions={['Option1', 'Option2', 'Option3']}
          />

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
              Feed Card
            </Text>
          </View>

          <FeedCard
            title={'Feed title (ex. New Q&A)'}
            body={
              'Extended body of the message. These will probably be quite long. We could use these for general annoucements, as well as general Q&A posts. I will likely need to add expandability for Images and profile/author cards. This will likely need to be a very expandable / flexible componant.'
            }
          />

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
              My Groups
            </Text>
          </View>
          <BottomSheet
            isVisible={this.state.menuVisible}
            onBackdropPress={() => {
              console.log('BACK PRESSED');
              this.setMenuVisible(false);
            }}
            containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
            <View
              style={{
                marginTop: height - 72 - 55 * 3,
              }}>
              <ListItem
                onPress={() => {
                  this.setMenuVisible(false);

                  Promise.resolve()
                    // .then(() => this.navigateToAmiesProfileScreen(-1))

                    .then(() => {
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
                    })
                    .catch(error => {
                      console.log(error);
                      // An error happened.
                    });
                }}>
                <ListItem.Content>
                  <ListItem.Title>View My Public Profile</ListItem.Title>
                </ListItem.Content>
              </ListItem>

              <ListItem
                onPress={() => {
                  Promise.resolve()
                    .then(() => {
                      if (!(auth.currentUser == null)) {
                        //  FIXMETUNA:  need to fix this so the actual reported UID is passed
                        //  might need an extra call to get it
                        this.props.dispatch(setReportedUIDAction(-1));
                      } else {
                        return null;
                      }
                    })
                    .then(() => {
                      this.setMenuVisible(false);
                      navigation.navigate('ReportUser');
                    })
                    .catch(error => {
                      console.log(error);
                      // An error happened.
                    });
                }}>
                <ListItem.Content>
                  <ListItem.Title>Report User</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </View>
          </BottomSheet>
          <View>
            {/* Chatbot entry */}
            <ListItem bottomDivider>
              <View style={{height: 50, width: 50}}>
                <TouchableOpacity
                  onPress={() => {
                    Promise.resolve().then(() =>
                      navigation.navigate('Chatbot'),
                    );
                  }}>
                  {userAvatarDir('Svg010Woman')}
                </TouchableOpacity>
              </View>
              <ListItem.Content>
                <TouchableOpacity
                  onPress={() => {
                    Promise.resolve()
                      .then(() => {
                        if (!(auth.currentUser == null)) {
                        } else {
                          return null;
                        }
                      })
                      .then(() => {
                        navigation.navigate('Chatbot');
                      });
                  }}>
                  <ListItem.Title>Amie</ListItem.Title>
                  <ListItem.Subtitle>Hi! How are you doing?</ListItem.Subtitle>
                </TouchableOpacity>
              </ListItem.Content>

              <View style={{height: 26, width: 26}}>
                <TouchableOpacity
                  onPress={() => {
                    // Promise.resolve();
                    // .then(() => this.setSelectedCRID(l.crid))
                    // .then(() => this.setMenuVisible(true));
                  }}>
                  <Icon
                    family="amiesolid"
                    name="SvgSolidMenu3"
                    fill={theme.COLORS.DEFAULT}
                  />
                </TouchableOpacity>
              </View>
            </ListItem>

            {/*  FIXMTUNA:  put the list of chatrooms here*/}
            {Object.entries(this.props.connect.chatroomList).map(
              ([itemKey, itemVal]) => (
                <SocialCard
                  key={itemKey}
                  chatGroup={itemVal}
                  dispatch={this.props.dispatch}
                  navigation={this.props.navigation}
                  navigateToAmiesProfileScreen={
                    this.navigateToAmiesProfileScreen
                  }
                  setSelectedCRID={this.setSelectedCRID}
                  setMenuVisible={this.setMenuVisible}
                />
                // <TouchableOpacity
                //   style={{ justifyContent: "center", alignItems: "center" }}
                //   onPress={() => {
                //     Promise.resolve()
                //       .then(() => {
                //         if (!(auth.currentUser == null)) {
                //           console.log("setting new crid to: ", l.crid);
                //           this.props.dispatch(setCurrentCRIDAction(l.crid));
                //         } else {
                //           return null;
                //         }
                //       })
                //       .then(() => {
                //         console.log(
                //           "NEW CRID: ",
                //           this.props.connect.currentCRID
                //         );
                //         navigation.navigate("Chat");
                //       });
                //   }}
                // >
                //   <View
                //     style={{
                //       backgroundColor: theme.COLORS.SECONDARY3,
                //       // height: 260,
                //       width: width - theme.SIZES.BASE * 2,
                //       borderRadius: theme.SIZES.BASE * 2,
                //       padding: theme.SIZES.BASE * 1.2,
                //     }}
                //   >
                //     <Text
                //       style={{ fontWeight: "bold", fontSize: theme.SIZES.H5 }}
                //     >
                //       Endometriosis 101 Group
                //     </Text>
                //     <View
                //       style={{
                //         flexDirection: "row",
                //         marginVertical: theme.SIZES.BASE,
                //         justifyContent: "space-between",
                //       }}
                //     >
                //       <View
                //         style={{
                //           flexDirection: "row",
                //         }}
                //       >
                //         <View
                //           style={{
                //             height: 60,
                //             width: 60,
                //             marginRight: theme.SIZES.BASE * 0.5,
                //           }}
                //         >
                //           <TouchableOpacity
                //             onPress={() => {
                //               Promise.resolve().then(() =>
                //                 this.navigateToAmiesProfileScreen(-1)
                //               );
                //             }}
                //           >
                //             {userAvatarDir("Svg018Woman")}
                //           </TouchableOpacity>
                //         </View>
                //         <View style={{ justifyContent: "space-evenly" }}>
                //           <Text
                //             style={{
                //               fontSize: theme.SIZES.B1,
                //               fontWeight: "bold",
                //             }}
                //           >
                //             {l.name}
                //           </Text>
                //           <Text
                //             style={{
                //               fontSize: theme.SIZES.C2,
                //               color: theme.COLORS.ERROR1,
                //             }}
                //           >
                //             HEALTH COACH
                //             {/* {l.lastMessage} */}
                //           </Text>
                //         </View>
                //       </View>

                //       <TouchableOpacity
                //         style={{
                //           backgroundColor: theme.COLORS.ERROR1,
                //           width: 40,
                //           height: 30,
                //           borderRadius: 20,
                //           justifyContent: "center",
                //           alignItems: "center",
                //         }}
                //         onPress={() => {
                //           Promise.resolve()
                //             .then(() => this.setSelectedCRID(l.crid))
                //             .then(() => this.setMenuVisible(true));
                //         }}
                //       >
                //         <Text
                //           style={{
                //             fontSize: theme.SIZES.C2,
                //             color: theme.COLORS.WHITE,
                //           }}
                //         >
                //           14
                //         </Text>
                //       </TouchableOpacity>
                //     </View>
                //     <Text
                //       style={{
                //         fontSize: theme.SIZES.B1,
                //         color: theme.COLORS.TEXT2,
                //         marginBottom: theme.SIZES.BASE,
                //       }}
                //     >
                //       I decided I was going to actively pursue a better life,
                //       and take better care of my mind, body, and soul
                //     </Text>

                //     <View
                //       style={{
                //         flexDirection: "row",
                //         justifyContent: "space-between",
                //       }}
                //     >
                //       <Button
                //         style={{
                //           ...styles.outlinedButton,
                //           backgroundColor: theme.COLORS.TRANSPARENT,
                //           height: 34,
                //           padding: 0,
                //           borderColor: theme.COLORS.PRIMARY2,
                //           color: theme.COLORS.PRIMARY2,
                //           marginTop: 6,
                //         }}
                //         onPress={() => {
                //           Promise.resolve()
                //             .then(() => this.setSelectedCRID(l.crid))
                //             .then(() => this.setMenuVisible(true));
                //         }}
                //       >
                //         12 Members
                //       </Button>

                //       <View style={{ height: 50, width: 50 }}>
                //         <TouchableOpacity
                //           onPress={() => {
                //             Promise.resolve().then(() =>
                //               this.navigateToAmiesProfileScreen(-1)
                //             );
                //           }}
                //         >
                //           {userAvatarDir("Svg018Woman")}
                //         </TouchableOpacity>
                //       </View>
                //       <View style={{ height: 50, width: 50 }}>
                //         <TouchableOpacity
                //           onPress={() => {
                //             Promise.resolve().then(() =>
                //               this.navigateToAmiesProfileScreen(-1)
                //             );
                //           }}
                //         >
                //           {userAvatarDir("Svg018Woman")}
                //         </TouchableOpacity>
                //       </View>
                //     </View>
                //   </View>
                // </TouchableOpacity>
              ),
            )}
          </View>
          {/* 
          <View
            style={{
              marginTop: theme.SIZES.BASE * 2,
              marginHorizontal: theme.SIZES.BASE,
            }}
          >
            <Text
              h4
              style={{
                // marginBottom: theme.SIZES.BASE,
                fontFamily: theme.FONTS.TEXT,
              }}
            >
              Need to talk to someone?
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View
              style={{
                ...styles.connectSmallElementContainer,
                backgroundColor: theme.COLORS.WHITE,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                paddingBottom: theme.SIZES.BASE,
              }}
            >
              <View
                style={{
                  width: styles.chatAvatarIconLarge.width,
                  height: styles.chatAvatarIconLarge.height,
                }}
              >
                <TouchableOpacity
                  testID="amieChatbotImageButton"
                  onPress={() => {
                    Promise.resolve()
                      .then(() =>
                        // this.navigateToAmiesProfileScreen(-1)
                        navigation.navigate("Chatbot")
                      )
                      .catch((error) => {
                        console.log(error);
                        // An error happened.
                      });
                  }}
                >
                  <Image
                    source={getChatbotAvatar(
                      this.props.amieChatbot.chatbotAvatarIndex
                    )}
                    // source={Images.Connect.HealthCoach1}
                    // source={getChatbotAvatar(1)}
                    style={styles.chatAvatarIconLarge}
                  />
                </TouchableOpacity>
              </View>
              <ListItem.Content>
                <TouchableOpacity
                  testID="amieChatbotNameButton"
                  onPress={() => {
                    Promise.resolve()
                      .then(() => {
                        if (!(auth.currentUser == null)) {
                          // console.log("setting new crid to: ", l.crid);
                          // this.props.dispatch(setCurrentCRIDAction(l.crid));
                        } else {
                          return null;
                        }
                      })
                      .then(() => {
                        // console.log(
                        //   "NEW CRID: ",
                        //   this.props.connect.currentCRID
                        // );
                        navigation.navigate("Chatbot");
                      })
                      .catch((error) => {
                        console.log(error);
                        // An error happened.
                      });
                  }}
                >
                  <ListItem.Title>Amie</ListItem.Title>
                  <ListItem.Subtitle>AI Chatbot</ListItem.Subtitle>
                </TouchableOpacity>
              </ListItem.Content>
            </View>
          </View> */}
          <View
            style={{
              marginVertical: theme.SIZES.BASE,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              style={{...styles.button, elevation: 3, width: 200}}
              onPress={() => {
                // this.onLoginAttempt();
                navigation.navigate('FindANewAmie');
              }}
              titleStyle={{
                color: theme.COLORS.WHITE,
                fontFamily: theme.FONTS.HEADER,
              }}
              title="Find a new Amie"
            />
          </View>
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

              <SpeedDial
                isOpen={this.state.speedDialMenuOpen}
                icon={{name: 'edit', color: theme.COLORS.BLACK}}
                openIcon={{name: 'close', color: theme.COLORS.BLACK}}
                buttonStyle={{backgroundColor: theme.COLORS.WHITE}}
                onOpen={() =>
                  this.setSpeedDialMenuOpen(!this.state.speedDialMenuOpen)
                }
                onClose={() =>
                  this.setSpeedDialMenuOpen(!this.state.speedDialMenuOpen)
                }>
                <SpeedDial.Action
                  icon={{name: 'add', color: theme.COLORS.BLACK}}
                  buttonStyle={{backgroundColor: theme.COLORS.WHITE}}
                  title="Check in"
                  onPress={() => {
                    console.log('Add Something');
                    this.setCheckInVisible(true);
                    this.setSpeedDialMenuOpen(false);
                  }}
                />
                <SpeedDial.Action
                  icon={{name: 'warning', color: theme.COLORS.BLACK}}
                  buttonStyle={{backgroundColor: theme.COLORS.WHITE}}
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
                  // flex: 1,
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
                    // Alert.alert("Modal has been closed.");
                    this.setCheckInVisible(!this.state.checkInVisible);
                  }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      // marginTop: 22,
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
                          }}>
                          Check In
                        </Text>
                      </View>
                      <Input
                        placeholder="Enter value"
                        inputContainerStyle={{
                          // height: 30,
                          width: width - theme.SIZES.BASE * 10,
                          marginVertical: 0,
                          // paddingTop: 14,
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
                            // flex: 1,
                            alignContent: 'center',
                            alignItems: 'center',
                            marginBottom: theme.SIZES.BASE * 0.5,
                            paddingTop: 0,
                            marginTop: 0,
                          }}>
                          <Button
                            style={{
                              ...styles.outlinedButton,
                              // width: 260,
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
                            // flex: 1,
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
                              // width: 260,
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
                              this.setCheckInVisible(
                                !this.state.checkInVisible,
                              );
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
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontFamily: theme.FONTS.TEXT,
                            fontSize: theme.SIZES.H5,
                            marginBottom: theme.SIZES.BASE * 0.5,
                          }}>
                          I Need Help
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
                            // flex: 1,
                            alignContent: 'center',
                            alignItems: 'center',
                            marginBottom: theme.SIZES.BASE * 0.5,
                            paddingTop: 0,
                            marginTop: 0,
                          }}>
                          <Button
                            style={{
                              ...styles.outlinedButton,
                              // width: 260,
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
                            // flex: 1,
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
                              // width: 260,
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
                              this.setNeedHelpVisible(
                                !this.state.needHelpVisible,
                              );
                            }}></Button>
                        </View>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            </KeyboardAvoidingView>
          </View>
          <Footer navigation={navigation} tabName="Learn" />
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    userPublicProfile: state.userPublicProfile,
    amieChatbot: state.amieChatbot,
    connect: state.connect,
  };
};
export default connect(mapStateToProps)(QnAReplyScreen);
