import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button, Input} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {
  updateEndo101Week4Module8Q1Action,
  updateEndo101Week4Module8Q2Action,
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
                          Have you ever been dismissed or ignored by a medical
                          provider?
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        {/* <Text style={{ fontSize: theme.SIZES.B1 }}>
                          {"\u000A"}● Yes.
                          {"\u000A"}● We want you to know that you are not
                          alone. Many patients with endometriosis have also
                          experienced being dismissed or ignored by a medical
                          provider. For many people, hearing about the
                          experiences of others and sharing their experiences
                          can make them feel less alone.
                          {"\u000A"}● REFLECT: Take a minute to write about your
                          experience with being dismissed or ignored by your
                          care provider. [open-ended response]
                          {"\u000A"}● No
                          {"\u000A"}● We are glad you’ve found find a supportive
                          and validating care provider!
                        </Text> */}

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
                              this.props.dispatch(
                                updateEndo101Week4Module8Q1Action('Yes'),
                              );
                              this.setSelectedIndex(0);
                            }}
                            title={'Yes'}></Button>
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
                              this.props.dispatch(
                                updateEndo101Week4Module8Q1Action('No'),
                              );
                              this.setSelectedIndex(1);
                            }}
                            title={'No'}></Button>
                        </View>

                        {this.state.selectedIndex == 0 && (
                          <View>
                            <Text style={{fontSize: theme.SIZES.B1}}>
                              {'\u000A'}
                              We want you to know that you are not alone. Many
                              patients with endometriosis have also experienced
                              being dismissed or ignored by a medical provider.
                              For many people, hearing about the experiences of
                              others and sharing their experiences can make them
                              feel less alone.
                              {'\u000A'}
                              {'\u000A'}● REFLECT: Take a minute to write about
                              your experience with being dismissed or ignored by
                              your care provider.
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
                                  this.setCorrectAnswer(true);
                                  this.props.dispatch(
                                    updateEndo101Week4Module8Q2Action(value),
                                  );
                                }}
                              />
                            </View>
                          </View>
                        )}

                        {this.state.selectedIndex == 1 && (
                          <Text style={{fontSize: theme.SIZES.B1}}>
                            {'\u000A'}
                            We are glad you’ve found find a supportive and
                            validating care provider!
                          </Text>
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
                              if (
                                this.state.selectedIndex == 1 ||
                                this.state.correctAnswer
                              ) {
                                navigation.navigate('Endo101Week4Module8Page4');
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
