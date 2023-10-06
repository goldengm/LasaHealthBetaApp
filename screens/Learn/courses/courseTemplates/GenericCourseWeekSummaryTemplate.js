import React from 'react';
import {StyleSheet, Dimensions, ScrollView, View, Image} from 'react-native';
import {Text, LinearProgress} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
// import Images from "../../../../constants/Images";
// import ModalDropdown from "react-native-modal-dropdown";

import {connect} from 'react-redux';
import produce from 'immer';

import {theme, styles, Images} from '../../../../constants';
import {
  Button,
  Card,
  CheckBox,
  Footer,
  SearchDropdown,
  Icon,
  Input,
  Tabs,
  TouchableOpacity,
} from '../../../../components';
import {topicsList} from '../../../../constants/learn/condTopicsList';
import {
  // topicsList,
  screeningList,
  getWikiPage,
} from '../../../../constants/learn/condWikiIndex';
import {
  addFavoriteLearnAction,
  removeFavoriteLearnAction,
} from '../../../../redux/actions/learnActions';
import {auth} from '../../../../shared/firebaseUtils';

import {KeyboardAvoidingView} from 'react-native';
// import { TouchableOpacity } from "react-native-gesture-handler";

import ScreenTemplateWrapper from '../../../../shared/ScreenTemplateWrapper';
import LinearGradient from 'react-native-linear-gradient';

import Checkmark1 from '../../../../assets/ui/general/Checkmark1.svg';
import DisabledCheckmark1 from '../../../../assets/ui/general/DisabledCheckmark1.svg';
import InProgress1 from '../../../../assets/ui/general/InProgress1.svg';

import {getOS} from '../../../../shared/PlatformUtils';
//swap getOS() for getOS()
const iosPlatform = () => getOS() == 'ios';

const {width, height} = Dimensions.get('screen');

class LearnScreen extends React.Component {
  constructor(props) {
    super(props);

    let initialStates = {};
    topicsList.forEach((item, index) => {
      initialStates[item] = props.favorites.includes(item);
    });

    this.state = {
      favorites: {...initialStates},
    };
    console.log('Checking learn state');
  }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  // componentDidUpdate(prevProp, prevState) {
  //   const { navigation } = this.props;
  //   this.unsubscribe = auth.onAuthStateChanged(function (user) {
  //     if (user) {
  //     } else {
  //       // No user is signed in.
  //       navigation.reset({
  //         index: 0,
  //         routes: [
  //           {
  //             name: "Login",
  //             state: {
  //               routes: [{ name: "Login" }],
  //             },
  //           },
  //         ],
  //       });
  //       // navigation.canGoBack() && navigation.popToTop();
  //     }
  //   });
  //   return this.unsubscribe;
  // }

  setFavoriteTopic = (item, val) => {
    this.setState(
      produce(draft => {
        draft.favorites[item] = val;
      }),
    );
  };

  // import ScreenTemplateWrapper from "../../../../shared/ScreenTemplateWrapper";

  // <ScreenTemplateWrapper headerPadding={true} width={width}>
  //   {/*
  //   borderTopLeftRadius: theme.SIZES.HEADERRADIUS,
  //   borderTopRightRadius: theme.SIZES.HEADERRADIUS,
  //   */}

