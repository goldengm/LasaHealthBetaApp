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
                          The Menstruation Cycle
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Image
                          style={{
                            ...styles.onboardingHeaderImage,
                            height: 175,
                            marginBottom: theme.SIZES.BASE,
                            // marginHorizontal: theme.SIZES.BASE * 0.5,
                          }}
                          source={Images.learn.endo101Course.menstrualCycle1}
                        />
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          Menstruation is a cyclical hormonal process to prepare
                          your body for a potential pregnancy. Even if you are
                          not trying to become pregnant, your body still goes
                          through the process of creating eggs and preparing the
                          body for a potential pregnancy.
                          {'\u000A'}
                          {'\u000A'}
                          Menstruation comes from the Latin word “mensis” which
                          means monthly because it happens approximately once
                          per month. The typical menstrual cycle is
                          approximately 28 days in length, but the exact length
                          might be different for each person. A normal period
                          can be between 21-35 days. You can calculate the
                          length of your cycle by counting the days from the
                          start of one period to the start of the next period.
                          Some people have regular periods so they can predict
                          the day that their period will start. Other people
                          have irregular periods and might miss predicted period
                          dates.
                          {'\u000A'}
                          {'\u000A'}
                          The menstrual cycle is made up of four phases:
                          Menstruation, Follicular Phase, Ovulation, and Luteal
                          Phase.
                          {'\u000A'}
                          {'\u000A'}
                          During each of these phases, there are significant
                          fluctuations in your hormone levels and many changes
                          happening in your ovaries and uterus. This chart shows
                          the levels of four hormones throughout your cycle -
                          estrogen, progesterone, LH, and FSH.
                        </Text>

                        <Image
                          style={{
                            ...styles.onboardingHeaderImage,
                            height: 250,
                            // marginHorizontal: theme.SIZES.BASE * 0.5,
                          }}
                          source={
                            Images.learn.endo101Course.hormonesMenstrualCycle1
                          }
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
                              navigation.navigate('Endo101Week2Module4Page2');
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
