import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {generateDataTable} from '../../../../../../shared/TextUtils';
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
                          Severity
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          Monitoring your pain over time is critical to assess
                          whether your endometriosis pain improves or worsens.
                          However, it can be difficult to measure pain.
                          Individuals with chronic pain have a pain threshold
                          different from others and often find traditional pain
                          scales confusing. The Mankoski Pain Scale is designed
                          specifically for chronic pain patients. It is a great
                          tool to ensure that your pain is adequately addressed
                          and managed.
                          {'\u000A'}
                        </Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginBottom: theme.SIZES.BASE,
                          }}>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginLeft: theme.SIZES.BASE,
                              fontWeight: 'bold',
                              color: theme.COLORS.PRIMARY2,
                            }}>
                            Mankoski Pain Scale
                          </Text>
                        </View>

                        {generateDataTable([
                          ['0', 'Pain free. ', 'No medication is needed.'],
                          [
                            '1',
                            'Very minor annoyance - occasional minor twinges.',
                            'No medication is needed.',
                          ],
                          [
                            '2',
                            'Minor annoyance - occasional strong twinges.',
                            'No medication is needed.',
                          ],
                          [
                            '3',
                            'Annoying enough to be distracting.',
                            'Mild painkillers are effective (ie. aspirin, ibuprofen).',
                          ],
                          [
                            '4',
                            'Can be ignored if you are really involved in your work, but still distracting.',
                            'Mild painkillers are effective for 3-4 hours.',
                          ],
                          [
                            '5',
                            "Can't be ignored for more than 30 minutes.",
                            'Mild painkillers are effective for 3-4 hours.',
                          ],
                          [
                            '6',
                            "Can't be ignored for any length of time, but you can still go to work and participate in social activities.",
                            'Stronger painkillers reduce pain for 3-4 hours (ie. Codeine, Vicodin).',
                          ],
                          [
                            '7',
                            'Makes it difficult to concentrate and interferes with sleep. You can still function with effort. Stronger painkillers are only partially effective.',
                            'The strongest painkillers relieve pain (ie. Oxycontin, Morphine).',
                          ],
                          [
                            '8',
                            'Physical activity is severely limited. You can read and converse with effort. Nausea and dizziness set in as factors of pain.',
                            'Stronger painkillers are minimally effective and the strongest painkillers reduce pain for 3-4 hours.',
                          ],
                          [
                            '9',
                            'Unable to speak – crying out or moaning uncontrollably – near delirium.',
                            'The strongest painkillers are only partially effective.',
                          ],
                          [
                            '10',
                            'Unconscious. Pain makes you pass out.',
                            'The strongest painkillers are only partially effective.',
                          ],
                        ])}

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}Some people prefer to use their own words to
                          describe their pain severity instead of a pain scale.
                          There is no right or wrong way to describe your pain.
                          However, it is crucial to honestly communicate the
                          severity of your pain with your care provider so that
                          they understand how to best help you.
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
                              // Promise.resolve()
                              //   .then(() => {
                              //     return this.props.dispatch(
                              //       updateEndo101Week1ProgressAction(5)
                              //     );
                              //   })
                              //   .then(() =>
                              navigation.navigate('Endo101Week3Module5Page6');
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
