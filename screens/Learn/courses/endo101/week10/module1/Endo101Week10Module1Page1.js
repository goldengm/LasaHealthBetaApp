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
                        Introduction
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: theme.SIZES.BASE * 1.5,
                      }}>
                      <Text style={{fontSize: theme.SIZES.B1}}>
                        Endometriosis can impact people of all ages, but the
                        symptoms and treatments might look a little different
                        depending on your life stage. This week, we are going to
                        explore the life stages, and what endometriosis looks
                        like during each of those stages.
                        {'\u000A'}
                        {'\u000A'}
                        You know your body best, which means you know what will
                        work best for you.
                        {'\u000A'}
                        {'\u000A'}
                        First, let’s review your goals and your motivational
                        statement!
                        {'\u000A'}
                      </Text>

                      <View style={{alignItems: 'center'}}>
                        <Text
                          style={{
                            fontSize: theme.SIZES.B1,
                            fontWeight: 'bold',
                          }}>
                          My Goals
                        </Text>
                      </View>
                      <View style={{marginLeft: theme.SIZES.BASE * 0.5}}>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          1.{' '}
                          {this.props.endoCourse.week1.module2Q3GoalsList &&
                            this.props.endoCourse.week1.module2Q3GoalsList[0]}
                          ,
                        </Text>

                        <Text style={{fontSize: theme.SIZES.B1}}>
                          2.{' '}
                          {this.props.endoCourse.week1.module2Q3GoalsList &&
                            this.props.endoCourse.week1.module2Q3GoalsList[1]}
                          ,
                        </Text>
                        <Text style={{fontSize: theme.SIZES.B1}}>
                          3.{' '}
                          {this.props.endoCourse.week1.module2Q3GoalsList &&
                            this.props.endoCourse.week1.module2Q3GoalsList[2]}
                          {'\u000A'}
                        </Text>
                      </View>

                      <View style={{alignItems: 'center'}}>
                        <Text
                          style={{
                            fontSize: theme.SIZES.B1,
                            fontWeight: 'bold',
                          }}>
                          Why
                        </Text>
                      </View>
                      <View
                        style={{
                          marginLeft: theme.SIZES.BASE * 0.5,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: theme.SIZES.B1,
                            fontStyle: 'italic',
                          }}>
                          "{this.props.endoCourse.week1.module3Q1Why}"
                        </Text>
                      </View>
                      <Text style={{fontSize: theme.SIZES.B1}}>
                        {'\u000A'}
                        Are you feeling ready? Let’s go!
                        {'\u000A'}
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
                            navigation.navigate('Endo101Week10Module1Page2');
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
