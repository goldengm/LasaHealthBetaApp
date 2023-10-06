import React from 'react';
import {ScrollView, Dimensions, Image, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
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
  };

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
  };

  setWrongAnswer = wrongAnswerP => {
    this.setState({wrongAnswer: wrongAnswerP});
  };

  render() {
    const {navigation, route, endoCourse} = this.props;

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
                          Yoga
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          Yoga is an exercise that combines physical movement
                          with mental exercise. Many find that it can ease
                          discomfort and calm the mind. While yoga can be great
                          for a lot of people, it’s important that you listen to
                          your body and honor any feelings - both emotional and
                          physical- that you may be having. If a certain pose is
                          uncomfortable, try something different or stop
                          altogether.
                          {'\u000A'}
                          {'\u000A'}A few weeks ago, we went over some helpful
                          yoga poses to relax your pelvic floor muscles. Lets
                          review:
                        </Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                            marginTop: theme.SIZES.BASE,
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
                            Happy Baby. Start by lying on your back. Bend your
                            knees to a 90-degree angle so that the bottoms of
                            your feet are facing upward. Take your feet into
                            your hand and lightly rock back and forth. You
                            should feel this stretch in your hips, lower back,
                            and inner thighs.
                          </Text>
                        </View>

                        <Image
                          style={{
                            ...styles.onboardingHeaderImage,
                            height: 260,
                            // marginHorizontal: theme.SIZES.BASE * 0.5,
                          }}
                          source={Images.learn.endo101Course.happyBaby1}
                        />

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                            marginTop: theme.SIZES.BASE,
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
                            Child’s Pose. Start by kneeling down. Spread your
                            knees apart slightly and place your forehead on the
                            ground. Reach your arms straight forward. This will
                            stretch your back and the muscles around your hips.
                          </Text>
                        </View>

                        <Image
                          style={{
                            ...styles.onboardingHeaderImage,
                            height: 140,
                            // marginHorizontal: theme.SIZES.BASE * 0.5,
                          }}
                          source={Images.learn.endo101Course.childsPose1}
                        />

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 6,
                            marginTop: theme.SIZES.BASE,
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
                            Upward Dog: For this stretch, you will start by
                            lying on your stomach. Place your hands under your
                            shoulders and push upward, straightening your
                            elbows. You should feel this stretch in your lower
                            abdomen.
                          </Text>
                        </View>

                        <Image
                          style={{
                            ...styles.onboardingHeaderImage,
                            height: 210,
                            // marginHorizontal: theme.SIZES.BASE * 0.5,
                          }}
                          source={Images.learn.endo101Course.upwardDog1}
                        />

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}
                          It’s important to remember that while you should feel
                          stretching during these exercises, you should not feel
                          any sharp or stabbing pains. If you are experiencing
                          pain, lessen or stop the stretch.
                        </Text>

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
                              navigation.navigate('Endo101Week9Module3Page4');
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
