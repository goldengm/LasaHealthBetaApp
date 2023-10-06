import React from 'react';
import {Dimensions, ScrollView, View, DeviceEventEmitter} from 'react-native';
import {Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import produce from 'immer';
import {KeyboardAvoidingView} from 'react-native';

import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';
import {Images, theme, styles} from '../../constants';
import {
  Button,
  Card,
  CheckBox,
  Footer,
  SearchDropdown,
  Icon,
  TouchableOpacity,
  RoundedTopContainer,
} from '../../components';
import {topicsList} from '../../constants/learn/condTopicsList';
import {getWikiPage} from '../../constants/learn/condWikiIndex';
import {
  addFavoriteLearnAction,
  removeFavoriteLearnAction,
} from '../../redux/actions/learnActions';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import {
  calculateCurrentCourseCompletionPercent,
  getflowerProgressIcon,
  getEndo101ProgressMessage,
} from '../../shared/CourseUtils';

import {getOS} from '../../shared/PlatformUtils';
//swap getOS() for getOS()
const iosPlatform = () => getOS() == 'ios';

const {width} = Dimensions.get('screen');

class LearnScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;

    let initialStates = {};
    topicsList.forEach((item, index) => {
      initialStates[item] = props.favorites.includes(item);
    });

    this.state = {
      favorites: {...initialStates},
    };
    console.log('Checking learn state');
  }

  async componentDidMount() {
    this.mixpanel.track('learnScreen_reached');
    // let guest = await AsyncStorage.setItem('GUEST_MODE', 'false');
    if (!this.props.userProfile.appIntroTutorialComplete.includes(1)) {
      setTimeout(() => {
        //  giving session controller 1 seconds to load before sending trigger
        console.log('Showing tutorial for learn screen');
        DeviceEventEmitter.emit('event.showtutorialPage', {
          pageNumber: 1,
        });
      }, 1000);
    }
  }

  setFavoriteTopic = (item, val) => {
    this.setState(
      produce(draft => {
        draft.favorites[item] = val;
      }),
    );
  };

  render() {
    const {navigation} = this.props;
    let indexCount = 0;
    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customHeaderPaddingHeight={iosPlatform() ? 100 : 90}
        customImageName={Images.ui.BackgroundGradient1}>
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
                }}>
                <View
                  style={{
                    paddingHorizontal: theme.SIZES.BASE * 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: theme.SIZES.BASE * 2,
                  }}>
                  <Text
                    style={{
                      color: theme.COLORS.ERROR1,
                      fontSize: theme.SIZES.B1,
                      fontWeight: '700',
                      textAlign: 'center',
                    }}>
                    LEARN MORE
                  </Text>
                  <Text
                    style={{
                      color: theme.COLORS.TEXT1,
                      fontSize: theme.SIZES.H4,
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    Educational Library
                  </Text>
                </View>

                <RoundedTopContainer
                  style={{
                    paddingHorizontal: theme.SIZES.BASE,
                    marginTop: theme.SIZES.BASE * 0.8,
                  }}>
                  <View
                    style={{
                      marginTop: theme.SIZES.BASE,
                      marginHorizontal: theme.SIZES.BASE,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontFamily: theme.FONTS.TEXT,
                        fontSize: theme.SIZES.H5,
                        marginTop: theme.SIZES.BASE,
                      }}>
                      Your course
                    </Text>
                  </View>

                  <View style={{}}>
                    <LinearGradient
                      style={{
                        marginHorizontal: 0,
                        marginVertical: theme.SIZES.BASE,
                        paddingVertical: theme.SIZES.BASE,
                        borderRadius: 20,
                        zIndex: 5,
                        elevations: 5,
                      }}
                      colors={[theme.COLORS.TERTIARY4, theme.COLORS.PRIMARY4]}
                      locations={[0.0, 0.7]}
                      start={{x: 0, y: 0.0}}
                      end={{x: 1, y: 1.0}}>
                      <TouchableOpacity
                        testID="endo101CourseButton"
                        onPress={() => {
                          navigation.navigate('Learn', {
                            screen: 'Endo101ProgressScreen',
                          });
                        }}>
                        <View
                          style={{
                            position: 'absolute',
                            right: 20,
                          }}>
                          {getflowerProgressIcon(
                            calculateCurrentCourseCompletionPercent(
                              this.props.endoCourse,
                            ),
                          )}
                        </View>
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

                  {this.props.userPublicProfile.location ==
                    'LasaHealthCommunityTestHQ' && (
                    <View
                      style={{
                        paddingHorizontal: theme.SIZES.BASE * 2,
                        alignItems: 'center',
                        marginBottom: theme.SIZES.BASE * 2,
                      }}>
                      <Button
                        testID="newCommunityButton"
                        style={{
                          ...styles.button,
                          color: theme.COLORS.DEFAULT,
                          width: width - theme.SIZES.BASE * 2,
                        }}
                        title="Go To New Q&A"
                        titleStyle={{
                          color: theme.COLORS.WHITE,
                          fontFamily: theme.FONTS.TEXT,
                          fontSize: theme.SIZES.H6,
                        }}
                        onPress={() => {
                          this.props.navigation.navigate('QnAScreen');
                        }}
                      />
                    </View>
                  )}

                  {this.props.favorites.length > 0 && (
                    <View>
                      <View
                        style={{
                          marginTop: theme.SIZES.BASE,
                          marginHorizontal: theme.SIZES.BASE,
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontFamily: theme.FONTS.TEXT,
                            fontSize: theme.SIZES.H5,
                            marginTop: theme.SIZES.BASE,
                          }}>
                          Saved Topics
                        </Text>
                      </View>
                      <ScrollView horizontal>
                        {Array.from(this.props.favorites).map((item, index) => {
                          indexCount = indexCount + 1;
                          return (
                            <Card
                              item={{
                                image: getWikiPage(item, {
                                  navigate: () => {},
                                })[1],
                                title: item,
                                // cta: "Learn more",
                              }}
                              key={indexCount}
                              style={styles.condCard}
                              customOnPress={() =>
                                navigation.navigate('LearnCondition', {
                                  conditionName: item,
                                })
                              }
                            />
                          );
                        })}
                      </ScrollView>
                    </View>
                  )}
                  <View
                    style={{
                      marginTop: theme.SIZES.BASE,
                      marginHorizontal: theme.SIZES.BASE,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontFamily: theme.FONTS.TEXT,
                          fontSize: theme.SIZES.H5,
                          marginTop: theme.SIZES.BASE,
                        }}>
                        A-Z Conditions
                      </Text>
                      {/* <Button
                        customDebounceLength={8000}
                        testID="assmtButton"
                        style={{
                          ...styles.button,
                          width: width * 0.4,
                          marginHorizontal: 30
                        }}
                        onPress={() => {
                          if (this.props.assessment.length > 0) {
                            navigation.navigate('AssessmentResult')
                          } else {
                            navigation.navigate('AssessmentNew')
                          }
                        }}
                        titleStyle={{
                          color: theme.COLORS.WHITE,
                          fontFamily: theme.FONTS.HEADER,
                        }}
                        title={this.props.assessment.length > 0 ? "View Assessment" : "Take Assessment"}
                      /> */}
                    </View>

                    <Text
                      style={{
                        color: theme.COLORS.TEXT2,
                        marginVertical: theme.SIZES.BASE,
                      }}>
                      Frequently asked questions about common health conditions
                      from US Department of Health
                    </Text>
                  </View>

                  <SearchDropdown
                    navigation={navigation}
                    topicsList={topicsList}
                  />

                  {topicsList.map((item, index) => {
                    indexCount = indexCount + 1;
                    return (
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                        key={indexCount}>
                        <View style={{flexDirection: 'row'}}>
                          <View
                            style={{
                              alignContent: 'center',
                              alignItems: 'flex-start',
                              marginTop: theme.SIZES.BASE * 1.1,
                            }}>
                            <CheckBox
                              checkedIcon="star"
                              uncheckedIcon="star-o"
                              checked={this.state.favorites[item]}
                              onPress={event => {
                                if (!this.state.favorites[item]) {
                                  this.props.dispatch(
                                    addFavoriteLearnAction(item),
                                  );
                                } else {
                                  this.props.dispatch(
                                    removeFavoriteLearnAction(item),
                                  );
                                }

                                this.setFavoriteTopic(
                                  item,
                                  !this.state.favorites[item],
                                );
                              }}></CheckBox>
                          </View>
                          <Button
                            style={{
                              ...styles.buttonTextOnly,
                              width: width - 200,
                              height: 60,
                              backgroundColor: theme.COLORS.WHITE,
                              justifyContent: 'flex-start',
                              color: theme.COLORS.TEXT1,
                              marginLeft: 0,
                              paddingLeft: 0,
                            }}
                            onPress={() =>
                              navigation.navigate('LearnCondition', {
                                conditionName: item,
                              })
                            }>
                            {item}
                          </Button>
                        </View>

                        <View
                          style={{
                            height: 26,
                            width: 26,
                            marginTop: theme.SIZES.BASE * 1.1,
                            marginRight: theme.SIZES.BASE,
                          }}>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate('LearnCondition', {
                                conditionName: item,
                              })
                            }>
                            <Icon
                              family="ionicon"
                              name="chevron-forward-outline"
                              fill={theme.COLORS.DEFAULT}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })}
                </RoundedTopContainer>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
          <Footer navigation={navigation} tabName="Learn" />
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    favorites: state.learn.favorites,
    recommended: state.learn.recommended,
    endoCourse: state.learn.endo101Course,
    userProfile: state.userProfile,
    userPublicProfile: state.userPublicProfile,
    // assessment: state.assessment.selectLog
  };
};
export default connect(mapStateToProps)(LearnScreen);
