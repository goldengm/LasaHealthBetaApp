import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {Text, CheckBox} from 'react-native-elements';
import produce from 'immer';
import {MixpanelInstance} from '../../../../../../shared/UsageAnalyticsUtils';
import {styles, theme, Images} from '../../../../../../constants';
import {Button} from '../../../../../../components';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
import {
  updateEndo101Week3ProgressAction,
  updateEndo101Week3Module2Q1Action,
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

      multiOptionPickerList: [
        [0, 'Superficial Peritoneal Lesion'],
        [1, 'Ovarian Endometriomas'],
        [2, 'Deep Infiltrating Endometriosis'],
        [3, 'I’m not sure'],
      ],
      multiSelectedOptions: [],
    };
  }

  setCorrectAnswer = correctAnswerP => {
    this.setState({correctAnswer: correctAnswerP});
  };

  setWrongAnswer = wrongAnswerP => {
    this.setState({wrongAnswer: wrongAnswerP});
  };

  setMultiOptionPickerList = async multiOptionPickerListP => {
    this.setState({multiOptionPickerList: multiOptionPickerListP});
  };

  addToMultiSelectOptionPickerList = newOption => {
    this.setState(
      produce(draft => {
        if (!draft.multiOptionPickerList.includes(newOption)) {
          draft.multiOptionPickerList.push([
            draft.multiOptionPickerList.length,
            newOption,
          ]);
        }
      }),
    );
  };

  addSelectedFromMultiSelect = symptomName => {
    // console.log("ADDDD", symptomName);
    // if (this.state.multiSelectedOptions.length < 3) {
    this.setState(
      produce(draft => {
        if (!draft.multiSelectedOptions.includes(symptomName)) {
          draft.multiSelectedOptions =
            draft.multiSelectedOptions.concat(symptomName);
        }
      }),
    );
    // }
  };

  removeSelectedFromMultiSelect = symptomName => {
    // console.log("REMOVVVVE", symptomName);
    this.setState(
      produce(draft => {
        if (draft.multiSelectedOptions.includes(symptomName)) {
          draft.multiSelectedOptions = draft.multiSelectedOptions.filter(
            item => item !== symptomName,
          );
        }
      }),
    );
  };

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
                alignContent: 'center',
                alignItems: 'center',
                marginVertical: theme.SIZES.BASE * 0.25,
                marginBottom: 0,
              }}>
              <CheckBox
                checkedColor={theme.COLORS.PRIMARY2}
                title={tmpName}
                checked={this.state.multiSelectedOptions.includes(tmpName)}
                textStyle={{
                  color: theme.COLORS.TEXT1,
                  fontFamily: theme.FONTS.TEXT,
                  fontWeight: '100',
                }}
                onPress={() => {
                  const clickedValue =
                    !this.state.multiSelectedOptions.includes(tmpName);

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
                          What type of endometriosis lesions do you have?
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: theme.SIZES.BASE * 0.5,
                        }}>
                        {this.getCheckboxList(this.state.multiOptionPickerList)}

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
                              if (this.state.multiSelectedOptions.length > 0) {
                                this.mixpanel.track('endo101_course_progress', {
                                  week_num: 3,
                                  module_num: 2,
                                });
                                this.props.dispatch(
                                  updateEndo101Week3Module2Q1Action(
                                    this.state.multiSelectedOptions,
                                  ),
                                );

                                Promise.resolve()
                                  .then(() => {
                                    return this.props.dispatch(
                                      updateEndo101Week3ProgressAction(2),
                                    );
                                  })
                                  .then(() =>
                                    navigation.navigate('Endo101Week3Screen'),
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
