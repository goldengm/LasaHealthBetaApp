import React, {createRef} from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Modal,
  Image,
  SafeAreaView,
  View,
  ActivityIndicator,
} from 'react-native';
import {Text, Overlay} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import produce from 'immer';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';
import {v4 as uuidv4} from 'uuid';
import XDate from 'xdate';
import {
  GiftedChat,
  Bubble,
  Send,
  SystemMessage,
  messageIdGenerator,
  InputToolbar,
  Composer,
} from 'react-native-gifted-chat';
import TypingIndicator from 'react-native-gifted-chat/lib/TypingIndicator';
import {IconButton} from 'react-native-paper';

import {auth, db, syncServerUserSaveState} from '../../shared/firebaseUtils';
import {MixpanelInstance} from '../../shared/UsageAnalyticsUtils';
import {getChatbotAvatar} from '../../constants/Images';
import {
  Button,
  CheckBox,
  DatePicker,
  Icon,
  Input,
  Select,
  PageSwiper,
  Chip,
} from '../../components';
import {Images, theme, styles, utils} from '../../constants';
import symptomsDir from '../../constants/track/symptomsDir';
import {
  updateOnboardingHealthProfileAction,
  setOnboardingProgressAction,
  addIntroHealthSurveyAnswerAction,
} from '../../redux/actions/userProfileActions';
import {
  regenerateMenstrualCycleAction,
  regenerateChartStatsAction,
  updateUserMenstrualOnboardingAction,
  resetUserAnalyticsInteractiveParamsAction,
} from '../../redux/actions/userAnalyticsActions';
import {
  resetTrackingLogStagingToDefaultAction,
  recoverLeftoverTrackLogStaging,
  addTrackingSymptomAction,
  removeTrackingSymptomAction,
  addTrackingLogAction,
} from '../../redux/actions/trackActions';
import {addRecommendedLearnAction} from '../../redux/actions/learnActions';
import {setTodoStatusAction} from '../../redux/actions/userProfileActions';
import {GardenContext} from '../../garden/GardenProvider';

import {getOS} from '../../shared/PlatformUtils';
import {isValidZipCode} from '../../shared/TextUtils';

const iosPlatform = () => getOS() == 'ios';

const {width, height} = Dimensions.get('screen');
const initialDateValue = new Date(1598051730000);
const ceapsReferralCode = 'ceaps';

class ProfileSetupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mixpanel = MixpanelInstance;

    this.state = {
      currentOnboardingIndex: 0,
      chatbotTyping: false,
      chatbotModalMessages: [],
      inputVisible: false,
      buttonReponsesVisible: false,
      buttonResponsesList: {},
      initialUserHealthProfile: {
        onboarding: this.props.userProfile.OnboardingAnswers.onboarding,
      },
      lastConditionAdded: '',

      datePickerVisible: false,
      datePickerMode: 'date',
      singleOptionPickerVisible: false,
      multiOptionPickerVisible: false,

      //  date selection state
      startDate: initialDateValue,
      selectedDate: initialDateValue,
      singleOptionPickerList: [],
      singleSelectedOption: -1,
      multiOptionPickerList: [],
      multiSelectedOptions: [],

      // userResponseContainerHeight: 55,
      userResponseContainerHeight: 10, //  debug, in place on incompatible resetInputToolbar()
    };

    this.giftedChatInputRef = createRef();
    // this.giftedChatRef = createRef();
    this.activeItemHeight = 45;
    this.generalSymptomsList = utils.generalSymptomsList;
    this.numberList = utils.numberList;
    this.allCountriesList = utils.allCountriesList;

    const currentDateObj = new XDate();
    this.setupBeginTS = currentDateObj.getTime();
  }

  iOSInputOffset = () => {
    return iosPlatform() ? theme.SIZES.BASE : 0;
  };

  setSelectedDate = selectedDateP => {
    this.setState({selectedDate: selectedDateP});
  };

  syncSelectedContraceptiesToState = async () => {
    for (const item of this.state.multiSelectedOptions) {
      this.setOnboarding(true, 'contraception', item);
    }
  };

  syncInitialSymptomsToState = async () => {
    for (const item of this.state.multiSelectedOptions) {
      this.setOnboarding(true, 'initialSymptoms', item);
    }
  };

  setLastConditionAdded = async lastConditionAddedP => {
    this.setState({lastConditionAdded: lastConditionAddedP});
  };

  //  FIXMETUNA:  delay user response here
  delayedExecution = async (millisecondsToDelayP, actionToDelayP) => {
    Promise.resolve()
      .then(() => this.sleep(millisecondsToDelayP))
      .then(result => {
        actionToDelayP();
      })
      .catch(error => {
        console.log(error);
      });
  };

  addNewCondition = async conditionName => {
    this.setState(
      produce(draft => {
        draft.initialUserHealthProfile.onboarding.initialConditions[
          conditionName
        ] = {
          yearSymptomsStarted: -1,
          yearDiagnosed: -1,
          primarySymptoms: [],
        };
      }),
    );
  };

  syncConditionSymptomsToState = async () => {
    this.setOnboarding(
      this.state.multiSelectedOptions,
      'initialConditions',
      this.state.lastConditionAdded,
      'primarySymptoms',
    );
  };

  calcToolbarHeights = () => {
    //  FIXMETUNA:  I need to calculate the estimated rows for each of these now
    //  its just on a 1, 2 preset right now
    //  need to calc this: multiOptionPickerList: ["first", "second", "third"]
    //  and calc this:
    // buttonResponsesList: {
    //   Option1: "",
    //   Option2: "",
    //   Option3: "",
    //   Option4: "",
    // }

    const lineLength = 45;
    let optionsCharLength = 0;
    let multiOptionActiveRowCount =
      Math.ceil(this.state.multiOptionPickerList.length / 2.0) - 3;

    optionsCharLength = 0;
    for (let item of Object.entries(this.state.buttonResponsesList)) {
      optionsCharLength += item[0].length + 12;
    }
    let buttonResponseListActiveRowCount = Math.ceil(
      optionsCharLength / lineLength,
    );

    const IOSDatePickerOffset = getOS() == 'ios' ? 4 : 1;
    let datePicketActiveRowCount = this.state.datePickerVisible
      ? IOSDatePickerOffset
      : 0;
    let singleOptionActiveRowCount = this.state.singleOptionPickerVisible
      ? 1
      : 0;
    multiOptionActiveRowCount = this.state.multiOptionPickerVisible
      ? multiOptionActiveRowCount
      : 0;
    buttonResponseListActiveRowCount = this.state.buttonReponsesVisible
      ? buttonResponseListActiveRowCount
      : 0;
    let activeRowCount =
      datePicketActiveRowCount +
      singleOptionActiveRowCount +
      multiOptionActiveRowCount +
      buttonResponseListActiveRowCount;

    let inputOffset = this.state.inputVisible ? 45 : 0;
    //  FIXMETUNA:  need to fix the date height bottom margin being tool large
    const newUserResponseContainerHeight = this.state.datePickerVisible
      ? this.iOSInputOffset() + 0
      : this.iOSInputOffset() +
        inputOffset +
        this.activeItemHeight * activeRowCount;
    return [
      datePicketActiveRowCount,
      singleOptionActiveRowCount,
      multiOptionActiveRowCount,
      buttonResponseListActiveRowCount,
      newUserResponseContainerHeight,
    ];
  };

  syncUserResponseContainerHeight = async () => {
    const [
      datePicketActiveRowCount,
      singleOptionActiveRowCount,
      multiOptionActiveRowCount,
      buttonResponseListActiveRowCount,
      newUserResponseContainerHeight,
    ] = this.calcToolbarHeights();

    Promise.resolve()
      // .then(() =>
      //   this.setState({
      //     userResponseContainerHeight: newUserResponseContainerHeight,
      //   }),
      // )
      .then(() => {
        if (this.giftedChatInputRef.current) {
          this.giftedChatInputRef.current.clear();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  setUserResponseContainerHeight = async userResponseContainerHeightP => {
    this.setState({
      userResponseContainerHeight: userResponseContainerHeightP,
    });
  };

  setDatePickerVisible = async datePickerVisibleP => {
    Promise.resolve()
      .then(() => this.setState({datePickerVisible: datePickerVisibleP}))
      .then(() => this.syncUserResponseContainerHeight())
      .catch(error => {
        console.log(error);
      });
  };

  setDatePickerMode = async datePickerModeP => {
    this.setState({datePickerMode: datePickerModeP});
  };

  setSingleOptionPickerVisible = async singleOptionPickerVisibleP => {
    Promise.resolve()
      .then(() =>
        this.setState({singleOptionPickerVisible: singleOptionPickerVisibleP}),
      )
      .then(() => this.syncUserResponseContainerHeight())
      .catch(error => {
        console.log(error);
      });
  };

  setMultiOptionPickerVisible = async multiOptionPickerVisibleP => {
    Promise.resolve()
      .then(() =>
        this.setState({multiOptionPickerVisible: multiOptionPickerVisibleP}),
      )
      .then(() => this.syncUserResponseContainerHeight())
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

  setStartDate = date => {
    this.setState({startDate: date});
  };

  onChangeDate = selectedDate => {
    const currentDate = selectedDate || this.state.startDate;
    this.setStartDate(currentDate);
    this.onUserSelectMessage(selectedDate.toString());
    this.setDatePickerVisible(false);
  };

  getDatePicker = () => {
    const {datePickerVisible} = this.state;
    // const {
    //   level1Path,
    //   level2Path,
    //   customOnPressUpdate,
    //   defaultOnPressUpdateDisabled,
    // } = this.props;

    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.COLORS.TRANSPARENT,
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={datePickerVisible}
          onRequestClose={() => {
            this.setDatePickerVisible(false);
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
                  color: theme.COLORS.WHITE,
                  fontFamily: theme.FONTS.TEXT,
                  fontSize: 16,
                  fontWeight: '700',
                  textAlign: 'center',
                }}
                customOnDateChange={value => {
                  this.setSelectedDate(value);
                }}
                customDatePickerMode={this.state.datePickerMode}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: width - theme.SIZES.BASE * 8,
                }}>
                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
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
                    title="Select"
                    onPress={() => {
                      this.onChangeDate(this.state.selectedDate);

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

  setSingleSelectedOption = async singleSelectedOptionP => {
    this.setState({singleSelectedOption: singleSelectedOptionP});
  };

  setCurrentOnboardingIndex = async currentOnboardingIndexP => {
    this.setState({currentOnboardingIndex: currentOnboardingIndexP});
  };

  setInputVisible = async inputVisibleP => {
    Promise.resolve()
      .then(() => this.setState({inputVisible: inputVisibleP}))
      .then(() => this.syncUserResponseContainerHeight())
      .catch(error => {
        console.log(error);
      });
  };

  setButtonReponsesVisible = async buttonReponsesVisibleP => {
    Promise.resolve()
      .then(() =>
        this.setState({buttonReponsesVisible: buttonReponsesVisibleP}),
      )
      .then(() => this.syncUserResponseContainerHeight())
      .catch(error => {
        console.log(error);
      });
  };

  setButtonResponsesList = async buttonResponsesListP => {
    this.setState({buttonResponsesList: buttonResponsesListP});
    this.setButtonReponsesVisible(
      !(buttonResponsesListP == null) &&
        Object.keys(buttonResponsesListP).length > 0,
    );
  };

  setChatbotModalMessages = async chatbotModalMessagesP => {
    this.setState({chatbotModalMessages: chatbotModalMessagesP});
  };

  setProfileSetupProgress = async currentProgress => {
    const uid = auth.currentUser?.uid;

    if (currentProgress >= 2) {
      this.props.dispatch(setTodoStatusAction(0, 2));
    }
    if (currentProgress >= 4) {
      this.props.dispatch(setTodoStatusAction(1, 2));
    }

    const setupProgress = await db.collection('Users').doc(uid).set({
      firstTimeSetupProgress: currentProgress,
    });
    this.props.dispatch(setOnboardingProgressAction(currentProgress));
  };

  getCheckboxList = itemsList => {
    //  FIXMETUNA:  need to change this to add a button to response list which set the list to
    //  invisible when it's selected

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {Object.entries(itemsList).map(itemTmp => {
          let indexCount = itemTmp[0];
          let nameNew = itemTmp[1];
          const tmpName = nameNew;
          return (
            <CheckBox
              checkedColor={theme.COLORS.PRIMARY2}
              title={tmpName}
              key={indexCount}
              checked={this.state.multiSelectedOptions.includes(tmpName)}
              textStyle={{
                color: theme.COLORS.TEXT1,
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
      </View>
    );
  };

  handleUserInput = async userMessageText => {
    let responseObj = {
      response: [],
      freeformInputAccepted: false,
      responseOptions: {},
    };

    let additionalPrependedResponses = [];

    //  FIXMETUNA:  use this to ask the next question in the onboarding process
    // this.state.currentOnboardingIndex;
    //  FIXMETUNA:  call this whenever the next question in the sequence is asked
    //  this.setCurrentOnboardingIndex(this.state.currentOnboardingIndex + 1)

    //  FIXMETUNA:
    //  FIXMETUNA:  skip through onboarding questions depending on previous user responses
    //  FIXMETUNA:
    return Promise.resolve()

      .then(() => {
        if (this.state.currentOnboardingIndex == 5) {
          if (!(userMessageText == 'Yes')) {
            return this.setCurrentOnboardingIndex(7);
          }
        }
      })
      .then(() => {
        if (this.state.currentOnboardingIndex == 6) {
          if (userMessageText.toLowerCase() == 'none') {
            return this.setCurrentOnboardingIndex(7);
          }
        }
      })
      .then(() => {
        if (this.state.currentOnboardingIndex == 7) {
          if (
            !(userMessageText == 'Yes') &&
            !(userMessageText == 'No') &&
            !(userMessageText.toLowerCase() == 'none')
          ) {
            additionalPrependedResponses = [
              "We'll make sure to send you reminders and support as your appointment nears!",
            ];
            return this.setOnboarding(userMessageText, 'surgeryDate');
          }
        }
      })

      .then(() => {
        if (this.state.currentOnboardingIndex == 10) {
          if (!(userMessageText == 'Yes')) {
            this.setCurrentOnboardingIndex(13);
          }
          return this.setOnboarding(userMessageText, 'menstrationStatus');
        }
      })
      .then(() => {
        if (this.state.currentOnboardingIndex == 17) {
          this.setCurrentOnboardingIndex(20);
        }
      })
      .then(() => {
        if (this.state.currentOnboardingIndex == 31) {
          return this.syncSelectedContraceptiesToState();
        } else {
          return null;
        }
      })
      .then(() => {
        if (
          this.state.currentOnboardingIndex == 32 &&
          userMessageText == 'No, all done!'
        ) {
          return this.setCurrentOnboardingIndex(37);
        } else if (
          this.state.currentOnboardingIndex == 37 &&
          userMessageText == 'Yes'
        ) {
          return this.setCurrentOnboardingIndex(32);
        }
      })

      .then(() => {
        switch (this.state.currentOnboardingIndex) {
          case 0:
            responseObj.response = [
              'Hi, I’m Lasa - an AI chatbot here to help you navigate your health.',
              'I don’t have all of the answers (yet!) but I’m always here to listen to you and help you through difficult moments. I’m getting smarter every day and sometimes I’ll ask you for feedback so that I can learn how to be a better friend to you.',
              'I’m excited to meet you and would love to learn more about you. To start, what should I call you?',
            ];
            responseObj.freeformInputAccepted = true;

            this.setCurrentOnboardingIndex(
              this.state.currentOnboardingIndex + 1,
            );
            this.setProfileSetupProgress(1);
            break;
          case 1:
            if (userMessageText.length > 0) {
              responseObj.response = [
                'Great to meet you ' + userMessageText + '!',
                'When is your birthday?',
              ];
              responseObj.freeformInputAccepted = false;

              this.setDatePickerMode('date');
              this.delayedExecution(2500, () =>
                this.setDatePickerVisible(true),
              );

              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );
              this.setOnboarding(userMessageText, 'nickname');
            } else {
              responseObj.response = ['Is there anything I should call you?'];
              responseObj.freeformInputAccepted = true;
            }
            break;
          case 2:
            if (userMessageText.length > 0) {
              const currentDateObj1 = new XDate();
              const userBirthdayDateObj = new XDate(userMessageText);
              const userYearsOld = parseInt(
                userBirthdayDateObj.diffYears(currentDateObj1),
              );

              if (userYearsOld >= 18 && userYearsOld < 120) {
                responseObj.response = [
                  'Great - I’ll make sure to remember and send you something special!',
                  'What country do you live in?',
                ];

                this.setSingleOptionPickerList(this.allCountriesList);

                this.delayedExecution(3000, () =>
                  this.setSingleOptionPickerVisible(true),
                );

                this.setCurrentOnboardingIndex(
                  this.state.currentOnboardingIndex + 1,
                );
                this.setOnboarding(userMessageText, 'birthday');
              } else {
                responseObj.response = [
                  'Your age must be between 18 and 120 to use our app, sorry.',
                ];

                this.setDatePickerMode('date');
                this.delayedExecution(2500, () =>
                  this.setDatePickerVisible(true),
                );
              }
            } else {
              responseObj.response = [
                "I missed that, what's your birthday again?",
              ];

              this.setDatePickerMode('date');
              this.delayedExecution(2500, () =>
                this.setDatePickerVisible(true),
              );
            }
            break;
          case 3:
            if (userMessageText.length > 0) {
              if (userMessageText == 'United States of America') {
                responseObj.response = [
                  'We are currently conducting a study to help get comprehensive endometriosis care covered by insurance. If you are interested in participating in the study please follow the signup link below: https://insead.eu.qualtrics.com/jfe/form/SV_4YGWJdsmhlJC6AC.',
                  "What's your zip code?",
                ];
                responseObj.freeformInputAccepted = true;

                this.setCurrentOnboardingIndex(
                  this.state.currentOnboardingIndex + 1,
                );
                this.setOnboarding(userMessageText, 'country');
              } else {
                responseObj.response = [
                  'Lasa Health is only available in the United States for now. Sorry for the inconvenience. Please visit our website, lasahealth.com, for updates on availability.',
                ];
                responseObj.freeformInputAccepted = false;

                this.setSingleOptionPickerList(this.allCountriesList);

                this.delayedExecution(3000, () =>
                  this.setSingleOptionPickerVisible(true),
                );
              }
            } else {
              responseObj.response = [
                "Hmmm, I didn't catch that. Where do you live?",
              ];
              responseObj.freeformInputAccepted = false;

              this.setSingleOptionPickerList(this.allCountriesList);

              this.delayedExecution(3000, () =>
                this.setSingleOptionPickerVisible(true),
              );
            }
            break;

          case 4:
            if (userMessageText.length > 0) {
              // Validate US zip code.
              if (isValidZipCode(userMessageText)) {
                responseObj.response = [
                  'Do you have a referral code from your clinic? (it would be included in your invitiation email from your clinic)',
                ];
                responseObj.responseOptions = {
                  Yes: '',
                  No: '',
                };
                responseObj.freeformInputAccepted = false;

                this.setCurrentOnboardingIndex(
                  this.state.currentOnboardingIndex + 1,
                );

                this.setOnboarding(userMessageText, 'zipCode');
              } else {
                responseObj.response = [
                  'Sorry, zip code is not valid. Please enter a valid zip code.',
                ];
                responseObj.freeformInputAccepted = true;
              }
            } else {
              responseObj.response = [
                "Sorry, I didn't get that. What's your current zip code?",
              ];
              responseObj.freeformInputAccepted = true;
            }
            break;

          case 5:
            if (userMessageText.length > 0) {
              responseObj.response = ['Please enter your referral code'];
              responseObj.freeformInputAccepted = true;

              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );
            } else {
              responseObj.response = [''];
            }
            break;

          case 6:
            if (userMessageText.length > 0) {
              //  FIXMETUNA:  need to add a check for NONE at this point in the conversation
              if (userMessageText == ceapsReferralCode) {
                //  FIXMETUNA:  this is a place holder, will need to use a dict as we start to work with multiple clinics
                matchingClinic = 'CEAPS Clinic';
                responseObj.response = [
                  'This code matches ' +
                    matchingClinic +
                    ', their contact information has been added to your account.',
                  'When is your surgery scehduled?',
                ];
                responseObj.freeformInputAccepted = false;
                this.setDatePickerMode('date');
                this.delayedExecution(2500, () =>
                  this.setDatePickerVisible(true),
                );

                this.setCurrentOnboardingIndex(
                  this.state.currentOnboardingIndex + 1,
                );
                this.setOnboarding(userMessageText, 'associatedClinic');
              } else {
                responseObj.response = [
                  'Sorry that code does not match any clinics in our system',
                  "If you don't have a matching code, you can always enter a new referral code in the app settings if you find it later",
                  "Please enter your referral code or type NONE if you don't have a code at this time",
                ];
                responseObj.freeformInputAccepted = true;
              }
            } else {
              responseObj.response = [
                'Sorry that code does not match any clinics in our system',
                "If you don't have a matching code, you can always enter a new referral code in the app settings if you find it later",
                "Please enter your referral code or type NONE if you don't have a code at this time",
              ];
              responseObj.freeformInputAccepted = true;
            }
            break;

          case 7:
            if (userMessageText.length > 0) {
              responseObj.response = additionalPrependedResponses.concat([
                'What are your preferred pronouns?',
              ]);
              responseObj.responseOptions = {
                'She/her/hers': '',
                'He/him/his': '',
                'They/them/their': '',
                Other: '',
              };
              responseObj.freeformInputAccepted = false;

              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );
            } else {
              responseObj.response = [''];
            }
            break;
          case 8:
            if (userMessageText.length > 0) {
              responseObj.response = [
                'I know this might not be your current sex or gender, but in order to provide you with relevant medical content, do you mind telling me your assigned biological sex at birth?',
              ];
              responseObj.responseOptions = {
                Female: '',
                Male: '',
              };
              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );
              this.setOnboarding(userMessageText, 'preferredPronouns');
            } else {
              responseObj.response = [''];
            }
            break;
          case 9:
            if (userMessageText.length > 0) {
              responseObj.response = [
                'Would you like to track your menstrual cycle?',
              ];
              responseObj.responseOptions = {
                Yes: '',
                No: '',
              };
              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );
              this.setOnboarding(userMessageText, 'sexAtBirth');
            } else {
              responseObj.response = [''];
            }
            break;
          case 10:
            if (userMessageText.length > 0) {
              responseObj.response = [
                'What was the first day of your most recent menstrual period?',
              ];

              this.setDatePickerMode('date');

              this.delayedExecution(1500, () =>
                this.setDatePickerVisible(true),
              );
              responseObj.freeformInputAccepted = false;
              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );
            } else {
              responseObj.response = [''];
            }
            break;
          case 11:
            if (userMessageText.length > 0) {
              responseObj.response = [
                'What is the average length (days) of your menstrual period?',
              ];

              this.setSingleOptionPickerList(this.numberList);

              this.delayedExecution(1500, () =>
                this.setSingleOptionPickerVisible(true),
              );
              responseObj.freeformInputAccepted = false;
              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );
              this.setOnboarding(
                userMessageText,
                'menstruation',
                'firstDayOfLastPeriod',
              );
            } else {
              responseObj.response = [''];
            }
            break;
          case 12:
            if (userMessageText.length > 0) {
              responseObj.response = [
                'What is the average length of your cycle?',
              ];
              this.setSingleOptionPickerList(this.numberList);

              this.delayedExecution(1500, () =>
                this.setSingleOptionPickerVisible(true),
              );
              responseObj.freeformInputAccepted = false;
              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );
              this.setOnboarding(
                userMessageText,
                'menstruation',
                'avgLenOfPeriod',
              );
            } else {
              responseObj.response = [''];
            }
            break;

          //  FIXMETUNA:
          //  FIXMETUNA:  add the health profile pre-survey here
          case 13:
            // validate previous response
            if (userMessageText.length > 0) {
              responseObj.response = [
                'Would you say that in general your health is:',
              ];
              responseObj.responseOptions = {
                Excellent: '',
                'Very Good': '',
                Good: '',
                Fair: '',
                Poor: '',
              };
              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );

              //  save previous response
              if (parseInt(userMessageText)) {
                this.setOnboarding(
                  userMessageText,
                  'menstruation',
                  'avgLenOfCycle',
                );
              }
            } else {
              responseObj.response = [''];
            }
            break;

          case 14:
            // validate previous response
            if (userMessageText.length > 0) {
              responseObj.response = [
                'Now thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days was your physical health not good?',
              ];
              this.setSingleOptionPickerList(utils.numberListUpTo30);

              this.delayedExecution(1500, () =>
                this.setSingleOptionPickerVisible(true),
              );

              responseObj.freeformInputAccepted = false;
              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );

              // //  save previous response
              this.props.dispatch(
                addIntroHealthSurveyAnswerAction(
                  this.setupBeginTS,
                  'HRQOL1',
                  userMessageText,
                ),
              );
            } else {
              responseObj.response = [''];
            }
            break;

          case 15:
            // validate previous response
            if (userMessageText.length > 0) {
              responseObj.response = [
                'Now thinking about your mental health, which includes stress, depression, and problems with emotions, for how many days during the past 30 days was your mental health not good?',
              ];
              this.setSingleOptionPickerList(utils.numberListUpTo30);

              this.delayedExecution(1500, () =>
                this.setSingleOptionPickerVisible(true),
              );
              responseObj.freeformInputAccepted = false;
              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );

              // //  save previous response
              if (parseInt(userMessageText)) {
                this.props.dispatch(
                  addIntroHealthSurveyAnswerAction(
                    this.setupBeginTS,
                    'HRQOL2',
                    userMessageText,
                  ),
                );
              }
            } else {
              responseObj.response = [''];
            }
            break;

          case 16:
            // validate previous response
            if (userMessageText.length > 0) {
              responseObj.response = [
                'During the past 30 days, for about how many days did poor physical or mental health keep you from doing your usual activities, such as self-care, work, or recreation?',
              ];
              this.setSingleOptionPickerList(utils.numberListUpTo30);

              this.delayedExecution(1500, () =>
                this.setSingleOptionPickerVisible(true),
              );
              responseObj.freeformInputAccepted = false;
              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );

              // //  save previous response
              if (parseInt(userMessageText)) {
                this.props.dispatch(
                  addIntroHealthSurveyAnswerAction(
                    this.setupBeginTS,
                    'HRQOL3',
                    userMessageText,
                  ),
                );
              }
            } else {
              responseObj.response = [''];
            }
            break;

          case 20:
            if (userMessageText.length > 0) {
              responseObj.response = [
                'I only have a few questions left.',
                'Ready to continue setting up your profile?',
              ];
              responseObj.responseOptions = {
                "Yes, let's do it!": '',
                'Not now, let me explore!': 'exit',
              };
              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );
              this.setProfileSetupProgress(2);
              // //  save previous response
              if (parseInt(userMessageText)) {
                this.props.dispatch(
                  addIntroHealthSurveyAnswerAction(
                    this.setupBeginTS,
                    'HRQOL4',
                    userMessageText,
                  ),
                );
              }
            } else {
              responseObj.response = [''];
            }
            break;

          case 21:
            if (userMessageText.length > 0) {
              responseObj.response = ["What's your current pregnancy status?"];
              responseObj.responseOptions = {
                'Currently Pregnant': '',
                'Trying to conceive': '',
                None: '',
              };
              responseObj.freeformInputAccepted = false;
              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );
            } else {
              responseObj.response = [''];
            }
            break;

          case 22:
            if (userMessageText.length > 0) {
              responseObj.response = [
                'Do you use contraception? If yes, specify: (multiple)',
              ];
              const contraceptivesList = [
                'Implant',
                'IUD',
                'Shot',
                'Vaginal Ring',
                'Patch',
                'Pill',
                'Condom',
                'Fertility Awareness',
                'Withdrawal',
                'Breastfeeding',
                'Barrier gel',
                'Spermacide',
                'Diaphragm',
                'Sterilization',
                'Abstinence',
                'None',
              ];

              this.setMultiOptionPickerList(contraceptivesList);

              this.delayedExecution(1500, () =>
                this.setMultiOptionPickerVisible(true),
              );
              responseObj.responseOptions = {
                Next: '',
              };
              responseObj.freeformInputAccepted = false;

              this.setCurrentOnboardingIndex(31);
              this.setOnboarding(userMessageText, 'pregnancyStatus');
            } else {
              responseObj.response = [''];
            }
            break;

          case 31:
            if (userMessageText.length > 0) {
              responseObj.response = [
                'What conditions have you been diagnosed with? You don’t need to tell me everything, but I’d love to hear about anything chronic, episodic, or reoccurring that impacts your life.',
                'Would you like to add a condition?',
              ];
              responseObj.responseOptions = {
                Yes: '',
                'No, all done!': '',
              };

              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );
            } else {
              responseObj.response = [''];
            }
            break;
          case 32:
            if (userMessageText.length > 0) {
              responseObj.response = ['What condition would you like to add?'];

              this.setSingleOptionPickerList(utils.commonChronicConditionsList);

              this.delayedExecution(1500, () =>
                this.setSingleOptionPickerVisible(true),
              );
              responseObj.freeformInputAccepted = false;
              this.setCurrentOnboardingIndex(36);
            } else {
              responseObj.response = [''];
            }
            break;

          case 36:
            if (userMessageText.length > 0) {
              this.setMultiOptionPickerVisible(false);
              responseObj.response = [
                'Would you like to add another condition?',
              ];
              responseObj.responseOptions = {
                Yes: '',
                'No, all done!': '',
              };

              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );

              this.setLastConditionAdded(userMessageText);
              this.addNewCondition(userMessageText);
            } else {
              responseObj.response = [
                "What's the name of the condition you wanted to add?",
              ];
            }
            break;
          case 37:
            if (userMessageText.length > 0) {
              responseObj.response = ['Thank you!'];

              responseObj.responseOptions = {
                Next: 'exit',
              };
              this.setProfileSetupProgress(4);
              this.setCurrentOnboardingIndex(
                this.state.currentOnboardingIndex + 1,
              );
            } else {
              responseObj.response = [''];
            }
            break;
          default:
            break;
        }

        return responseObj;
      })
      .catch(error => {
        console.log(error);
      });
  };

  checkForFirstTimeLogin = async () => {
    const uid = auth.currentUser?.uid;
    const setupProgress = await db
      .collection('Users')
      .doc(uid)
      .get()
      .then(snapshot => {
        const snapshotData = snapshot.data();
        if (snapshotData == null) {
          return null;
        } else {
          return snapshotData['firstTimeSetupProgress'];
        }
      })
      .catch(error => {
        console.log(error);
      });

    return setupProgress;
  };

  componentDidMount() {
    const {navigation, route} = this.props;
    this.mixpanel.track('profileSetupScreen_reached');

    const chatbotModalDTRequest = 'startOboarding';
    Promise.resolve()
      .then(() => this.checkForFirstTimeLogin())
      .then(profileSetupProgress => {
        if (profileSetupProgress) {
          this.setProfileSetupProgress(profileSetupProgress);
          //  FIXMETUNA:  set the current progress step here I think
          if (profileSetupProgress == 1) {
            this.setCurrentOnboardingIndex(0);
          } else if (profileSetupProgress == 2) {
            this.setCurrentOnboardingIndex(20);
          } else {
            this.setCurrentOnboardingIndex(37);
          }
        }

        this.setChatbotTyping(true);
      })
      .then(() => this.syncUserResponseContainerHeight())
      // .then(() => this.sleep(500))
      .then(() => this.handleUserInput(chatbotModalDTRequest))

      .then(response => {
        return this.sendChatbotMessagesSequentially(response);
      })
      .then(response => {
        this.setInputVisible(response.freeformInputAccepted);
        return this.setButtonResponsesList(response.responseOptions);
      })
      .catch(function (err) {
        console.warn(err);
      });
  }

  setMessages = async newMessages => {
    return this.setChatbotModalMessages(newMessages);
  };

  setChatbotTyping = async value => {
    return this.setState({chatbotTyping: value});
  };

  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  sendChatbotMessagesSequentially = async responseObj => {
    let messageNum = -1;
    const lastMessageNum = responseObj.response.length - 1;

    //  start chatbot typing right away
    await this.setChatbotTyping(true);
    let botTypingTime = 300;
    await this.sleep(botTypingTime);

    for (const messageVal of responseObj.response) {
      messageNum = messageNum + 1;
      await this.setChatbotTyping(false);
      await this.onAmieChatbotMessage(messageVal);
      botTypingTime = Math.ceil(messageVal.length / 30) * 300;
      await this.setChatbotTyping(messageNum < lastMessageNum);
      await this.sleep(botTypingTime);
    }

    return responseObj;
  };

  onSend = (messages = []) => {
    // const newMessage = {
    //   _id: 1,
    //   text: messages.text,
    //   createdAt: new Date(),
    //   user: {
    //     _id: auth?.currentUser?.email,
    //     _uid: auth?.currentUser?.uid,
    //     name: auth?.currentUser?.displayName,
    //   },
    // };

    const userMessageText = messages[0].text;
    Promise.resolve()
      .then(() => {
        this.setMessages(
          GiftedChat.append(this.state.chatbotModalMessages, messages),
        );
      })
      .then(() => {
        this.setChatbotTyping(true);
      })
      .then(() => this.sleep(300))
      .then(() => {
        //  close all open user response options while you wait
        if (this.state.inputVisible) {
          this.setInputVisible(false);
        }
        if (this.state.datePickerVisible) {
          this.setDatePickerVisible(false);
        }
        if (this.state.buttonReponsesVisible) {
          this.setButtonReponsesVisible(false);
        }
        if (this.state.singleOptionPickerVisible) {
          this.setSingleOptionPickerVisible(false);
        }
        if (this.state.multiOptionPickerVisible) {
          this.setMultiOptionPickerVisible(false);
        }
      })
      .then(() => this.handleUserInput(userMessageText))
      .then(response => {
        return this.sendChatbotMessagesSequentially(response);
      })
      .then(response => {
        this.setInputVisible(response.freeformInputAccepted);
        return this.setButtonResponsesList(response.responseOptions);
      })
      .catch(function (err) {
        console.warn(err);
      });
  };

  onUserSelectMessage = newMessage => {
    const userSelectMessage = {
      _id: uuidv4(),
      text: newMessage,
      createdAt: new Date(),
      user: {
        _id: auth?.currentUser?.email,
        _uid: auth?.currentUser?.uid,
        name: auth?.currentUser?.displayName,
      },
    };

    this.onSend([userSelectMessage]);
  };

  onAmieChatbotMessage = async newMessage => {
    const chatbotMessage = {
      _id: uuidv4(),
      text: newMessage,
      createdAt: new Date(),
      user: {
        _id: 'lasachatbot@lasahealth.com',
        _uid: 'lasachatbotuid123',
        name: 'Lasa',
      },
    };
    return this.setMessages(
      GiftedChat.append(this.state.chatbotModalMessages, chatbotMessage),
    );
  };

  renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: theme.COLORS.PRIMARY2,
          },

          fontFamily: theme.FONTS.TEXT,
        }}
        textStyle={{
          right: {
            color: '#fff',
          },

          fontFamily: theme.FONTS.TEXT,
        }}
      />
    );
  };

  renderLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.COLORS.PRIMARY2} />
      </View>
    );
  };

  renderSend = props => {
    return (
      <Send {...props}>
        <View
          style={{
            ...styles.sendingContainer,
            marginTop: 8,
          }}>
          <IconButton
            icon="send-circle"
            size={32}
            color={theme.COLORS.PRIMARY2}
          />
        </View>
      </Send>
    );
  };

  scrollToBottomComponent = () => {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton
          icon="chevron-double-down"
          size={36}
          color={theme.COLORS.PRIMARY1}
        />
      </View>
    );
  };

  renderSystemMessage = props => {
    return (
      <SystemMessage
        {...props}
        wrapperStyle={styles.systemMessageWrapper}
        textStyle={styles.systemMessageText}
      />
    );
  };

  getCurrentTimestampMinutes = () => {
    return Math.floor(Date.now() / 60000.0);
  };

  loginJumpPart1 = (key, value) => dispatch => {
    dispatch(
      recoverLeftoverTrackLogStaging(
        this.getCurrentTimestampMinutes(),
        this.props.trackingLogStaging,
      ),
    );
    return Promise.resolve();
  };

  loginJumpPart2 = (key, value) => dispatch => {
    dispatch(
      updateOnboardingHealthProfileAction(
        this.state.initialUserHealthProfile.onboarding,
      ),
    );
    return Promise.resolve();
  };

  loginJumpPart3 = (key, value) => dispatch => {
    //  FIXMETUNA:  I need to restrict onboarding answers to existing conditions, or ones from a list
    //  which I can then use here to customize
    //     initialConditions: {
    //       "Example Condition": {
    //         yearSymptomsStarted: -1,
    //         yearDiagnosed: -1,
    //         primarySymptoms: ["symp1", "symp2"],
    //       },
    //     },

    //  add sleep advice for every user for now
    dispatch(addRecommendedLearnAction('Sleep and your health'));

    //  add appropriate contraception tracking and learn topics as per onboarding
    if (
      this.state.initialUserHealthProfile.onboarding.contraception.Implant ||
      this.state.initialUserHealthProfile.onboarding.contraception.IUD ||
      this.state.initialUserHealthProfile.onboarding.contraception[
        'Vaginal Ring'
      ] ||
      this.state.initialUserHealthProfile.onboarding.contraception.Patch ||
      this.state.initialUserHealthProfile.onboarding.contraception.Pill ||
      this.state.initialUserHealthProfile.onboarding.contraception.Condom ||
      this.state.initialUserHealthProfile.onboarding.contraception[
        'Fertility Awareness'
      ] ||
      this.state.initialUserHealthProfile.onboarding.contraception.Withdrawal ||
      this.state.initialUserHealthProfile.onboarding.contraception
        .Breastfeeding ||
      this.state.initialUserHealthProfile.onboarding.contraception.Abstinance
    ) {
      dispatch(addRecommendedLearnAction('Birth Control Methods'));
    }
    //  FIXMETUNA:  add more birth control methods to tracking once I've added them as possible symptoms
    //  if pregnant or trying to become pregnant add topics to learn
    if (
      this.state.initialUserHealthProfile.onboarding.pregnancyStatus ==
        'Currently Pregnant' ||
      this.state.initialUserHealthProfile.onboarding.pregnancyStatus ==
        'Trying to conceive'
    ) {
      dispatch(addRecommendedLearnAction('Pregnancy'));
    }

    //  add user provided initial symptoms to track
    if (
      this.state.initialUserHealthProfile.onboarding.initialSymptoms[
        'Painful periods'
      ]
    ) {
      dispatch(
        addTrackingSymptomAction(
          symptomsDir[1].Name,
          symptomsDir[1].IconName,
          symptomsDir[1].Type,
          symptomsDir[1].Category,
          symptomsDir[1].BodyPart,
          symptomsDir[1].Measurements,
        ),
      );
    }
    if (
      this.state.initialUserHealthProfile.onboarding.initialSymptoms[
        'Painful intercourse'
      ]
    ) {
      dispatch(
        addTrackingSymptomAction(
          symptomsDir[29].Name,
          symptomsDir[29].IconName,
          symptomsDir[29].Type,
          symptomsDir[29].Category,
          symptomsDir[29].BodyPart,
          symptomsDir[29].Measurements,
        ),
      );
    }
    if (
      this.state.initialUserHealthProfile.onboarding.initialSymptoms[
        'Infertility'
      ]
    ) {
      dispatch(addRecommendedLearnAction('Infertility'));
    }

    //  remove menstrual flow from tracking if user doens't menstruate currently
    if (
      !(
        this.state.initialUserHealthProfile.onboarding.menstrationStatus ==
        'Yes'
      )
    ) {
      dispatch(
        removeTrackingSymptomAction('Menstrual Flow', 'Other', '', 'Menstrual'),
      );
    }

    //  remove vaginal discharge from tracking if user is not female
    if (
      !(this.state.initialUserHealthProfile.onboarding.sexAtBirth == 'Female')
    ) {
      dispatch(
        removeTrackingSymptomAction(
          'Vaginal Discharge',
          'Other',
          '',
          'Menstrual',
        ),
      );
    }

    //  add an entry in the log for the last period if the user menstruates
    if (
      this.state.initialUserHealthProfile.onboarding.menstrationStatus ==
        'Yes' &&
      this.state.initialUserHealthProfile.onboarding.menstruation
        .firstDayOfLastPeriod &&
      !(
        this.state.initialUserHealthProfile.onboarding.menstruation
          .firstDayOfLastPeriod == ''
      )
    ) {
      const dateParts =
        this.state.initialUserHealthProfile.onboarding.menstruation.firstDayOfLastPeriod.split(
          '/',
        );
      const firstDayOfLastPeriodDate = new XDate(
        dateParts[2],
        dateParts[0],
        dateParts[1],
      );
      const firstDayOfLastPeriodTSMinutes = Math.floor(
        firstDayOfLastPeriodDate.getTime() / 60000.0,
      );

      if (!(firstDayOfLastPeriodTSMinutes == null)) {
        dispatch(
          addTrackingLogAction(firstDayOfLastPeriodTSMinutes, {
            Type: 'Menstrual',
            BodyPart: 'Pelvis',
            IconName: 'Svg060Drop',
            Category: 'Gynecological',
            Name: 'Medium',
            Measurements: {
              Binary: true,
              Severity: true,
              Location: true,
              Number: true,
              Options: [],
            },
          }),
        );
      }
    }

    //  update user analytics redux
    console.log(
      'Syncing menstruation profile: ',
      this.state.initialUserHealthProfile.onboarding.menstruation,
    );
    dispatch(
      updateUserMenstrualOnboardingAction(
        parseInt(
          this.state.initialUserHealthProfile.onboarding.menstruation
            .avgLenOfCycle,
        ),
        parseInt(
          this.state.initialUserHealthProfile.onboarding.menstruation
            .avgLenOfPeriod,
        ),
        this.state.initialUserHealthProfile.onboarding.menstruation
          .firstDayOfLastPeriod,
        parseInt(
          this.state.initialUserHealthProfile.onboarding.menstruation
            .startAgePeriod,
        ),
      ),
    );
    return Promise.resolve();
  };

  loginJumpPart4 = (key, value) => dispatch => {
    dispatch(
      regenerateMenstrualCycleAction(
        this.props.trackingLog,
        this.props.userProfile,
      ),
    );
    return Promise.resolve();
  };

  loginJumpPart4_1 = (key, value) => dispatch => {
    dispatch(resetUserAnalyticsInteractiveParamsAction());
    return Promise.resolve();
  };

  loginJumpPart5 = (key, value) => dispatch => {
    dispatch(
      regenerateChartStatsAction(
        this.props.trackingLog,
        this.props.userProfile,
        this.props.userAnalytics,
        this.props.customSymptoms,
      ),
    );
    return Promise.resolve();
  };

  loginJumpPart6 = (key, value) => dispatch => {
    dispatch(resetTrackingLogStagingToDefaultAction());
    return Promise.resolve();
  };

  onLoginJump = garden => {
    Promise.resolve()
      .then(() => {
        if (!(auth.currentUser == null)) {
          this.props.dispatch(this.loginJumpPart1(1, 2));
        } else {
          return null;
        }
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          return this.props.dispatch(this.loginJumpPart2(1, 2));
        } else {
          return null;
        }
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          return this.props.dispatch(this.loginJumpPart3(1, 2));
        } else {
          return null;
        }
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          return this.props.dispatch(this.loginJumpPart4(1, 2));
        } else {
          return null;
        }
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          return this.props.dispatch(this.loginJumpPart4_1(1, 2));
        } else {
          return null;
        }
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          return this.props.dispatch(this.loginJumpPart5(1, 2));
        } else {
          return null;
        }
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          return this.props.dispatch(this.loginJumpPart6(1, 2));
        } else {
          return null;
        }
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          return syncServerUserSaveState(
            this.props.dispatch,
            this.props.localState,
          );
        } else {
          return null;
        }
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          return null;
        } else {
          return null;
        }
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          return garden.loadGardenStateForNewUser(this.props.gardenStateRedux);
        } else {
          return null;
        }
      })
      .then(() => {
        if (!(auth.currentUser == null)) {
          this.props.navigation.replace('App');
        } else {
          throw {code: -1, message: 'User Not Authenticated'};
        }
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(error);
        this.props.navigation.replace('LoginMain');
      });
  };

  setOnboarding = (value, level1Str, level2Str = '', level3Str = '') => {
    if (level2Str !== '') {
      if (level3Str !== '') {
        this.setState(
          produce(draft => {
            draft.initialUserHealthProfile.onboarding[level1Str][level2Str][
              level3Str
            ] = value;
          }),
        );
      } else {
        this.setState(
          produce(draft => {
            draft.initialUserHealthProfile.onboarding[level1Str][level2Str] =
              value;
          }),
        );
      }
    } else {
      this.setState(
        produce(draft => {
          draft.initialUserHealthProfile.onboarding[level1Str] = value;
        }),
      );
    }
  };

  renderAvatar = props => {
    if (props.currentMessage.user['_id'] == 'lasachatbot@lasahealth.com') {
      return (
        <Image
          source={getChatbotAvatar(this.props.amieChatbot.chatbotAvatarIndex)}
          style={styles.chatAvatarIconSmall}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    
    const {navigation} = this.props;

    const [
      datePicketActiveRowCount,
      singleOptionActiveRowCount,
      multiOptionActiveRowCount,
      buttonResponseListActiveRowCount,
      newUserResponseContainerHeight,
    ] = this.calcToolbarHeights();

    return (
      <GardenContext.Consumer>
        {garden => (
          <View
            testID="giftedChatView"
            style={{flex: 1, alignContent: 'center', bottom: this.state.inputVisible? 45: 0}}>
            <GiftedChat
              // ref={this.giftedChatRef}
              textInputRef={this.giftedChatInputRef}
              // messageContainerRef={this.giftedChatRef}
              messages={this.state.chatbotModalMessages}
              onSend={messages => this.onSend(messages)}
              user={{
                _id: auth?.currentUser?.email,
                _uid: auth?.currentUser?.uid,
                name: auth?.currentUser?.displayName,
              }}
              placeholder="Type your message here..."
              alwaysShowSend={true}
              isTyping={this.state.chatbotTyping}
              renderFooter={() => (
                <TypingIndicator isTyping={this.state.chatbotTyping} />
              )}
              showUserAvatar={false}
              scrollToBottom
              textInputStyle={{
                ...styles.amieChatInput,
              }}
              renderBubble={this.renderBubble}
              renderLoading={this.renderLoading}
              renderSend={this.renderSend}
              scrollToBottomComponent={this.scrollToBottomComponent}
              renderSystemMessage={this.renderSystemMessage}
              renderAvatar={this.renderAvatar}
              minComposerHeight={45}
              maxComposerHeight={45}
              minInputToolbarHeight={this.state.userResponseContainerHeight}
              renderInputToolbar={props =>
                this.state.inputVisible && (
                  <View
                    style={{
                      // flex: 1,
                      height: this.state.userResponseContainerHeight,
                      marginVertical: 0,
                      paddingVertical: 0,
                      bottom: -45
                    }}>
                    <InputToolbar
                      testID="inputToolbarInput"
                      {...props}
                      containerStyle={{}}
                      renderComposer={props1 => (
                        <Composer
                          {...props1}
                          textInputStyle={{
                            color: theme.COLORS.TEXT1,
                            // multiline: false,
                          }}
                        />
                      )}
                    />
                  </View>
                )
              }
            />

            {this.getDatePicker()}

            {this.state.singleOptionPickerVisible && (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 0,
                  paddingTop: 0,
                  marginBottom: 4,
                  height: this.activeItemHeight,
                }}>
                <View
                  style={{
                    width: styles.button.width,
                    height: styles.button.height,
                    flex: 1,
                  }}>
                  <Select
                    testID="inputToolbarOptionSelect"
                    customPrompt="Select an option"
                    defaultIndex={1}
                    options={this.state.singleOptionPickerList}
                    onSelect={(ind, value) => {
                      this.setSingleSelectedOption(value);
                      this.onUserSelectMessage(value);
                      this.setSingleOptionPickerVisible(false);
                    }}
                  />
                </View>
              </View>
            )}

            {this.state.multiOptionPickerVisible && (
              <View
                testID="inputToolbarMultiPickerView"
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 0,
                  paddingTop: 0,
                  left: theme.SIZES.BASE * -0.5,
                  marginHorizontal: theme.SIZES.BASE * 0.5,
                  height: this.activeItemHeight * multiOptionActiveRowCount,
                  width: width + theme.SIZES.BASE,
                }}>
                {this.getCheckboxList(this.state.multiOptionPickerList)}
              </View>
            )}

            {this.state.buttonReponsesVisible && (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 0,
                  paddingTop: 0,
                  marginBottom: 8,
                  height:
                    this.activeItemHeight * buttonResponseListActiveRowCount,
                }}>
                <View
                  testID="inputToolbarButtonResponsesView"
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}>
                  {Object.entries(this.state.buttonResponsesList).map(
                    (responseObj, i) => (
                      <Chip
                        customDebounceLength={
                          responseObj[1] == 'exit' ? 10000 : false
                        }
                        title={responseObj[0]}
                        key={i}
                        containerStyle={{
                          marginVertical: 14,
                          marginTop: 0,
                          marginHorizontal: 0,
                          paddingHorizontal: 16,
                          height: 40,
                        }}
                        style={{height: 40}}
                        onPress={() => {
                          if (responseObj[1] == 'exit') {
                            if (
                              !(
                                this.props.userProfile.introHealthSurvey == null
                              ) &&
                              Object.keys(
                                this.props.userProfile.introHealthSurvey,
                              ).length > 0
                            ) {
                              const introTS = Object.keys(
                                this.props.userProfile.introHealthSurvey,
                              )[0];
                              this.mixpanel.track('introHealthSurvey', {
                                timestamp: introTS,
                                HRQOL1:
                                  this.props.userProfile.introHealthSurvey[
                                    introTS
                                  ]['HRQOL1'],
                                HRQOL2:
                                  this.props.userProfile.introHealthSurvey[
                                    introTS
                                  ]['HRQOL2'],
                                HRQOL3:
                                  this.props.userProfile.introHealthSurvey[
                                    introTS
                                  ]['HRQOL3'],
                                HRQOL4:
                                  this.props.userProfile.introHealthSurvey[
                                    introTS
                                  ]['HRQOL4'],
                              });
                            }
                            console.log('EXIT');
                            Promise.resolve()
                              .then(() => this.onLoginJump(garden))
                              .catch(error => {
                                console.log(error);
                              });
                          } else {
                            Promise.resolve()
                              .then(() => {
                                const responseMessage = {
                                  _id: uuidv4(),
                                  text: responseObj[0],
                                  createdAt: new Date(),
                                  user: {
                                    _id: auth?.currentUser?.email,
                                    _uid: auth?.currentUser?.uid,
                                    name: auth?.currentUser?.displayName,
                                  },
                                };

                                return this.onSend([responseMessage]);
                              })
                              .catch(error => {
                                console.log(error);
                              });
                          }
                        }}
                      />
                    ),
                  )}
                </View>
              </View>
            )}
          </View>
        )}
      </GardenContext.Consumer>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
    trackingLog: state.trackLog.logHistory,
    trackingLogStaging: state.trackLogStaging,
    userAnalytics: state.userAnalytics,
    amieChatbot: state.amieChatbot,
    gardenStateRedux: state.garden,
    customSymptoms: state.trackCustomSymptoms.customSymptoms,
    localState: state,
  };
};
export default connect(mapStateToProps)(ProfileSetupScreen);
