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
                          Posture Exercise
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          Bad posture can contribute to the tightness in your
                          pelvic floor. This happens because the pelvic floor
                          has to compensate for the muscles that you would
                          normally use with good posture. As a result, the
                          pelvic floor works harder than it should to hold up
                          your pelvic organs, causing everything to tighten up.
                          Practicing good posture can help your pelvic floor to
                          relax. Here is how you can practice having good
                          posture:
                          {'\u000A'}
                          {'\u000A'}
                          Pelvic Tilts. Lie with your back on the floor, with
                          your knees bent, and your feet flat on the floor. You
                          should allow your back to curve naturally. The lower
                          back will likely be off the floor. As you inhale, rock
                          your hips toward your face. Release the tilt as you
                          exhale. Repeat this 5-10 times.
                          {'\u000A'}
                        </Text>

                        <Image
                          style={{
                            ...styles.onboardingHeaderImage,
                            height: 210,
                            // marginHorizontal: theme.SIZES.BASE * 0.5,
                          }}
                          source={Images.learn.endo101Course.hipTilt1}
                        />

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}
                          Wall Slides. To do this exercise, sit with your back
                          up against a wall with your legs straight out in front
                          of you. Make sure your head and lower back are both
                          touching the wall. Raise your arms above your head.
                          While trying to keep your arms touching the wall, pull
                          them down so that your elbows are bent at 90 degrees.
                          Repeat 5-10 times.
                          {'\u000A'}
                        </Text>

                        <Image
                          style={{
                            ...styles.onboardingHeaderImage,
                            height: 210,
                            // marginHorizontal: theme.SIZES.BASE * 0.5,
                          }}
                          source={Images.learn.endo101Course.backToWallPose1}
                        />

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
                              navigation.navigate('Endo101Week7Module5Page2');
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
