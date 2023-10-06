import React from 'react';
import {Dimensions, ScrollView, View, DeviceEventEmitter} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import XDate from 'xdate';
import LinearGradient from 'react-native-linear-gradient';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Button,
  Footer,
  CheckBox,
  Icon,
  TouchableOpacity,
} from '../../components';
import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';
import {theme, styles} from '../../constants';
import {KeyboardAvoidingView} from 'react-native';
import GardenPreviewScreen from '../Garden/GardenPreviewScreen';
import {GardenContext} from '../../garden/GardenProvider';
import {
  calculateCurrentCourseCompletionPercent,
  getflowerProgressIcon,
  getEndo101ProgressMessage,
} from '../../shared/CourseUtils';
//  FIXMETUNA: delete late this is only the test server push notifications

// import {SetAssessmentResults} from '../../redux/actions/assessmentActions';

import Blob1 from '../../assets/ui/general/Blob1.svg';
import Blob2 from '../../assets/ui/general/Blob2.svg';
import Blob3 from '../../assets/ui/general/Blob3.svg';
import Blob4 from '../../assets/ui/general/Blob4.svg';
import Blob5 from '../../assets/ui/general/Blob5.svg';
import Checkmark1 from '../../assets/ui/general/Checkmark1.svg';
import DisabledCheckmark1 from '../../assets/ui/general/DisabledCheckmark1.svg';
import InProgress1 from '../../assets/ui/general/InProgress1.svg';
import PlantTendGarden1 from '../../assets/garden/shop/plant_tend_garden_1.svg';
import IntersectWave1 from '../../assets/ui/general/IntersectWave1.svg';

