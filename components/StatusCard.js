import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import {Tooltip} from 'react-native-elements';
import produce from 'immer';
import moment from 'moment';
import Chip from './Chip';
import TouchableOpacity from './TouchableOpacity';

import {theme} from '../constants';
import {getSVG} from '../constants/SVGs';
import MoodHappySvg from '../assets/amie/connect/icons/mood-happy.svg';
import ChatSvg from '../assets/amie/connect/icons/chat.svg';

const {width} = Dimensions.get('screen');

const defaultReactionCounts = {
  smile: 0,
  thumbsUp: 0,
  muscle: 0,
  cry: 0,
  heart: 0,
};
class SocialCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reactionCounts: props.reactionCounts
        ? props.reactionCounts
        : defaultReactionCounts,
      reactionPickerOpen: false,
      newChosenReaction: '',
    };
  }

  setReactionPickerOpen = value => {
    this.setState({reactionPickerOpen: value});
  };

  setNewChosenReaction = value => {
    this.setState({newChosenReaction: value});
  };

  incrementReaction = emojiType => {
    return Promise.resolve().then(() =>
      this.setState(
        produce(draft => {
          switch (emojiType) {
            case 'smile':
              draft.reactionCounts['smile'] = draft.reactionCounts['smile'] + 1;
              break;
            case 'thumbsUp':
              draft.reactionCounts['thumbsUp'] =
                draft.reactionCounts['thumbsUp'] + 1;
              break;
            case 'muscle':
              draft.reactionCounts['muscle'] =
                draft.reactionCounts['muscle'] + 1;
              break;
            case 'cry':
              draft.reactionCounts['cry'] = draft.reactionCounts['cry'] + 1;
              break;
            case 'heart':
              draft.reactionCounts['heart'] = draft.reactionCounts['heart'] + 1;
              break;
            default:
              break;
          }
        }),
      ),
    );
  };

  decrementReaction = emojiType => {
    return Promise.resolve().then(() =>
      this.setState(
        produce(draft => {
          switch (emojiType) {
            case 'smile':
              if (draft.reactionCounts['smile'] > 0) {
                draft.reactionCounts['smile'] =
                  draft.reactionCounts['smile'] - 1;
              }
              break;
            case 'thumbsUp':
              if (draft.reactionCounts['thumbsUp'] > 0) {
                draft.reactionCounts['thumbsUp'] =
                  draft.reactionCounts['thumbsUp'] - 1;
              }
              break;
            case 'muscle':
              if (draft.reactionCounts['muscle'] > 0) {
                draft.reactionCounts['muscle'] =
                  draft.reactionCounts['muscle'] - 1;
              }
              break;
            case 'cry':
              if (draft.reactionCounts['cry'] > 0) {
                draft.reactionCounts['cry'] = draft.reactionCounts['cry'] - 1;
              }
              break;
            case 'heart':
              if (draft.reactionCounts['heart'] > 0) {
                draft.reactionCounts['heart'] =
                  draft.reactionCounts['heart'] - 1;
              }
              break;
            default:
              break;
          }
        }),
      ),
    );
  };

  getReactionCount = () => {
    return (
      this.state.reactionCounts['smile'] +
      this.state.reactionCounts['thumbsUp'] +
      this.state.reactionCounts['heart'] +
      this.state.reactionCounts['cry'] +
      this.state.reactionCounts['muscle']
    );
  };

  render() {
    const {
      style,
      testID,
      name = 'Default',
      status = 'Placeholder',
      prompt = 'Placeholder 2',
      avatar = 'BeauWomanShortHair1',
      messageEnabled = true,
      onReaction = () => {},
      onPress = () => {},
      onPressMessage = () => {},
      time = '',
      ...props
    } = this.props;

    let dateObject = new Date(time);

    return (
      <TouchableOpacity
        testID='testID'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderTopColor: theme.COLORS.BACKGROUND5,
          borderTopWidth: 1.5,
          backgroundColor: theme.COLORS.WHITE,
        }}
        onPress={() => {
          this.props.onPress();
        }}>
        <View
          style={{
            width: width,
            padding: theme.SIZES.BASE,
            paddingBottom:
              this.getReactionCount() > 0
                ? theme.SIZES.BASE * 2
                : theme.SIZES.BASE,
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
                  height: 64,
                  width: 64,
                  marginRight: theme.SIZES.BASE * 0.5,
                  backgroundColor: this.props.urgent
                    ? theme.COLORS.ERROR1
                    : theme.COLORS.TRANSPARENT,
                  borderRadius: theme.SIZES.BASE * 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{height: 63, width: 63}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.onPress();
                    }}>
                    {getSVG(avatar)}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{justifyContent: 'space-evenly'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: width - theme.SIZES.BASE * 14,
                  }}>
                  <Text
                    style={{
                      fontSize: theme.SIZES.B1,
                      fontWeight: 'bold',
                      color: theme.COLORS.TEXT1,
                    }}>
                    {name}
                  </Text>
                </View>
                {status && status != '' && (
                  <Text
                    style={{
                      fontSize: theme.SIZES.B1,
                      // fontWeight: 'bold',
                      color: theme.COLORS.TEXT1,
                    }}>
                    {' - feeling '}
                    {status}
                  </Text>
                )}
                <Text
                  style={{
                    fontSize: theme.SIZES.C2,
                    color: theme.COLORS.TEXT2,
                    width: width - theme.SIZES.BASE * 14,
                  }}>
                  {prompt}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                position: 'absolute',
                top: theme.SIZES.BASE * 0.1,
                right: theme.SIZES.BASE * 0.25,
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginBottom: 6,
                  }}>
                  {messageEnabled && (
                    <TouchableOpacity
                      onPress={async () => {
                        this.props.onPressMessage();
                      }}>
                      <ChatSvg height={24} width={24} marginTop={2} />
                    </TouchableOpacity>
                  )}
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: theme.SIZES.BASE * 1,
                    }}>
                    <Tooltip
                      visible={this.state.reactionPickerOpen}
                      onOpen={() => {
                        this.setReactionPickerOpen(true);
                      }}
                      onClose={() => {
                        this.setReactionPickerOpen(false);
                      }}
                      backgroundColor={theme.COLORS.WHITE}
                      containerStyle={{
                        backgroundColor: theme.COLORS.WHITE,
                        shadowColor: theme.COLORS.BLACK,
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        paddingVertical: 0,
                        marginVertical: 0,
                      }}
                      width={theme.SIZES.BASE * 12}
                      popover={
                        <View
                          style={{
                            flexDirection: 'row',
                            width: theme.SIZES.BASE * 12,
                            justifyContent: 'space-evenly',
                            flex: 1,
                            paddingHorizontal: 4,
                          }}>
                          <TouchableOpacity
                            onPress={async () => {
                              let updatedReactionDiff = {
                                heart: 0,
                                smile: 0,
                                muscle: 0,
                                cry: 0,
                                thumbsUp: 0,
                              };
                              if (this.state.newChosenReaction == 'heart') {
                                updatedReactionDiff['heart'] = -1;
                                this.props.onReaction(updatedReactionDiff);
                                this.setNewChosenReaction('');
                                await this.decrementReaction('heart');
                              } else {
                                updatedReactionDiff['heart'] = 1;
                                updatedReactionDiff[
                                  this.state.newChosenReaction
                                ] = -1;
                                this.props.onReaction(updatedReactionDiff);
                                await this.decrementReaction(
                                  this.state.newChosenReaction,
                                );
                                this.setNewChosenReaction('heart');
                                await this.incrementReaction('heart');
                              }
                              this.setReactionPickerOpen(false);
                            }}
                            style={{
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor:
                                this.state.newChosenReaction == 'heart'
                                  ? theme.COLORS.BACKGROUND3
                                  : theme.COLORS.WHITE,
                            }}>
                            <Text
                              style={{
                                fontSize: theme.SIZES.H5,
                              }}>
                              ❤
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={async () => {
                              let updatedReactionDiff = {
                                heart: 0,
                                smile: 0,
                                muscle: 0,
                                cry: 0,
                                thumbsUp: 0,
                              };
                              if (this.state.newChosenReaction == 'thumbsUp') {
                                updatedReactionDiff['thumbsUp'] = -1;
                                this.props.onReaction(updatedReactionDiff);
                                this.setNewChosenReaction('');
                                await this.decrementReaction('thumbsUp');
                              } else {
                                updatedReactionDiff['thumbsUp'] = 1;
                                updatedReactionDiff[
                                  this.state.newChosenReaction
                                ] = -1;
                                this.props.onReaction(updatedReactionDiff);
                                await this.decrementReaction(
                                  this.state.newChosenReaction,
                                );
                                this.setNewChosenReaction('thumbsUp');
                                await this.incrementReaction('thumbsUp');
                              }
                              this.setReactionPickerOpen(false);
                            }}
                            style={{
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor:
                                this.state.newChosenReaction == 'thumbsUp'
                                  ? theme.COLORS.BACKGROUND3
                                  : theme.COLORS.WHITE,
                            }}>
                            <Text
                              style={{
                                fontSize: theme.SIZES.H5,
                              }}>
                              👍
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={async () => {
                              let updatedReactionDiff = {
                                heart: 0,
                                smile: 0,
                                muscle: 0,
                                cry: 0,
                                thumbsUp: 0,
                              };
                              if (this.state.newChosenReaction == 'muscle') {
                                updatedReactionDiff['muscle'] = -1;
                                this.props.onReaction(updatedReactionDiff);
                                this.setNewChosenReaction('');
                                await this.decrementReaction('muscle');
                              } else {
                                updatedReactionDiff['muscle'] = 1;
                                updatedReactionDiff[
                                  this.state.newChosenReaction
                                ] = -1;
                                this.props.onReaction(updatedReactionDiff);
                                await this.decrementReaction(
                                  this.state.newChosenReaction,
                                );
                                this.setNewChosenReaction('muscle');
                                await this.incrementReaction('muscle');
                              }
                              this.setReactionPickerOpen(false);
                            }}
                            style={{
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor:
                                this.state.newChosenReaction == 'muscle'
                                  ? theme.COLORS.BACKGROUND3
                                  : theme.COLORS.WHITE,
                            }}>
                            <Text
                              style={{
                                fontSize: theme.SIZES.H5,
                              }}>
                              💪
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={async () => {
                              let updatedReactionDiff = {
                                heart: 0,
                                smile: 0,
                                muscle: 0,
                                cry: 0,
                                thumbsUp: 0,
                              };
                              if (this.state.newChosenReaction == 'cry') {
                                updatedReactionDiff['cry'] = -1;
                                this.props.onReaction(updatedReactionDiff);
                                this.setNewChosenReaction('');
                                await this.decrementReaction('cry');
                              } else {
                                updatedReactionDiff['cry'] = 1;
                                updatedReactionDiff[
                                  this.state.newChosenReaction
                                ] = -1;
                                this.props.onReaction(updatedReactionDiff);
                                await this.decrementReaction(
                                  this.state.newChosenReaction,
                                );
                                this.setNewChosenReaction('cry');
                                await this.incrementReaction('cry');
                              }
                              this.setReactionPickerOpen(false);
                            }}
                            style={{
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor:
                                this.state.newChosenReaction == 'cry'
                                  ? theme.COLORS.BACKGROUND3
                                  : theme.COLORS.WHITE,
                            }}>
                            <Text
                              style={{
                                fontSize: theme.SIZES.H5,
                              }}>
                              😢
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={async () => {
                              let updatedReactionDiff = {
                                heart: 0,
                                smile: 0,
                                muscle: 0,
                                cry: 0,
                                thumbsUp: 0,
                              };
                              if (this.state.newChosenReaction == 'smile') {
                                updatedReactionDiff['smile'] = -1;
                                this.props.onReaction(updatedReactionDiff);
                                this.setNewChosenReaction('');
                                await this.decrementReaction('smile');
                              } else {
                                updatedReactionDiff['smile'] = 1;
                                updatedReactionDiff[
                                  this.state.newChosenReaction
                                ] = -1;
                                this.props.onReaction(updatedReactionDiff);
                                await this.decrementReaction(
                                  this.state.newChosenReaction,
                                );
                                this.setNewChosenReaction('smile');
                                await this.incrementReaction('smile');
                              }
                              this.setReactionPickerOpen(false);
                            }}
                            style={{
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor:
                                this.state.newChosenReaction == 'smile'
                                  ? theme.COLORS.BACKGROUND3
                                  : theme.COLORS.WHITE,
                            }}>
                            <Text
                              style={{
                                fontSize: theme.SIZES.H5,
                              }}>
                              😃
                            </Text>
                          </TouchableOpacity>
                        </View>
                      }>
                      <MoodHappySvg height={24} width={24} marginTop={2} />
                    </Tooltip>
                  </View>
                </View>

                <View
                  style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                  {this.state.reactionCounts['heart'] > 0 && (
                    <Chip
                      buttonStyle={{
                        backgroundColor: theme.COLORS.WHITE,
                        marginHorizontal: 0,
                        paddingHorizontal: 0,
                        marginVertical: 0,
                        paddingVertical: 0,
                      }}
                      titleStyle={{
                        color: theme.COLORS.TEXT1,
                        fontFamily: theme.FONTS.TEXT,
                      }}
                      title={'❤ ' + this.state.reactionCounts['heart']}
                    />
                  )}
                  {this.state.reactionCounts['thumbsUp'] > 0 && (
                    <Chip
                      buttonStyle={{
                        backgroundColor: theme.COLORS.WHITE,
                        marginHorizontal: 0,
                        paddingHorizontal: 0,
                        marginVertical: 0,
                        paddingVertical: 0,
                      }}
                      titleStyle={{
                        color: theme.COLORS.TEXT1,
                        fontFamily: theme.FONTS.TEXT,
                      }}
                      title={'👍 ' + this.state.reactionCounts['thumbsUp']}
                    />
                  )}
                  {this.state.reactionCounts['muscle'] > 0 && (
                    <Chip
                      buttonStyle={{
                        backgroundColor: theme.COLORS.WHITE,
                        marginHorizontal: 0,
                        paddingHorizontal: 0,
                        marginVertical: 0,
                        paddingVertical: 0,
                      }}
                      titleStyle={{
                        color: theme.COLORS.TEXT1,
                        fontFamily: theme.FONTS.TEXT,
                      }}
                      title={'💪 ' + this.state.reactionCounts['muscle']}
                    />
                  )}
                  {this.state.reactionCounts['cry'] > 0 && (
                    <Chip
                      buttonStyle={{
                        backgroundColor: theme.COLORS.WHITE,
                        marginHorizontal: 0,
                        paddingHorizontal: 0,
                        marginVertical: 0,
                        paddingVertical: 0,
                      }}
                      titleStyle={{
                        color: theme.COLORS.TEXT1,
                        fontFamily: theme.FONTS.TEXT,
                      }}
                      title={'😢 ' + this.state.reactionCounts['cry']}
                    />
                  )}
                  {this.state.reactionCounts['smile'] > 0 && (
                    <Chip
                      buttonStyle={{
                        backgroundColor: theme.COLORS.WHITE,
                        marginHorizontal: 0,
                        paddingHorizontal: 0,
                        marginVertical: 0,
                        paddingVertical: 0,
                      }}
                      titleStyle={{
                        color: theme.COLORS.TEXT1,
                        fontFamily: theme.FONTS.TEXT,
                      }}
                      title={'😃 ' + this.state.reactionCounts['smile']}
                    />
                  )}
                </View>

                <Text
                  style={{
                    textAlign: 'right',
                    marginTop: 4,
                    fontSize: theme.SIZES.C2,
                    color: theme.COLORS.TEXT2,
                  }}>
                  {moment(dateObject).fromNow(true)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SocialCard;
