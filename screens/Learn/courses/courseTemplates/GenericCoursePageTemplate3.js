import React from 'react';
import {ScrollView, StyleSheet, Dimensions, Image, View} from 'react-native';
import {Text, LinearProgress, Slider} from 'react-native-elements';
import {tabs, styles, theme, Images} from '../../../../constants';
import {
  Accordion,
  Button,
  Select,
  Icon,
  Input,
  Header,
  Switch,
  Footer,
} from '../../../../components';
import {StatusBar} from 'expo-status-bar';
// import Images from "../../../../constants/Images";
import {getWikiPage} from '../../../../constants/learn/condWikiIndex';

import {auth} from '../../../../shared/firebaseUtils';

import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../../../shared/ScreenTemplateWrapper';

// import Slider from "@react-native-community/slider";
import {getOS} from '../../../../shared/PlatformUtils';
//swap getOS() for getOS()
const iosPlatform = () => getOS() == 'ios';

const {width, height} = Dimensions.get('screen');

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
  };

  handleAnswer = () => {
    this.setCorrectAnswer(false);
    this.setWrongAnswer(true);
  }

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
  };

  setWrongAnswer = wrongAnswerP => {
    this.setState({wrongAnswer: wrongAnswerP});
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
                    }}>
                    <View
                      style={{
                        paddingHorizontal: theme.SIZES.BASE * 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: theme.SIZES.BASE * 2,
                        marginBottom: theme.SIZES.BASE,
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
                        Have you been diagnosed with endometriosis?
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
                            height: 60,
                            width: width - theme.SIZES.BASE * 4,
                          }}
                          containerStyle={styles.mutedButton.borderRadius}
                          onPress={() => {
                            this.handleAnswer();
                          }}
                          title={
                            'Yes, with a diagnostic laparoscopic surgery'
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
                          testID="option2Button"
                          style={{
                            ...styles.mutedButton,
                            height: 60,
                            width: width - theme.SIZES.BASE * 4,
                          }}
                          containerStyle={styles.mutedButton.borderRadius}
                          onPress={() => {
                            this.handleAnswer();
                          }}
                          title={
                            'Yes, but without a dianostic laparoscopic surgery'
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
                            height: 60,
                            width: width - theme.SIZES.BASE * 4,
                          }}
                          containerStyle={styles.mutedButton.borderRadius}
                          onPress={() => {
                            this.handleAnswer();
                          }}
                          title={
                            'Unsure, but I think I have endometriosis'
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
                          testID="option4Button"
                          style={{
                            ...styles.mutedButton,
                            height: 60,
                            width: width - theme.SIZES.BASE * 4,
                          }}
                          containerStyle={styles.mutedButton.borderRadius}
                          onPress={() => {
                            this.handleAnswer();
                          }}
                          title={
                            "No, I'm just interested in learning"
                          }></Button>
                      </View>

                      <View
                        style={{
                          paddingHorizontal: theme.SIZES.BASE * 2,
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingVertical: theme.SIZES.BASE,
                          marginTop: theme.SIZES.BASE,
                        }}>
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H5,
                            fontWeight: '600',
                            textAlign: 'center',
                          }}>
                          How much do you know about endometriosis?
                        </Text>
                      </View>
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
                              Nothing
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
                              Everything
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
                            // this.props.dispatch(
                            //   addTrackingLogStagingSeverityAction(
                            //     symptomObj,
                            //     sliderVal
                            //   )
                            // );
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
                            }}>
                            1
                          </Text>
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
                            }}>
                            3
                          </Text>
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
                            }}>
                            5
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.C2,
                              fontFamily: theme.FONTS.TEXT,
                            }}>
                            6
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.C2,
                              fontFamily: theme.FONTS.TEXT,
                            }}>
                            7
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.C2,
                              fontFamily: theme.FONTS.TEXT,
                            }}>
                            8
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.C2,
                              fontFamily: theme.FONTS.TEXT,
                            }}>
                            9
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.C2,
                              fontFamily: theme.FONTS.TEXT,
                            }}>
                            10
                          </Text>
                        </View>
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
                            // navigation.navigate("Endo101Week1Page2");
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

export default LearnCoursePlaceholderScreen;
