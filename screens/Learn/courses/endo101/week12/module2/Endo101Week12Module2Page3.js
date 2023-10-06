import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
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
                        Acceptance and Commitment Therapy (ACT)
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: theme.SIZES.BASE * 0.5,
                      }}>
                      <View
                        style={{
                          paddingHorizontal: theme.SIZES.BASE,
                        }}>
                        <Text
                          style={{
                            fontSize: theme.SIZES.B1,
                            // marginLeft: theme.SIZES.BASE,
                            // fontStyle: 'italic',
                          }}>
                          ACT focuses on the present moment and helps you accept
                          your feelings and emotions without judgment. This
                          allows you to connect to the world around you and make
                          room for everything you are experiencing.
                          {'\u000A'}
                          {'\u000A'}
                          Let’s look at some exercises you can practice on your
                          own!
                          {'\u000A'}
                          {'\u000A'}
                          Exercise #1. Fusion v. Defusion
                          {'\u000A'}
                          {'\u000A'}
                          This exercise is about separating our thoughts from
                          reality.
                          {'\u000A'}
                          {'\u000A'}
                          Fusion means that we mix our thoughts with the reality
                          of what is going on around us. While those feelings
                          are very real, it does not mean the thought is true.
                          {'\u000A'}
                          {'\u000A'}
                          For example, after getting a bad score on a test a
                          student might think they are a bad student. This
                          student may have studied hard and actively
                          participated in class. One bad test score does not
                          make them a bad student. In order to defuse their
                          thought from reality, the student would need to
                          recognize that they did not do well on their test, but
                          that they are a good student. It’s okay to be upset
                          about the score - that can be very disappointing.
                          However, recognizing that our thoughts are not
                          realities can help us to cope better with hard
                          situations.
                          {'\u000A'}
                          {'\u000A'}
                          Do you find yourself believing your thoughts are a
                          reality? Next time you are struggling, think about
                          whether or not the thoughts you are having are a
                          reality or simply thoughts.
                          {'\u000A'}
                          {'\u000A'}
                          Exercise #2. Connection
                          {'\u000A'}
                          {'\u000A'}
                          One helpful way for us to connect is through
                          breathing.
                          {'\u000A'}
                          {'\u000A'}
                          One of the body's natural responses to stress is to
                          increase the speed of our breath. When we force our
                          bodies to take slow, even breaths it gives us time to
                          process what we are experiencing.
                          {'\u000A'}
                          {'\u000A'}
                          For this exercise, take slow, deep breaths. Make sure
                          to fill your lower belly with air and then your lungs.
                          Slowly release the breath through your mouth.
                          {'\u000A'}
                          {'\u000A'}
                          While doing this, take moments to connect with what
                          you are feeling. Notice the rise of your stomach or
                          any easing of tension. Notice any dizziness or
                          discomfort. Notice what you are feeling and how those
                          feelings change. In doing this you will be able to
                          connect your mind and body and gain control over both.
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
                              // if (this.state.correctAnswer) {
                              navigation.navigate('Endo101Week12Module2Page4');
                              // }
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
