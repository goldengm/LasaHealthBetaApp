import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {updateEndo101Week9Module6Q4Action} from '../../../../../../redux/actions/learnActions';
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
                        Which of the following is NOT a warning of a potential
                        scam product?
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: theme.SIZES.BASE * 0.5,
                      }}>
                      <View
                        style={{
                          alignContent: 'center',
                          alignItems: 'center',
                          marginVertical: theme.SIZES.BASE,
                          marginBottom: 0,
                        }}>
                        <Button
                          testID="option1Button"
                          style={{
                            ...styles.mutedButton,

                            width: width - theme.SIZES.BASE * 4,
                            height: theme.SIZES.BASE * 5,
                            backgroundColor:
                              this.state.selectedIndex == 0
                                ? theme.COLORS.TEXT3
                                : theme.COLORS.BACKGROUND2,
                          }}
                          containerStyle={styles.mutedButton.borderRadius}
                          onPress={() => {
                            this.setCorrectAnswer(false);
                            this.setWrongAnswer(true);

                            if (this.state.selectedIndex <= -1) {
                              this.props.dispatch(
                                updateEndo101Week9Module6Q4Action(
                                  'An Instagram influencer recommends a product and says you can get 10% off with their code',
                                ),
                              );
                            }

                            this.setSelectedIndex(0);
                          }}
                          title={
                            'An Instagram influencer recommends a product and says you can get 10% off with their code'
                          }></Button>
                      </View>

                      <View
                        style={{
                          alignContent: 'center',
                          alignItems: 'center',
                          marginVertical: theme.SIZES.BASE,
                          marginBottom: 0,
                        }}>
                        <Button
                          testID="option2Button"
                          style={{
                            ...styles.mutedButton,
                            width: width - theme.SIZES.BASE * 4,
                            height: theme.SIZES.BASE * 5,
                            backgroundColor:
                              this.state.selectedIndex == 1
                                ? theme.COLORS.TEXT3
                                : theme.COLORS.BACKGROUND2,
                          }}
                          containerStyle={styles.mutedButton.borderRadius}
                          onPress={() => {
                            this.setCorrectAnswer(false);
                            this.setWrongAnswer(true);

                            if (this.state.selectedIndex <= -1) {
                              this.props.dispatch(
                                updateEndo101Week9Module6Q4Action(
                                  'An expensive patch claiming to magically eliminate menstrual cramps',
                                ),
                              );
                            }

                            this.setSelectedIndex(1);
                          }}
                          title={
                            'An expensive patch claiming to magically eliminate menstrual cramps'
                          }></Button>
                      </View>

                      <View
                        style={{
                          alignContent: 'center',
                          alignItems: 'center',
                          marginVertical: theme.SIZES.BASE,
                          marginBottom: 0,
                        }}>
                        <Button
                          testID="option3Button"
                          style={{
                            ...styles.mutedButton,
                            width: width - theme.SIZES.BASE * 4,
                            height: theme.SIZES.BASE * 5,
                            backgroundColor:
                              this.state.selectedIndex == 2
                                ? theme.COLORS.TEXT3
                                : theme.COLORS.BACKGROUND2,
                          }}
                          containerStyle={styles.mutedButton.borderRadius}
                          onPress={() => {
                            this.setCorrectAnswer(false);
                            this.setWrongAnswer(true);

                            if (this.state.selectedIndex <= -1) {
                              this.props.dispatch(
                                updateEndo101Week9Module6Q4Action(
                                  'A supplement claiming to reverse endometriosis and cure other serious conditions',
                                ),
                              );
                            }
                            this.setSelectedIndex(2);
                          }}
                          title={
                            'A supplement claiming to reverse endometriosis and cure other serious conditions'
                          }></Button>
                      </View>

                      <View
                        style={{
                          alignContent: 'center',
                          alignItems: 'center',
                          marginVertical: theme.SIZES.BASE,
                          marginBottom: 0,
                        }}>
                        <Button
                          testID="option4Button"
                          style={{
                            ...styles.mutedButton,
                            width: width - theme.SIZES.BASE * 4,
                            height: theme.SIZES.BASE * 5,
                            backgroundColor:
                              this.state.selectedIndex == 3
                                ? theme.COLORS.TEXT3
                                : theme.COLORS.BACKGROUND2,
                          }}
                          containerStyle={styles.mutedButton.borderRadius}
                          onPress={() => {
                            this.setCorrectAnswer(true);
                            this.setWrongAnswer(false);

                            if (this.state.selectedIndex <= -1) {
                              this.props.dispatch(
                                updateEndo101Week9Module6Q4Action(
                                  'A friend tells you about a product that helped them, and your doctor says it would be safe to try',
                                ),
                              );
                            }
                            this.setSelectedIndex(3);
                          }}
                          title={
                            'A friend tells you about a product that helped them, and your doctor says it would be safe to try'
                          }></Button>
                      </View>

                      {this.state.wrongAnswer && (
                        <View
                          style={{
                            flex: 1,
                            alignContent: 'center',
                            alignItems: 'center',
                            // marginVertical: theme.SIZES.BASE,
                          }}>
                          <Text
                            style={{
                              color: theme.COLORS.ERROR1,
                            }}>
                            Incorrect
                          </Text>
                        </View>
                      )}

                      {this.state.correctAnswer && (
                        <View
                          style={{
                            flex: 1,
                            alignContent: 'center',
                            alignItems: 'center',
                            // marginTop: theme.SIZES.BASE,
                          }}>
                          <Text
                            style={{
                              color: theme.COLORS.PRIMARY1,
                            }}>
                            Correct! A friend tells you about a product that
                            helped them, and your doctor says it would be safe
                            to try
                          </Text>
                        </View>
                      )}

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
                            if (this.state.correctAnswer) {
                              Promise.resolve()
                                // .then(() => {
                                //   return this.props.dispatch(
                                //     updateEndo101Week4ProgressAction(9)
                                //   );
                                // })
                                // .then(() => {
                                //   return this.props.dispatch(
                                //     updateEndo101ProgressAction(4)
                                //   );
                                // })
                                .then(() =>
                                  navigation.navigate(
                                    'Endo101Week9Module6Page5',
                                  ),
                                );
                            }
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
