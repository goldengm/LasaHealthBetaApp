import React from 'react';
import {Dimensions, View, Modal, StyleSheet} from 'react-native';
import {Text, SpeedDial} from 'react-native-elements';
import {connect} from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';
import XDate from 'xdate';
import AddEntry1 from '../../assets/ui/footer/AddEntry1.svg';
import CheckInSvg from '../../assets/amie/connect/icons/check-in.svg';
import HelpSvg from '../../assets/amie/connect/icons/help.svg';
import {Button, Input, EmojiPicker} from '../../components';
import {statsConstants} from '../../shared/AnalysisUtils';

import {theme, styles, utils} from '../../constants';
import {
  addStatusToCachedFeedAction,
  setLocalFeedUpdatesAction,
  resetLocalFeedUpdatesAction,
} from '../../redux/actions/connectActions';

import {syncLocalFeed, postUrgentStatusUpdate} from '../../shared/ServerUtils';
import {getOS} from '../../shared/PlatformUtils';
const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

class AddButton extends React.Component {
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
  }
  setSpeedDialMenuOpen = value => {
    this.setState({speedDialMenuOpen: value});
  };
  setCheckInVisible = value => {
    this.setState({checkInVisible: value});
  };
  setNeedHelpVisible = value => {
    this.setState({needHelpVisible: value});
  };
  setCheckInStatus = checkInStatusP => {
    this.setState({checkInStatus: checkInStatusP});
  };
  setCheckInText = checkInTextP => {
    this.setState({checkInText: checkInTextP});
  };
  setNeedHelpStatus = needHelpStatusP => {
    this.setState({needHelpStatus: needHelpStatusP});
  };
  setNeedHelpText = needHelpTextP => {
    this.setState({needHelpText: needHelpTextP});
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
  render() {
    return (
      <View
        testID={'addButtonID'}
        style={[
          {width: 130, height: 80},
          {
            backgroundColor: this.state.speedDialMenuOpen
              ? 'transparent'
              : 'transparent',
          },
        ]}>
        <SpeedDial
          isOpen={this.state.speedDialMenuOpen}
          icon={
            <AddEntry1
              height={gStyles.tabIcon.height * 2.0}
              width={gStyles.tabIcon.width * 2.0}
              style={{
                color: theme.COLORS.PRIMARY2,
              }}
              marginTop={6}
            />
          }
          openIcon={{name: 'close', color: theme.COLORS.WHITE}}
          buttonStyle={gStyles.addButton}
          containerStyle={[
            {
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 15,
              marginVertical: 30,
            },
            {
              backgroundColor: this.state.speedDialMenuOpen
                ? 'transparent'
                : 'white',
            },
          ]}
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
                        this.setCheckInVisible(!this.state.checkInVisible);
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

                            newLocalFeedUpdates['newStatusUpdates'][currentTS] =
                              newStatusUpdate;

                            return this.props.dispatch(
                              setLocalFeedUpdatesAction(newLocalFeedUpdates),
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
                            this.setCheckInVisible(!this.state.checkInVisible);
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
                      I'm sorry you're having a hard time. How are you feeling?
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
                        this.setNeedHelpVisible(!this.state.needHelpVisible);
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
      </View>
    );
  }
}

const gStyles = StyleSheet.create({
  tabIcon: {
    padding: 0,
    position: 'relative',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    height: 28,
    width: 28,
  },
  tabTitle: {
    fontSize: 9,
    color: theme.COLORS.TEXT3,
    fontFamily: theme.FONTS.TEXT,
    width: 90,
  },
  tabContainer: {
    fontFamily: theme.FONTS.TEXT,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
    fontFamily: theme.FONTS.TEXT,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
    fontFamily: theme.FONTS.TEXT,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
    fontFamily: theme.FONTS.TEXT,
  },
  addButton: {
    paddingVertical: theme.SIZES.BASE * 0.2,
    marginVertical: theme.SIZES.BASE * 0.2,
    height: theme.SIZES.BASE * 3,
    width: theme.SIZES.BASE * 3.9,
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
});

const mapStateToProps = (state, props) => {
  return {
    userPublicProfile: state.userPublicProfile,
    amieChatbot: state.amieChatbot,
    userProfile: state.userProfile,
    connect: state.connect,
  };
};

export default connect(mapStateToProps)(AddButton);
