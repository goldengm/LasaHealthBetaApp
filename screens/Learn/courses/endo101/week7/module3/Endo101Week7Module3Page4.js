import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text, Slider} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button, Input} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {
  updateEndo101Week7Module3Q1Action,
  updateEndo101Week7Module3Q2Action,
  updateEndo101Week7Module3Q3Action,
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
    selectedIndex: -1,
    slider1Updated: false,
  };

  setSlider1Updated = slider1UpdatedP => {
    this.setState({slider1Updated: slider1UpdatedP});
  };

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
  };

  setWrongAnswer = wrongAnswerP => {
    this.setState({wrongAnswer: wrongAnswerP});
  };

  setSelectedIndex = selectedIndexP => {
    this.setState({selectedIndex: selectedIndexP});
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
                        Have you ever been to a pelvic floor therapist for
                        endometriosis?
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: theme.SIZES.BASE * 0.5,
                      }}>
                      <View
                        style={{
                          alignContent: 'center',
                          alignItems: 'center',
                          marginVertical: theme.SIZES.BASE,
                          marginBottom: 0,
                        }}>
                        <Button
                          testID="option1Button"
                          style={{
                            ...styles.mutedButton,

                            width: width - theme.SIZES.BASE * 4,
                            height: theme.SIZES.BASE * 4,
                            backgroundColor:
                              this.state.selectedIndex == 0
                                ? theme.COLORS.TEXT3
                                : theme.COLORS.BACKGROUND2,
                          }}
                          containerStyle={styles.mutedButton.borderRadius}
                          onPress={() => {
                            this.setSelectedIndex(0);
                            // this.setCorrectAnswer(false);
                            // this.setWrongAnswer(true);
                            this.props.dispatch(
                              updateEndo101Week7Module3Q1Action('Yes'),
                            );
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
                          testID="option2Button"
                          style={{
                            ...styles.mutedButton,
                            width: width - theme.SIZES.BASE * 4,
                            height: theme.SIZES.BASE * 4,
                            backgroundColor:
                              this.state.selectedIndex == 1
                                ? theme.COLORS.TEXT3
                                : theme.COLORS.BACKGROUND2,
                          }}
                          containerStyle={styles.mutedButton.borderRadius}
                          onPress={() => {
                            this.setSelectedIndex(1);
                            // this.setCorrectAnswer(false);
                            // this.setWrongAnswer(true);
                            this.props.dispatch(
                              updateEndo101Week7Module3Q1Action(
                                'No, but I’ve been to a physical therapist for endometriosis',
                              ),
                            );
                          }}
                          title={
                            'No, but I’ve been to a physical therapist for endometriosis'
                          }></Button>
                      </View>

                      <View
                        style={{
                          alignContent: 'center',
                          alignItems: 'center',
                          marginVertical: theme.SIZES.BASE,
                          marginBottom: 0,
                        }}>
                        <Button
                          testID="option3Button"
                          style={{
                            ...styles.mutedButton,
                            width: width - theme.SIZES.BASE * 4,
                            height: theme.SIZES.BASE * 4,
                            backgroundColor:
                              this.state.selectedIndex == 2
                                ? theme.COLORS.TEXT3
                                : theme.COLORS.BACKGROUND2,
                          }}
                          containerStyle={styles.mutedButton.borderRadius}
                          onPress={() => {
                            this.setSelectedIndex(2);
                            // this.setCorrectAnswer(false);
                            // this.setWrongAnswer(true);
                            this.props.dispatch(
                              updateEndo101Week7Module3Q1Action('No'),
                            );
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
                          testID="option4Button"
                          style={{
                            ...styles.mutedButton,
                            width: width - theme.SIZES.BASE * 4,
                            height: theme.SIZES.BASE * 4,
                            backgroundColor:
                              this.state.selectedIndex == 3
                                ? theme.COLORS.TEXT3
                                : theme.COLORS.BACKGROUND2,
                          }}
                          containerStyle={styles.mutedButton.borderRadius}
                          onPress={() => {
                            this.setSelectedIndex(3);
                            // this.setCorrectAnswer(false);
                            // this.setWrongAnswer(true);
                            this.props.dispatch(
                              updateEndo101Week7Module3Q1Action('Not sure'),
                            );
                          }}
                          title={'Not sure'}></Button>
                      </View>

                      {this.state.selectedIndex == 0 && (
                        <View>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginTop: theme.SIZES.BASE * 2,
                              marginLeft: theme.SIZES.BASE,
                            }}>
                            How effective was it for you?{'\u000A'}
                          </Text>

                          <View
                            style={{
                              flex: 1,
                              marginHorizontal: theme.SIZES.BASE * 0.5,
                            }}>
                            <View
                              style={{
                                flex: 1,
                                marginHorizontal: theme.SIZES.BASE,
                                marginBottom: theme.SIZES.BASE,
                              }}>
                              <View
                                style={{
                                  position: 'absolute',
                                  flexDirection: 'row',
                                  // marginHorizontal: theme.SIZES.BASE,
                                  // marginBottom: 50,
                                }}>
                                <View
                                  style={{
                                    flex: 1,
                                    alignItems: 'flex-start',
                                    // marginBottom: 20,
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: theme.SIZES.C2,
                                      fontFamily: theme.FONTS.TEXT,
                                    }}>
                                    Not at all
                                  </Text>
                                </View>
                                <View
                                  style={{
                                    flex: 1,
                                    alignItems: 'flex-end',
                                    // marginTop: 20,
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: theme.SIZES.C2,
                                      fontFamily: theme.FONTS.TEXT,
                                    }}>
                                    Very effective
                                  </Text>
                                </View>
                              </View>
                              <Slider
                                // minimumValue={0}
                                // maximumValue={5}
                                // value={currentSeverity}
                                // tapToSeek={true}
                                allowTouchTrack={true}
                                onSlidingComplete={sliderVal => {
                                  this.setSlider1Updated(true);
                                  this.props.dispatch(
                                    updateEndo101Week7Module3Q2Action(
                                      sliderVal,
                                    ),
                                  );
                                }}
                                thumbTintColor={theme.COLORS.PRIMARY2}
                                minimumTrackTintColor={theme.COLORS.PRIMARY2}
                                maximumTrackTintColor={theme.COLORS.BACKGROUND3}
                                // thumbStyle={{
                                //   borderColor: theme.COLORS.DEFAULT,
                                //   width: theme.SIZES.BASE * 2.5,
                                //   height: theme.SIZES.BASE * 2.5,
                                //   borderRadius: theme.SIZES.BASE * 2.5,
                                //   fontFamily: theme.FONTS.TEXT,
                                // }}
                                // thumbStyle={{ width: 10, height: 10 }}
                                style={{marginTop: 18}}
                                trackStyle={{height: 16, borderRadius: 20}}
                                // trackStyle={{ height: 10 }}
                              />

                              <View
                                style={{
                                  // position: "absolute",
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  marginHorizontal: theme.SIZES.BASE,
                                  // marginTop: 50,
                                }}>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}></Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  1
                                </Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}></Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  2
                                </Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}></Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  3
                                </Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}></Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  4
                                </Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}></Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  5
                                </Text>
                              </View>
                            </View>
                          </View>

                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginTop: theme.SIZES.BASE,
                              marginLeft: theme.SIZES.BASE,
                            }}>
                            What was your experience?{'\u000A'}
                          </Text>

                          <View
                            style={{
                              paddingHorizontal: theme.SIZES.BASE,
                              // marginTop: theme.SIZES.BASE * 1.5,
                            }}>
                            <Input
                              testID="explainInput"
                              // right
                              placeholder="enter here"
                              style={{
                                // borderColor: theme.COLORS.DEFAULT,
                                // borderRadius: 4,
                                // backgroundColor: "#fff",
                                // height: 120,
                                fontFamily: theme.FONTS.TEXT,
                              }}
                              multiline={true}
                              iconContent={<View />}
                              onChangeText={value => {
                                // this.setCorrectAnswer(true);
                                this.props.dispatch(
                                  updateEndo101Week7Module3Q3Action(value),
                                );
                              }}
                            />
                          </View>
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
                            if (this.state.selectedIndex >= 0) {
                              navigation.navigate('Endo101Week7Module3Page5');
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