import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;
    this.state = {};
    // this.replaceAssessmentData();
  }

  componentDidMount() {
    this.mixpanel.track('homeScreen_reached');

    let value = this.context;
    /* perform a side-effect at mount using the value of GardenContext */
    console.log('HOME SCREEN HAS MOUNTED - DEBUG');
    value.checkForDailyGardenUpdate(this.props.dispatch);

    console.log('HOME SCREEN HAS MOUNTED - Ater garden updated - DEBUG');
    if (!this.props.userProfile.appIntroTutorialComplete.includes(0)) {
      setTimeout(() => {
        //  giving session controller 1.5 seconds to load before sending trigger
        console.log('Showing tutorial for home screen');
        DeviceEventEmitter.emit('event.showtutorialPage', {
          pageNumber: 0,
        });
      }, 1000);
    }
  }

  // replaceAssessmentData = async () => {
  //   await AsyncStorage.setItem('GUEST_MODE', 'false');
  //   let assessmentData = await AsyncStorage.getItem('SAVED_RISK_ASSESSMENTS');
  //   assessmentData = JSON.parse(assessmentData);
  //   this.props.dispatch(SetAssessmentResults(assessmentData));
  // }

  // This is an example of a function you might use to transform your data to make 100% data
  transformData(dataset) {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y;
      }, 0);
    });
    return dataset.map(data => {
      return data.map((datum, i) => {
        return {x: datum.x, y: (datum.y / totals[i]) * 100};
      });
    });
  }

  isNightTime() {
    const dateObj = new XDate(Date.now());
    const hour = dateObj.getHours();
    return hour < 7 || hour > 19;
  }

  getNumPlantsInGarden = garden => {
    let numPlants = 0;
    for (const row of garden.gardenState.gardenPlots) {
      for (const plot of row) {
        if (
          plot &&
          !(plot['itemType'] == '') &&
          !(plot['itemType'] == 'weed')
        ) {
          numPlants = numPlants + 1;
        }
      }
    }
    return numPlants;
  };

  getNumWeedsInGarden = garden => {
    let numWeeds = 0;
    for (const row of garden.gardenState.gardenPlots) {
      for (const plot of row) {
        if (plot && !(plot['itemType'] == '') && plot['itemType'] == 'weed') {
          numWeeds = numWeeds + 1;
        }
      }
    }
    return numWeeds;
  };

  getMoodIcon = mood => {
    if (mood == 'Awful') {
      return (
        <Icon
          name={'Svg018Stressed'}
          family="amielineal"
          size={30}
          fill={theme.COLORS.ERROR2}
          style={{zIndex: 5, marginTop: 5}}
          width={60 * 0.65}
          height={60 * 0.65}
        />
      );
    } else if (mood == 'Bad') {
      return (
        <Icon
          name={'Svg039Sad'}
          family="amielineal"
          size={30}
          fill={theme.COLORS.ERROR2}
          style={{zIndex: 5, marginTop: 5}}
          width={60 * 0.65}
          height={60 * 0.65}
        />
      );
    } else if (mood == 'Meh') {
      return (
        <Icon
          name={'Svg003Meh'}
          family="amielineal"
          size={30}
          fill={theme.COLORS.ERROR2}
          style={{zIndex: 5, marginTop: 5}}
          width={60 * 0.65}
          height={60 * 0.65}
        />
      );
    } else if (mood == 'Good') {
      return (
        <Icon
          name={'Svg031Smile'}
          family="amielineal"
          size={30}
          fill={theme.COLORS.ERROR2}
          style={{zIndex: 5, marginTop: 5}}
          width={60 * 0.65}
          height={60 * 0.65}
        />
      );
    } else {
      return (
        <Icon
          name={'Svg001Happy'}
          family="amielineal"
          size={30}
          fill={theme.COLORS.ERROR2}
          style={{zIndex: 5, marginTop: 5}}
          width={60 * 0.65}
          height={60 * 0.65}
        />
      );
    }
  };

  userTrackingMenstration = () => {
    const menstrationStatusStr =
      this.props.userProfile.OnboardingAnswers.onboarding.menstrationStatus.toString();
    if (
      menstrationStatusStr &&
      (menstrationStatusStr.includes('Yes') ||
        menstrationStatusStr.includes('yes'))
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    console.log('HOME RENDER');
    const {navigation} = this.props;

    const newChartStats = this.props.userAnalytics.chartStats;

    // const myDataset = [
    //   [
    //     { x: "a", y: 1 },
    //     { x: "b", y: 2 },
    //     { x: "c", y: 3 },
    //     { x: "d", y: 2 },
    //     { x: "e", y: 1 },
    //   ],
    // ];

    // const data2012 = [
    //   { quarter: 1, earnings: 13000 },
    //   { quarter: 2, earnings: 16500 },
    //   { quarter: 3, earnings: 14250 },
    //   { quarter: 4, earnings: 19000 },
    // ];

    // const sampleData = [
    //   { x: 1, y: 5 },
    //   { x: 2, y: 4 },
    //   { x: 3, y: 2 },
    //   { x: 4, y: 3 },
    //   { x: 5, y: 1 },
    // ];

    // const sampleHistogramData = [
    //   { x: 1 },
    //   { x: 2 },
    //   { x: 3 },
    //   { x: 4 },
    //   { x: 5 },
    //   { x: 1.2 },
    //   { x: 3.7 },
    //   { x: 8.3 },
    //   { x: 2.3 },
    //   { x: 1.7 },
    //   { x: 0.4 },
    //   { x: 0.6 },
    //   { x: 4.2 },
    //   { x: 8.4 },
    //   { x: 2.5 },
    //   { x: 6.4 },
    //   { x: 2.8 },
    //   { x: 3.8 },
    //   { x: 1.3 },
    //   { x: 1.9 },
    //   { x: 5.4 },
    // ];
    // const dataset = this.transformData(myDataset);

    return (
      <View
        testID={'HomeScreenView'}
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: styles.homepageBackgroundContainer.backgroundColor,
        }}>
        <GardenContext.Consumer>
          {garden => (
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
                  contentContainerStyle={{width}}>
                  <View style={styles.homepageBackgroundContainer}>
                    <View
                      style={{
                        backgroundColor: theme.COLORS.TRANSPARENT,
                        position: 'absolute',
                        zIndex: 5,
                        marginTop: theme.SIZES.BASE * 3,
                        width: width,
                      }}
                      pointerEvents={'box-none'}>
                      <TouchableOpacity
                        testID="gardenPreviewOverviewButton"
                        onPress={() => {
                          Promise.resolve()
                            .then(() =>
                              garden.setRemoveGardenItemModeActive(false),
                            )
                            .then(() => navigation.navigate('Garden'));
                        }}>
                        <View
                          style={{
                            justifyContent: 'flex-start',
                            height: theme.SIZES.BASE * 10,
                          }}
                          pointerEvents={'box-none'}>
                          <View
                            style={{
                              justifyContent: 'space-between',
                              flexDirection: 'row',
                            }}>
                            <Text
                              style={{
                                ...styles.title,
                                color: this.isNightTime()
                                  ? theme.COLORS.WHITE
                                  : theme.COLORS.BLACK,
                                fontSize: 30,
                                fontWeight: '300',
                                marginTop: 0,
                              }}>
                              {this.isNightTime()
                                ? 'Good Evening,'
                                : 'Good Morning,'}
                              {'\n'}
                              {
                                this.props.userProfile.OnboardingAnswers
                                  .onboarding.nickname
                              }
                              !
                            </Text>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              marginLeft: theme.SIZES.BASE * 0.5,
                              marginTop: theme.SIZES.BASE * 2,
                            }}>
                            <TouchableOpacity
                              testID="enterGardenButton1"
                              disabled
                              style={{
                                width: theme.SIZES.BASE * 3,
                                height: theme.SIZES.BASE * 3,
                                borderRadius: theme.SIZES.BASE * 3,
                                zIndex: 5,
                                elevation: 5,
                                backgroundColor: theme.COLORS.PRIMARY2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 12,
                              }}>
                              <PlantTendGarden1
                                height={30}
                                width={30}
                                style={{
                                  color: theme.COLORS.WHITE,
                                }}
                                marginTop={2}
                              />
                            </TouchableOpacity>
                            <View
                              style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Text
                                style={{
                                  color: theme.COLORS.WHITE,
                                  fontWeight: 'bold',
                                  fontSize: theme.SIZES.B1,
                                  marginLeft: theme.SIZES.BASE * 0.5,
                                }}>
                                View Garden
                              </Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View
                      testID="gardenPreviewView"
                      style={{
                        height: theme.SIZES.BASE * 18,
                      }}>
                      <TouchableOpacity
                        testID="gardenPreviewOverviewButton2"
                        onPress={() => {
                          Promise.resolve()
                            .then(() =>
                              garden.setRemoveGardenItemModeActive(false),
                            )
                            .then(() => navigation.navigate('Garden'));
                        }}>
                        <GardenPreviewScreen navigation={navigation} />
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        ...styles.standardAppBackgroundContainer,
                        backgroundColor: theme.COLORS.WHITE,
                        minHeight: height - theme.SIZES.BASE * 15.6,
                      }}>
                      <View
                        style={{
                          paddingHorizontal: theme.SIZES.BASE,
                        }}>
                        <View
                          style={{
                            top: -35,
                          }}>
                          <View
                            zIndex={5}
                            style={{
                              position: 'absolute',
                              top: -20,
                              right: 20,
                              zIndex: 6,
                            }}>
                            {getflowerProgressIcon(
                              calculateCurrentCourseCompletionPercent(
                                this.props.endoCourse,
                              ),
                            )}
                          </View>
                          <LinearGradient
                            style={{
                              marginHorizontal: 0,
                              marginVertical: theme.SIZES.BASE,
                              paddingVertical: theme.SIZES.BASE,
                              borderRadius: 20,
                              elevations: 5,
                              zIndex: 5,
                            }}
                            colors={[
                              theme.COLORS.TERTIARY4,
                              theme.COLORS.PRIMARY4,
                            ]}
                            locations={[0.0, 0.7]}
                            start={{x: 0, y: 0.0}}
                            end={{x: 1, y: 1.0}}>
                            <TouchableOpacity
                              style={{
                                zIndex: 5,
                              }}
                              testID="endo101CourseButton"
                              onPress={() => {
                                navigation.navigate('Learn', {
                                  screen: 'Endo101ProgressScreen',
                                });
                              }}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-evenly',
                                  marginHorizontal: theme.SIZES.BASE * 2,
                                }}>
                                <View
                                  style={{
                                    justifyContent: 'center',
                                    marginLeft: theme.SIZES.BASE * 0.5,
                                  }}>
                                  <Text
                                    style={{
                                      color: theme.COLORS.TEXT1,
                                      marginBottom: theme.SIZES.BASE * 0.5,
                                      fontSize: theme.SIZES.B1,
                                      marginTop: theme.SIZES.BASE * 2,
                                    }}>
                                    {getEndo101ProgressMessage(
                                      this.props.endoCourse.courseProgress,
                                      0,
                                    )}
                                  </Text>
                                  <Text
                                    style={{
                                      color: theme.COLORS.PRIMARY2,
                                      fontSize: theme.SIZES.H4,
                                      marginBottom: theme.SIZES.BASE * 0.5,
                                      fontWeight: 'bold',
                                    }}>
                                    {getEndo101ProgressMessage(
                                      this.props.endoCourse.courseProgress,
                                      1,
                                    )}
                                  </Text>
                                  <Text
                                    style={{
                                      color: theme.COLORS.TEXT1,
                                      fontSize: theme.SIZES.B1,
                                      width: width - theme.SIZES.BASE * 4,
                                    }}>
                                    {getEndo101ProgressMessage(
                                      this.props.endoCourse.courseProgress,
                                      2,
                                    )}
                                  </Text>
                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      marginTop: theme.SIZES.BASE,
                                    }}>
                                    <Text
                                      style={{
                                        color: theme.COLORS.PRIMARY2,
                                        marginBottom: theme.SIZES.BASE,
                                        fontSize: theme.SIZES.B1,
                                      }}>
                                      {getEndo101ProgressMessage(
                                        this.props.endoCourse.courseProgress,
                                        3,
                                      )}
                                    </Text>

                                    <Icon
                                      name="chevron-forward-outline"
                                      type="ionicon"
                                      color={theme.COLORS.PRIMARY2}
                                      style={{marginLeft: 4}}
                                      width={24}
                                      height={24}
                                    />
                                  </View>
                                </View>
                              </View>
                            </TouchableOpacity>
                          </LinearGradient>
                        </View>
                        <View style={{top: theme.SIZES.BASE * -2}}>
                          <TouchableOpacity
                            style={{
                              justifyContent: 'flex-start',
                              marginHorizontal: theme.SIZES.BASE,
                            }}
                            disabled
                            onPress={() => {}}>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                fontFamily: theme.FONTS.TEXT,
                                fontSize: theme.SIZES.H5,
                                marginTop: theme.SIZES.BASE,
                                marginBottom: theme.SIZES.BASE,
                              }}>
                              To Do List
                            </Text>
                          </TouchableOpacity>

                          {!(this.props.userProfile.activeTodo['0'] == null) &&
                            !(
                              this.props.userProfile.allTodo[
                                this.props.userProfile.activeTodo['0']
                              ] == null
                            ) && (
                              <CheckBox
                                checkedColor={theme.COLORS.PRIMARY2}
                                uncheckedColor={theme.COLORS.BACKGROUND3}
                                customTitle={
                                  this.props.userProfile.allTodo[
                                    this.props.userProfile.activeTodo['0']
                                  ].name
                                }
                                customSubtitle={
                                  this.props.userProfile.allTodo[
                                    this.props.userProfile.activeTodo['0']
                                  ].rewardText
                                }
                                checked={
                                  this.props.userProfile.allTodo[
                                    this.props.userProfile.activeTodo['0']
                                  ].status > 1
                                }
                                containerStyle={{
                                  marginVertical: theme.SIZES.BASE * 0.2,
                                  marginBottom: 0,
                                  left: -10,
                                }}
                                textStyle={{
                                  color: theme.COLORS.DARK_SECONDARY,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontWeight: '100',
                                }}
                                rightIcon={true}
                                checkedIcon={<Checkmark1 />}
                                uncheckedIcon={<DisabledCheckmark1 />}
                                customOnPress={() => {
                                  if (
                                    this.props.userProfile.allTodo[
                                      this.props.userProfile.activeTodo['0']
                                    ].status < 2 &&
                                    this.props.userProfile.allTodo[
                                      this.props.userProfile.activeTodo['0']
                                    ].navigationParams
                                  ) {
                                    navigation.navigate(
                                      this.props.userProfile.allTodo[
                                        this.props.userProfile.activeTodo['0']
                                      ].navigationParams,
                                    );
                                  }
                                }}
                              />
                            )}

                          {!(this.props.userProfile.activeTodo['1'] == null) &&
                            !(
                              this.props.userProfile.allTodo[
                                this.props.userProfile.activeTodo['1']
                              ] == null
                            ) && (
                              <View>
                                <Icon
                                  name="ellipsis-vertical-outline"
                                  type="ionicon"
                                  color={theme.COLORS.TEXT3}
                                  style={{
                                    marginVertical: 0,
                                    paddingVertical: 0,
                                    marginLeft: theme.SIZES.BASE + 4,
                                    top: -2,
                                  }}
                                  width={10}
                                  height={14}
                                />

                                <CheckBox
                                  checkedColor={theme.COLORS.PRIMARY2}
                                  uncheckedColor={theme.COLORS.BACKGROUND3}
                                  customTitle={
                                    this.props.userProfile.allTodo[
                                      this.props.userProfile.activeTodo['1']
                                    ].name
                                  }
                                  customSubtitle={
                                    this.props.userProfile.allTodo[
                                      this.props.userProfile.activeTodo['1']
                                    ].rewardText
                                  }
                                  checked={
                                    this.props.userProfile.allTodo[
                                      this.props.userProfile.activeTodo['1']
                                    ].status > 1
                                  }
                                  containerStyle={{
                                    marginVertical: 0,
                                    left: -10,
                                  }}
                                  textStyle={{
                                    color: theme.COLORS.DARK_SECONDARY,
                                    fontFamily: theme.FONTS.TEXT,
                                    fontWeight: '100',
                                  }}
                                  rightIcon={true}
                                  checkedIcon={<Checkmark1 />}
                                  uncheckedIcon={<DisabledCheckmark1 />}
                                  customOnPress={() => {
                                    if (
                                      this.props.userProfile.allTodo[
                                        this.props.userProfile.activeTodo['1']
                                      ].status < 2 &&
                                      this.props.userProfile.allTodo[
                                        this.props.userProfile.activeTodo['1']
                                      ].navigationParams
                                    ) {
                                      navigation.navigate(
                                        this.props.userProfile.allTodo[
                                          this.props.userProfile.activeTodo['1']
                                        ].navigationParams,
                                      );
                                    }
                                  }}
                                />
                              </View>
                            )}

                          {!(this.props.userProfile.activeTodo['2'] == null) &&
                            !(
                              this.props.userProfile.allTodo[
                                this.props.userProfile.activeTodo['2']
                              ] == null
                            ) && (
                              <View>
                                <Icon
                                  name="ellipsis-vertical-outline"
                                  type="ionicon"
                                  color={theme.COLORS.TEXT3}
                                  style={{
                                    marginVertical: 0,
                                    paddingVertical: 0,
                                    marginLeft: theme.SIZES.BASE + 4,
                                    top: -2,
                                  }}
                                  width={10}
                                  height={14}
                                />

                                <CheckBox
                                  checkedColor={theme.COLORS.PRIMARY2}
                                  uncheckedColor={theme.COLORS.BACKGROUND3}
                                  customTitle={
                                    this.props.userProfile.allTodo[
                                      this.props.userProfile.activeTodo['2']
                                    ].name
                                  }
                                  customSubtitle={
                                    this.props.userProfile.allTodo[
                                      this.props.userProfile.activeTodo['2']
                                    ].rewardText
                                  }
                                  checked={
                                    this.props.userProfile.allTodo[
                                      this.props.userProfile.activeTodo['2']
                                    ].status > 1
                                  }
                                  containerStyle={{
                                    marginVertical: 0,
                                    paddingVertical: 0,
                                    left: -10,
                                  }}
                                  textStyle={{
                                    color: theme.COLORS.DARK_SECONDARY,
                                    fontFamily: theme.FONTS.TEXT,
                                    fontWeight: '100',
                                  }}
                                  rightIcon={true}
                                  checkedIcon={<Checkmark1 />}
                                  uncheckedIcon={<DisabledCheckmark1 />}
                                  customOnPress={() => {
                                    if (
                                      this.props.userProfile.allTodo[
                                        this.props.userProfile.activeTodo['2']
                                      ].status < 2 &&
                                      this.props.userProfile.allTodo[
                                        this.props.userProfile.activeTodo['2']
                                      ].navigationParams
                                    ) {
                                      navigation.navigate(
                                        this.props.userProfile.allTodo[
                                          this.props.userProfile.activeTodo['2']
                                        ].navigationParams,
                                      );
                                    }
                                  }}
                                />
                              </View>
                            )}

                          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate('Todo');
                            }}
                            style={{
                              marginLeft: theme.SIZES.BASE,
                              marginTop: theme.SIZES.BASE,
                            }}>
                            <Text style={{color: theme.COLORS.PRIMARY2}}>
                              See All
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>

                    <IntersectWave1
                      style={{left: -120, backgroundColor: theme.COLORS.WHITE}}
                      height={60}
                      width={width + 240}
                    />

                    <View
                      style={{
                        backgroundColor: theme.COLORS.WHITE,
                        paddingHorizontal: theme.SIZES.BASE,
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginHorizontal: theme.SIZES.BASE,
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontFamily: theme.FONTS.TEXT,
                            fontSize: theme.SIZES.H5,
                            marginTop: theme.SIZES.BASE * 1.5,
                          }}>
                          Achievements
                        </Text>

                        <Text
                          style={{
                            textAlign: 'center',
                            color: theme.COLORS.TEXT1,
                            fontSize: theme.SIZES.B1,
                            width: width - theme.SIZES.BASE * 4,
                          }}>
                          Keep up the good work!
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                          marginBottom: theme.SIZES.BASE,
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                          }}>
                          <View
                            style={{
                              ...styles.smallStatsContainer,
                              alignContent: 'center',
                              alignItems: 'center',
                              marginHorizontal: 0,
                              paddingHorizontal: 0,
                            }}>
                            <View
                              style={{
                                alignContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Blob1
                                style={{
                                  position: 'absolute',
                                  color: theme.COLORS.SECONDARY3,
                                  preserveAspectRatio: 'none',
                                  top: -24,
                                }}
                                height={80}
                                width={80}
                              />
                              <Text
                                style={{
                                  fontSize: 22,
                                  fontWeight: 'bold',
                                  fontFamily: theme.FONTS.TEXT,
                                  color: theme.COLORS.SECONDARY1,
                                }}>
                                {Object.keys(this.props.trackingLog).length}
                              </Text>
                            </View>
                          </View>

                          <Text
                            style={{
                              color: theme.COLORS.TEXT1,
                              fontFamily: theme.FONTS.TEXT,
                              fontSize: theme.SIZES.B1,
                            }}>
                            Total Logs
                          </Text>
                          <Text
                            style={{
                              color: theme.COLORS.TEXT1,
                              fontSize: theme.SIZES.C2,
                              fontFamily: theme.FONTS.TEXT,
                            }}></Text>
                        </View>

                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                          }}>
                          <View
                            style={{
                              ...styles.smallStatsContainer,
                              alignContent: 'center',
                              alignItems: 'center',
                              marginHorizontal: 0,
                              paddingHorizontal: 0,
                            }}>
                            <View
                              style={{
                                alignContent: 'center',
                                alignItems: 'center',
                                marginVertical: theme.SIZES.BASE * 0.5,
                              }}>
                              <Blob2
                                style={{
                                  position: 'absolute',
                                  color: theme.COLORS.SECONDARY3,
                                  preserveAspectRatio: 'none',
                                  top: -24,
                                }}
                                height={80}
                                width={80}
                              />

                              <Text
                                style={{
                                  fontSize: 22,
                                  fontWeight: 'bold',
                                  fontFamily: theme.FONTS.TEXT,
                                  color: theme.COLORS.SECONDARY1,
                                }}>
                                {
                                  newChartStats[
                                    'currentConsequtiveEntriesStreak'
                                  ]
                                }
                              </Text>
                            </View>
                          </View>

                          <Text
                            style={{
                              color: theme.COLORS.TEXT1,
                              fontSize: theme.SIZES.C2,
                              fontFamily: theme.FONTS.TEXT,
                              textAlign: 'center',
                            }}>
                            Current Streak
                          </Text>

                          <Text
                            style={{
                              color: theme.COLORS.TEXT1,
                              fontSize: theme.SIZES.C2,
                              fontFamily: theme.FONTS.TEXT,
                            }}></Text>
                        </View>

                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                          }}>
                          <View
                            style={{
                              ...styles.smallStatsContainer,
                              alignContent: 'center',
                              alignItems: 'center',
                              marginHorizontal: 0,
                              paddingHorizontal: 0,
                            }}>
                            <View
                              style={{
                                alignContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Blob4
                                style={{
                                  position: 'absolute',
                                  color: theme.COLORS.SECONDARY3,
                                  preserveAspectRatio: 'none',
                                  top: -12,
                                }}
                                height={70}
                                width={70}
                              />
                              <Text
                                style={{
                                  fontSize: 22,
                                  fontFamily: theme.FONTS.TEXT,
                                  paddingTop: theme.SIZES.BASE * 0.4,
                                  color: theme.COLORS.SECONDARY1,
                                }}>
                                {
                                  newChartStats[
                                    'allTimeConsequtiveEntriesStreak'
                                  ]
                                }
                              </Text>
                            </View>
                          </View>

                          <Text
                            style={{
                              color: theme.COLORS.TEXT1,
                              fontFamily: theme.FONTS.TEXT,
                              fontSize: theme.SIZES.B1,
                            }}>
                            Longest Streak
                          </Text>
                          <Text
                            style={{
                              color: theme.COLORS.TEXT2,
                              fontSize: theme.SIZES.C2,
                              fontFamily: theme.FONTS.TEXT,
                            }}></Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          marginVertical: theme.SIZES.BASE,
                        }}>
                        <Button
                          testID="trackSymptomsButton1"
                          style={{
                            ...styles.button,
                            backgroundColor: theme.COLORS.PRIMARY2,

                            fontSize: 16,
                            fontWeight: '700',
                            width: width - theme.SIZES.BASE * 2,
                          }}
                          titleStyle={{color: theme.COLORS.WHITE}}
                          title="Log Symptoms"
                          onPress={() => {
                            navigation.reset({
                              index: 0,
                              routes: [
                                {
                                  name: 'Track',
                                  state: {
                                    routes: [
                                      {name: 'TrackMain'},
                                      {name: 'TrackSymptoms'},
                                    ],
                                  },
                                },
                              ],
                            });
                          }}></Button>
                      </View>

                      {this.userTrackingMenstration() && (
                        <View>
                          <View
                            style={{
                              marginHorizontal: theme.SIZES.BASE,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                fontFamily: theme.FONTS.TEXT,
                                fontSize: theme.SIZES.H5,
                                marginTop: theme.SIZES.BASE * 1.5,
                              }}>
                              Menstrual Cycle
                            </Text>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-evenly',
                            }}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Blob1
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.ERROR4,
                                      preserveAspectRatio: 'none',
                                      top: -24,
                                    }}
                                    height={80}
                                    width={80}
                                  />
                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontWeight: 'bold',
                                      fontFamily: theme.FONTS.TEXT,
                                      color: theme.COLORS.ERROR2,
                                    }}>
                                    {newChartStats['currentDayInCycle']}
                                  </Text>
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Cycle Day
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT3,
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                Menstruation
                              </Text>
                            </View>

                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    marginVertical: theme.SIZES.BASE * 0.5,
                                  }}>
                                  <Blob2
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.ERROR4,
                                      preserveAspectRatio: 'none',
                                      top: -24,
                                    }}
                                    height={80}
                                    width={80}
                                  />
                                  <Icon
                                    type="ionicon"
                                    name="calendar-outline"
                                    fill={theme.COLORS.ERROR2}
                                    color={theme.COLORS.ERROR2}
                                  />
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Next Period
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT3,
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                {newChartStats['nextPredictedPeriodStr']}
                              </Text>
                            </View>

                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Blob4
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.ERROR4,
                                      preserveAspectRatio: 'none',
                                      top: -12,
                                    }}
                                    height={70}
                                    width={70}
                                  />
                                  {this.getMoodIcon(newChartStats['lastMood'])}
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Last Mood
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT2,
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                {newChartStats['lastMood']}
                              </Text>
                            </View>
                          </View>
                        </View>
                      )}

                      {!this.userTrackingMenstration() && (
                        <View>
                          <View
                            style={{
                              marginHorizontal: theme.SIZES.BASE,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                fontFamily: theme.FONTS.TEXT,
                                fontSize: theme.SIZES.H5,
                                marginTop: theme.SIZES.BASE * 1.5,
                              }}>
                              Health Profile
                            </Text>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-evenly',
                            }}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Blob1
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.ERROR4,
                                      preserveAspectRatio: 'none',
                                      top: -24,
                                    }}
                                    height={80}
                                    width={80}
                                  />
                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontWeight: 'bold',
                                      fontFamily: theme.FONTS.TEXT,
                                      color: theme.COLORS.ERROR2,
                                    }}>
                                    {
                                      Object.keys(
                                        newChartStats['allUniqueSymptomCounts'],
                                      ).length
                                    }
                                  </Text>
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Symptoms
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT3,
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                Tracked
                              </Text>
                            </View>

                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    marginVertical: theme.SIZES.BASE * 0.5,
                                  }}>
                                  <Blob2
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.ERROR4,
                                      preserveAspectRatio: 'none',
                                      top: -24,
                                    }}
                                    height={80}
                                    width={80}
                                  />
                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontWeight: 'bold',
                                      fontFamily: theme.FONTS.TEXT,
                                      color: theme.COLORS.ERROR2,
                                    }}>
                                    {(newChartStats['lastStress'] * 5).toFixed(
                                      2,
                                    )}
                                  </Text>
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Last Stress
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT3,
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                rating
                              </Text>
                            </View>

                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                              }}>
                              <View
                                style={{
                                  ...styles.smallStatsContainer,
                                  alignContent: 'center',
                                  alignItems: 'center',
                                  marginHorizontal: 0,
                                  paddingHorizontal: 0,
                                }}>
                                <View
                                  style={{
                                    alignContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Blob4
                                    style={{
                                      position: 'absolute',
                                      color: theme.COLORS.ERROR4,
                                      preserveAspectRatio: 'none',
                                      top: -12,
                                    }}
                                    height={70}
                                    width={70}
                                  />
                                  {this.getMoodIcon(newChartStats['lastMood'])}
                                </View>
                              </View>

                              <Text
                                style={{
                                  color: theme.COLORS.TEXT1,
                                  fontFamily: theme.FONTS.TEXT,
                                  fontSize: theme.SIZES.B1,
                                }}>
                                Last Mood
                              </Text>
                              <Text
                                style={{
                                  color: theme.COLORS.TEXT2,
                                  fontSize: theme.SIZES.C2,
                                  fontFamily: theme.FONTS.TEXT,
                                }}>
                                {newChartStats['lastMood']}
                              </Text>
                            </View>
                          </View>
                        </View>
                      )}

                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          marginVertical: theme.SIZES.BASE,
                        }}>
                        <Button
                          testID="viewInsightsButton1"
                          style={{
                            ...styles.button,
                            backgroundColor: theme.COLORS.WHITE,

                            fontSize: 16,
                            fontWeight: '700',
                            width: width - theme.SIZES.BASE * 2,
                            borderWidth: 2,
                            borderColor: theme.COLORS.PRIMARY2,
                          }}
                          titleStyle={{color: theme.COLORS.PRIMARY2}}
                          title="View Insights"
                          onPress={() => {
                            this.props.navigation.navigate('TrackMain');
                          }}></Button>
                      </View>

                      <View
                        style={{
                          marginHorizontal: theme.SIZES.BASE,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontFamily: theme.FONTS.TEXT,
                            fontSize: theme.SIZES.H5,
                            marginTop: theme.SIZES.BASE * 1.5,
                          }}>
                          Your Garden
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                          }}>
                          <View
                            style={{
                              ...styles.smallStatsContainer,
                              alignContent: 'center',
                              alignItems: 'center',
                              marginHorizontal: 0,
                              paddingHorizontal: 0,
                            }}>
                            <View
                              style={{
                                alignContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Blob1
                                style={{
                                  position: 'absolute',
                                  color: theme.COLORS.TERTIARY2,
                                  preserveAspectRatio: 'none',
                                  top: -24,
                                }}
                                height={80}
                                width={80}
                              />
                              <Text
                                style={{
                                  fontSize: 22,
                                  fontWeight: 'bold',
                                  fontFamily: theme.FONTS.TEXT,
                                  color: theme.COLORS.TERTIARY1,
                                }}>
                                {garden.playerInventory.numSeeds}
                              </Text>
                            </View>
                          </View>

                          <Text
                            style={{
                              color: theme.COLORS.TEXT1,
                              fontFamily: theme.FONTS.TEXT,
                              fontSize: theme.SIZES.B1,
                            }}>
                            Seeds
                          </Text>
                          <Text
                            style={{
                              color: theme.COLORS.TEXT3,
                              fontSize: theme.SIZES.C2,
                              fontFamily: theme.FONTS.TEXT,
                            }}>
                            Earned
                          </Text>
                        </View>

                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                          }}>
                          <View
                            style={{
                              ...styles.smallStatsContainer,
                              alignContent: 'center',
                              alignItems: 'center',
                              marginHorizontal: 0,
                              paddingHorizontal: 0,
                            }}>
                            <View
                              style={{
                                alignContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Blob2
                                style={{
                                  position: 'absolute',
                                  color: theme.COLORS.TERTIARY2,
                                  preserveAspectRatio: 'none',
                                  top: -24,
                                }}
                                height={80}
                                width={80}
                              />
                              <Text
                                style={{
                                  fontSize: 22,
                                  fontFamily: theme.FONTS.TEXT,
                                  paddingTop: theme.SIZES.BASE * 0.4,
                                  color: theme.COLORS.TERTIARY1,
                                }}>
                                {this.getNumPlantsInGarden(garden)}
                              </Text>
                            </View>
                          </View>

                          <Text
                            style={{
                              color: theme.COLORS.TEXT1,
                              fontFamily: theme.FONTS.TEXT,
                              fontSize: theme.SIZES.B1,
                            }}>
                            Plants
                          </Text>
                          <Text
                            style={{
                              color: theme.COLORS.TEXT3,
                              fontSize: theme.SIZES.C2,
                              fontFamily: theme.FONTS.TEXT,
                            }}>
                            in Garden
                          </Text>
                        </View>

                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                          }}>
                          <View
                            style={{
                              ...styles.smallStatsContainer,
                              alignContent: 'center',
                              alignItems: 'center',
                              marginHorizontal: 0,
                              paddingHorizontal: 0,
                            }}>
                            <View
                              style={{
                                alignContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Blob4
                                style={{
                                  position: 'absolute',
                                  color: theme.COLORS.TERTIARY2,
                                  preserveAspectRatio: 'none',
                                  top: -12,
                                }}
                                height={70}
                                width={70}
                              />
                              <Text
                                style={{
                                  fontSize: 22,
                                  fontFamily: theme.FONTS.TEXT,
                                  paddingTop: theme.SIZES.BASE * 0.4,
                                  color: theme.COLORS.TERTIARY1,
                                }}>
                                {this.getNumWeedsInGarden(garden)}
                              </Text>
                            </View>
                          </View>

                          <Text
                            style={{
                              color: theme.COLORS.TEXT1,
                              fontFamily: theme.FONTS.TEXT,
                              fontSize: theme.SIZES.B1,
                            }}>
                            Weeds
                          </Text>
                          <Text
                            style={{
                              color: theme.COLORS.TEXT2,
                              fontSize: theme.SIZES.C2,
                              fontFamily: theme.FONTS.TEXT,
                            }}></Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          marginVertical: theme.SIZES.BASE,
                        }}>
                        <Button
                          testID="plantStoreButton1"
                          style={{
                            ...styles.button,
                            backgroundColor: theme.COLORS.WHITE,

                            fontSize: 16,
                            fontWeight: '700',
                            width: width - theme.SIZES.BASE * 2,
                            borderWidth: 2,
                            borderColor: theme.COLORS.PRIMARY2,
                          }}
                          titleStyle={{color: theme.COLORS.PRIMARY2}}
                          title="View Plant Store"
                          onPress={() => {
                            navigation.reset({
                              index: 0,
                              routes: [
                                {
                                  name: 'Garden',
                                  state: {
                                    routes: [
                                      {name: 'GardenMain'},
                                      {name: 'GardenStore'},
                                    ],
                                  },
                                },
                              ],
                            });
                          }}></Button>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </View>
          )}
        </GardenContext.Consumer>

        <Footer navigation={navigation} tabName="Home" />
      </View>
    );
  }
}
HomeScreen.contextType = GardenContext; // This part is important to access context values

const mapStateToProps = (state, props) => {
  return {
    trackedSymptoms: state.trackSymptoms.trackingSymptoms,
    trackingLog: state.trackLog.logHistory,
    userProfile: state.userProfile,
    userAnalytics: state.userAnalytics,
    amieChatbot: state.amieChatbot,
    endoCourse: state.learn.endo101Course,
    // assessment: state.assessment.selectLog,
  };
};
export default connect(mapStateToProps)(HomeScreen);
