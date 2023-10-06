import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text, Slider} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {updateEndo101Week1Module2Q2Action} from '../../../../../../redux/actions/learnActions';
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
  };

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
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
                        How much do you know about endometriosis?
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: theme.SIZES.BASE * 0.5,
                      }}>
                      {/* <Text style={{ fontSize: theme.SIZES.B1 }}>
                        0 - Nothing
                        {"\u000A"}5 - I know a little bit about it
                        {"\u000A"}
                        10 - I’m an expert
                      </Text> */}

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
                              I'm an expert
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
                            this.setCorrectAnswer(true);
                            this.props.dispatch(
                              updateEndo101Week1Module2Q2Action(sliderVal),
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
                            if (this.state.correctAnswer) {
                              navigation.navigate('Endo101Week1Module2Page4');
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
