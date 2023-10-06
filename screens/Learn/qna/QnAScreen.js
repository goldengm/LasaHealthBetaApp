import React from 'react';
import {Dimensions, ScrollView, View, Modal} from 'react-native';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';
import produce from 'immer';
import XDate from 'xdate';
import {StatusBar} from 'expo-status-bar';
import {KeyboardAvoidingView} from 'react-native';

import {
  Button,
  Icon,
  Footer,
  TouchableOpacity,
  Input,
  QnACard,
  Chip,
  RoundedTopContainer,
} from '../../../components';
import {Images, theme, styles} from '../../../constants';
import AddCircleSvg from '../../../assets/flaticons/solid_svg/svg/add-circle.svg';
import {
  setCachedQnaAction,
  addQuestionToCachedQnaAction,
  setLocalQnaUpdatesAction,
  resetLocalQnaUpdatesAction,
} from '../../../redux/actions/connectActions';
import ScreenTemplateWrapper from '../../../shared/ScreenTemplateWrapper';
import {
  syncLocalQuestions,
  getNextQuestions,
  getSpecificQuestion,
} from '../../../shared/ServerUtils';
import {getOS} from '../../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

const {width, height} = Dimensions.get('screen');

class QnAScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInVisible: false,
      checkInText: '',
      checkInNewHashtag: '',
      checkInHashtags: [],

      askedQuestionsActiveToggle: true,
    };

    this.lastQnaSnapshot = null;

    Promise.resolve()
      .then(() => {
        return getSpecificQuestion('CwcPMldNXnrvGOHQ4ir1');
      })
      .then(result => {
        console.log('Specific question RESULTS: ', JSON.stringify(result));
      });
  }

  componentDidMount() {
    console.log('Qna Screen Did Mount');
    Promise.resolve()
      .then(() => getNextQuestions())
      .then(([nextQna, nextLastSnapshot]) => {
        console.log('NEXT Qna: ', JSON.stringify(nextQna));
        this.lastQnaSnapshot = nextLastSnapshot;
        return this.props.dispatch(setCachedQnaAction(nextQna));
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleOnSelect = value => {
    this.setMenuVisible(false);
  };

  setCheckInVisible = value => {
    this.setState({checkInVisible: value});
  };

  setCheckInText = checkInTextP => {
    this.setState({checkInText: checkInTextP});
  };

  setCheckInNewHashtag = value => {
    this.setState({checkInNewHashtag: value});
  };

  addCheckInHashtag = value => {
    console.log('ADDDD', this.state);

    if (this.state.checkInHashtags.length < 3) {
      this.setState(
        produce(draft => {
          if (!draft.checkInHashtags.includes(value)) {
            draft.checkInHashtags = draft.checkInHashtags.concat(value);
          }
        }),
      );
    }
  };

  removeCheckInHashtag = value => {
    // console.log("REMOVVVVE", value);
    this.setState(
      produce(draft => {
        if (draft.checkInHashtags.includes(value)) {
          draft.checkInHashtags = draft.checkInHashtags.filter(
            item => item !== value,
          );
        }
      }),
    );
  };

  setAskedQuestionsActiveToggle = value => {
    this.setState({askedQuestionsActiveToggle: value});
  };

  renderQna = () => {
    return (
      <View>
        {this.props.connect.cachedQna &&
          Object.entries(this.props.connect.cachedQna)
            .sort((a, b) => a[1]['upvotes'] < b[1]['upvotes'])
            .map((item, i) => {
              return (
                <QnACard
                  key={i}
                  question={item[1]['question']}
                  answer={item[1]['answer']}
                  tags={item[1]['tags']}
                  numLikes={item[1]['upvotes']}
                  numComments={
                    item[1]['discussion']
                      ? Object.keys(item[1]['discussion']).length
                      : 0
                  }
                  qnaDateTime={item[1]['timestamp']}
                  qnaObject={item[1]}
                  qid={item[0]}
                />
              );
            })}
      </View>
    );
  };

  renderFriendsList = () => {
    // const {navigation} = this.props;

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
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: theme.SIZES.BASE * 0.75,
            // justifyContent: 'space-between',
            marginTop: theme.SIZES.BASE * 2,
            marginBottom: theme.SIZES.BASE * 1,
          }}>
          <View
            style={{
              // flex: 1,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Chip
              title={'Asked'}
              containerStyle={{
                marginVertical: theme.SIZES.BASE * 0.5,
                marginHorizontal: 5,
              }}
              buttonStyle={{
                paddingHorizontal: theme.SIZES.BASE * 1,
                paddingTop: theme.SIZES.BASE * 0.25,
                backgroundColor: this.state.askedQuestionsActiveToggle
                  ? theme.COLORS.PRIMARY2
                  : theme.COLORS.TRANSPARENT,

                borderColor: theme.COLORS.PRIMARY2,
                borderWidth: 1,
                borderRadius: theme.SIZES.BASE * 0.5,
              }}
              titleStyle={{
                color: this.state.askedQuestionsActiveToggle
                  ? theme.COLORS.WHITE
                  : theme.COLORS.PRIMARY2,
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.FONT,
              }}
              onPress={() => {
                this.setAskedQuestionsActiveToggle(true);
              }}
            />
          </View>

          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Chip
              title={'Answered'}
              containerStyle={{
                marginVertical: theme.SIZES.BASE * 0.5,
                marginHorizontal: 5,
              }}
              buttonStyle={{
                paddingHorizontal: theme.SIZES.BASE * 1,
                paddingTop: theme.SIZES.BASE * 0.25,
                backgroundColor: this.state.askedQuestionsActiveToggle
                  ? theme.COLORS.TRANSPARENT
                  : theme.COLORS.PRIMARY2,
                borderColor: theme.COLORS.PRIMARY2,
                borderWidth: 1,
                borderRadius: theme.SIZES.BASE * 0.5,
              }}
              titleStyle={{
                color: this.state.askedQuestionsActiveToggle
                  ? theme.COLORS.PRIMARY2
                  : theme.COLORS.WHITE,
                fontFamily: theme.FONTS.TEXT,
                fontSize: theme.SIZES.FONT,
              }}
              onPress={() => {
                this.setAskedQuestionsActiveToggle(false);
              }}
            />
          </View>

          <View
            style={{
              flex: 1,
              alignContent: 'flex-end',
              alignItems: 'flex-end',
              marginTop: 8,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => {
                this.setCheckInVisible(true);
              }}>
              <AddCircleSvg />
            </TouchableOpacity>
          </View>
        </View>

        <RoundedTopContainer
          style={{
            minHeight: height - theme.SIZES.BASE * 6,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: theme.SIZES.BASE * 1.5,
            }}></View>

          {this.renderQna()}

          <QnACard
            question={'This is the question?'}
            answer={'This is definetly the answer!'}
            tags={['Tags1', 'SecondTag']}
            numLikes={6}
            numComments={3}
            qnaDateTime={1675803482734}
          />
          <QnACard
            question={'This is the question?'}
            answer={'This is definetly the answer!'}
            tags={['Tags1', 'SecondTag']}
            numLikes={6}
            numComments={3}
            qnaDateTime={1675803482734}
          />
          <QnACard
            question={'This is the question?'}
            answer={'This is definetly the answer!'}
            tags={['Tags1', 'SecondTag']}
            numLikes={6}
            numComments={3}
            qnaDateTime={1675803482734}
          />
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
                        // marginVertical: theme.SIZES.BASE * 10,
                      }}>
                      <View
                        style={{
                          // marginHorizontal: theme.SIZES.BASE,
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontFamily: theme.FONTS.TEXT,
                            fontSize: theme.SIZES.H5,
                            marginBottom: theme.SIZES.BASE * 0.5,
                          }}>
                          Ask a question
                        </Text>
                      </View>
                      <Input
                        placeholder="Enter here"
                        // keyboardType={iosPlatform() ? "number-pad" : "numeric"}
                        inputContainerStyle={{
                          // height: 30,
                          width: width - theme.SIZES.BASE * 4,
                          marginVertical: 0,
                          // paddingTop: 14,
                          borderBottomWidth: 0,
                          fontFamily: theme.FONTS.TEXT,
                        }}
                        leftIcon={null}
                        onChangeText={value => {
                          this.setCheckInText(value);
                          // this.props.dispatch(
                          //   addTrackingLogStagingNumberAction(symptomObj, value)
                          // );
                        }}
                      />

                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontFamily: theme.FONTS.TEXT,
                            fontSize: theme.SIZES.C1,
                          }}>
                          Tags
                        </Text>
                        <View style={{flex: 1}} />
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            width: width - theme.SIZES.BASE * 7,
                            marginRight: theme.SIZES.BASE * 0.5,
                            // height: theme.SIZES.BASE * 20,
                            // backgroundColor: 'red',
                          }}>
                          <Input
                            placeholder="Enter tag here"
                            inputContainerStyle={{
                              height: 30,
                              top: 10,
                              borderBottomWidth: 0,
                              fontFamily: theme.FONTS.TEXT,
                            }}
                            leftIcon={null}
                            onChangeText={value => {
                              this.setCheckInNewHashtag(value);
                            }}
                          />
                        </View>
                        <Button
                          testID="addButton"
                          style={{
                            ...styles.button,
                            fontSize: 16,
                            fontWeight: '700',
                            textAlign: 'center',
                            width: theme.SIZES.BASE * 4,
                          }}
                          titleStyle={{
                            color: theme.COLORS.WHITE,
                            fontFamily: theme.FONTS.TEXT,
                          }}
                          title="Add"
                          onPress={() => {
                            this.addCheckInHashtag(
                              this.state.checkInNewHashtag,
                            );
                          }}></Button>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: theme.SIZES.BASE * 0.5,
                        }}>
                        {Object.entries(this.state.checkInHashtags).map(
                          (responseObj, i) => (
                            <Chip
                              title={'#' + responseObj[1] + '   X'}
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
                              onPress={() => {
                                this.removeCheckInHashtag(responseObj[1]);
                              }}
                            />
                          ),
                        )}
                      </View>

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
                              // color: theme.COLORS.DEFAULT,
                              // backgroundColor: theme.COLORS.BLACK,
                            }}
                            titleStyle={{
                              color: theme.COLORS.WHITE,
                              fontFamily: theme.FONTS.TEXT,
                            }}
                            title="Post"
                            // containerStyle={styles.outlinedButton.borderRadius}
                            onPress={() => {
                              //  create new Qna object
                              const currentDate = new XDate();
                              const currentTS = currentDate.getTime();
                              const newQnaPost = {
                                timestamp: currentTS,
                                question: this.state.checkInText,
                                answer: '',
                                tags: this.state.checkInHashtags,
                                upvotes: 0,
                                answeredBy: {},
                                discussion: {},
                              };

                              Promise.resolve()
                                .then(() => {
                                  //  add to local list
                                  return this.props.dispatch(
                                    addQuestionToCachedQnaAction(
                                      currentTS,
                                      newQnaPost,
                                    ),
                                  );
                                })
                                .then(() => {
                                  //  add to local list of qnaUpdates
                                  // localQnaUpdates: {newQuestions: {}, newQuestionInteractions: {}},
                                  const currentQnaUpdates =
                                    this.props.connect.localQnaUpdates;
                                  let updatedQnaUpdates =
                                    cloneDeep(currentQnaUpdates);

                                  //  FIXMETUNA: TMP: this is tmp, the db update hasn't been added yet
                                  if (updatedQnaUpdates == null) {
                                    updatedQnaUpdates = {
                                      newQuestions: {},
                                      newQuestionInteractions: {},
                                    };
                                  }

                                  updatedQnaUpdates['newQuestions'][currentTS] =
                                    newQnaPost;
                                  this.props.dispatch(
                                    setLocalQnaUpdatesAction(updatedQnaUpdates),
                                  );
                                  return updatedQnaUpdates;
                                })
                                .then(updatedQnaUpdates => {
                                  // sync to server TMP
                                  console.log(
                                    'QNA Updates: ',
                                    JSON.stringify(updatedQnaUpdates),
                                  );
                                  return syncLocalQuestions(updatedQnaUpdates);
                                })
                                .then(() => {
                                  return this.props.dispatch(
                                    resetLocalQnaUpdatesAction(),
                                  );
                                })
                                .then(() => {
                                  return this.setCheckInVisible(
                                    !this.state.checkInVisible,
                                  );
                                })
                                .catch(error => {
                                  console.log(error);
                                  // An error happened.
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
            </KeyboardAvoidingView>
          </View>

          <View style={{position: 'absolute', bottom: 0}}>
            <View style={{top: -90}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: width - theme.SIZES.BASE * 6}} />

                <View>
                  <TouchableOpacity
                    testID="addNewQuestion2Button"
                    onPress={() => {
                      this.setCheckInVisible(true);
                      // Promise.resolve()
                      //   .then(() => navigation.navigate('GardenStore'))
                      //   .catch(error => {
                      //     console.log(error);
                      //     // An error happened.
                      //   });
                    }}
                    style={{
                      width: theme.SIZES.BASE * 3.5,
                      height: theme.SIZES.BASE * 3.5,
                      borderRadius: theme.SIZES.BASE * 3,
                      // borderWidth: 2,
                      // borderColor: theme.COLORS.TEXT3,
                      // backgroundColor: theme.COLORS.BACKGROUND1,
                      backgroundColor: theme.COLORS.WHITE,
                      // opacity: 0.7,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 5,

                      shadowColor: theme.COLORS.BLACK,
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 4,
                      elevation: 5,
                    }}>
                    <Icon
                      type="ionicon"
                      // type="amiesolid"
                      size={30}
                      // family="ionicon"
                      name="pencil"
                      // name="SvgTendGarden1"
                      // color={theme.COLORS.TEXT1}
                      color={theme.COLORS.TEXT1}
                      fill={theme.COLORS.TEXT1}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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
export default connect(mapStateToProps)(QnAScreen);
