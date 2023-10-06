import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {MixpanelInstance} from '../../../../../../shared/UsageAnalyticsUtils';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {updateEndo101Week11ProgressAction} from '../../../../../../redux/actions/learnActions';
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
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;

    this.state = {
      correctAnswer: false,
      wrongAnswer: false,
      selectedIndex: -1,
    };
  }

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
                        Overview.
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: theme.SIZES.BASE * 1.5,
                      }}>
                      <Text style={{fontSize: theme.SIZES.B1}}>
                        People with endometriosis might also be at a higher risk
                        for several conditions, including:
                        {'\u000A'}
                        {'\u000A'}
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
                          Gynecological conditions like adenomyosis, polyps, and
                          fibroids Gastrointestinal like irritable bowel syndome
                          (IBS), inflammatory bowel disease, and Celiac disease
                          Autoimmune diseases like interstitial cystitis,
                          systemic lupus erythematosus, Sjögren’s syndome,
                          rheumatoid arthritis, thryoid disorders, and multiple
                          sclerosis Allergies, asthma, and chemical
                          sensitivities Chronic fatigue syndrome, an extreme
                          fatigue condition Fibromyalgia, a widespread
                          musculoskeletal pain that often includes fatigue and
                          mood issues Certain cancers, such as ovarian and
                          breast cancer.
                        </Text>
                      </View>

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
                          Everyone’s health journey is unique, and we can’t go
                          through every possible condition in depth. But we will
                          talk about some of the most common conditions and
                          their symptoms. When making a treatment plan, it is
                          important to ensure there isn’t a second condition
                          also causing the symptoms.
                        </Text>
                      </View>

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
                          If you have symptoms or a family history of any of
                          these conditions, talk to your doctor. They will be
                          able to help you understand your risk and recommend
                          next steps for diagnosis. Many of these conditionis
                          are detectable through a blood test or ultrasound, but
                          others might have a more complicated diagnostic
                          process.
                        </Text>
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
                            // if (this.state.selectedIndex >= 0) {
                            this.mixpanel.track('endo101_course_progress', {
                              week_num: 11,
                              module_num: 1,
                            });
                            Promise.resolve()
                              .then(() => {
                                return this.props.dispatch(
                                  updateEndo101Week11ProgressAction(1),
                                );
                              })
                              .then(() =>
                                navigation.navigate('Endo101Week11Screen'),
                              );
                            // }
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
