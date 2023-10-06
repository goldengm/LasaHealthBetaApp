import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button, Select} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {updateEndo101Week5Module3Q1Action} from '../../../../../../redux/actions/learnActions';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../../../../../shared/ScreenTemplateWrapper';
import {getOS} from '../../../../../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width} = Dimensions.get('screen');

//  FIXMETUNA:  this might cause problems ignoring this warning, scrolling or windowing
//  errors possible, watch out
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
]);

class LearnCoursePlaceholderScreen extends React.Component {
  state = {
    correctAnswer: false,
    wrongAnswer: false,
    selectedIndex: -1,

    singleOptionPickerList: [{title: 'A'}, {title: 'B'}, {title: 'C'}],
    singleSelectedOption1: -1,
    singleSelectedOption2: -1,
    singleSelectedOption3: -1,
  };

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
  };

  setWrongAnswer = wrongAnswerP => {
    this.setState({wrongAnswer: wrongAnswerP});
  };

  setSingleOptionPickerVisible = async singleOptionPickerVisibleP => {
    Promise.resolve()
      .then(() =>
        this.setState({singleOptionPickerVisible: singleOptionPickerVisibleP}),
      )
      .catch(error => {
        console.log(error);
        // An error happened.
      });
    // .then(() => this.syncUserResponseContainerHeight());
    // this.setState({ singleOptionPickerVisible: singleOptionPickerVisibleP });
  };

  setSingleOptionPickerList = async singleOptionPickerListP => {
    this.setState({singleOptionPickerList: singleOptionPickerListP});
  };

  setSingleSelectedOption1 = async singleSelectedOption1P => {
    Promise.resolve()
      .then(() =>
        this.setState({singleSelectedOption1: singleSelectedOption1P}),
      )
      .then(() => this.checkForCorrectAnswers());
  };

  setSingleSelectedOption2 = async singleSelectedOption2P => {
    Promise.resolve()
      .then(() =>
        this.setState({singleSelectedOption2: singleSelectedOption2P}),
      )
      .then(() => this.checkForCorrectAnswers());
  };

  setSingleSelectedOption3 = async singleSelectedOption3P => {
    Promise.resolve()
      .then(() =>
        this.setState({singleSelectedOption3: singleSelectedOption3P}),
      )
      .then(() => this.checkForCorrectAnswers());
  };

  checkForCorrectAnswers = () => {
    // console.log(this.state.singleSelectedOption1);
    if (
      !(this.state.singleSelectedOption1 == -1) &&
      !(this.state.singleSelectedOption2 == -1) &&
      !(this.state.singleSelectedOption3 == -1)
    ) {
      if (
        this.state.singleSelectedOption1 == 'B' &&
        this.state.singleSelectedOption2 == 'A' &&
        this.state.singleSelectedOption3 == 'C'
      ) {
        this.setCorrectAnswer(true);
        this.setWrongAnswer(false);
      } else {
        this.setCorrectAnswer(false);
        this.setWrongAnswer(true);
      }
    } else {
      this.setCorrectAnswer(false);
      this.setWrongAnswer(false);
    }
  };

  setSelectedIndex = selectedIndexP => {
    this.setState({selectedIndex: selectedIndexP});
  };

  allAnswersFilledIn = () => {
    // console.log(
    //   "Selected Options: ",
    //   this.state.singleSelectedOption1,
    //   this.state.singleSelectedOption2,
    //   this.state.singleSelectedOption3,
    //   this.state.singleSelectedOption4,
    //   this.state.singleSelectedOption5,
    //   this.state.singleSelectedOption6
    // );
    return (
      !(this.state.singleSelectedOption1 == -1) &&
      !(this.state.singleSelectedOption2 == -1) &&
      !(this.state.singleSelectedOption3 == -1)
    );
  };

  render() {
    const {navigation, route} = this.props;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={0}
        customImageName={Images.ui.BackgroundGradient2}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              marginHorizontal: theme.SIZES.BASE,
              elevation: 2,
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
                  style={{}}>
                  <View
                    style={{
                      backgroundColor: theme.COLORS.WHITE,
                      borderRadius: theme.SIZES.HEADERRADIUS,
                      elevation: 2,
                      marginBottom: theme.SIZES.BASE,
                      width: width - theme.SIZES.BASE * 2,
                      marginTop: theme.SIZES.BASE * 0.8,
                    }}>
                    <View
                      style={{
                        paddingHorizontal: theme.SIZES.BASE * 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: theme.SIZES.BASE * 2,
                      }}>
                      <Text
                        style={{
                          // ...styles.boldTitle,
                          color: theme.COLORS.TEXT1,
                          fontSize: theme.SIZES.H5,
                          fontWeight: '600',
                          // textShadowColor: theme.COLORS.DARK_BLACK,
                          // textShadowRadius: 20,
                          textAlign: 'center',
                        }}>
                        Review
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: theme.SIZES.BASE * 0.5,
                      }}>
                      <Text
                        style={{
                          marginHorizontal: theme.SIZES.BASE,
                          fontSize: theme.SIZES.B1,
                        }}>
                        As you will recall, there are three different types of
                        endometriosis: superficial peritoneal endometriosis,
                        ovarian endometriomas, and deep infiltrating
                        endometriosis. Let’s do a quick review. Match each type
                        of endometriosis to its definition.
                        {'\u000A'}
                        {'\u000A'}
                        A) Also known as chocolate cysts. Sacs that contain
                        thick, brown, tar-like fluid.
                        {'\u000A'}
                        {'\u000A'}B) The most common type of endometriosis.
                        Small abnormal growths of tissue
                        {'\u000A'}
                        {'\u000A'}C) Hard, fibrous lesions that are found deep
                        within the tissue or surrounding organs rather than on
                        the surface
                        {'\u000A'}
                      </Text>

                      <View
                        style={{
                          // flex: 1,
                          flexDirection: 'row',
                          // flexWrap: "wrap",
                          // alignContent: "flex-end",
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginTop: 0,
                          paddingTop: 0,
                          // backgroundColor: theme.COLORS.MELBLUE,
                          // height: this.activeItemHeight,
                          marginBottom: theme.SIZES.BASE,
                        }}>
                        <View style={{width: 100}}>
                          <Select
                            customPrompt=" "
                            defaultIndex={1}
                            options={this.state.singleOptionPickerList}
                            // customContainerStyle={{
                            //   marginTop: height - 300,
                            // }}
                            // customListItemStyle={{
                            //   height: 30,
                            //   paddingVertical: 0,
                            // }}
                            // customTitleStyle={{
                            //   alignItems: "center",
                            // }}
                            // style={{ ...styles.dropdown, width: 100 }}
                            customButtonStyle={{
                              // width: theme.SIZES.BASE * 9,
                              height: theme.SIZES.BASE * 3,
                              borderRadius: theme.SIZES.BASE,
                              shadowRadius: 0,
                              shadowOpacity: 0,
                              backgroundColor: theme.COLORS.PRIMARY2,
                              fontFamily: theme.FONTS.TEXT,
                              paddingHorizontal: 0,
                            }}
                            customTextStyle={{
                              fontSize: 16,
                              // fontWeight: "300",
                            }}
                            onSelect={(ind, value) => {
                              this.setSingleSelectedOption1(value);
                            }}
                          />
                        </View>
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H6,
                            fontWeight: 'bold',
                            width: width - theme.SIZES.BASE * 10,
                            textAlign: 'center',
                            marginLeft: theme.SIZES.BASE,
                          }}>
                          Superficial Peritoneal Endometriosis
                        </Text>
                      </View>

                      <View
                        style={{
                          // flex: 1,
                          flexDirection: 'row',
                          // flexWrap: "wrap",
                          // alignContent: "flex-end",
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginTop: 0,
                          paddingTop: 0,
                          // backgroundColor: theme.COLORS.MELBLUE,
                          // height: this.activeItemHeight,
                          marginBottom: theme.SIZES.BASE,
                        }}>
                        <View style={{width: 100}}>
                          <Select
                            customPrompt=" "
                            defaultIndex={1}
                            options={this.state.singleOptionPickerList}
                            // customContainerStyle={{
                            //   marginTop: height - 300,
                            // }}
                            // customListItemStyle={{
                            //   height: 30,
                            //   paddingVertical: 0,
                            // }}
                            // customTitleStyle={{
                            //   alignItems: "center",
                            // }}
                            // style={{ ...styles.dropdown, width: 100 }}
                            customButtonStyle={{
                              // width: theme.SIZES.BASE * 9,
                              height: theme.SIZES.BASE * 3,
                              borderRadius: theme.SIZES.BASE,
                              shadowRadius: 0,
                              shadowOpacity: 0,
                              backgroundColor: theme.COLORS.PRIMARY2,
                              fontFamily: theme.FONTS.TEXT,
                              paddingHorizontal: 0,
                            }}
                            customTextStyle={{
                              fontSize: 16,
                              // fontWeight: "300",
                            }}
                            onSelect={(ind, value) => {
                              this.setSingleSelectedOption2(value);
                            }}
                          />
                        </View>
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H6,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginLeft: theme.SIZES.BASE,
                            width: width - theme.SIZES.BASE * 10,
                          }}>
                          Ovarian Endometriomas
                        </Text>
                      </View>

                      <View
                        style={{
                          // flex: 1,
                          flexDirection: 'row',
                          // flexWrap: "wrap",
                          // alignContent: "flex-end",
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginTop: 0,
                          paddingTop: 0,
                          // backgroundColor: theme.COLORS.MELBLUE,
                          // height: this.activeItemHeight,
                          marginBottom: theme.SIZES.BASE,
                        }}>
                        <View style={{width: 100}}>
                          <Select
                            customPrompt=" "
                            defaultIndex={1}
                            options={this.state.singleOptionPickerList}
                            // customContainerStyle={{
                            //   marginTop: height - 300,
                            // }}
                            // customListItemStyle={{
                            //   height: 30,
                            //   paddingVertical: 0,
                            // }}
                            // customTitleStyle={{
                            //   alignItems: "center",
                            // }}
                            // style={{ ...styles.dropdown, width: 100 }}
                            customButtonStyle={{
                              // width: theme.SIZES.BASE * 9,
                              height: theme.SIZES.BASE * 3,
                              borderRadius: theme.SIZES.BASE,
                              shadowRadius: 0,
                              shadowOpacity: 0,
                              backgroundColor: theme.COLORS.PRIMARY2,
                              fontFamily: theme.FONTS.TEXT,
                              paddingHorizontal: 0,
                            }}
                            customTextStyle={{
                              fontSize: 16,
                              // fontWeight: "300",
                            }}
                            onSelect={(ind, value) => {
                              this.setSingleSelectedOption3(value);
                            }}
                          />
                        </View>
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H6,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginLeft: theme.SIZES.BASE,
                            width: width - theme.SIZES.BASE * 10,
                          }}>
                          Deep Infiltrating Endometriosis
                        </Text>
                      </View>

                      {this.state.wrongAnswer && (
                        <View
                          style={{
                            flex: 1,
                            alignContent: 'center',
                            alignItems: 'center',
                            // marginVertical: theme.SIZES.BASE,
                          }}>
                          <Text
                            style={{
                              color: theme.COLORS.ERROR1,
                            }}>
                            Incorrect
                          </Text>
                        </View>
                      )}

                      {this.state.correctAnswer && (
                        <View
                          style={{
                            flex: 1,
                            alignContent: 'center',
                            alignItems: 'center',
                            // marginTop: theme.SIZES.BASE,
                          }}>
                          <Text
                            style={{
                              color: theme.COLORS.PRIMARY1,
                            }}>
                            Correct!
                          </Text>
                        </View>
                      )}

                      <View
                        style={{
                          paddingHorizontal: theme.SIZES.BASE * 2,
                          alignItems: 'center',
                          paddingVertical: theme.SIZES.BASE * 2,
                        }}>
                        <Button
                          testID="nextButton"
                          style={{
                            ...styles.button,
                            width: width - theme.SIZES.BASE * 4,
                          }}
                          titleStyle={{
                            color: theme.COLORS.WHITE,
                            fontFamily: theme.FONTS.TEXT,
                          }}
                          title="Next"
                          onPress={() => {
                            if (
                              this.allAnswersFilledIn() &&
                              this.state.correctAnswer
                            ) {
                              this.props.dispatch(
                                updateEndo101Week5Module3Q1Action({
                                  Superficial: this.state.singleSelectedOption1,
                                  Ovarian: this.state.singleSelectedOption2,
                                  Deep: this.state.singleSelectedOption3,
                                }),
                              );
                              navigation.navigate('Endo101Week5Module3Page4');
                            }
                          }}></Button>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </View>
          </View>
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    endoCourse: state.learn.endo101Course,
  };
};
export default connect(mapStateToProps)(LearnCoursePlaceholderScreen);
