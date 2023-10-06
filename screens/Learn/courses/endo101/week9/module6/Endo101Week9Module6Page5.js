import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text, Slider} from 'react-native-elements';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {
  updateEndo101Week9Module6Q5Action,
  updateEndo101Week9Module6Q6Action,
  updateEndo101Week9Module6Q7Action,
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
    slider1Updated: false,
    slider2Updated: false,
    slider3Updated: false,
  };

  setSlider1Updated = slider1UpdatedP => {
    this.setState({slider1Updated: slider1UpdatedP});
  };

  setSlider2Updated = slider2UpdatedP => {
    this.setState({slider2Updated: slider2UpdatedP});
  };

  setSlider3Updated = slider3UpdatedP => {
    this.setState({slider3Updated: slider3UpdatedP});
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
                          Goal Confidence. At the beginning of the course, you
                          set three goals. On a scale of 1-5, how confident do
                          you feel in achieving these goals?
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H6,
                            fontWeight: '600',
                            textAlign: 'left',
                            marginBottom: theme.SIZES.BASE * 0.5,
                          }}>
                          1.{' '}
                          {this.props.endoCourse.week1.module2Q3GoalsList &&
                            this.props.endoCourse.week1.module2Q3GoalsList[0]}
                        </Text>

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
                                Not confident
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
                                Extremely confident
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
                              this.props.dispatch(
                                updateEndo101Week9Module6Q5Action(sliderVal),
                              );
                              // this.props.dispatch(
                              //   addTrackingLogStagingSeverityAction(
                              //     symptomObj,
                              //     sliderVal
                              //   )
                              // );
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

                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H6,
                            fontWeight: '600',
                            textAlign: 'left',
                            marginBottom: theme.SIZES.BASE * 0.5,
                          }}>
                          2.{' '}
                          {this.props.endoCourse.week1.module2Q3GoalsList &&
                            this.props.endoCourse.week1.module2Q3GoalsList[1]}
                        </Text>

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
                                Not confident
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
                                Extremely confident
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
                              this.setSlider2Updated(true);
                              this.props.dispatch(
                                updateEndo101Week9Module6Q6Action(sliderVal),
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

                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H6,
                            fontWeight: '600',
                            textAlign: 'left',
                            marginBottom: theme.SIZES.BASE * 0.5,
                          }}>
                          3.{' '}
                          {this.props.endoCourse.week1.module2Q3GoalsList &&
                            this.props.endoCourse.week1.module2Q3GoalsList[2]}
                        </Text>

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
                                Not confident
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
                                Extremely confident
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
                              this.setSlider3Updated(true);
                              this.props.dispatch(
                                updateEndo101Week9Module6Q7Action(sliderVal),
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
                              if (
                                this.state.slider1Updated &&
                                this.state.slider2Updated &&
                                this.state.slider3Updated
                              ) {
                                navigation.navigate('Endo101Week9Module6Page6');
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
