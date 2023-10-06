import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images, utils} from '../../../../../../constants';
import {Button, Select} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {updateEndo101Week3Module5Q2Action} from '../../../../../../redux/actions/learnActions';
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
    singleOptionPickerVisible: false,

    singleOptionPickerList: utils.numberList,
    singleSelectedOption: -1,
  };

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
  };

  setWrongAnswer = wrongAnswerP => {
    this.setState({wrongAnswer: wrongAnswerP});
  };

  setSingleOptionPickerVisible = async singleOptionPickerVisibleP => {
    Promise.resolve()
      .then(() =>
        this.setState({singleOptionPickerVisible: singleOptionPickerVisibleP}),
      )
      .catch(error => {
        console.log(error);
        // An error happened.
      });
    // .then(() => this.syncUserResponseContainerHeight());
    // this.setState({ singleOptionPickerVisible: singleOptionPickerVisibleP });
  };

  setSingleOptionPickerList = async singleOptionPickerListP => {
    this.setState({singleOptionPickerList: singleOptionPickerListP});
  };

  setSingleSelectedOption = async singleSelectedOptionP => {
    this.setState({singleSelectedOption: singleSelectedOptionP});
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
                          At what age did you start experiencing symptoms?
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <View
                          style={{
                            // flex: 1,
                            // flexDirection: "row",
                            // flexWrap: "wrap",
                            // alignContent: "flex-end",
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 0,
                            paddingTop: 0,
                            // backgroundColor: theme.COLORS.MELBLUE,
                            // height: this.activeItemHeight,
                          }}>
                          <Select
                            customPrompt="Select an option"
                            defaultIndex={1}
                            options={this.state.singleOptionPickerList}
                            // customContainerStyle={{
                            //   marginTop: height - 300,
                            // }}
                            // customListItemStyle={{
                            //   height: 30,
                            //   paddingVertical: 0,
                            // }}
                            // customTitleStyle={{
                            //   alignItems: "center",
                            // }}
                            // style={{ ...styles.dropdown, width: 100 }}
                            customButtonStyle={{
                              // width: theme.SIZES.BASE * 9,
                              height: theme.SIZES.BASE * 3,
                              borderRadius: theme.SIZES.BASE,
                              shadowRadius: 0,
                              shadowOpacity: 0,
                              backgroundColor: theme.COLORS.PRIMARY2,
                              fontFamily: theme.FONTS.TEXT,
                              paddingHorizontal: theme.SIZES.BASE,
                            }}
                            customTextStyle={{
                              fontSize: 16,
                              // fontWeight: "300",
                            }}
                            onSelect={(ind, value) => {
                              this.setSingleSelectedOption(value);
                            }}
                          />
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
                              // Promise.resolve()
                              //   .then(() => {
                              //     return this.props.dispatch(
                              //       updateEndo101Week1ProgressAction(5)
                              //     );
                              //   })
                              //   .then(() =>
                              if (this.state.singleSelectedOption >= 0) {
                                this.props.dispatch(
                                  updateEndo101Week3Module5Q2Action(
                                    this.state.singleSelectedOption,
                                  ),
                                );
                                navigation.navigate('Endo101Week3Module5Page8');
                              }
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
