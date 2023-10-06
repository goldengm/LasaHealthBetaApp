import React from 'react';
import {ScrollView, Dimensions, Image, View} from 'react-native';
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
                        Mode of Administration
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
                        <Image
                          style={{
                            ...styles.onboardingHeaderImage,
                            height: 210,
                            // marginHorizontal: theme.SIZES.BASE * 0.5,
                          }}
                          source={Images.learn.endo101Course.bcImplant1}
                        />

                        <Text
                          style={{
                            fontSize: theme.SIZES.B1,
                            // marginLeft: theme.SIZES.BASE,
                            // fontStyle: "italic",
                          }}>
                          Subdermal Implant: A small plastic rod that is
                          inserted under the skin in your upper arm. To get the
                          implant inserted, your doctor will give you a numbing
                          shot and then make a small incision to insert the rod.
                          Your arm might be sore for a day or two, but the
                          implant can stay inserted for up to three years.
                          {'\u000A'}
                        </Text>

                        <Image
                          style={{
                            ...styles.onboardingHeaderImage,
                            height: 210,
                            // marginHorizontal: theme.SIZES.BASE * 0.5,
                          }}
                          source={Images.learn.endo101Course.bcIUD1}
                        />

                        <Text
                          style={{
                            fontSize: theme.SIZES.B1,
                            // marginLeft: theme.SIZES.BASE,
                            // fontStyle: "italic",
                          }}>
                          {'\u000A'}
                          Intrauterine Device (IUD): A device inserted by a
                          medical professional into the uterus. An IUD has been
                          shown to reduce heavy menstrual bleeding. An IUD can
                          help reduce period pain and period symptoms caused by
                          endometriosis. An IUD lasts for a few years, although
                          the number of years depends on the type of IUD. It
                          doesn’t need any daily, weekly, or even monthly
                          upkeep. An IUD also serves as a contraceptive.
                          {'\u000A'}
                          {'\u000A'}
                          Injection: An injection into your upper arm that
                          releases hormones into your bloodstream. The injection
                          is needed every three months.
                          {'\u000A'}
                        </Text>

                        <Image
                          style={{
                            ...styles.onboardingHeaderImage,
                            height: 210,
                            // marginHorizontal: theme.SIZES.BASE * 0.5,
                          }}
                          source={Images.learn.endo101Course.bcPatch1}
                        />

                        <Text
                          style={{
                            fontSize: theme.SIZES.B1,
                            // marginLeft: theme.SIZES.BASE,
                            // fontStyle: "italic",
                          }}>
                          {'\u000A'}
                          Transdermal Patch: A sticky patch that you put on your
                          skin, typically on the upper body, abdomen, bottom,
                          lower back, or your arm. You can choose where to place
                          your patch, but it is best to place the patch on an
                          area of skin that won’t be rubbed often. The patch
                          needs to be replaced every week. If you have sensitive
                          skin, this might not be a good option for you since
                          some people report skin irritation. Placing the patch
                          in a different place each time can help.
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
                              // if (this.state.correctAnswer) {
                              navigation.navigate('Endo101Week6Module2Page6');
                              // }
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
