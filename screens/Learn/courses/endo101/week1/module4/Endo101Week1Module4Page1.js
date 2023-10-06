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
                          What is endometriosis?
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          In the next 12 weeks, we are going to go into depth
                          about many aspects of endometriosis but we want to
                          start by answering a few of your questions.
                          {'\u000A'}
                          {'\u000A'}
                          Endometriosis happens when body tissue similar to but
                          different than the lining of the uterus grows outside
                          the uterus and in other areas of the body. When this
                          tissue grows in other areas of the body, it can cause
                          a lot of inflammation and pain. Because that tissue
                          isn’t supposed to be outside of the uterus, it can
                          attach to and harm other organs in the body—sometimes
                          it can even cause permanent scarring.
                          {'\u000A'}
                          {'\u000A'}
                          According to the 2021 International Endometrosis
                          Working Group, endometriosis is defined as “a
                          systemic, inflammatory disease characterized at
                          surgery by the presence of endometrium-like tissue
                          found outside the uterus, usually with an associated
                          inflammatory process. It is a spectrum disease with a
                          variety of subtypes and clinical presentations, and
                          pain, inflammation, infertility, development of
                          endometriomas (“chocolate cysts”), fibrosis, formation
                          of adhesions (fibrous bands of dense tissue), GI and
                          other organ dysfunction, and much more are common with
                          endometriosis.”
                          {'\u000A'}
                          {'\u000A'}
                          The disease is far more than merely a “condition of
                          menstruation” or simple, so-called “killer cramps” as
                          it is often mislabeled. Despite being among the most
                          common of diseases, persistent myths, misinformation
                          and deficient health literacy continue to enshroud
                          endometriosis – even by the most well-intentioned
                          sources – often resulting in poor information systems
                          and continued lack of effective care.
                          {'\u000A'}
                          {'\u000A'}
                          Endometriosis gets its name from the word
                          “endometrium,” the tissue that normally lines the
                          uterus or womb. It is a tricky word to say and is
                          pronounced like “en - doh - mee - tree - oh - suhs.”
                          It is a bit of a mouthful, so many people like to use
                          a shorthand term – “Endo”! Just be careful when
                          talking with people who are unfamiliar with
                          endometriosis because they might not know the term
                          “Endo.”
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
                              navigation.navigate('Endo101Week1Module4Page2');
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
