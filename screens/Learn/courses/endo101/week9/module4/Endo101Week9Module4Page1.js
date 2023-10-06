import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text, Slider, CheckBox} from 'react-native-elements';
import produce from 'immer';
import {MixpanelInstance} from '../../../../../../shared/UsageAnalyticsUtils';
import {styles, theme, Images} from '../../../../../../constants';
import {Button, Input} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {
  updateEndo101Week9ProgressAction,
  updateEndo101Week9Module4Q1Action,
  updateEndo101Week9Module4Q3Action,
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
      correctAnswer: false,
      wrongAnswer: false,

      selectedIndex: -1,
      slider1Updated: false,
      // inputVisible: false,
      // inputText: "",

      multiOptionPickerList: [
        [0, 'Acupuncture'],
        [1, 'Chiropractic care'],
        [2, 'Yoga'],
        [3, 'Mindfulness'],
        [4, 'Traditional Chinese Medicine'],
        [5, 'Ayurveda'],
        [6, 'CBD'],
        [7, 'Supplements'],
        [8, 'Marijuana'],
        [9, 'Other [please specify]'],
      ],
      multiSelectedOptions: {},
    };
  }

  setSlider1Updated = slider1UpdatedP => {
    this.setState({slider1Updated: slider1UpdatedP});
  };

  setSelectedIndex = selectedIndexP => {
    this.setState({selectedIndex: selectedIndexP});
  };

  // setMultiOptionPickerList = async (multiOptionPickerListP) => {
  //   this.setState({ multiOptionPickerList: multiOptionPickerListP });
  // };

  // addToMultiSelectOptionPickerList = (newOption) => {
  //   this.setState(
  //     produce((draft) => {
  //       if (!draft.multiOptionPickerList.includes(newOption)) {
  //         draft.multiOptionPickerList.push([
  //           draft.multiOptionPickerList.length,
  //           newOption,
  //         ]);
  //       }
  //     })
  //   );
  // };

  addSelectedFromMultiSelect = symptomName => {
    this.setState(
      produce(draft => {
        draft.multiSelectedOptions[symptomName] = 0.0;
      }),
    );
  };

  removeSelectedFromMultiSelect = symptomName => {
    // console.log("REMOVVVVE", symptomName);
    this.setState(
      produce(draft => {
        if (Object.keys(draft.multiSelectedOptions).includes(symptomName)) {
          draft.multiSelectedOptions = Object.fromEntries(
            Object.entries(draft.multiSelectedOptions).filter(
              ([key, value]) => key !== symptomName,
            ),
          );
        }
      }),
    );
  };

  setValueOfSelected = (symptomName, value) => {
    // console.log("Slider val: ", symptomName, value);
    console.log('Multiselected options: ', this.state.multiSelectedOptions);
    this.setState(
      produce(draft => {
        if (Object.keys(draft.multiSelectedOptions).includes(symptomName)) {
          draft.multiSelectedOptions[symptomName] = value;
        }
      }),
    );
  };

  // setInputText = (inputTextP) => {
  //   this.setState({ inputText: inputTextP });
  // };

  // setInputVisible = async (inputVisibleP) => {
  //   Promise.resolve()
  //     .then(() => this.setState({ inputVisible: inputVisibleP }))
  //     .catch((error) => {
  //       console.log(error);
  //       // An error happened.
  //     });
  //   // .then(() => this.syncUserResponseContainerHeight());
  //   // this.setState({ inputVisible: inputVisibleP });
  // };

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

  // inputModal = (dispatch = null) => {
  //   const { inputVisible } = this.state;
  //   const {
  //     level1Path,
  //     level2Path,
  //     customOnPressUpdate,
  //     defaultOnPressUpdateDisabled,
  //   } = this.props;
  //   return (
  //     <View
  //       style={{
  //         // flex: 1,
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Modal
  //         animationType="slide"
  //         transparent={true}
  //         visible={inputVisible}
  //         customOnBackdropPress={() => {
  //           this.setInputVisible(!inputVisible);
  //         }}
  //         onRequestClose={() => {
  //           // Alert.alert("Modal has been closed.");
  //           this.setInputVisible(!inputVisible);
  //         }}
  //       >
  //         <View
  //           style={{
  //             flex: 1,
  //             justifyContent: "center",
  //             alignItems: "center",
  //             // marginTop: 22,
  //           }}
  //         >
  //           <View
  //             style={{
  //               // margin: 20,
  //               backgroundColor: theme.COLORS.WHITE,
  //               borderRadius: 20,
  //               // paddingHorizontal: theme.SIZES.BASE * 2,
  //               // paddingTop: theme.SIZES.BASE * 2,
  //               // paddingBottom: theme.SIZES.BASE,
  //               padding: theme.SIZES.BASE * 2,
  //               alignItems: "center",
  //               shadowColor: theme.COLORS.BLACK,
  //               shadowOffset: {
  //                 width: 0,
  //                 height: 2,
  //               },
  //               shadowOpacity: 0.25,
  //               shadowRadius: 4,
  //               elevation: 5,
  //               // marginVertical: theme.SIZES.BASE * 10,
  //             }}
  //           >
  //             <Input
  //               placeholder="Enter value"
  //               // keyboardType={iosPlatform() ? "number-pad" : "numeric"}
  //               inputContainerStyle={{
  //                 // height: 30,
  //                 width: width - theme.SIZES.BASE * 10,
  //                 marginVertical: 0,
  //                 // paddingTop: 14,
  //                 borderBottomWidth: 0,
  //                 fontFamily: theme.FONTS.TEXT,
  //               }}
  //               leftIcon={null}
  //               onChangeText={(value) => {
  //                 this.setInputText(value);
  //                 // this.props.dispatch(
  //                 //   addTrackingLogStagingNumberAction(symptomObj, value)
  //                 // );
  //               }}
  //             />

  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 justifyContent: "space-between",
  //                 marginTop: theme.SIZES.BASE,

  //                 width: width - theme.SIZES.BASE * 8,
  //               }}
  //             >
  //               <View
  //                 style={{
  //                   // flex: 1,
  //                   alignContent: "center",
  //                   alignItems: "center",
  //                   marginBottom: theme.SIZES.BASE * 0.5,
  //                   paddingTop: 0,
  //                   marginTop: 0,
  //                 }}
  //               >
  //                 <Button
  //                   // testID="howFeelingButton"
  //                   style={{
  //                     ...styles.outlinedButton,
  //                     // width: 260,
  //                     width: width / 2.0 - theme.SIZES.BASE * 5.0,
  //                     fontSize: 16,
  //                     fontWeight: "700",
  //                     textAlign: "center",
  //                     // color: theme.COLORS.DEFAULT,
  //                     // backgroundColor: theme.COLORS.BLACK,
  //                     borderColor: theme.COLORS.PRIMARY2,
  //                   }}
  //                   titleStyle={{
  //                     color: theme.COLORS.PRIMARY2,
  //                     fontFamily: theme.FONTS.TEXT,
  //                   }}
  //                   title="Cancel"
  //                   // containerStyle={styles.outlinedButton.borderRadius}
  //                   onPress={() => {
  //                     this.setInputVisible(!inputVisible);
  //                   }}
  //                 ></Button>
  //               </View>

  //               <View
  //                 style={{
  //                   // flex: 1,
  //                   alignContent: "center",
  //                   alignItems: "center",
  //                   marginBottom: theme.SIZES.BASE * 0.5,
  //                   paddingTop: 0,
  //                   marginTop: 0,
  //                 }}
  //               >
  //                 <Button
  //                   testID="logHistoryButton"
  //                   style={{
  //                     ...styles.button,
  //                     // width: 260,
  //                     width: width / 2.0 - theme.SIZES.BASE * 5.0,
  //                     fontSize: 16,
  //                     fontWeight: "700",
  //                     textAlign: "center",
  //                     // color: theme.COLORS.DEFAULT,
  //                     // backgroundColor: theme.COLORS.BLACK,
  //                   }}
  //                   titleStyle={{
  //                     color: theme.COLORS.WHITE,
  //                     fontFamily: theme.FONTS.TEXT,
  //                   }}
  //                   title="Add"
  //                   // containerStyle={styles.outlinedButton.borderRadius}
  //                   onPress={() => {
  //                     if (
  //                       !(this.state.inputText == null) &&
  //                       this.state.inputText.length > 0
  //                     ) {
  //                       console.log("INPUT TEXT: ", this.state.inputText);
  //                       this.addToMultiSelectOptionPickerList(
  //                         this.state.inputText
  //                       );
  //                       this.addSelectedFromMultiSelect(this.state.inputText);
  //                     }
  //                     // if (customOnPressUpdate) {
  //                     //   customOnPressUpdate(this.state.inputText);
  //                     // }
  //                     // if (!defaultOnPressUpdateDisabled) {
  //                     //   if (!(level1Path == null)) {
  //                     //     if (!(level2Path == null)) {
  //                     //       this.setOnboarding(
  //                     //         dispatch,
  //                     //         this.state.inputText,
  //                     //         level1Path,
  //                     //         level2Path,
  //                     //         this.state.valueToChange
  //                     //       );
  //                     //     } else {
  //                     //       this.setOnboarding(
  //                     //         dispatch,
  //                     //         this.state.inputText,
  //                     //         level1Path,
  //                     //         this.state.valueToChange
  //                     //       );
  //                     //     }
  //                     //   } else {
  //                     //     this.setOnboarding(
  //                     //       dispatch,
  //                     //       this.state.inputText,
  //                     //       this.state.valueToChange
  //                     //     );
  //                     //   }
  //                     // }
  //                     this.setInputVisible(!inputVisible);
  //                   }}
  //                 ></Button>
  //               </View>
  //             </View>
  //           </View>
  //         </View>
  //       </Modal>
  //     </View>
  //   );
  // };

  getCheckboxList = itemsList => {
    //  FIXMETUNA:  need to change this to add a button to response list which set the list to
    //  invisible when it's selected
    // this.setMultiOptionPickerVisible(false);

    console.log('ITEMS LIST TO map: ', itemsList);

    return (
      <View
        style={{
          flex: 1,
          // flexDirection: "row",
          flexWrap: 'wrap',
          alignContent: 'flex-end',
        }}>
        {itemsList.map(([itemTmp1, itemTmp2]) => {
          // indexCount = indexCount + 1;

          let indexCount = itemTmp1;
          let nameNew = itemTmp2;
          // // console.log("PRINTING ALL SYMP DICTIONARIES!!!!", sympDict);

          const tmpName = nameNew;

          // // console.log(sympDict);
          return (
            <View
              key={indexCount}
              style={{
                // key: indexCount,
                alignContent: 'center',
                alignItems: 'center',
                // marginVertical: theme.SIZES.BASE * 0.25,
                marginVertical: 0,
                marginBottom: 0,
              }}>
              <CheckBox
                checkedColor={theme.COLORS.PRIMARY2}
                title={tmpName}
                checked={Object.keys(this.state.multiSelectedOptions).includes(
                  tmpName,
                )}
                textStyle={{
                  color: theme.COLORS.TEXT1,
                  fontFamily: theme.FONTS.TEXT,
                  fontWeight: '100',
                }}
                onPress={() => {
                  const clickedValue = !Object.keys(
                    this.state.multiSelectedOptions,
                  ).includes(tmpName);

                  // console.log(
                  //   "NEW VALLL",
                  //   clickedValue,
                  //   tmpName,
                  //   this.state.multiSelectedOptions
                  // );
                  if (clickedValue) {
                    this.addSelectedFromMultiSelect(tmpName);
                    // this.props.dispatch(
                    //   addTrackingSymptomAction(
                    //     sympDict.Name,
                    //     sympDict.IconName,
                    //     sympDict.Type,
                    //     sympDict.Category,
                    //     sympDict.BodyPart,
                    //     sympDict.Measurements
                    //     // name, icon, typ, cat, body, msmt
                    //   )
                    // );
                  } else {
                    this.removeSelectedFromMultiSelect(tmpName);
                    // this.props.dispatch(
                    //   removeTrackingSymptomAction(
                    //     sympDict.Name,
                    //     sympDict.Category,
                    //     sympDict.BodyPart,
                    //     sympDict.Type
                    //   )
                    // );
                  }
                }}
              />
            </View>
          );
        })}
      </View>
    );
  };

  // strToHTML = (s) => {
  //   let e = document.createElement("div");
  //   let r = document.createRange();
  //   r.selectNodeContents(e);
  //   let f = r.createContextualFragment(s);
  //   e.appendChild(f);
  //   return e.firstElementChild;
  // };

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
                  {/* {this.inputModal()} */}
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
                        Reflection
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: theme.SIZES.BASE * 0.5,
                      }}>
                      <Text
                        style={{
                          fontSize: theme.SIZES.B1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        Now that we’ve reviewed some alternative therapies let’s
                        reflect on your own experiences.
                        {'\u000A'}
                        {'\u000A'}
                        Your Experience. Have you used any of the following
                        alternative management strategies? [Multiple select]
                      </Text>

                      {this.getCheckboxList(this.state.multiOptionPickerList)}

                      {/* <View
                        style={{
                          paddingHorizontal: theme.SIZES.BASE * 2,
                          alignItems: "center",
                          paddingVertical: theme.SIZES.BASE * 2,
                        }}
                      >
                        <Button
                          testID="addGoalButton"
                          style={{
                            ...styles.outlinedButton,
                            width: width - theme.SIZES.BASE * 4,
                            fontSize: 16,
                            fontWeight: "700",
                            textAlign: "center",
                            borderColor: theme.COLORS.PRIMARY2,
                          }}
                          titleStyle={{
                            color: theme.COLORS.PRIMARY2,
                            fontFamily: theme.FONTS.TEXT,
                          }}
                          title="Add your own goal"
                          onPress={() => this.setInputVisible(true)}
                        ></Button>
                      </View> */}

                      {Object.keys(this.state.multiSelectedOptions).length >
                        0 && (
                        <View>
                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginTop: theme.SIZES.BASE * 2,
                            }}>
                            How effective were each of the following for you?
                            {'\u000A'}
                          </Text>

                          {Object.keys(this.state.multiSelectedOptions).map(
                            (item, index) => {
                              return (
                                <View
                                  key={index}
                                  style={{
                                    flex: 1,
                                    marginHorizontal: theme.SIZES.BASE * 0.5,
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: theme.SIZES.B1,
                                      // marginTop: theme.SIZES.BASE * 2,
                                    }}>
                                    {item}
                                    {'\u000A'}
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
                                          Not at all
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
                                          Very effective
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
                                        this.setValueOfSelected(
                                          item,
                                          sliderVal,
                                        );
                                        // this.props.dispatch(
                                        //   updateEndo101Week7Module7Q11Action(
                                        //     sliderVal
                                        //   )
                                        // );
                                      }}
                                      thumbTintColor={theme.COLORS.PRIMARY2}
                                      minimumTrackTintColor={
                                        theme.COLORS.PRIMARY2
                                      }
                                      maximumTrackTintColor={
                                        theme.COLORS.BACKGROUND3
                                      }
                                      // thumbStyle={{
                                      //   borderColor: theme.COLORS.DEFAULT,
                                      //   width: theme.SIZES.BASE * 2.5,
                                      //   height: theme.SIZES.BASE * 2.5,
                                      //   borderRadius: theme.SIZES.BASE * 2.5,
                                      //   fontFamily: theme.FONTS.TEXT,
                                      // }}
                                      // thumbStyle={{ width: 10, height: 10 }}
                                      style={{marginTop: 18}}
                                      trackStyle={{
                                        height: 16,
                                        borderRadius: 20,
                                      }}
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
                                </View>
                              );
                            },
                          )}

                          <Text
                            style={{
                              fontSize: theme.SIZES.B1,
                              marginTop: theme.SIZES.BASE,
                            }}>
                            Would you like to share your experience using the
                            following tools with other patients?{'\u000A'}
                          </Text>

                          <View
                            style={{
                              paddingHorizontal: theme.SIZES.BASE,
                              // marginTop: theme.SIZES.BASE * 1.5,
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
                                // this.setCorrectAnswer(true);
                                this.props.dispatch(
                                  updateEndo101Week9Module4Q3Action(value),
                                );
                              }}
                            />
                          </View>
                        </View>
                      )}

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
                            // if (this.state.multiSelectedOptions.length > 2) {
                            // Promise.resolve()
                            //   // .then(() => {
                            //   //   this.props.dispatch(
                            //   //     updateEndo101Week1Module2Q3Action(
                            //   //       this.state.multiSelectedOptions
                            //   //     )
                            //   //   );
                            //   // })
                            //   // .then(() => {
                            //   //   return this.props.dispatch(
                            //   //     updateEndo101Week1ProgressAction(2)
                            //   //   );
                            //   // })
                            //   .then(() =>
                            //     navigation.navigate("Endo101Week7Module4Page5")
                            //   );

                            this.mixpanel.track('endo101_course_progress', {
                              week_num: 9,
                              module_num: 4,
                            });
                            Promise.resolve()
                              .then(() => {
                                return this.props.dispatch(
                                  updateEndo101Week9Module4Q1Action(
                                    this.state.multiSelectedOptions,
                                  ),
                                );
                              })
                              .then(() => {
                                return this.props.dispatch(
                                  updateEndo101Week9ProgressAction(4),
                                );
                              })
                              .then(() =>
                                navigation.navigate('Endo101Week9Screen'),
                              );
                            // }
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
