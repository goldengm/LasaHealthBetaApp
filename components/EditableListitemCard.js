import React from 'react';
import {Dimensions, Modal, View, Text} from 'react-native';
import produce from 'immer';
import Button from './Button';
import DatePicker from './DatePicker';
import Select from './Select';
import CheckBox from './CheckBox';
import Icon from './Icon';
import Input from './Input';
import TouchableOpacity from './TouchableOpacity';

import {theme, styles} from '../constants';

import XDate from 'xdate';

import Blob1 from '../assets/ui/general/Blob1.svg';
// import Blob2 from '../assets/ui/general/Blob2.svg';
// import Blob3 from '../assets/ui/general/Blob3.svg';
// import Blob4 from '../assets/ui/general/Blob4.svg';
// import Blob5 from '../assets/ui/general/Blob5.svg';

import {updateOnboardingValueAction} from '../redux/actions/userProfileActions';

// import {getOS} from '../shared/PlatformUtils';

// const iosPlatform = () => getOS() == 'ios';
const {width} = Dimensions.get('screen');
const initialDateValue = new Date();

class EditableListitemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false,
      inputText: '',

      valueToChange: '',
      lastConditionAdded: '',

      singleOptionPickerVisible: false,
      multiOptionPickerVisible: false,

      //  date selection state
      datePickerVisible: false,
      selectedDate: initialDateValue,
      customDatePickerMode: 'date',
      singleOptionPickerList: [],
      singleSelectedOption: -1,
      multiOptionPickerList: [],
      multiSelectedOptions: [],
    };
  }

  componentDidMount() {

  }

  setValueToChange = valueToChangeP => {
    this.setState({valueToChange: valueToChangeP});
  };

  setDatePickerVisible = datePickerVisibleP => {
    this.setState({datePickerVisible: datePickerVisibleP});
  };

  setSelectedDate = selectedDateP => {
    this.setState({selectedDate: selectedDateP});
  };

  setCustomDatePickerMode = customDatePickerModeP => {
    this.setState({customDatePickerMode: customDatePickerModeP});
  };

  setOnboarding = (
    dispatch,
    value,
    level1Str,
    level2Str = '',
    level3Str = '',
  ) => {
    dispatch(
      updateOnboardingValueAction(value, level1Str, level2Str, level3Str),
    );
  };

  setSingleOptionPickerVisible = async singleOptionPickerVisibleP => {
    Promise.resolve()
      .then(() =>
        this.setState({singleOptionPickerVisible: singleOptionPickerVisibleP}),
      )
      .catch(error => {
        console.log(error);
      });
  };

  setMultiOptionPickerVisible = async multiOptionPickerVisibleP => {
    Promise.resolve()
      .then(() =>
        this.setState({multiOptionPickerVisible: multiOptionPickerVisibleP}),
      )
      .catch(error => {
        console.log(error);
      });
  };

  setSingleOptionPickerList = async singleOptionPickerListP => {
    this.setState({singleOptionPickerList: singleOptionPickerListP});
  };

  setMultiOptionPickerList = async multiOptionPickerListP => {
    this.setState({multiOptionPickerList: multiOptionPickerListP});
  };

  addSelectedFromMultiSelect = symptomName => {
    this.setState(
      produce(draft => {
        if (!draft.multiSelectedOptions.includes(symptomName)) {
          draft.multiSelectedOptions =
            draft.multiSelectedOptions.concat(symptomName);
        }
      }),
    );
  };

  removeSelectedFromMultiSelect = symptomName => {
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

  setInputText = inputTextP => {
    this.setState({inputText: inputTextP});
  };

  setSingleSelectedOption = async singleSelectedOptionP => {
    this.setState({singleSelectedOption: singleSelectedOptionP});
  };

  setInputVisible = async inputVisibleP => {
    Promise.resolve()
      .then(() => this.setState({inputVisible: inputVisibleP}))
      .catch(error => {
        console.log(error);
      });
  };

  datePickerModal = dispatch => {
    const {datePickerVisible} = this.state;
    const {
      level1Path,
      level2Path,
      customOnPressUpdate,
      defaultOnPressUpdateDisabled,
    } = this.props;

    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={datePickerVisible}
          customOnBackdropPress={() => {
            this.setDatePickerVisible(!datePickerVisible);
          }}
          onRequestClose={() => {
            this.setDatePickerVisible(!datePickerVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: theme.COLORS.WHITE,
                borderRadius: 20,
                padding: theme.SIZES.BASE * 2,
                alignItems: 'center',
                shadowColor: theme.COLORS.BLACK,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <DatePicker
                customButtonStyle={{
                  height: theme.SIZES.BASE * 3,
                  paddingHorizontal: theme.SIZES.BASE,
                  borderRadius: theme.SIZES.BASE,
                  shadowRadius: 0,
                  shadowOpacity: 0,
                  backgroundColor: theme.COLORS.PRIMARY2,
                  fontFamily: theme.FONTS.TEXT,
                  fontSize: 16,
                  fontWeight: '700',
                  textAlign: 'center',
                }}
                customOnDateChange={value => {
                  this.setSelectedDate(value);
                }}
                customDatePickerMode={this.state.customDatePickerMode}
                currentDate={this.state.selectedDate}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: theme.SIZES.BASE,

                  width: width - theme.SIZES.BASE * 8,
                }}>
                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    marginBottom: theme.SIZES.BASE * 0.5,
                    paddingTop: 0,
                    marginTop: 0,
                  }}>
                  <Button
                    style={{
                      ...styles.outlinedButton,
                      width: width / 2.0 - theme.SIZES.BASE * 5.0,
                      fontSize: 16,
                      fontWeight: '700',
                      textAlign: 'center',
                      borderColor: theme.COLORS.PRIMARY2,
                    }}
                    titleStyle={{
                      color: theme.COLORS.PRIMARY2,
                      fontFamily: theme.FONTS.TEXT,
                    }}
                    title="Cancel"
                    onPress={() => {
                      this.setDatePickerVisible(false);
                    }}></Button>
                </View>

                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    marginBottom: theme.SIZES.BASE * 0.5,
                    paddingTop: 0,
                    marginTop: 0,
                  }}>
                  <Button
                    style={{
                      ...styles.button,
                      width: width / 2.0 - theme.SIZES.BASE * 5.0,
                      fontSize: 16,
                      fontWeight: '700',
                      textAlign: 'center',
                    }}
                    titleStyle={{
                      color: theme.COLORS.WHITE,
                      fontFamily: theme.FONTS.TEXT,
                    }}
                    title={
                      this.props.customOnPressLabel
                        ? this.props.customOnPressLabel
                        : 'Update'
                    }
                    onPress={() => {
                      if (!defaultOnPressUpdateDisabled) {
                        if (
                          !(this.state.selectedDate == null) &&
                          !(this.state.selectedDate == initialDateValue)
                        ) {
                          if (!(level1Path == null)) {
                            if (!(level2Path == null)) {
                              this.setOnboarding(
                                dispatch,
                                this.state.selectedDate.toString(),
                                level1Path,
                                level2Path,
                                this.state.valueToChange,
                              );
                            } else {
                              this.setOnboarding(
                                dispatch,
                                this.state.selectedDate.toString(),
                                level1Path,
                                this.state.valueToChange,
                              );
                            }
                          } else {
                            this.setOnboarding(
                              dispatch,
                              this.state.selectedDate.toString(),
                              this.state.valueToChange,
                            );
                          }
                        }
                      }
                      if (customOnPressUpdate) {
                        customOnPressUpdate(this.state.selectedDate.toString());
                      }

                      this.setDatePickerVisible(false);
                    }}></Button>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  multiOptionPickerModal = (dispatch, itemsList) => {
    //  FIXMETUNA:  need to change this to add a button to response list which set the list to
    //  invisible when it's selected

    const {multiOptionPickerVisible} = this.state;
    const {
      level1Path,
      level2Path,
      updateMultiOptionIndividually,
      customOnPressUpdate,
      defaultOnPressUpdateDisabled,
    } = this.props;

    return (
      <View
        style={{
          // flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={multiOptionPickerVisible}
          customOnBackdropPress={() => {
            this.setMultiOptionPickerVisible(!multiOptionPickerVisible);
          }}
          onRequestClose={() => {
            this.setMultiOptionPickerVisible(!multiOptionPickerVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: theme.COLORS.WHITE,
                borderRadius: 20,
                padding: theme.SIZES.BASE * 2,
                alignItems: 'center',
                shadowColor: theme.COLORS.BLACK,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              {Object.entries(itemsList).map(itemTmp => {
                let indexCount = itemTmp[0];
                let nameNew = itemTmp[1];

                const tmpName = nameNew;
                return (
                  <CheckBox
                    checkedColor={theme.COLORS.DEFAULT}
                    title={tmpName}
                    key={indexCount}
                    checked={this.state.multiSelectedOptions.includes(tmpName)}
                    textStyle={{
                      color: theme.COLORS.DARK_SECONDARY,
                      fontFamily: theme.FONTS.TEXT,
                      fontWeight: '100',
                    }}
                    onPress={() => {
                      const clickedValue =
                        !this.state.multiSelectedOptions.includes(tmpName);

                      if (clickedValue) {
                        this.addSelectedFromMultiSelect(tmpName);
                      } else {
                        this.removeSelectedFromMultiSelect(tmpName);
                      }
                    }}
                  />
                );
              })}

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: theme.SIZES.BASE,

                  width: width - theme.SIZES.BASE * 8,
                }}>
                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    marginBottom: theme.SIZES.BASE * 0.5,
                    paddingTop: 0,
                    marginTop: 0,
                  }}>
                  <Button
                    style={{
                      ...styles.outlinedButton,
                      width: width / 2.0 - theme.SIZES.BASE * 5.0,
                      fontSize: 16,
                      fontWeight: '700',
                      textAlign: 'center',
                      borderColor: theme.COLORS.PRIMARY2,
                    }}
                    titleStyle={{
                      color: theme.COLORS.PRIMARY2,
                      fontFamily: theme.FONTS.TEXT,
                    }}
                    title="Cancel"
                    onPress={() => {
                      this.setMultiOptionPickerVisible(false);
                    }}></Button>
                </View>

                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    marginBottom: theme.SIZES.BASE * 0.5,
                    paddingTop: 0,
                    marginTop: 0,
                  }}>
                  <Button
                    testID="logHistoryButton"
                    style={{
                      ...styles.button,
                      width: width / 2.0 - theme.SIZES.BASE * 5.0,
                      fontSize: 16,
                      fontWeight: '700',
                      textAlign: 'center',
                    }}
                    titleStyle={{
                      color: theme.COLORS.WHITE,
                      fontFamily: theme.FONTS.TEXT,
                    }}
                    title={
                      this.props.customOnPressLabel
                        ? this.props.customOnPressLabel
                        : 'Update'
                    }
                    onPress={() => {
                      if (!defaultOnPressUpdateDisabled) {
                        if (updateMultiOptionIndividually) {
                          //  go through every possible option, update them as booleans
                          for (const availableItem of this.state
                            .multiOptionPickerList) {
                            if (!(level1Path == null)) {
                              if (!(level2Path == null)) {
                                console.log(
                                  'ERROR: the editablelistitemcard multioption individual update is trying to nest too deep',
                                );
                              } else {
                                this.setOnboarding(
                                  dispatch,
                                  this.state.multiSelectedOptions.includes(
                                    availableItem,
                                  ),
                                  level1Path,
                                  this.state.valueToChange,
                                  availableItem,
                                );
                              }
                            } else {
                              this.setOnboarding(
                                dispatch,
                                this.state.multiSelectedOptions.includes(
                                  availableItem,
                                ),
                                this.state.valueToChange,
                                availableItem,
                              );
                            }
                          }
                        } else {
                          if (!(level1Path == null)) {
                            if (!(level2Path == null)) {
                              this.setOnboarding(
                                dispatch,
                                this.state.multiSelectedOptions,
                                level1Path,
                                level2Path,
                                this.state.valueToChange,
                              );
                            } else {
                              this.setOnboarding(
                                dispatch,
                                this.state.multiSelectedOptions,
                                level1Path,
                                this.state.valueToChange,
                              );
                            }
                          } else {
                            this.setOnboarding(
                              dispatch,
                              this.state.multiSelectedOptions,
                              this.state.valueToChange,
                            );
                          }
                        }
                      }
                      if (customOnPressUpdate) {
                        customOnPressUpdate(
                          this.state.multiSelectedOptions.includes(
                            availableItem,
                          ),
                        );
                      }
                      this.setMultiOptionPickerVisible(false);
                    }}></Button>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  inputModal = dispatch => {
    const {inputVisible} = this.state;
    const {
      level1Path,
      level2Path,
      customOnPressUpdate,
      defaultOnPressUpdateDisabled,
    } = this.props;
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={inputVisible}
          customOnBackdropPress={() => {
            this.setInputVisible(!inputVisible);
          }}
          onRequestClose={() => {
            this.setInputVisible(!inputVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: theme.COLORS.WHITE,
                borderRadius: 20,
                padding: theme.SIZES.BASE * 2,
                alignItems: 'center',
                shadowColor: theme.COLORS.BLACK,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <Input
                placeholder="Enter value"
                inputContainerStyle={{
                  width: width - theme.SIZES.BASE * 10,
                  marginVertical: 0,
                  borderBottomWidth: 0,
                  fontFamily: theme.FONTS.TEXT,
                }}
                leftIcon={null}
                onChangeText={value => {
                  this.setInputText(value);
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: theme.SIZES.BASE,

                  width: width - theme.SIZES.BASE * 8,
                }}>
                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    marginBottom: theme.SIZES.BASE * 0.5,
                    paddingTop: 0,
                    marginTop: 0,
                  }}>
                  <Button
                    style={{
                      ...styles.outlinedButton,
                      width: width / 2.0 - theme.SIZES.BASE * 5.0,
                      fontSize: 16,
                      fontWeight: '700',
                      textAlign: 'center',
                      borderColor: theme.COLORS.PRIMARY2,
                    }}
                    titleStyle={{
                      color: theme.COLORS.PRIMARY2,
                      fontFamily: theme.FONTS.TEXT,
                    }}
                    title="Cancel"
                    onPress={() => {
                      this.setInputVisible(!inputVisible);
                    }}></Button>
                </View>

                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    marginBottom: theme.SIZES.BASE * 0.5,
                    paddingTop: 0,
                    marginTop: 0,
                  }}>
                  <Button
                    testID="logHistoryButton"
                    style={{
                      ...styles.button,
                      width: width / 2.0 - theme.SIZES.BASE * 5.0,
                      fontSize: 16,
                      fontWeight: '700',
                      textAlign: 'center',
                    }}
                    titleStyle={{
                      color: theme.COLORS.WHITE,
                      fontFamily: theme.FONTS.TEXT,
                    }}
                    title={
                      this.props.customOnPressLabel
                        ? this.props.customOnPressLabel
                        : 'Update'
                    }
                    onPress={() => {
                      if (!defaultOnPressUpdateDisabled) {
                        if (!(level1Path == null)) {
                          if (!(level2Path == null)) {
                            this.setOnboarding(
                              dispatch,
                              this.state.inputText,
                              level1Path,
                              level2Path,
                              this.state.valueToChange,
                            );
                          } else {
                            this.setOnboarding(
                              dispatch,
                              this.state.inputText,
                              level1Path,
                              this.state.valueToChange,
                            );
                          }
                        } else {
                          this.setOnboarding(
                            dispatch,
                            this.state.inputText,
                            this.state.valueToChange,
                          );
                        }
                      }

                      if (customOnPressUpdate) {
                        customOnPressUpdate(this.state.inputText);
                      }
                      this.setInputVisible(!inputVisible);
                    }}></Button>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  singleOptionPickerModal = dispatch => {
    const {singleOptionPickerVisible} = this.state;
    const {
      level1Path,
      level2Path,
      singleOptionIsBoolean,
      customOnPressUpdate,
      defaultOnPressUpdateDisabled,
    } = this.props;
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={singleOptionPickerVisible}
          customOnBackdropPress={() => {
            this.setSingleOptionPickerVisible(!singleOptionPickerVisible);
          }}
          onRequestClose={() => {
            this.setSingleOptionPickerVisible(!singleOptionPickerVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: theme.COLORS.WHITE,
                borderRadius: 20,
                padding: theme.SIZES.BASE * 2,
                alignItems: 'center',
                shadowColor: theme.COLORS.BLACK,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
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
                  options={this.state.singleOptionPickerList}
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
                    this.setSingleSelectedOption(value);
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: theme.SIZES.BASE,

                  width: width - theme.SIZES.BASE * 8,
                }}>
                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    marginBottom: theme.SIZES.BASE * 0.5,
                    paddingTop: 0,
                    marginTop: 0,
                  }}>
                  <Button
                    style={{
                      ...styles.outlinedButton,
                      width: width / 2.0 - theme.SIZES.BASE * 5.0,
                      fontSize: 16,
                      fontWeight: '700',
                      textAlign: 'center',
                      borderColor: theme.COLORS.PRIMARY2,
                    }}
                    titleStyle={{
                      color: theme.COLORS.PRIMARY2,
                      fontFamily: theme.FONTS.TEXT,
                    }}
                    title="Cancel"
                    onPress={() => {
                      this.setSingleOptionPickerVisible(
                        !singleOptionPickerVisible,
                      );
                    }}></Button>
                </View>

                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    marginBottom: theme.SIZES.BASE * 0.5,
                    paddingTop: 0,
                    marginTop: 0,
                  }}>
                  <Button
                    testID="logHistoryButton"
                    style={{
                      ...styles.button,
                      width: width / 2.0 - theme.SIZES.BASE * 5.0,
                      fontSize: 16,
                      fontWeight: '700',
                      textAlign: 'center',
                    }}
                    titleStyle={{
                      color: theme.COLORS.WHITE,
                      fontFamily: theme.FONTS.TEXT,
                    }}
                    title={
                      this.props.customOnPressLabel
                        ? this.props.customOnPressLabel
                        : 'Update'
                    }
                    onPress={() => {
                      if (!defaultOnPressUpdateDisabled) {
                        if (!(level1Path == null)) {
                          if (!(level2Path == null)) {
                            this.setOnboarding(
                              dispatch,
                              singleOptionIsBoolean
                                ? this.state.singleSelectedOption == 'true'
                                : this.state.singleSelectedOption,
                              level1Path,
                              level2Path,
                              this.state.valueToChange,
                            );
                          } else {
                            this.setOnboarding(
                              dispatch,
                              singleOptionIsBoolean
                                ? this.state.singleSelectedOption == 'true'
                                : this.state.singleSelectedOption,
                              level1Path,
                              this.state.valueToChange,
                            );
                          }
                        } else {
                          this.setOnboarding(
                            dispatch,
                            singleOptionIsBoolean
                              ? this.state.singleSelectedOption == 'true'
                              : this.state.singleSelectedOption,
                            this.state.valueToChange,
                          );
                        }
                      }

                      if (customOnPressUpdate) {
                        customOnPressUpdate(
                          singleOptionIsBoolean
                            ? this.state.singleSelectedOption == 'true'
                            : this.state.singleSelectedOption,
                        );
                      }
                      this.setSingleOptionPickerVisible(
                        !singleOptionPickerVisible,
                      );
                    }}></Button>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  convertToDateString = dateRaw => {
    //  if the date is already formatted as a string, make sure it's correctly formatted
    //  this makes a lot of assumptions, either the date is formatted as "mm-dd-yyy", "mm/dd/yyyy",
    //  "yyyy/mm/dd", "yyyy-mm-dd", or is a timestamp
    if (dateRaw.toString()[2] == '/') {
      let strParts = dateRaw.split('/');
      return strParts[2] + '-' + strParts[0] + '-' + strParts[1];
    } else if (dateRaw.toString()[2] == '-') {
      let strParts = dateRaw.split('-');
      return strParts[2] + '-' + strParts[0] + '-' + strParts[1];
    } else if (dateRaw.toString()[4] == '/') {
      // correct, just need to update dividing character to -
      return dateRaw.replace('/', '-');
    } else if (dateRaw.toString()[4] == '-') {
      // the date is already correctly formatted
      return dateRaw;
    } else {
      const date1 = new XDate(dateRaw);
      return date1.toString('yyyy-MM-dd');
    }
  };

  isDateStrValid = dateStr => {
    if (!(dateStr == null) && dateStr != '') {
      return true;
    } else {
      return false;
    }
  };

  handleInputSelection = (
    inputName,
    inputType,
    singleOptionList,
    multiOptionList,
  ) => {
    this.setValueToChange(inputName);
    switch (inputType) {
      case 'textInput':
        this.setInputVisible(true);
        break;
      case 'datePicker':
        //  update to existing date str if it's valid
        if (this.isDateStrValid(this.props.value)) {
          this.setSelectedDate(this.convertToDateString(this.props.value));
        }

        this.setCustomDatePickerMode('date');
        this.setDatePickerVisible(true);
        break;
      case 'timePicker':
        this.setCustomDatePickerMode('time');
        this.setDatePickerVisible(true);
        break;
      case 'singleOption':
        this.setSingleOptionPickerList(singleOptionList);
        this.setSingleOptionPickerVisible(true);
        break;
      case 'multiOption':
        this.setMultiOptionPickerList(multiOptionList);
        this.setMultiOptionPickerVisible(true);
        break;
      default:
        //  do nothing by default
        break;
    }
  };

  render() {
    const {
      style,
      testID,
      dispatch,
      navigation,
      name,
      value,
      iconName,
      iconType,
      iconBackgroundColor,
      customOnPress,
      inputName,
      inputType,
      singleOptionList,
      multiOptionList,
      ...props
    } = this.props;

    return (
      <View>
        <TouchableOpacity
          testID='testID'
          style={{
            justifyContent: 'center',
            width: width - theme.SIZES.BASE * 2,
            borderWidth: 1,
            borderColor: theme.COLORS.BACKGROUND4,
            borderRadius: theme.SIZES.BASE,
            paddingHorizontal: theme.SIZES.BASE,
          }}
          onPress={() => {
            Promise.resolve()
              .then(() => {
                if (!(customOnPress == null)) {
                  customOnPress();
                }
                return this.handleInputSelection(
                  inputName,
                  inputType,
                  singleOptionList,
                  multiOptionList,
                );
              })
              .catch(error => {
                console.log(error);
              });
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: theme.SIZES.BASE * 0.7,
            }}>
            <View
              style={{
                height: 60,
                width: 60,
                marginRight: theme.SIZES.BASE * 1.5,
              }}>
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 0,
                  paddingHorizontal: 0,
                  marginTop: 14,
                }}>
                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Blob1
                    style={{
                      position: 'absolute',
                      color: iconBackgroundColor,
                      preserveAspectRatio: 'none',
                      top: -20,
                    }}
                    height={70}
                    width={70}
                  />

                  <Icon
                    type={iconType}
                    name={iconName}
                    fill={theme.COLORS.TEXT1}
                    color={theme.COLORS.TEXT1}
                    style={{top: 2}}
                  />
                </View>
              </View>
            </View>
            <View style={{justifyContent: 'space-evenly'}}>
              <Text
                style={{
                  fontSize: theme.SIZES.B1,
                  fontWeight: '700',
                  color: theme.COLORS.TEXT1,
                  width: width - theme.SIZES.BASE * 8,
                }}>
                {name}
              </Text>
              {!(value == null) && (
                <Text
                  style={{
                    fontSize: theme.SIZES.C2,
                    color: theme.COLORS.TEXT3,
                  }}>
                  {value}
                </Text>
              )}
            </View>
          </View>
        </TouchableOpacity>

        {this.singleOptionPickerModal(dispatch)}
        {this.multiOptionPickerModal(
          dispatch,
          this.state.multiOptionPickerList,
        )}
        {this.datePickerModal(dispatch)}
        {this.inputModal(dispatch)}
      </View>
    );
  }
}

export default EditableListitemCard;
