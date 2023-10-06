import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {MixpanelInstance} from '../../../../../../shared/UsageAnalyticsUtils';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {updateEndo101Week3ProgressAction} from '../../../../../../redux/actions/learnActions';
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
                        Tracking
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: theme.SIZES.BASE * 1.5,
                      }}>
                      <Text
                        style={{
                          fontSize: theme.SIZES.B1,
                        }}>
                        Once you start tracking, you'll have access to valuable
                        information on the analytics page, including:
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          width: width - theme.SIZES.BASE * 6,
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
                          Menstrual cycle predictions and insights
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          width: width - theme.SIZES.BASE * 6,
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
                          Symptom trends and changes over time
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          width: width - theme.SIZES.BASE * 6,
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
                          Correlations between symptoms and behaviors
                        </Text>
                      </View>

                      {/* 
                        <Text
                        style={{
                          fontSize: theme.SIZES.B1,
                          marginHorizontal: theme.SIZES.BASE,
                        }}
                      >
                        ● Menstrual cycle predictions and insights
                        {"\u000A"}● Symptom trends and changes over time
                        {"\u000A"}● Correlations between symptoms and behaviors
                        {"\u000A"}
                      </Text> */}

                      <Text
                        style={{
                          fontSize: theme.SIZES.B1,
                          marginHorizontal: theme.SIZES.BASE,
                          fontStyle: 'italic',
                        }}>
                        {'\u000A'}
                        "When you first get diagnosed, you don't realize that
                        even the smallest things influence each other. But as
                        I've been tracking my health, I've been able to find
                        connections and learn more about my body" - Elvira
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
                            this.mixpanel.track('endo101_course_progress', {
                              week_num: 3,
                              module_num: 6,
                            });
                            Promise.resolve()
                              .then(() => {
                                return this.props.dispatch(
                                  updateEndo101Week3ProgressAction(6),
                                );
                              })
                              .then(() =>
                                navigation.navigate('Endo101Week3Screen'),
                              );
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
