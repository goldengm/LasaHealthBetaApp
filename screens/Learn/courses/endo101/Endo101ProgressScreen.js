import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';

import {MixpanelInstance} from '../../../../shared/UsageAnalyticsUtils';
import {theme, styles} from '../../../../constants';
import {Button, Footer, TouchableOpacity} from '../../../../components';
import {resetEndo101Week1ProgressAction} from '../../../../redux/actions/learnActions';
// import {hasPremiumAccess} from '../../../../shared/ServerUtils';
import {KeyboardAvoidingView} from 'react-native';
import Checkmark1 from '../../../../assets/ui/general/Checkmark1.svg';
import DisabledCheckmark1 from '../../../../assets/ui/general/DisabledCheckmark1.svg';
import InProgress1 from '../../../../assets/ui/general/InProgress1.svg';
import CourseOutlineBackground1 from '../../../../assets/ui/learn/CourseOutlineBackground1.svg';
import {getOS} from '../../../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

const {width} = Dimensions.get('screen');

class LearnScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;

    this.initializeMissingCourseStatesRedux();

    this.state = {
      courseProgress: 0,
    };

    this.scrollViewRef = React.createRef();
    console.log('Checking learn state');
  }

  componentDidMount() {
    this.mixpanel.track('endo101ProgressScreen_reached');

    this.scrollViewRef.current.scrollTo({
      y: width * 3.66 - this.state.courseProgress * 130,
      duration: 500,
      animated: false,
    });
  }

  handleSelectWeek = page => {
    Promise.resolve()
      // .then(() => hasPremiumAccess(this.props.userProfile))
      .then(result => {
        // if (result) {
        this.props.navigation.navigate(`Endo101Week${page}Screen`);
        // } else if (!result) {
        //   this.props.navigation.navigate('Settings', {
        //     screen: 'PremiumOptions',
        //   });
        // }
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleContinueButton = () => {
    if (this.props.endoCourse.courseProgress <= 0) {
      this.props.navigation.navigate('Endo101Week1Screen');
    } else if (this.props.endoCourse.courseProgress == 1) {
      Promise.resolve()
        // .then(() => hasPremiumAccess(this.props.userProfile))
        .then(result => {
          // if (
          //   result
          //   // isWeekOfCourseUnlocked(
          //   //   this.props.endoCourse.courseStartTimestamp,
          //   //   2
          //   // )
          // ) {
          this.props.navigation.navigate('Endo101Week2Screen');
          // } else {
          //   this.props.navigation.navigate('Settings', {
          //     screen: 'PremiumOptions',
          //   });
          //   // alert(
          //   //   "Module 2 unlocks on " +
          //   //     XDate(
          //   //       getCourseWeekUnlockDate(
          //   //         this.props.endoCourse.courseStartTimestamp,
          //   //         2
          //   //       )
          //   //     ).toString("M/d")
          //   // );
          // }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.props.endoCourse.courseProgress == 2) {
      Promise.resolve()
        // .then(() => hasPremiumAccess(this.props.userProfile))
        .then(result => {
          // if (
          //   result
          //   // isWeekOfCourseUnlocked(
          //   //   this.props.endoCourse.courseStartTimestamp,
          //   //   3
          //   // )
          // ) {
          this.props.navigation.navigate('Endo101Week3Screen');
          // } else {
          //   this.props.navigation.navigate('Settings', {
          //     screen: 'PremiumOptions',
          //   });
          //   // alert(
          //   //   "Module 3 unlocks on " +
          //   //     XDate(
          //   //       getCourseWeekUnlockDate(
          //   //         this.props.endoCourse.courseStartTimestamp,
          //   //         3
          //   //       )
          //   //     ).toString("M/d")
          //   // );
          // }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.props.endoCourse.courseProgress == 3) {
      Promise.resolve()
        // .then(() => hasPremiumAccess(this.props.userProfile))
        .then(result => {
          // if (
          //   result
          //   // isWeekOfCourseUnlocked(
          //   //   this.props.endoCourse.courseStartTimestamp,
          //   //   4
          //   // )
          // ) {
          this.props.navigation.navigate('Endo101Week4Screen');
          // } else {
          //   this.props.navigation.navigate('Settings', {
          //     screen: 'PremiumOptions',
          //   });
          //   // alert(
          //   //   "Module 4 unlocks on " +
          //   //     XDate(
          //   //       getCourseWeekUnlockDate(
          //   //         this.props.endoCourse.courseStartTimestamp,
          //   //         4
          //   //       )
          //   //     ).toString("M/d")
          //   // );
          // }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.props.endoCourse.courseProgress == 4) {
      Promise.resolve()
        // .then(() => hasPremiumAccess(this.props.userProfile))
        .then(result => {
          // if (
          //   result
          //   // isWeekOfCourseUnlocked(
          //   //   this.props.endoCourse.courseStartTimestamp,
          //   //   5
          //   // )
          // ) {
          this.props.navigation.navigate('Endo101Week5Screen');
          // } else {
          //   this.props.navigation.navigate('Settings', {
          //     screen: 'PremiumOptions',
          //   });
          //   // alert(
          //   //   "Module 5 unlocks on " +
          //   //     XDate(
          //   //       getCourseWeekUnlockDate(
          //   //         this.props.endoCourse.courseStartTimestamp,
          //   //         5
          //   //       )
          //   //     ).toString("M/d")
          //   // );
          // }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.props.endoCourse.courseProgress == 5) {
      Promise.resolve()
        // .then(() => hasPremiumAccess(this.props.userProfile))
        .then(result => {
          // if (
          //   result
          //   // isWeekOfCourseUnlocked(
          //   //   this.props.endoCourse.courseStartTimestamp,
          //   //   6
          //   // )
          // ) {
          this.props.navigation.navigate('Endo101Week6Screen');
          // } else {
          //   this.props.navigation.navigate('Settings', {
          //     screen: 'PremiumOptions',
          //   });
          //   // alert(
          //   //   "Module 6 unlocks on " +
          //   //     XDate(
          //   //       getCourseWeekUnlockDate(
          //   //         this.props.endoCourse.courseStartTimestamp,
          //   //         6
          //   //       )
          //   //     ).toString("M/d")
          //   // );
          // }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.props.endoCourse.courseProgress == 6) {
      Promise.resolve()
        // .then(() => hasPremiumAccess(this.props.userProfile))
        .then(result => {
          // if (
          //   result
          //   // isWeekOfCourseUnlocked(
          //   //   this.props.endoCourse.courseStartTimestamp,
          //   //   7
          //   // )
          // ) {
          this.props.navigation.navigate('Endo101Week7Screen');
          // } else {
          //   this.props.navigation.navigate('Settings', {
          //     screen: 'PremiumOptions',
          //   });
          //   // alert(
          //   //   "Module 7 unlocks on " +
          //   //     XDate(
          //   //       getCourseWeekUnlockDate(
          //   //         this.props.endoCourse.courseStartTimestamp,
          //   //         7
          //   //       )
          //   //     ).toString("M/d")
          //   // );
          // }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.props.endoCourse.courseProgress == 7) {
      Promise.resolve()
        // .then(() => hasPremiumAccess(this.props.userProfile))
        .then(result => {
          // if (
          //   result
          //   // isWeekOfCourseUnlocked(
          //   //   this.props.endoCourse.courseStartTimestamp,
          //   //   8
          //   // )
          // ) {
          this.props.navigation.navigate('Endo101Week8Screen');
          // } else {
          //   this.props.navigation.navigate('Settings', {
          //     screen: 'PremiumOptions',
          //   });
          //   // alert(
          //   //   "Module 8 unlocks on " +
          //   //     XDate(
          //   //       getCourseWeekUnlockDate(
          //   //         this.props.endoCourse.courseStartTimestamp,
          //   //         8
          //   //       )
          //   //     ).toString("M/d")
          //   // );
          // }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.props.endoCourse.courseProgress == 8) {
      Promise.resolve()
        // .then(() => hasPremiumAccess(this.props.userProfile))
        .then(result => {
          // if (
          //   result
          //   // isWeekOfCourseUnlocked(
          //   //   this.props.endoCourse.courseStartTimestamp,
          //   //   9
          //   // )
          // ) {
          this.props.navigation.navigate('Endo101Week9Screen');
          // } else {
          //   this.props.navigation.navigate('Settings', {
          //     screen: 'PremiumOptions',
          //   });
          //   // alert(
          //   //   "Module 9 unlocks on " +
          //   //     XDate(
          //   //       getCourseWeekUnlockDate(
          //   //         this.props.endoCourse.courseStartTimestamp,
          //   //         9
          //   //       )
          //   //     ).toString("M/d")
          //   // );
          // }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.props.endoCourse.courseProgress == 9) {
      Promise.resolve()
        // .then(() => hasPremiumAccess(this.props.userProfile))
        .then(result => {
          // if (
          //   result
          //   // isWeekOfCourseUnlocked(
          //   //   this.props.endoCourse.courseStartTimestamp,
          //   //   10
          //   // )
          // ) {
          this.props.navigation.navigate('Endo101Week10Screen');
          // } else {
          //   this.props.navigation.navigate('Settings', {
          //     screen: 'PremiumOptions',
          //   });
          //   // alert(
          //   //   "Module 10 unlocks on " +
          //   //     XDate(
          //   //       getCourseWeekUnlockDate(
          //   //         this.props.endoCourse.courseStartTimestamp,
          //   //         10
          //   //       )
          //   //     ).toString("M/d")
          //   // );
          // }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.props.endoCourse.courseProgress == 10) {
      Promise.resolve()
        // .then(() => hasPremiumAccess(this.props.userProfile))
        .then(result => {
          // if (
          //   result
          //   // isWeekOfCourseUnlocked(
          //   //   this.props.endoCourse.courseStartTimestamp,
          //   //   11
          //   // )
          // ) {
          this.props.navigation.navigate('Endo101Week11Screen');
          // } else {
          //   this.props.navigation.navigate('Settings', {
          //     screen: 'PremiumOptions',
          //   });
          //   // alert(
          //   //   "Module 11 unlocks on " +
          //   //     XDate(
          //   //       getCourseWeekUnlockDate(
          //   //         this.props.endoCourse.courseStartTimestamp,
          //   //         11
          //   //       )
          //   //     ).toString("M/d")
          //   // );
          // }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.props.endoCourse.courseProgress == 11) {
      Promise.resolve()
        // .then(() => hasPremiumAccess(this.props.userProfile))
        .then(result => {
          // if (
          //   result
          //   // isWeekOfCourseUnlocked(
          //   //   this.props.endoCourse.courseStartTimestamp,
          //   //   12
          //   // )
          // ) {
          this.props.navigation.navigate('Endo101Week12Screen');
          // } else {
          //   this.props.navigation.navigate('Settings', {
          //     screen: 'PremiumOptions',
          //   });
          //   // alert(
          //   //   "Module 12 unlocks on " +
          //   //     XDate(
          //   //       getCourseWeekUnlockDate(
          //   //         this.props.endoCourse.courseStartTimestamp,
          //   //         12
          //   //       )
          //   //     ).toString("M/d")
          //   // );
          // }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  setCourseProgress = courseProgressP => {
    this.setState({courseProgress: courseProgressP});
  };

  //  FIXMETUNA:  this is a temporary fix while the course states change massively
  //  placeholder while I'm still trying to figure out db upgrade system
  initializeMissingCourseStatesRedux = () => {
    if (
      this.props.endoCourse.week1 == null ||
      Object.keys(this.props.endoCourse.week1).length < 1
    ) {
      console.log('Resetting endo101 week1 progress');
      this.props.dispatch(resetEndo101Week1ProgressAction());
    }
  };

  getCourseProgressIcon = weekNum => {
    if (this.props.endoCourse.courseProgress > weekNum) {
      return <Checkmark1 />;
    } else if (this.props.endoCourse.courseProgress == weekNum) {
      return (
        <View style={{backgroundColor: theme.COLORS.WHITE, borderRadius: 40}}>
          <InProgress1 />
        </View>
      );
    } else {
      return <DisabledCheckmark1 />;
    }
  };

  getCourseProgressColor = weekNum => {
    if (this.props.endoCourse.courseProgress > weekNum) {
      return 'rgba(255, 255, 255, 0.3)';
    } else if (this.props.endoCourse.courseProgress == weekNum) {
      return theme.COLORS.WHITE;
    } else {
      return 'rgba(255, 255, 255, 0.3)';
    }
  };

  render() {
    const {navigation} = this.props;
    // let indexCount = 0;

    console.log(
      'Endo Course Overall Progress: ',
      this.props.endoCourse.courseProgress,
    );

    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            ...styles.home,
            flex: 1,
            alignContent: 'center',
          }}>
          <StatusBar
            style={{
              backgroundColor: theme.COLORS.TRANSPARENT,
              fontFamily: theme.FONTS.TEXT,
            }}
            backgroundColor={theme.COLORS.TRANSPARENT}
          />

          <View
            style={{
              position: 'absolute',
              flex: 1,
              flexDirection: 'row',
              zIndex: 5,
              elevation: 5,
            }}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: theme.SIZES.BASE * 2,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: theme.SIZES.BASE,
                backgroundColor: theme.COLORS.BACKGROUND1,
                marginVertical: theme.SIZES.BASE * 2,
                marginTop: theme.SIZES.BASE * 4,
                marginHorizontal: theme.SIZES.BASE,
                borderRadius: theme.SIZES.BASE * 2,
                zIndex: 5,
                elevation: 5,
              }}>
              <Text
                style={{
                  color: theme.COLORS.ERROR1,
                  fontSize: theme.SIZES.B1,
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                YOUR 12-WEEK JOURNEY
              </Text>
              <Text
                style={{
                  color: theme.COLORS.PRIMARY2,
                  fontSize: theme.SIZES.H4,
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                Endometriosis 101
              </Text>
            </View>
          </View>

          <KeyboardAvoidingView
            style={{
              flex: 1,
            }}
            behavior="padding"
            enabled={iosPlatform()}>
            <ScrollView
              testID="pageScrollview"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                ...styles.articles,
                marginTop: 0,
                paddingTop: 0,
                marginHorizontal: 0,
                paddingHorizontal: 0,
                backgroundColor: theme.COLORS.PRIMARY2,
              }}
              ref={this.scrollViewRef}>
              <View
                style={{
                  position: 'absolute',
                  width: width,
                  aspectRatio: 375.0 / 1373.0,
                }}>
                <CourseOutlineBackground1
                  width={'110%'}
                  height={'110%'}
                  viewBox="0 0 375 1373"
                />
              </View>

              <View
                style={{
                  ...styles.standardAppBackgroundContainer,
                  backgroundColor: theme.COLORS.TRANSPARENT,
                  paddingHorizontal: theme.SIZES.BASE,
                }}>
                <View
                  style={{
                    marginTop: theme.SIZES.BASE * 10,
                    marginHorizontal: theme.SIZES.BASE,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSelectWeek(12);
                    }}
                    style={{marginVertical: theme.SIZES.BASE * 2}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        marginLeft: theme.SIZES.BASE * 4,
                      }}>
                      {this.getCourseProgressIcon(11)}
                      <View
                        style={{
                          backgroundColor: this.getCourseProgressColor(11),
                          marginLeft: 10,
                          borderRadius: theme.SIZES.BASE,
                          alignItems: 'center',
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                        }}>
                        <Text
                          h4
                          style={{
                            fontFamily: theme.FONTS.TEXT,
                          }}>
                          12. Thriving
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSelectWeek(11);
                    }}
                    style={{marginVertical: theme.SIZES.BASE * 2}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginRight: theme.SIZES.BASE * 3,
                      }}>
                      <View
                        style={{
                          backgroundColor: this.getCourseProgressColor(10),
                          marginRight: 10,
                          borderRadius: theme.SIZES.BASE,
                          alignItems: 'center',
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                        }}>
                        <Text
                          h4
                          style={{
                            fontFamily: theme.FONTS.TEXT,
                          }}>
                          11. Related Conditions
                        </Text>
                      </View>
                      {this.getCourseProgressIcon(10)}
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSelectWeek(10);
                    }}
                    style={{marginVertical: theme.SIZES.BASE * 2}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        marginRight: theme.SIZES.BASE * 2.5,
                      }}>
                      <View
                        style={{
                          backgroundColor: this.getCourseProgressColor(9),
                          marginRight: 10,
                          borderRadius: theme.SIZES.BASE,
                          alignItems: 'center',
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                        }}>
                        <Text
                          h4
                          style={{
                            fontFamily: theme.FONTS.TEXT,
                          }}>
                          10. Life Stages
                        </Text>
                      </View>
                      {this.getCourseProgressIcon(9)}
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSelectWeek(9);
                    }}
                    style={{marginVertical: theme.SIZES.BASE * 2}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginLeft: theme.SIZES.BASE * 3,
                      }}>
                      {this.getCourseProgressIcon(8)}
                      <View
                        style={{
                          backgroundColor: this.getCourseProgressColor(8),
                          marginLeft: 10,
                          borderRadius: theme.SIZES.BASE,
                          alignItems: 'center',
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                        }}>
                        <Text
                          h4
                          style={{
                            fontFamily: theme.FONTS.TEXT,
                          }}>
                          9. Alternative Therapies
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSelectWeek(8);
                    }}
                    style={{marginVertical: theme.SIZES.BASE * 2}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginRight: theme.SIZES.BASE * 6,
                      }}>
                      {this.getCourseProgressIcon(7)}
                      <View
                        style={{
                          backgroundColor: this.getCourseProgressColor(7),
                          marginLeft: 10,
                          borderRadius: theme.SIZES.BASE,
                          alignItems: 'center',
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                        }}>
                        <Text
                          h4
                          style={{
                            fontFamily: theme.FONTS.TEXT,
                          }}>
                          8. Nutrition
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSelectWeek(7);
                    }}
                    style={{marginVertical: theme.SIZES.BASE * 2}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginRight: theme.SIZES.BASE * 3,
                      }}>
                      <View
                        style={{
                          backgroundColor: this.getCourseProgressColor(6),
                          marginRight: 10,
                          borderRadius: theme.SIZES.BASE,
                          alignItems: 'center',
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                        }}>
                        <Text
                          h4
                          style={{
                            fontFamily: theme.FONTS.TEXT,
                          }}>
                          7. Physical Therapy
                        </Text>
                      </View>

                      {this.getCourseProgressIcon(6)}
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSelectWeek(6);
                    }}
                    style={{marginVertical: theme.SIZES.BASE * 2}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      }}>
                      <View
                        style={{
                          backgroundColor: this.getCourseProgressColor(5),
                          marginRight: 10,
                          borderRadius: theme.SIZES.BASE,
                          alignItems: 'center',
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                        }}>
                        <Text
                          h4
                          style={{
                            fontFamily: theme.FONTS.TEXT,
                          }}>
                          6. Medications
                        </Text>
                      </View>

                      {this.getCourseProgressIcon(5)}
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSelectWeek(5);
                    }}
                    style={{marginVertical: theme.SIZES.BASE * 2}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginLeft: theme.SIZES.BASE * 1,
                      }}>
                      <View
                        style={{
                          backgroundColor: this.getCourseProgressColor(4),
                          marginRight: 10,
                          borderRadius: theme.SIZES.BASE,
                          alignItems: 'center',
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                        }}>
                        <Text
                          h4
                          style={{
                            fontFamily: theme.FONTS.TEXT,
                          }}>
                          5. Laparoscopy
                        </Text>
                      </View>

                      {this.getCourseProgressIcon(5)}
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSelectWeek(4);
                    }}
                    style={{marginVertical: theme.SIZES.BASE * 2}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginLeft: theme.SIZES.BASE,
                      }}>
                      {this.getCourseProgressIcon(3)}
                      <View
                        style={{
                          backgroundColor: this.getCourseProgressColor(3),
                          marginLeft: 10,
                          borderRadius: theme.SIZES.BASE,
                          alignItems: 'center',
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                        }}>
                        <Text
                          h4
                          style={{
                            fontFamily: theme.FONTS.TEXT,
                          }}>
                          4. Diagnosis
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSelectWeek(3);
                    }}
                    style={{marginVertical: theme.SIZES.BASE * 2}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginLeft: theme.SIZES.BASE * 2,
                      }}>
                      <View
                        style={{
                          backgroundColor: this.getCourseProgressColor(2),
                          marginRight: 10,
                          borderRadius: theme.SIZES.BASE,
                          alignItems: 'center',
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                        }}>
                        <Text
                          h4
                          style={{
                            fontFamily: theme.FONTS.TEXT,
                          }}>
                          3. Stages & Symptoms
                        </Text>
                      </View>

                      {this.getCourseProgressIcon(2)}
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSelectWeek(2);
                    }}
                    style={{marginVertical: theme.SIZES.BASE * 2}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      }}>
                      <View
                        style={{
                          backgroundColor: this.getCourseProgressColor(1),
                          marginRight: 10,
                          borderRadius: theme.SIZES.BASE,
                          alignItems: 'center',
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                        }}>
                        <Text
                          h4
                          style={{
                            fontFamily: theme.FONTS.TEXT,
                          }}>
                          2. Hormones
                        </Text>
                      </View>

                      {this.getCourseProgressIcon(1)}
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Endo101Week1Screen');
                      // navigation.navigate('Endo100Week1Screen');
                    }}
                    style={{marginTop: theme.SIZES.BASE * 2}}>
                    <View
                      style={{
                        marginLeft: theme.SIZES.BASE * 8,
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      {this.getCourseProgressIcon(0)}
                      <View
                        style={{
                          backgroundColor: this.getCourseProgressColor(0),
                          marginLeft: 10,
                          borderRadius: theme.SIZES.BASE,
                          alignItems: 'center',
                          paddingVertical: 4,
                          paddingHorizontal: 6,
                        }}>
                        <Text
                          h4
                          style={{
                            fontFamily: theme.FONTS.TEXT,
                          }}>
                          1. Introduction
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

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
                      title="Continue"
                      onPress={() => {
                        this.handleContinueButton();
                      }}></Button>
                  </View>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
        <Footer navigation={navigation} tabName="Learn" />
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
    favorites: state.learn.favorites,
    recommended: state.learn.recommended,
    endoCourse: state.learn.endo101Course,
  };
};
export default connect(mapStateToProps)(LearnScreen);