  render() {
    const {navigation} = this.props;
    let indexCount = 0;
    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customHeaderPaddingHeight={iosPlatform() ? 145 : 140}
        customImageName={Images.ui.BackgroundGradient1}>
        {/* 
        borderTopLeftRadius: theme.SIZES.HEADERRADIUS,
        borderTopRightRadius: theme.SIZES.HEADERRADIUS, 
        */}
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            // borderTopLeftRadius: theme.SIZES.HEADERRADIUS,
            // borderTopRightRadius: theme.SIZES.HEADERRADIUS,

            // backgroundColor: theme.COLORS.WHITE,
          }}>
          <View
            style={{
              ...styles.home,
              flex: 1,
              alignContent: 'center',
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
                contentContainerStyle={{
                  ...styles.articles,
                  marginTop: 0,
                  paddingTop: 0,
                  // borderTopLeftRadius: theme.SIZES.HEADERRADIUS,
                  // borderTopRightRadius: theme.SIZES.HEADERRADIUS,
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
                      // ...styles.boldTitle,
                      color: theme.COLORS.ERROR1,
                      fontSize: theme.SIZES.B1,
                      fontWeight: '700',
                      // textShadowColor: theme.COLORS.DARK_BLACK,
                      // textShadowRadius: 20,
                      textAlign: 'center',
                    }}>
                    WEEK 1
                  </Text>
                  <Text
                    style={{
                      // ...styles.boldTitle,
                      color: theme.COLORS.TEXT1,
                      fontSize: theme.SIZES.H4,
                      fontWeight: '600',
                      // textShadowColor: theme.COLORS.DARK_BLACK,
                      // textShadowRadius: 20,
                      textAlign: 'center',
                    }}>
                    Getting Started
                  </Text>

                  <Text
                    style={{
                      // ...styles.boldTitle,
                      color: theme.COLORS.TEXT2,
                      fontSize: theme.SIZES.C2,
                      // fontWeight: "700",
                      // textShadowColor: theme.COLORS.DARK_BLACK,
                      // textShadowRadius: 20,
                      textAlign: 'center',
                      marginTop: theme.SIZES.BASE * 0.5,
                    }}>
                    Learn about the course, set goals, and anser your most
                    pressing questions
                  </Text>
                </View>
                <View
                  // style={{
                  //   flex: 1,
                  //   marginHorizontal: theme.SIZES.BASE,
                  // }}
                  style={{
                    ...styles.standardAppBackgroundContainer,
                    borderTopLeftRadius: theme.SIZES.HEADERRADIUS,
                    borderTopRightRadius: theme.SIZES.HEADERRADIUS,
                    backgroundColor: theme.COLORS.WHITE,
                    paddingHorizontal: theme.SIZES.BASE,
                  }}>
                  <View
                    style={{
                      ...styles.centerHeader,
                      // height: 30,
                      marginTop: 0,
                      paddingTop: 0,
                      // width: "100%",
                      alignItems: 'center',
                      marginTop: theme.SIZES.BASE,
                      marginHorizontal: theme.SIZES.BASE,
                    }}>
                    <LinearProgress
                      style={{
                        marginTop: theme.SIZES.BASE,
                        height: 50,
                        // width: 160,
                        borderRadius: 16,
                        // borderWidth: 1,
                        // borderBottomWidth: 2,
                        // borderColor: theme.COLORS.BACKGROUND3,
                      }}
                      color={theme.COLORS.SECONDARY2}
                      trackColor={theme.COLORS.BACKGROUND3}
                      value={0.3}
                      variant="determinate"
                    />
                    <View
                      style={{
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                      }}>
                      <Text
                        style={{
                          textAlign: 'left',
                          top: -36,
                          color: theme.COLORS.TEXT1,
                          fontWeight: 'bold',
                        }}>
                        Your progress
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: theme.SIZES.BASE,
                      marginHorizontal: theme.SIZES.BASE,
                    }}>
                    <View
                      style={{
                        ...styles.button,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: theme.COLORS.TERTIARY2,
                        width: width * 0.5 - theme.SIZES.BASE * 2.5,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Icon
                          type="ionicon"
                          // family="ionicon"
                          name="time-outline"
                          fill={theme.COLORS.TERTIARY1}
                          color={theme.COLORS.TERTIARY1}
                        />
                        <Text
                          style={{
                            color: theme.COLORS.TERTIARY1,
                            marginLeft: theme.SIZES.BASE * 0.5,
                          }}>
                          30 min
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        ...styles.button,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: theme.COLORS.PRIMARY2,
                        width: width * 0.5 - theme.SIZES.BASE * 2.5,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Icon
                          type="ionicon"
                          // family="ionicon"
                          name="calendar-outline"
                          fill={theme.COLORS.PRIMARY1}
                          color={theme.COLORS.PRIMARY1}
                        />
                        <Text
                          style={{
                            color: theme.COLORS.PRIMARY1,
                            marginLeft: theme.SIZES.BASE * 0.5,
                          }}>
                          Due 28 Feb
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      marginTop: theme.SIZES.BASE,
                      marginHorizontal: theme.SIZES.BASE,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Endo101Week1Module1Page1');
                      }}>
                      <CheckBox
                        checkedColor={theme.COLORS.PRIMARY2}
                        uncheckedColor={theme.COLORS.BACKGROUND3}
                        title="Introduction"
                        // key={indexCount}
                        // checked={this.props.userProfile.onboardingProgress >= 2}
                        checked={true}
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
                        rightIcon={false}
                        rightText="3 min"
                        checkedIcon={<Checkmark1 />}
                        // checkedIcon="check-circle"
                        uncheckedIcon="circle"
                      />
                    </TouchableOpacity>

                    <Icon
                      name="ellipsis-vertical-outline"
                      type="ionicon"
                      // family="amielineal"
                      // // size={16}
                      // name="SvgSolidClose"
                      // name="SvgClose"
                      // color={theme.COLORS[isWhite ? "WHITE" : "ICON"]}
                      // fill={theme.COLORS.BACKGROUND3}
                      color={theme.COLORS.TEXT3}
                      // style={style}
                      style={{
                        marginVertical: 0,
                        paddingVertical: 0,
                        marginLeft: theme.SIZES.BASE + 4,
                        top: -2,
                      }}
                      width={10}
                      height={14}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Endo101Week1Module1Page2');
                      }}>
                      <CheckBox
                        checkedColor={theme.COLORS.PRIMARY2}
                        uncheckedColor={theme.COLORS.BACKGROUND3}
                        title="Learn about you"
                        // key={indexCount}
                        // checked={this.props.userProfile.onboardingProgress >= 4}
                        checked={true}
                        containerStyle={{
                          marginVertical: 0,
                          left: -10,
                        }}
                        textStyle={{
                          color: theme.COLORS.DARK_SECONDARY,
                          fontFamily: theme.FONTS.TEXT,
                          fontWeight: '100',
                        }}
                        rightIcon={false}
                        rightText="3 min"
                        checkedIcon={<Checkmark1 />}
                        // checkedIcon="check-circle"
                        uncheckedIcon="circle"
                      />
                    </TouchableOpacity>

                    <Icon
                      name="ellipsis-vertical-outline"
                      type="ionicon"
                      // family="amielineal"
                      // // size={16}
                      // name="SvgSolidClose"
                      // name="SvgClose"
                      // color={theme.COLORS[isWhite ? "WHITE" : "ICON"]}
                      // fill={theme.COLORS.BACKGROUND3}
                      color={theme.COLORS.TEXT3}
                      // style={style}
                      style={{
                        marginVertical: 0,
                        paddingVertical: 0,
                        marginLeft: theme.SIZES.BASE + 4,
                        top: -2,
                      }}
                      width={10}
                      height={14}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Endo101Week1Module1Page3');
                      }}>
                      <CheckBox
                        checkedColor={theme.COLORS.PRIMARY2}
                        uncheckedColor={theme.COLORS.BACKGROUND3}
                        title="Meet your coach"
                        // key={indexCount}
                        checked={true}
                        // checked={
                        //   Object.entries(this.props.trackingLog).length > 0
                        // }
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
                        rightIcon={false}
                        rightText="4 min"
                        checkedIcon={<InProgress1 />}
                        // checkedIcon="check-circle"
                        uncheckedIcon="circle"
                      />
                    </TouchableOpacity>

                    <Icon
                      name="ellipsis-vertical-outline"
                      type="ionicon"
                      // family="amielineal"
                      // // size={16}
                      // name="SvgSolidClose"
                      // name="SvgClose"
                      // color={theme.COLORS[isWhite ? "WHITE" : "ICON"]}
                      // fill={theme.COLORS.BACKGROUND3}
                      color={theme.COLORS.TEXT3}
                      // style={style}
                      style={{
                        marginVertical: 0,
                        paddingVertical: 0,
                        marginLeft: theme.SIZES.BASE + 4,
                        top: -2,
                      }}
                      width={10}
                      height={14}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Endo101Week1Module1Page3');
                      }}>
                      <CheckBox
                        checkedColor={theme.COLORS.PRIMARY2}
                        uncheckedColor={theme.COLORS.BACKGROUND3}
                        title="What is Endo?"
                        // key={indexCount}
                        checked={false}
                        containerStyle={{
                          marginVertical: theme.SIZES.BASE * 0.2,
                          marginTop: 0,
                          left: -10,
                        }}
                        textStyle={{
                          color: theme.COLORS.DARK_SECONDARY,
                          fontFamily: theme.FONTS.TEXT,
                          fontWeight: '100',
                        }}
                        rightIcon={false}
                        rightText="5 min"
                        checkedIcon={<Checkmark1 />}
                        uncheckedIcon={<DisabledCheckmark1 />}
                      />
                    </TouchableOpacity>
                    {/* 
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Endo101Week1Module1Page1");
                      }}
                    >
                      <Text
                        h4
                        style={{
                          fontFamily: theme.FONTS.TEXT,
                        }}
                      >
                        Introduction
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Endo101Week1Module1Page2");
                      }}
                    >
                      <Text
                        h4
                        style={{
                          fontFamily: theme.FONTS.TEXT,
                        }}
                      >
                        Learn about you
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Endo101Week1Module1Page3");
                      }}
                    >
                      <Text
                        h4
                        style={{
                          fontFamily: theme.FONTS.TEXT,
                        }}
                      >
                        Meet your coach
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        // navigation.navigate("Endo101Week1Module1Page3");
                      }}
                    >
                      <Text
                        h4
                        style={{
                          fontFamily: theme.FONTS.TEXT,
                        }}
                      >
                        What is Endo?
                      </Text>
                    </TouchableOpacity> */}

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
                          navigation.navigate('Endo101Week1Module1Page1');
                        }}></Button>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
          <Footer navigation={navigation} tabName="Learn" />
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

