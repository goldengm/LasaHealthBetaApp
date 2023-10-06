import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {
  updateEndo101Week4Module7Q1Action,
  updateEndo101Week4Module7Q2Action,
  updateEndo101Week4Module7Q3Action,
  updateEndo101Week4Module7Q4Action,
  updateEndo101Week4Module7Q5Action,
} from '../../../../../../redux/actions/learnActions';
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
    selectedIndexQ1: -1,
    selectedIndexQ2: -1,
    selectedIndexQ3: -1,
    selectedIndexQ4: -1,
    selectedIndexQ5: -1,
  };

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
  };

  setWrongAnswer = wrongAnswerP => {
    this.setState({wrongAnswer: wrongAnswerP});
  };

  setSelectedIndexQ1 = selectedIndexQ1P => {
    this.setState({selectedIndexQ1: selectedIndexQ1P});
  };

  setSelectedIndexQ2 = selectedIndexQ2P => {
    this.setState({selectedIndexQ2: selectedIndexQ2P});
  };

  setSelectedIndexQ3 = selectedIndexQ3P => {
    this.setState({selectedIndexQ3: selectedIndexQ3P});
  };

  setSelectedIndexQ4 = selectedIndexQ4P => {
    this.setState({selectedIndexQ4: selectedIndexQ4P});
  };

  setSelectedIndexQ5 = selectedIndexQ5P => {
    this.setState({selectedIndexQ5: selectedIndexQ5P});
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
                        paddingHorizontal: theme.SIZES.BASE,
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
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H5,
                            fontWeight: '600',
                            textAlign: 'center',
                          }}>
                          Your Experience
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          We would love to learn more about your experience
                          getting diagnosed. For each of the following, please
                          select Yes, No, or Unsure:
                        </Text>

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}Have you had a doctor listen to your
                          symptoms and medical history?
                        </Text>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ1Button"
                            style={{
                              ...styles.mutedButton,

                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ1 == 0
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "Yes, I have been diagnosed with endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ1(0);
                            }}
                            title={'Yes'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ2Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ1 == 1
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "Unsure, but I think I might have endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ1(1);
                            }}
                            title={'No'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ3Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ1 == 2
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "No, but I have a loved one with endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ1(2);
                            }}
                            title={'Unsure'}></Button>
                        </View>

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}Have you had a doctor conduct a pelvic exam
                          to assess for endometriosis?
                        </Text>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ1Button"
                            style={{
                              ...styles.mutedButton,

                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ2 == 0
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "Yes, I have been diagnosed with endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ2(0);
                            }}
                            title={'Yes'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ2Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ2 == 1
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "Unsure, but I think I might have endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ2(1);
                            }}
                            title={'No'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ3Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ2 == 2
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "No, but I have a loved one with endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ2(2);
                            }}
                            title={'Unsure'}></Button>
                        </View>

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}Have you had any of the following types of
                          imaging for endometriosis?
                        </Text>
                        {/* <Text
                          style={{
                            fontSize: theme.SIZES.B1,
                            marginLeft: theme.SIZES.BASE,
                          }}
                        >
                          ● Abdominal Ultrasound
                          {"\u000A"}● Transvaginal Ultrasound
                          {"\u000A"}● MRI
                        </Text> */}

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Abdominal Ultrasound
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Transvaginal Ultrasound
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            MRI
                          </Text>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ1Button"
                            style={{
                              ...styles.mutedButton,

                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ3 == 0
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "Yes, I have been diagnosed with endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ3(0);
                            }}
                            title={'Yes'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ2Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ3 == 1
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "Unsure, but I think I might have endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ3(1);
                            }}
                            title={'No'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ3Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ3 == 2
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "No, but I have a loved one with endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ3(2);
                            }}
                            title={'Unsure'}></Button>
                        </View>

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}Have you had a diagnostic laparoscopic
                          surgery?
                        </Text>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ1Button"
                            style={{
                              ...styles.mutedButton,

                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ4 == 0
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "Yes, I have been diagnosed with endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ4(0);
                            }}
                            title={'Yes'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ2Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ4 == 1
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "Unsure, but I think I might have endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ4(1);
                            }}
                            title={'No'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ3Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ4 == 2
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "No, but I have a loved one with endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ4(2);
                            }}
                            title={'Unsure'}></Button>
                        </View>

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}Have you taken CA-125, BCL-6, or other
                          endometriosis biomarker tests?
                        </Text>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ1Button"
                            style={{
                              ...styles.mutedButton,

                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ5 == 0
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "Yes, I have been diagnosed with endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ5(0);
                            }}
                            title={'Yes'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ2Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ5 == 1
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "Unsure, but I think I might have endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ5(1);
                            }}
                            title={'No'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="optionQ3Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndexQ5 == 2
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "No, but I have a loved one with endometriosis"
                              //   )
                              // );
                              this.setSelectedIndexQ5(2);
                            }}
                            title={'Unsure'}></Button>
                        </View>

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
                                this.state.selectedIndexQ1 >= 0 &&
                                this.state.selectedIndexQ2 >= 0 &&
                                this.state.selectedIndexQ3 >= 0 &&
                                this.state.selectedIndexQ4 >= 0 &&
                                this.state.selectedIndexQ5 >= 0
                              ) {
                                this.props.dispatch(
                                  updateEndo101Week4Module7Q1Action(
                                    this.state.selectedIndexQ1,
                                  ),
                                );

                                this.props.dispatch(
                                  updateEndo101Week4Module7Q2Action(
                                    this.state.selectedIndexQ2,
                                  ),
                                );

                                this.props.dispatch(
                                  updateEndo101Week4Module7Q3Action(
                                    this.state.selectedIndexQ3,
                                  ),
                                );

                                this.props.dispatch(
                                  updateEndo101Week4Module7Q4Action(
                                    this.state.selectedIndexQ4,
                                  ),
                                );

                                this.props.dispatch(
                                  updateEndo101Week4Module7Q5Action(
                                    this.state.selectedIndexQ5,
                                  ),
                                );

                                if (
                                  this.props.endoCourse.week1
                                    .module2Q1HasEndo ==
                                    'I have been diagnosed with confirmed endometriosis with a laparoscopic surgery.' ||
                                  this.props.endoCourse.week1
                                    .module2Q1HasEndo ==
                                    'I have been clinically diagnosed with endometriosis, but have not had a laparoscopic surgery to confirm the diagnosis.'
                                ) {
                                  navigation.navigate(
                                    'Endo101Week4Module7Page2',
                                  );
                                } else {
                                  navigation.navigate(
                                    'Endo101Week4Module7Page3',
                                  );
                                }
                              }
                            }}></Button>
                        </View>
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
