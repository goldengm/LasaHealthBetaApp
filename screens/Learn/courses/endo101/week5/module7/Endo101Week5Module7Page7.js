import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text, Slider} from 'react-native-elements';
import {MixpanelInstance} from '../../../../../../shared/UsageAnalyticsUtils';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {GardenContext} from '../../../../../../garden/GardenProvider';
import {connect} from 'react-redux';
import {
  updateEndo101ProgressAction,
  updateEndo101Week5ProgressAction,
  updateEndo101Week5Module7Q11Action,
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
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;

    this.state = {
      slider1Updated: false,
      sliderValue: -1,
    };
  }

  setSlider1Updated = slider1UpdatedP => {
    this.setState({slider1Updated: slider1UpdatedP});
  };

  setSliderValue = sliderValueP => {
    this.setState({sliderValue: sliderValueP});
  };

  render() {
    const {navigation, route} = this.props;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={0}
        customImageName={Images.ui.BackgroundGradient2}>
        <View style={{flex: 1}}>
          <GardenContext.Consumer>
            {garden => (
              <View
                style={{
                  flex: 1,
                  alignContent: 'center',
                  alignItems: 'center',
                  // borderTopLeftRadius: theme.SIZES.HEADERRADIUS,
                  // borderTopRightRadius: theme.SIZES.HEADERRADIUS,
                  // borderRadius: theme.SIZES.HEADERRADIUS,
                  // backgroundColor: theme.COLORS.WHITE,
                  marginHorizontal: theme.SIZES.BASE,
                  // marginBottom: theme.SIZES.BASE,
                  elevation: 2,
                }}>
                <View
                  style={{
                    flex: 1,
                    alignContent: 'center',
                    alignItems: 'center',
                    // borderTopLeftRadius: theme.SIZES.HEADERRADIUS,
                    // borderTopRightRadius: theme.SIZES.HEADERRADIUS,
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
                      // alignContent: "center",
                      // alignItems: "center",
                      // ...styles.registerContainer,
                    }}
                    behavior="padding"
                    enabled={iosPlatform()}>
                    <ScrollView
                      testID="pageScrollview"
                      showsVerticalScrollIndicator={false}
                      // contentContainerStyle={{ width }}
                      style={
                        {
                          // borderTopLeftRadius: theme.SIZES.HEADERRADIUS,
                          // borderTopRightRadius: theme.SIZES.HEADERRADIUS,
                          // backgroundColor: theme.COLORS.WHITE,
                          // borderRadius: theme.SIZES.HEADERRADIUS,
                          // elevation: 2,
                        }
                      }>
                      <View
                        style={{
                          // borderTopLeftRadius: theme.SIZES.HEADERRADIUS,
                          // borderTopRightRadius: theme.SIZES.HEADERRADIUS,
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
                                // ...styles.boldTitle,
                                color: theme.COLORS.TEXT1,
                                fontSize: theme.SIZES.H5,
                                fontWeight: '600',
                                // textShadowColor: theme.COLORS.DARK_BLACK,
                                // textShadowRadius: 20,
                                textAlign: 'center',
                              }}>
                              On a scale of 1-5, how would you rate this week’s
                              module?
                            </Text>
                          </View>
                          <View
                            style={{
                              flex: 1,
                              marginHorizontal: theme.SIZES.BASE * 0.5,
                            }}>
                            <View
                              style={{
                                flex: 1,
                                marginHorizontal: theme.SIZES.BASE,
                                marginBottom: theme.SIZES.BASE,
                              }}>
                              <View
                                style={{
                                  position: 'absolute',
                                  flexDirection: 'row',
                                  // marginHorizontal: theme.SIZES.BASE,
                                  // marginBottom: 50,
                                }}>
                                <View
                                  style={{
                                    flex: 1,
                                    alignItems: 'flex-start',
                                    // marginBottom: 20,
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: theme.SIZES.C2,
                                      fontFamily: theme.FONTS.TEXT,
                                    }}>
                                    Poor
                                  </Text>
                                </View>
                                <View
                                  style={{
                                    flex: 1,
                                    alignItems: 'flex-end',
                                    // marginTop: 20,
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: theme.SIZES.C2,
                                      fontFamily: theme.FONTS.TEXT,
                                    }}>
                                    Excellent
                                  </Text>
                                </View>
                              </View>
                              <Slider
                                // minimumValue={0}
                                // maximumValue={5}
                                // value={currentSeverity}
                                // tapToSeek={true}
                                allowTouchTrack={true}
                                onSlidingComplete={sliderVal => {
                                  this.setSlider1Updated(true);
                                  this.setSliderValue(sliderVal);
                                  this.props.dispatch(
                                    updateEndo101Week5Module7Q11Action(
                                      sliderVal,
                                    ),
                                  );
                                }}
                                thumbTintColor={theme.COLORS.PRIMARY2}
                                minimumTrackTintColor={theme.COLORS.PRIMARY2}
                                maximumTrackTintColor={theme.COLORS.BACKGROUND3}
                                // thumbStyle={{
                                //   borderColor: theme.COLORS.DEFAULT,
                                //   width: theme.SIZES.BASE * 2.5,
                                //   height: theme.SIZES.BASE * 2.5,
                                //   borderRadius: theme.SIZES.BASE * 2.5,
                                //   fontFamily: theme.FONTS.TEXT,
                                // }}
                                // thumbStyle={{ width: 10, height: 10 }}
                                style={{marginTop: 18}}
                                trackStyle={{height: 16, borderRadius: 20}}
                                // trackStyle={{ height: 10 }}
                              />

                              <View
                                style={{
                                  // position: "absolute",
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  marginHorizontal: theme.SIZES.BASE,
                                  // marginTop: 50,
                                }}>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}></Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  1
                                </Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}></Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  2
                                </Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}></Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  3
                                </Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}></Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  4
                                </Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}></Text>
                                <Text
                                  style={{
                                    fontSize: theme.SIZES.C2,
                                    fontFamily: theme.FONTS.TEXT,
                                  }}>
                                  5
                                </Text>
                              </View>
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
                                  if (this.state.slider1Updated) {
                                    this.mixpanel.track(
                                      'endo101_course_progress',
                                      {
                                        week_num: 5,
                                        module_num: 7,
                                      },
                                    );
                                    this.mixpanel.track(
                                      'endo101_course_week_rating',
                                      {
                                        week_num: 5,
                                        rating: this.state.sliderValue,
                                      },
                                    );
                                    Promise.resolve()
                                      .then(() => {
                                        if (
                                          this.props.endoCourse.week5
                                            .weekProgress < 7
                                        ) {
                                          return garden.addSeedsToPlayerInventory(
                                            this.props.dispatch,
                                            30,
                                          );
                                        } else {
                                          return null;
                                        }
                                      })
                                      .then(() => {
                                        return this.props.dispatch(
                                          updateEndo101Week5ProgressAction(7),
                                        );
                                      })
                                      .then(() => {
                                        return this.props.dispatch(
                                          updateEndo101ProgressAction(5),
                                        );
                                      })

                                      .then(() =>
                                        navigation.navigate(
                                          'Endo101Week5Screen',
                                        ),
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
                {/* <Footer navigation={navigation} tabName="Learn" /> */}
              </View>
            )}
          </GardenContext.Consumer>
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
