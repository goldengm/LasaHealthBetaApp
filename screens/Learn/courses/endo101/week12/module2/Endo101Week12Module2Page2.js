import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button, Input} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {
  updateEndo101Week12Module2Q1Action,
  updateEndo101Week12Module2Q2Action,
  updateEndo101Week12Module2Q3Action,
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
                          Cognitive Behavioral Therapy (CBT)
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          CBT focuses on physiological issues caused by
                          unhelpful patterns of thinking, behaviors, and
                          beliefs. CBT is based on the idea that healthy coping
                          mechanisms can be learned. CBT is often used for
                          anxiety, depression, and other mental health
                          conditions.
                          {'\u000A'}
                          {'\u000A'}
                          Exercise #1. Goal Setting
                          {'\u000A'}
                          {'\u000A'}
                          Goal setting is a central component of CBT and can
                          give you a sense of direction and hope for the future.
                          {'\u000A'}
                          {'\u000A'}
                          Think about the things that are most important to you.
                          What goals do you want to set? If your health is
                          important to you, maybe you make a goal to set an
                          appointment with a physical therapist.
                          {'\u000A'}
                          {'\u000A'}
                          Then set a goal based on the things that are most
                          important to you. For example, if you value
                          friendship, make a goal to text a friend or invite
                          someone over.
                          {'\u000A'}
                          {'\u000A'}
                          Take a minute to think. What is your goal?
                        </Text>

                        <View
                          style={{
                            paddingHorizontal: theme.SIZES.BASE,
                            marginTop: theme.SIZES.BASE * 1.5,
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
                                updateEndo101Week12Module2Q1Action(value),
                              );
                            }}
                          />
                        </View>

                        <Text
                          style={{
                            fontSize: theme.SIZES.B1,
                            marginTop: theme.SIZES.BASE,
                          }}>
                          Exercise #2. I feel... because…
                          {'\u000A'}
                          {'\u000A'}
                          Another big part of CBT is working on not avoiding
                          distress and instead focusing on what you value.
                          {'\u000A'}
                          {'\u000A'}
                          When we are sad or frustrated the natural response is
                          to try and change how we feel. Having uncomfortable
                          emotions is a normal part of the human experience.
                          When you try to stop those feelings, it could dig you
                          deeper into those emotions.
                          {'\u000A'}
                          {'\u000A'}
                          When you find you are feeling upset, instead of trying
                          to stop those feelings, try filling out this statement
                          instead.
                          {'\u000A'}
                          {'\u000A'}
                          “I feel __ because __ “{'\u000A'}
                          {'\u000A'}
                          For example, you could say, “I am feeling overwhelmed
                          because my flare-up is causing me to not finish my
                          work.”
                          {'\u000A'}
                          {'\u000A'}
                          After completing the sentence, look at the part that
                          comes after the “because.” Oftentimes the “because” is
                          what you value in life. Validate what comes after the
                          “because.” If you are feeling overwhelmed it’s because
                          you value your work and that’s okay! When something is
                          important to you, it's normal and healthy to have
                          strong emotions surrounding it.
                        </Text>

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}
                          {'\u000A'}
                          Your turn! {'\u000A'}
                          {'\u000A'}I feel
                        </Text>

                        <View
                          style={{
                            paddingHorizontal: theme.SIZES.BASE,
                            marginTop: theme.SIZES.BASE * 0.5,
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
                                updateEndo101Week12Module2Q2Action(value),
                              );
                            }}
                          />
                        </View>

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}because
                        </Text>
                        <View
                          style={{
                            paddingHorizontal: theme.SIZES.BASE,
                            marginTop: theme.SIZES.BASE * 0.5,
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
                                updateEndo101Week12Module2Q3Action(value),
                              );
                            }}
                          />
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
                              navigation.navigate('Endo101Week12Module2Page3');
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
