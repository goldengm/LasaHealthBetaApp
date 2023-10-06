import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button, Input} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {updateEndo101Week12Module2Q4Action} from '../../../../../../redux/actions/learnActions';
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
  };

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
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
                        paddingTop: theme.SIZES.BASE * 2,
                        marginBottom: theme.SIZES.BASE,
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
                        Value-based living
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: theme.SIZES.BASE * 0.5,
                      }}>
                      <View
                        style={{
                          paddingHorizontal: theme.SIZES.BASE,
                        }}>
                        <Text
                          style={{
                            fontSize: theme.SIZES.B1,
                            // marginLeft: theme.SIZES.BASE,
                            // fontStyle: 'italic',
                          }}>
                          Understanding what your values are and being able to
                          connect with those values can make your life more
                          meaningful. It can lead to a happy and fulfilling
                          life. It’s important to regularly take time to decide
                          what qualities, standards, and beliefs you want and
                          have in life. These values can influence the decisions
                          and plans we make.
                          {'\u000A'}
                          {'\u000A'}
                          Recognizing that health is one of your core values can
                          lead you to prioritize your health. Deciding that
                          family is one of your values may influence you to
                          spend more time with them. Some common examples of
                          values are: family, health, work, religion, hobbies,
                          honesty, friendship, creativity, etc.
                          {'\u000A'}
                          {'\u000A'}
                          Take a minute to think about what things you value in
                          life and how you can make them priorities.
                          {'\u000A'}
                          {'\u000A'}
                          Make a list of things you value below:
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
                                updateEndo101Week12Module2Q4Action(value),
                              );
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
                              if (this.state.correctAnswer) {
                                navigation.navigate(
                                  'Endo101Week12Module2Page6',
                                );
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
