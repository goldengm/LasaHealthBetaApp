import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';
import {StatusBar} from 'expo-status-bar';
import {KeyboardAvoidingView} from 'react-native';

import {
  Icon,
  Footer,
  TouchableOpacity,
  Chip,
  CommentCard,
  RoundedTopContainer,
} from '../../../components';
import {Images, theme, styles} from '../../../constants';
import {userAvatarDir} from '../../../constants/userAvatarDir';
import ScreenTemplateWrapper from '../../../shared/ScreenTemplateWrapper';

import {getOS} from '../../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

const {width, height} = Dimensions.get('screen');

class QnADiscussionScreen extends React.Component {
  constructor(props) {
    super(props);
    const {route} = this.props;
    const {qnaID} = route.params;
    this.state = {
      qnaID: qnaID,
      checkInVisible: false,
      checkInText: '',
      replyToCommentID: null,
    };
  }

  setQnaID = value => {
    this.setState({qnaID: value});
  };

  setCheckInVisible = value => {
    this.setState({checkInVisible: value});
  };

  setCheckInText = checkInTextP => {
    this.setState({checkInText: checkInTextP});
  };

  setReplyToCommentID = value => {
    this.setState({replyToCommentID: value});
  };

  renderFriendsList = () => {
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
          {!(this.state.qnaID == null) &&
            Object.keys(this.props.connect.cachedQna).includes(
              this.state.qnaID,
            ) && (
              <View>
                <View
                  style={{
                    marginBottom: theme.SIZES.BASE,
                    marginTop: theme.SIZES.BASE * 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontFamily: theme.FONTS.TEXT,
                      fontSize: theme.SIZES.H5,
                    }}>
                    {this.props.connect.cachedQna[this.state.qnaID]['question']}
                  </Text>

                  <TouchableOpacity
                    style={{marginRight: theme.SIZES.BASE * 0.5}}
                    onPress={() => {
                      // Promise.resolve()
                      //   // .then(() => navigateToAmiesProfileScreen(-1))
                      //   .then(() => navigation.navigate('Chat'))
                      //   .catch(error => {
                      //     console.log(error);
                      //     // An error happened.
                      //   });
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon
                        family="ionicon"
                        name="heart"
                        fill={theme.COLORS.DEFAULT}
                      />
                      <Text>
                        {
                          this.props.connect.cachedQna[this.state.qnaID][
                            'numLikes'
                          ]
                        }
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row'}}>
                  {Object.entries(
                    this.props.connect.cachedQna[this.state.qnaID]['tags'],
                  ).map((responseObj, i) => (
                    <Chip
                      title={'#' + responseObj[1]}
                      key={i}
                      containerStyle={{
                        marginVertical: theme.SIZES.BASE * 0.5,
                        marginHorizontal: 4,
                      }}
                      buttonStyle={{
                        backgroundColor: theme.COLORS.PRIMARY3,
                        borderRadius: theme.SIZES.BASE * 0.5,
                        paddingVertical: 1,
                        marginVertical: 0,
                        paddingHorizontal: 4,
                        marginHorizontal: 0,
                      }}
                      titleStyle={{
                        color: theme.COLORS.PRIMARY1,
                        fontFamily: theme.FONTS.TEXT,
                      }}
                      // onPress={() => {
                      //   this.removeSelectedFromMultiSelect(responseObj[1]);
                      // }}
                    />
                  ))}
                </View>

                <TouchableOpacity
                  disabled
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width - theme.SIZES.BASE * 2,
                  }}
                  onPress={() => {
                    // Promise.resolve()
                    //   .then(() => {
                    //     if (!(auth.currentUser == null)) {
                    //       console.log('setting new crid to: ', chatGroup.crid);
                    //       dispatch(setCurrentCRIDAction(chatGroup.crid));
                    //     } else {
                    //       return null;
                    //     }
                    //   })
                    //   .then(() => {
                    //     //   console.log("NEW CRID: ", this.props.connect.currentCRID);
                    //     navigation.navigate('Chat');
                    //   })
                    //   .catch(error => {
                    //     console.log(error);
                    //     // An error happened.
                    //   });
                  }}>
                  <View
                    style={{
                      backgroundColor: theme.COLORS.WHITE,
                      // height: 260,
                      borderRadius: theme.SIZES.BASE * 2,
                      padding: theme.SIZES.BASE * 1,
                      width: width - theme.SIZES.BASE * 2,
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
                        fontWeight: 'bold',
                        fontSize: theme.SIZES.H5,
                        color: theme.COLORS.TEXT1,
                      }}>
                      Answer from expert
                    </Text>

                    <Text
                      style={{
                        fontSize: theme.SIZES.B1,
                        color: theme.COLORS.TEXT2,
                        marginBottom: theme.SIZES.BASE,
                      }}>
                      {this.props.connect.cachedQna[this.state.qnaID]['answer']}
                    </Text>

                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: width - theme.SIZES.BASE * 4,
                        marginVertical: theme.SIZES.BASE * 0.25,
                      }}
                      onPress={() => {
                        // console.log(
                        //   this.props.connect.cachedQna[this.state.qnaID][
                        //     'answeredBy'
                        //   ]['avatar'],
                        // );
                        // console.log(
                        //   userAvatarDir(
                        //     this.props.connect.cachedQna[this.state.qnaID][
                        //       'answeredBy'
                        //     ]['avatar'],
                        //   ),
                        // );
                        // Promise.resolve()
                        //   .then(() => {
                        //     if (!(auth.currentUser == null)) {
                        //       console.log('setting new crid to: ', chatGroup.crid);
                        //       dispatch(setCurrentCRIDAction(chatGroup.crid));
                        //     } else {
                        //       return null;
                        //     }
                        //   })
                        //   .then(() => {
                        //     //   console.log("NEW CRID: ", this.props.connect.currentCRID);
                        //     navigation.navigate('Chat');
                        //   })
                        //   .catch(error => {
                        //     console.log(error);
                        //     // An error happened.
                        //   });
                      }}>
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: theme.COLORS.TEXT3,
                          borderRadius: theme.SIZES.BASE * 2,
                          paddingHorizontal: theme.SIZES.BASE * 1.3,
                          paddingVertical: theme.SIZES.BASE * 0.5,
                          width: width - theme.SIZES.BASE * 4,
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
                              {userAvatarDir(
                                this.props.connect.cachedQna[this.state.qnaID][
                                  'answeredBy'
                                ]['avatar'],
                              )}
                              {/* <TouchableOpacity
                                style={{backgroundColor: theme.COLORS.PRIMARY1}}
                                onPress={() => {
                                  // console.log(
                                  //   this.props.connect.cachedQna[
                                  //     this.state.qnaID
                                  //   ]['answeredBy']['avatar'],
                                  // );
                                  // Promise.resolve()
                                  //   // .then(() => navigateToAmiesProfileScreen(-1))
                                  //   .then(() => navigation.navigate('Chat'))
                                  //   .catch(error => {
                                  //     console.log(error);
                                  //     // An error happened.
                                  //   });
                                }}>
                              </TouchableOpacity> */}
                            </View>
                            <View style={{justifyContent: 'space-evenly'}}>
                              <Text
                                style={{
                                  fontSize: theme.SIZES.B1,
                                  fontWeight: 'bold',
                                  color: theme.COLORS.TEXT1,
                                }}>
                                {
                                  this.props.connect.cachedQna[
                                    this.state.qnaID
                                  ]['answeredBy']['name']
                                }
                              </Text>
                              <Text
                                style={{
                                  fontSize: theme.SIZES.C2,
                                  color: theme.COLORS.TEXT2,
                                }}>
                                {
                                  this.props.connect.cachedQna[
                                    this.state.qnaID
                                  ]['answeredBy']['description']
                                }
                              </Text>
                            </View>
                          </View>
                          <View>
                            <TouchableOpacity
                              style={{
                                height: 26,
                                borderRadius: 20,
                                paddingLeft: 17,
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onPress={() => {
                                // Promise.resolve()
                                //   .then(() => setSelectedCRID(chatGroup.crid))
                                //   .then(() => setMenuVisible(true))
                                //   .catch((error) => {
                                //     console.log(error);
                                //     // An error happened.
                                //   });
                              }}>
                              <Text
                                style={{
                                  fontSize: theme.SIZES.C2,
                                  color: theme.COLORS.BLACK,
                                }}>
                                {
                                  this.props.connect.cachedQna[
                                    this.state.qnaID
                                  ]['timestamp']
                                }
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    marginBottom: theme.SIZES.BASE,
                    // marginTop: theme.SIZES.BASE,
                    // marginHorizontal: theme.SIZES.BASE,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontFamily: theme.FONTS.TEXT,
                      fontSize: theme.SIZES.H5,
                      marginTop: theme.SIZES.BASE,
                    }}>
                    Disucssion
                  </Text>
                </View>

                <Text>
                  {JSON.stringify(
                    this.props.connect.cachedQna[this.state.qnaID][
                      'discussion'
                    ],
                  )}
                </Text>

                <CommentCard
                  userProfile={
                    this.props.connect.cachedQna[this.state.qnaID]['answeredBy']
                  }
                  text={
                    'This is the placeholder comment, it is a really long comment for testing purposes'
                  }
                  time={123456}
                  numReplies={2}
                  numUpvotes={32}
                />

                <CommentCard
                  userProfile={
                    this.props.connect.cachedQna[this.state.qnaID]['answeredBy']
                  }
                  text={
                    'This is the placeholder comment, it is a really long comment for testing purposes'
                  }
                  time={123456}
                  numReplies={2}
                  numUpvotes={32}
                  isReply={true}
                />
                <CommentCard
                  userProfile={
                    this.props.connect.cachedQna[this.state.qnaID]['answeredBy']
                  }
                  text={
                    'This is the placeholder comment, it is a really long comment for testing purposes'
                  }
                  time={123456}
                  numReplies={2}
                  numUpvotes={32}
                  isReply={true}
                />
                <CommentCard
                  userProfile={
                    this.props.connect.cachedQna[this.state.qnaID]['answeredBy']
                  }
                  text={
                    'This is the placeholder comment, it is a really long comment for testing purposes'
                  }
                  time={123456}
                  numReplies={2}
                  numUpvotes={32}
                  isReply={true}
                />
                <CommentCard
                  userProfile={
                    this.props.connect.cachedQna[this.state.qnaID]['answeredBy']
                  }
                  text={
                    'This is the placeholder comment, it is a really long comment for testing purposes'
                  }
                  time={123456}
                  numReplies={2}
                  numUpvotes={32}
                />
              </View>
            )}
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
          <Footer navigation={navigation} tabName="Learn" />
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
export default connect(mapStateToProps)(QnADiscussionScreen);
