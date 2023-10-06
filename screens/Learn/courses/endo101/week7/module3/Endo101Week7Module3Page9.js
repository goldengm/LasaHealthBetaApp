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
                          Preparing for Pelvic Floor Therapy
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
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
                            3)
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            After evaluating your needs, they will determine a
                            plan to move forward. They will explain to you what
                            they’ve found during the examination and what they
                            think can help. Here are some common activities done
                            in pelvic floor therapy:
                            {'\u000A'}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 8,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE * 2.5,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Stretches - The PT may have you do some stretches.
                            Stretching can help the muscles to become flexible.
                            Because endometriosis tightens the muscles, pelvic
                            floor stretches can be a great way to reduce pain.
                            {'\u000A'}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 8,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE * 2.5,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Massage - Massaging will help the muscles relax. The
                            physical therapist could do some massaging during
                            the appointment or may ask you to do it at home.
                            It’s something you can do by yourself or with a
                            partner.
                            {'\u000A'}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 8,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE * 2.5,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Myofascial release - Myofascial release normally
                            happens during a massage. A physical therapist will
                            find your trigger points in the myofascial tissue.
                            They will then apply pressure to these points. This
                            can be done internally or externally.
                            {'\u000A'}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 8,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE * 2.5,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Relaxing/Breathing - Your diaphragm and pelvic floor
                            are closely related. Your diaphragm is the muscle
                            that sits under your rib cage. When you breathe,
                            your diaphragm expands, pushing the organs in your
                            abdomen down and creating pressure on the pelvic
                            floor. This stretches the pelvic floor out.
                            {'\u000A'}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 8,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE * 2.5,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            Exercise programs - Exercise is an important part of
                            keeping us healthy. A physical therapist may assign
                            an exercise program to help improve mobility and
                            reduce cramping. We’ll talk a little more about
                            exercise in the next section.
                            {'\u000A'}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            width: width - theme.SIZES.BASE * 8,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B2,
                              marginLeft: theme.SIZES.BASE * 2.5,
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            ●
                          </Text>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE * 0.5,
                            }}>
                            High-Intensity Laser Therapy - A high-intensity
                            laser is used to break up scar tissue. The laser
                            will soften scar tissue caused by endometriosis.
                            Studies have shown that it is an effective method of
                            pain alleviation and adhesion reduction. Many women
                            have reported it improving their quality of life.
                            {'\u000A'}
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
                              navigation.navigate('Endo101Week7Module3Page10');
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