{
  /* <View
                          style={{
                            flex: 0.8,
                            alignContent: "center",
                            alignItems: "flex-end",
                          }}
                        >
                          <Button
                            style={{
                              ...styles.buttonTextOnly,
                              width: theme.SIZES.BASE * 14,
                            }}
                            onPress={() =>
                              navigation.navigate("LearnCondition", {
                                conditionName: item,
                              })
                            }
                          >
                            {item}
                          </Button>
                        </View>
                        <View
                          style={{
                            flex: 0.2,
                            alignContent: "center",
                            alignItems: "flex-start",
                            marginTop: theme.SIZES.BASE * 0.8,
                          }}
                        >
                          <CheckBox
                            // title=""
                            // checkedColor="gray"
                            // iconType="star"
                            checkedIcon="star"
                            uncheckedIcon="star-o"
                            checked={this.state.favorites[item]}
                            onPress={(event) => {
                              if (!this.state.favorites[item]) {
                                // settt.add(item);
                                // this.setFavoriteTopic(item, !this.state[item]);
                                this.props.dispatch(
                                  addFavoriteLearnAction(item)
                                );
                              } else {
                                // settt.delete(item);
                                // this.setFavoriteTopic(item, !this.state[item]);
                                this.props.dispatch(
                                  removeFavoriteLearnAction(item)
                                );
                              }

                              this.setFavoriteTopic(
                                item,
                                !this.state.favorites[item]
                              );

                              // console.log(
                              //   item,
                              //   event,
                              //   this.props.favorites.includes(item)
                              // );
                              // // console.log(item, event, settt);
                            }}
                          ></CheckBox>
                        </View> */
}

const mapStateToProps = (state, props) => {
  return {
    favorites: state.learn.favorites,
    recommended: state.learn.recommended,
  };
};
export default connect(mapStateToProps)(LearnScreen);

// export default LearnScreen;
