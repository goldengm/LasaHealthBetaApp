import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {
  updateEndo101Week4Module7Q6Action,
  updateEndo101Week4Module7Q7Action,
} from '../../../../../../redux/actions/learnActions';
import DatePicker from '../../../../../../components/DatePicker';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../../../../../shared/ScreenTemplateWrapper';
import {getOS} from '../../../../../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width} = Dimensions.get('screen');
const initialDateValue = new Date(1598051730000);
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

    selectedDate: initialDateValue,
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

  setSelectedDate = selectedDateP => {
    this.setState({selectedDate: selectedDateP});
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
                          Your Experience
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          When were you diagnosed with endometriosis?
                          {'\u000A'}
                        </Text>

                        <DatePicker
                          customButtonStyle={{
                            // width: theme.SIZES.BASE * 9,
                            height: theme.SIZES.BASE * 3,
                            paddingHorizontal: theme.SIZES.BASE,
                            borderRadius: theme.SIZES.BASE,
                            shadowRadius: 0,
                            shadowOpacity: 0,
                            backgroundColor: theme.COLORS.PRIMARY2,
                            fontFamily: theme.FONTS.TEXT,
                            fontSize: 16,
                            fontWeight: '700',
                            textAlign: 'center',
                          }}
                          customOnDateChange={value => {
                            this.setSelectedDate(value);
                          }}
                          // customDatePickerMode={this.state.customDatePickerMode}
                          currentDate={this.state.selectedDate}
                        />

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          {'\u000A'}At what point were you diagnosed with
                          endometriosis?
                        </Text>

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
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndex == 0
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week4Module7Q6Action(
                              //     "Yes, I have been diagnosed with endometriosis"
                              //   )
                              // );
                              this.setSelectedIndex(0);
                            }}
                            title={'After listening to your symptoms'}></Button>
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
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndex == 1
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "Unsure, but I think I might have endometriosis"
                              //   )
                              // );
                              this.setSelectedIndex(1);
                            }}
                            title={'After pelvic exam'}></Button>
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
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndex == 2
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "No, but I have a loved one with endometriosis"
                              //   )
                              // );
                              this.setSelectedIndex(2);
                            }}
                            title={'After abdominal ultrasound'}></Button>
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
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndex == 3
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "No, I’m just interested in learning more about endometriosis"
                              //   )
                              // );
                              this.setSelectedIndex(3);
                            }}
                            title={'After transvaginal ultrasound'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="option5Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndex == 4
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "No, I’m just interested in learning more about endometriosis"
                              //   )
                              // );
                              this.setSelectedIndex(4);
                            }}
                            title={'After laparoscopic surgery'}></Button>
                        </View>

                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            marginVertical: theme.SIZES.BASE,
                            marginBottom: 0,
                          }}>
                          <Button
                            testID="option6Button"
                            style={{
                              ...styles.mutedButton,
                              width: width - theme.SIZES.BASE * 4,
                              height: theme.SIZES.BASE * 4,
                              backgroundColor:
                                this.state.selectedIndex == 5
                                  ? theme.COLORS.TEXT3
                                  : theme.COLORS.BACKGROUND2,
                            }}
                            containerStyle={styles.mutedButton.borderRadius}
                            onPress={() => {
                              // this.props.dispatch(
                              //   updateEndo101Week1Module2Q1Action(
                              //     "No, I’m just interested in learning more about endometriosis"
                              //   )
                              // );
                              this.setSelectedIndex(5);
                            }}
                            title={'Other'}></Button>
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
                              if (this.state.selectedIndex >= 0) {
                                this.props.dispatch(
                                  updateEndo101Week4Module7Q6Action(
                                    this.state.selectedDate,
                                  ),
                                );
                                this.props.dispatch(
                                  updateEndo101Week4Module7Q7Action(
                                    this.state.selectedIndex,
                                  ),
                                );
                                navigation.navigate('Endo101Week4Module7Page3');
                              }
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
