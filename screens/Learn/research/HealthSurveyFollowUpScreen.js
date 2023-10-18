import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text, Slider} from 'react-native-elements';
import XDate from 'xdate';
import {connect} from 'react-redux';

import {styles, theme, Images, utils} from '../../../constants';
import {Button, Select, Input} from '../../../components';
import {StatusBar} from 'expo-status-bar';
import {addFollowUpHealthSurveyAnswerAction} from '../../../redux/actions/userProfileActions';
import {MixpanelInstance} from '../../../shared/UsageAnalyticsUtils';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../../shared/ScreenTemplateWrapper';

import {getOS} from '../../../shared/PlatformUtils';

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
      q1Answer: '',
      q2Answer: '',
      q3Answer: '',
      q4Answer: '',
      q5Answer: '',
      q6Answer: '',
    };

    const currentDateObj = new XDate();
    this.setupBeginTS = currentDateObj.getTime();
  }

  setQ1Answer = q1AnswerP => {
    this.setState({q1Answer: q1AnswerP});
  };

  setQ2Answer = q2AnswerP => {
    this.setState({q2Answer: q2AnswerP});
  };
  setQ3Answer = q3AnswerP => {
    this.setState({q3Answer: q3AnswerP});
  };
  setQ4Answer = q4AnswerP => {
    this.setState({q4Answer: q4AnswerP});
  };
  setQ5Answer = q5AnswerP => {
    this.setState({q5Answer: q5AnswerP});
  };
  setQ6Answer = q6AnswerP => {
    this.setState({q6Answer: q6AnswerP});
  };

  render() {
    const {navigation} = this.props;

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
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                          paddingTop: theme.SIZES.BASE * 2,
                        }}>
                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H6,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: theme.SIZES.BASE * 0.5,
                            marginTop: theme.SIZES.BASE * 1.5,
                          }}>
                          Need to add EHP-30 Survey here, Need to make them
                          EHP-30, NPS, and HRQol all optional depending on props
                        </Text>

                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H6,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: theme.SIZES.BASE * 0.5,
                            marginTop: theme.SIZES.BASE * 1.5,
                          }}>
                          Would you say that in general your health is:
                        </Text>

                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 0,
                            paddingTop: 0,
                          }}>
                          <Select
                            customPrompt="Select an option"
                            defaultIndex={1}
                            options={utils.healthQualityList}
                            customButtonStyle={{
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
                            }}
                            onSelect={(ind, value) => {
                              this.setQ1Answer(value);
                              this.props.dispatch(
                                addFollowUpHealthSurveyAnswerAction(
                                  this.setupBeginTS,
                                  'HRQOL1',
                                  value,
                                ),
                              );
                            }}
                          />
                        </View>

                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H6,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: theme.SIZES.BASE * 0.5,
                            marginTop: theme.SIZES.BASE * 1.5,
                          }}>
                          Now thinking about your physical health, which
                          includes physical illness and injury, for how many
                          days during the past 30 days was your physical health
                          not good?
                        </Text>

                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 0,
                            paddingTop: 0,
                          }}>
                          <Select
                            customPrompt="Select an option"
                            defaultIndex={1}
                            options={utils.numberListUpTo30}
                            customButtonStyle={{
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
                            }}
                            onSelect={(ind, value) => {
                              this.setQ2Answer(value);
                              this.props.dispatch(
                                addFollowUpHealthSurveyAnswerAction(
                                  this.setupBeginTS,
                                  'HRQOL2',
                                  value,
                                ),
                              );
                            }}
                          />
                        </View>

                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H6,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: theme.SIZES.BASE * 0.5,
                            marginTop: theme.SIZES.BASE * 1.5,
                          }}>
                          Now thinking about your mental health, which includes
                          stress, depression, and problems with emotions, for
                          how many days during the past 30 days was your mental
                          health not good?
                        </Text>

                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 0,
                            paddingTop: 0,
                          }}>
                          <Select
                            customPrompt="Select an option"
                            defaultIndex={1}
                            options={utils.numberListUpTo30}
                            customButtonStyle={{
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
                            }}
                            onSelect={(ind, value) => {
                              this.setQ3Answer(value);
                              this.props.dispatch(
                                addFollowUpHealthSurveyAnswerAction(
                                  this.setupBeginTS,
                                  'HRQOL3',
                                  value,
                                ),
                              );
                            }}
                          />
                        </View>

                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H6,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: theme.SIZES.BASE * 0.5,
                            marginTop: theme.SIZES.BASE * 1.5,
                          }}>
                          During the past 30 days, for about how many days did
                          poor physical or mental health keep you from doing
                          your usual activities, such as self-care, work, or
                          recreation?
                        </Text>

                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 0,
                            paddingTop: 0,
                          }}>
                          <Select
                            customPrompt="Select an option"
                            defaultIndex={1}
                            options={utils.numberListUpTo30}
                            customButtonStyle={{
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
                            }}
                            onSelect={(ind, value) => {
                              this.setQ4Answer(value);
                              this.props.dispatch(
                                addFollowUpHealthSurveyAnswerAction(
                                  this.setupBeginTS,
                                  'HRQOL4',
                                  value,
                                ),
                              );
                            }}
                          />
                        </View>

                        <Text
                          style={{
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.H6,
                            textAlign: 'center',
                            marginBottom: theme.SIZES.BASE * 0.5,
                            marginTop: theme.SIZES.BASE * 1.5,
                            fontWeight: 'bold',
                          }}>
                          On a scale of 0 to 10, how likely are you to recommend
                          Lasa Health to a friend or colleague with
                          endometriosis?
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
                            }}>
                            <View
                              style={{
                                flex: 1,
                                alignItems: 'flex-start',
                              }}>
                              <Text
                                style={{
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                Not at all likely
                              </Text>
                            </View>
                            <View
                              style={{
                                flex: 1,
                                alignItems: 'flex-end',
                              }}>
                              <Text
                                style={{
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                Extremely likely
                              </Text>
                            </View>
                          </View>
                          <Slider
                            allowTouchTrack={true}
                            onSlidingComplete={sliderVal => {
                              this.setQ5Answer(sliderVal);
                              this.props.dispatch(
                                addFollowUpHealthSurveyAnswerAction(
                                  this.setupBeginTS,
                                  'Q5NPS',
                                  sliderVal,
                                ),
                              );
                            }}
                            thumbTintColor={theme.COLORS.PRIMARY2}
                            minimumTrackTintColor={theme.COLORS.PRIMARY2}
                            maximumTrackTintColor={theme.COLORS.BACKGROUND3}
                            style={{marginTop: 18}}
                            trackStyle={{height: 16, borderRadius: 20}}
                          />

                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginHorizontal: theme.SIZES.BASE,
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
                              0
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
                              6
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
                              8
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
                              10
                            </Text>
                          </View>
                        </View>

                        <View
                          style={{
                            marginTop: theme.SIZES.BASE,
                            marginBottom: theme.SIZES.BASE * 0.5,
                            marginHorizontal: theme.SIZES.BASE,
                          }}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontFamily: theme.FONTS.TEXT,
                              fontSize: theme.SIZES.H6,
                              textAlign: 'center',
                            }}>
                            Do you have any feedback that you’d like to share?
                          </Text>
                        </View>

                        <View style={{width: 200}}>
                          <Input
                            testID="notesInput"
                            iconContent={null}
                            placeholder="enter here"
                            defaultValue=""
                            onChangeText={updatedText => {
                              this.setQ6Answer(updatedText);
                              this.props.dispatch(
                                addFollowUpHealthSurveyAnswerAction(
                                  this.setupBeginTS,
                                  'Q6Comments',
                                  updatedText,
                                ),
                              );
                            }}
                            style={{
                              width: width - theme.SIZES.BASE * 2,
                              fontFamily: theme.FONTS.TEXT,
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
                            testID="submitButton"
                            style={{
                              ...styles.button,
                              width: width - theme.SIZES.BASE * 4,
                            }}
                            titleStyle={{
                              color: theme.COLORS.WHITE,
                              fontFamily: theme.FONTS.TEXT,
                            }}
                            title="Submit"
                            onPress={() => {
                              if (
                                this.state.q1Answer !== '' &&
                                this.state.q2Answer !== '' &&
                                this.state.q3Answer !== '' &&
                                this.state.q4Answer !== '' &&
                                this.state.q5Answer !== ''
                              ) {
                                //  FIXMETUNA: add new entry and timestamp to health survey here

                                if (
                                  Object.keys(
                                    this.props.userProfile.introHealthSurvey,
                                  ).includes(this.setupBeginTS)
                                ) {
                                  let newHealthSurveyObj = {
                                    timestamp: this.setupBeginTS,
                                  };

                                  if (
                                    Object.keys(
                                      this.props.userProfile.introHealthSurvey[
                                        this.setupBeginTS
                                      ],
                                    ).includes('HRQOL1')
                                  ) {
                                    newHealthSurveyObj['HRQOL1'] =
                                      this.props.userProfile.introHealthSurvey[
                                        this.setupBeginTS
                                      ]['HRQOL1'];
                                  }
                                  if (
                                    Object.keys(
                                      this.props.userProfile.introHealthSurvey[
                                        this.setupBeginTS
                                      ],
                                    ).includes('HRQOL2')
                                  ) {
                                    newHealthSurveyObj['HRQOL2'] =
                                      this.props.userProfile.introHealthSurvey[
                                        this.setupBeginTS
                                      ]['HRQOL2'];
                                  }
                                  if (
                                    Object.keys(
                                      this.props.userProfile.introHealthSurvey[
                                        this.setupBeginTS
                                      ],
                                    ).includes('HRQOL3')
                                  ) {
                                    newHealthSurveyObj['HRQOL3'] =
                                      this.props.userProfile.introHealthSurvey[
                                        this.setupBeginTS
                                      ]['HRQOL3'];
                                  }
                                  if (
                                    Object.keys(
                                      this.props.userProfile.introHealthSurvey[
                                        this.setupBeginTS
                                      ],
                                    ).includes('HRQOL4')
                                  ) {
                                    newHealthSurveyObj['HRQOL4'] =
                                      this.props.userProfile.introHealthSurvey[
                                        this.setupBeginTS
                                      ]['HRQOL4'];
                                  }
                                  if (
                                    Object.keys(
                                      this.props.userProfile.introHealthSurvey[
                                        this.setupBeginTS
                                      ],
                                    ).includes('Q5NPS')
                                  ) {
                                    newHealthSurveyObj['Q5NPS'] =
                                      this.props.userProfile.introHealthSurvey[
                                        this.setupBeginTS
                                      ]['Q5NPS'];
                                  }
                                  if (
                                    Object.keys(
                                      this.props.userProfile.introHealthSurvey[
                                        this.setupBeginTS
                                      ],
                                    ).includes('Q6Comments')
                                  ) {
                                    newHealthSurveyObj['Q6Comments'] =
                                      this.props.userProfile.introHealthSurvey[
                                        this.setupBeginTS
                                      ]['Q6Comments'];
                                  }
                                  this.mixpanel.track(
                                    'followUpHealthSurvey',
                                    newHealthSurveyObj,
                                  );
                                }

                                navigation.reset({
                                  index: 0,
                                  routes: [
                                    {
                                      name: 'Home',
                                      state: {
                                        routes: [{name: 'HomeMain'}],
                                      },
                                    },
                                  ],
                                });
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
    userProfile: state.userProfile,
  };
};
export default connect(mapStateToProps)(LearnCoursePlaceholderScreen);
