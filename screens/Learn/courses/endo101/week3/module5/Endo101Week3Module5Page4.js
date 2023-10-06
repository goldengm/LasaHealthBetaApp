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
                          Why is endometriosis painful?
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          Patients can experience many different types of
                          endometriosis pains because there are several
                          explanations for pain associated with endometriosis.
                          For example:{'\u000A'}
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
                            Endometriosis tissue is somewhat similar to the
                            menstrual tissue that lines the uterus; however,
                            there are many differences. Your menstrual tissue
                            grows as your hormones fluctuate throughout the
                            month and then sheds during your period.
                            Endometriosis tissue may get inflamed and bleed
                            during your period. However, it does not always
                            respond to hormones in the same way as your
                            menstrual tissue. Endometriosis can make its own
                            hormones, specifically estrogen. Unlike your
                            menstrual tissue, there is no way for the blood or
                            tissue to leave your body. This can cause the tissue
                            to build up over time - causing increasing pain and
                            inflammation. {'\u000A'}
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
                            Over time, endometriosis tissue can build up scar
                            tissue and cause organs in the pelvis to stick
                            together. To accommodate different movements, organs
                            in the pelvic cavity usually move easily. When the
                            organs start to stick together, this can create pain
                            when moving or sitting in different positions.
                            {'\u000A'}
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
                            When endometriosis patches occur on nerves, even a
                            tiny amount can cause massive pain. Some patches of
                            endometriosis grow new nerves and are connected to
                            the central nervous system. Over time, these lesions
                            can become increasingly sensitive to chemicals in
                            the pelvic fluid that cause pain.
                          </Text>
                        </View>

                        {/* 
                        <Text
                          style={{
                            fontSize: theme.SIZES.B1,
                            marginLeft: theme.SIZES.BASE,
                          }}
                        >
                          {"\u000A"}● Endometriosis tissue is somewhat similar
                          to the menstrual tissue that lines the uterus;
                          however, there are some differences. Your menstrual
                          tissue grows as your hormones fluctuate throughout the
                          month and then sheds during your period. Endometriosis
                          tissue may get inflamed and bleed during your period.
                          However, it does not always respond to hormones in the
                          same way as your menstrual tissue. Endometriosis can
                          make its own hormones, specifically estrogen. Unlike
                          your menstrual tissue, there is no way for the blood
                          or tissue to leave your body. This can cause the
                          tissue to build up over time - causing increasing pain
                          and inflammation.
                          {"\u000A"}
                          {"\u000A"}● Over time, endometriosis tissue can build
                          up scar tissue and cause organs in the pelvis to stick
                          together. To accommodate different movements, organs
                          in the pelvic cavity usually move easily. When the
                          organs start to stick together, this can create pain
                          when moving or sitting in different positions.
                          {"\u000A"}
                          {"\u000A"}● When endometriosis patches occur on
                          nerves, even a tiny amount can cause massive pain.
                          Some patches of endometriosis grow new nerves and are
                          connected to the central nervous system. Over time,
                          these lesions can become increasingly sensitive to
                          chemicals in the pelvic fluid that cause pain.
                        </Text> */}

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
                              // Promise.resolve()
                              //   .then(() => {
                              //     return this.props.dispatch(
                              //       updateEndo101Week1ProgressAction(5)
                              //     );
                              //   })
                              //   .then(() =>
                              navigation.navigate('Endo101Week3Module5Page5');
                              // );
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
