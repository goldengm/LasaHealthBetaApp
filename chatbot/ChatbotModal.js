import React, {createRef} from 'react';
import {
  Dimensions,
  DeviceEventEmitter,
  Modal,
  Image,
  View,
  ActivityIndicator,
} from 'react-native';
import produce from 'immer';
import {connect} from 'react-redux';
import {theme, styles, utils} from '../constants';
import {Overlay} from 'react-native-elements';
import {v4 as uuidv4} from 'uuid';
import XDate from 'xdate';

import {
  GiftedChat,
  Bubble,
  Send,
  SystemMessage,
  InputToolbar,
  Composer,
} from 'react-native-gifted-chat';
import TypingIndicator from 'react-native-gifted-chat/lib/TypingIndicator';
import {IconButton} from 'react-native-paper';
import {auth} from '../shared/firebaseUtils';

// import { trainChatbot } from "./src/chatbot";
import {Button, CheckBox, DatePicker, Select, Chip} from '../components';
import {getChatbotAvatar} from '../constants/Images';
// import symptomsDir from '../constants/track/symptomsDir';
import {
  updateUserPublicProfileNameAction,
  addUserPublicProfileConditionAction,
} from '../redux/actions/userPublicProfileActions';
// import {setChatbotMessagesAction} from '../redux/actions/amieChatbotActions';
const chatbotValidLogic = require('../chatbot/logic/chatbotValidationLogicDT.json');

import {getOS} from '../shared/PlatformUtils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const iosPlatform = () => getOS() == 'ios';

const {width} = Dimensions.get('screen');
const initialDateValue = new Date(1598051730000);

export class ChatbotModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // modalVisible: false,
      // messages: [],
      currentConversationIndex: 0,
      chatbotTyping: false,
      chatbotModalMessages: [],
      // chatbotNLP: null,

      inputVisible: false,
      buttonReponsesVisible: true,
      buttonResponsesList: {},

      datePickerVisible: false,
      datePickerMode: 'date',
      singleOptionPickerVisible: false,
      multiOptionPickerVisible: false,
      lastConditionAdded: '',

      //  date selection state
      startDate: initialDateValue,
      selectedDate: initialDateValue,
      singleOptionPickerList: [],
      singleSelectedOption: -1,
      multiOptionPickerList: [],
      multiSelectedOptions: [],

      userResponseContainerHeight: 55,
    };

    this.giftedChatRef = createRef();
    this.activeItemHeight = 45;
    this.generalSymptomsList = utils.generalSymptomsList;
    this.numberList = utils.numberList;
    this.allCountriesList = utils.allCountriesList;
    const currentDateObj = new XDate();
    this.setupBeginTS = currentDateObj.getTime();

    this._unsubscribe = DeviceEventEmitter.addListener(
      'event.amieModalVisible',
      eventData => {
        const chatbotModalDTRequest = 'startTutorial';
        Promise.resolve()
          .then(() => {
            this.setChatbotTyping(true);
            return this.props.setModalVisible(true);
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
            console.log('Modal Visible false 4');
            this.props.setModalVisible(false);
          });
      },
    );

    // Promise.resolve()
    //   .then(() => trainChatbot())
    //   .then((chatbot) => {
    //     // console.log("RETURNED FROM CHATBOT TRAINING: ", chatbot);
    //     this.setChatbot(chatbot);
    //   })
    //   .then(() =>
    //     console.log("RETURNED FROM CHATBOT TRAINING: ", this.state.chatbotNLP)
    //   );
  }

  componentDidMount() {
    //  FIXMETUNA:  tmp fix for saved results on multi-account login
    this.setChatbotModalMessages([]);
  }

  componentWillUnmount() {
    this._unsubscribe.remove();
  }

  iOSInputOffset = () => {
    return iosPlatform() ? theme.SIZES.BASE : 0;
  };

  setSelectedDate = selectedDateP => {
    this.setState({selectedDate: selectedDateP});
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
        console.log('Modal Visible false 5');
        this.props.setModalVisible(false);
      });
  };

  // addNewCondition = async conditionName => {
  //   this.setState(
  //     produce(draft => {
  //       draft.initialUserHealthProfile.onboarding.initialConditions[
  //         conditionName
  //       ] = {
  //         yearSymptomsStarted: -1,
  //         yearDiagnosed: -1,
  //         primarySymptoms: [],
  //       };
  //     }),
  //   );
  // };

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
      .then(() =>
        this.setState({
          userResponseContainerHeight: newUserResponseContainerHeight,
        }),
      )
      .then(() => {
        this.giftedChatRef.current.resetInputToolbar();
      })
      .catch(error => {
        console.log(error);
        console.log('Modal Visible false 6');
        this.props.setModalVisible(false);
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
        console.log('Modal Visible false 7');
        this.props.setModalVisible(false);
      });
  };

  setDatePickerMode = async datePickerModeP => {
    this.setState({datePickerMode: datePickerModeP});
  };

  setCurrentConversationIndex = async currentConversationIndexP => {
    this.setState({currentConversationIndex: currentConversationIndexP});
  };

  setChatbot = async chatbotNLPP => {
    this.setState({chatbotNLP: chatbotNLPP});
  };

  setButtonReponsesVisible = async buttonReponsesVisibleP => {
    Promise.resolve()
      .then(() =>
        this.setState({buttonReponsesVisible: buttonReponsesVisibleP}),
      )
      .then(() => this.syncUserResponseContainerHeight())
      .catch(error => {
        console.log(error);
        console.log('Modal Visible false 8');
        this.props.setModalVisible(false);
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

  setUserResponseContainerHeight = async userResponseContainerHeightP => {
    this.setState({
      userResponseContainerHeight: userResponseContainerHeightP,
    });
  };

  setSingleOptionPickerVisible = async singleOptionPickerVisibleP => {
    Promise.resolve()
      .then(() =>
        this.setState({singleOptionPickerVisible: singleOptionPickerVisibleP}),
      )
      .then(() => this.syncUserResponseContainerHeight())
      .catch(error => {
        console.log(error);
        console.log('Modal Visible false 9');
        this.props.setModalVisible(false);
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
        console.log('Modal Visible false 10');
        this.props.setModalVisible(false);
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

  setButtonReponsesVisible;

  setInputVisible = async inputVisibleP => {
    Promise.resolve()
      .then(() => this.setState({inputVisible: inputVisibleP}))
      .then(() => this.syncUserResponseContainerHeight())
      .catch(error => {
        console.log(error);
        console.log('Modal Visible false 11');
        this.props.setModalVisible(false);
      });
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
    console.log('Handling user input');
    //  FIXMETUNA:  use this to ask the next question in the onboarding process
    // this.state.currentConversationIndex;
    //  FIXMETUNA:  call this whenever the next question in the sequence is asked
    //  this.setCurrentConversationIndex(this.state.currentConversationIndex + 1)

    //  FIXMETUNA:
    //  FIXMETUNA:  skip through onboarding questions depending on previous user responses
    //  FIXMETUNA:
    return (
      Promise.resolve()
        .then(() => {
          if (this.state.currentConversationIndex == 1) {
            if (!(userMessageText == 'Sure')) {
              return this.setCurrentConversationIndex(4);
            } else {
              //  if they want to add their existing name and conditions, add them
              let publicName = '';
              const fullName = this.props.userProfile['Name'];
              const nickName =
                this.props.userProfile.OnboardingAnswers.onboarding['nickname'];
              if (nickName != '') {
                publicName = nickName;
              } else {
                const nameParts = fullName.split(' ');
                if (nameParts.length > 0) {
                  publicName = nameParts[0];
                } else {
                  publicName = fullName;
                }
              }
              this.props.dispatch(
                updateUserPublicProfileNameAction(publicName),
              );

              Object.entries(
                this.props.userProfile.OnboardingAnswers.onboarding
                  .initialConditions,
              ).forEach((Key, val) => {
                this.props.dispatch(
                  addUserPublicProfileConditionAction(Key[0]),
                );
              });

              if (
                Object.entries(
                  this.props.userProfile.OnboardingAnswers.onboarding
                    .initialConditions,
                ).length > 0 ||
                this.props.userPublicProfile['healthConditions'].length > 0
              ) {
                //  if name and existing conditions are found, go to the end of the dialog
                return this.setCurrentConversationIndex(4);
              }
            }
            // return this.setOnboarding(userMessageText, 'menstrationStatus');
          } else if (this.state.currentConversationIndex == 2) {
            if (!(userMessageText == 'Yes')) {
              return this.setCurrentConversationIndex(4);
            }
            // return this.setOnboarding(userMessageText, 'menstrationStatus');
          } else if (this.state.currentConversationIndex == 4) {
            if (userMessageText == 'Yes') {
              return this.setCurrentConversationIndex(2);
            }
            // return this.setOnboarding(userMessageText, 'menstrationStatus');
          }
        })

        // .then(() => {
        //   if (this.state.currentConversationIndex == 1) {
        //     if (!(userMessageText == 'Sure')) {
        //       return this.setCurrentConversationIndex(4);
        //     }
        //     // return this.setOnboarding(userMessageText, 'menstrationStatus');
        //   }
        // })

        .then(() => {
          switch (this.state.currentConversationIndex) {
            case 0:
              responseObj.response = [
                'Hi again! Welcome to the community!',
                'Here on the Community page you can share status updates and chat with friends on the same health journey. Everything is private by default.',
                'Would you like to add your name and health conditions to your public profile?',
              ];
              responseObj.freeformInputAccepted = false;
              this.setCurrentConversationIndex(
                this.state.currentConversationIndex + 1,
              );

              responseObj.responseOptions = {
                Sure: '',
                'No thanks': '',
              };
              break;
            case 1:
              if (userMessageText.length > 0) {
                responseObj.response = [
                  "Great! It looks like you haven't added any conditions yet",
                  'Would you like to add a condition?',
                ];
                responseObj.responseOptions = {
                  Yes: '',
                  'No, all done!': '',
                };

                this.setCurrentConversationIndex(
                  this.state.currentConversationIndex + 1,
                );
              } else {
                responseObj.response = [''];
              }
              break;
            case 2:
              if (userMessageText.length > 0) {
                responseObj.response = [
                  'What condition would you like to add?',
                ];

                this.setSingleOptionPickerList(
                  utils.commonChronicConditionsList,
                );

                this.delayedExecution(1500, () =>
                  this.setSingleOptionPickerVisible(true),
                );
                responseObj.freeformInputAccepted = false;
                this.setCurrentConversationIndex(
                  this.state.currentConversationIndex + 1,
                );
              } else {
                responseObj.response = [''];
              }
              break;

            case 3:
              if (userMessageText.length > 0) {
                this.setMultiOptionPickerVisible(false);
                responseObj.response = [
                  'Would you like to add another condition?',
                ];
                responseObj.responseOptions = {
                  Yes: '',
                  'No, all done!': '',
                };

                this.setCurrentConversationIndex(
                  this.state.currentConversationIndex + 1,
                );

                this.setLastConditionAdded(userMessageText);
                this.props.dispatch(
                  addUserPublicProfileConditionAction(userMessageText),
                );
                // this.addNewCondition(userMessageText);
              } else {
                responseObj.response = [
                  "What's the name of the condition you wanted to add?",
                ];
              }
              break;

            case 4:
              responseObj.response = [
                'Sounds Great! You can update your public profile at any time by selecting your profile image in the upper left of the menu.',
                "You are not alone! Make sure to add new friends above, we're growing every day!",
              ];

              responseObj.responseOptions = {
                Close: 'exit',
              };
              // this.setCurrentConversationIndex(
              //   this.state.currentConversationIndex + 1,
              // );
              break;

            default:
              console.log(
                this.state.currentConversationIndex,
                ' Modal Visible false 12',
              );
              this.props.setModalVisible(false);
              break;
          }

          return responseObj;
        })
        .catch(error => {
          console.log(error);
          console.log('Modal Visible false 13');
          this.props.setModalVisible(false);
        })
    );
  };

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

  // const chatbot = trainChatbot();
  // console.log("CHATBOT :", chatbot);
  // this.setChatbot(chatbot);
  // nlpTmp.process("en", "I should go now")

  // <Input
  // // borderless
  // placeholder="Chatbot Test"
  // inputContainerStyle={{
  //   elevation: 1,
  //   paddingHorizontal: theme.SIZES.BASE,
  //   paddingVertical: theme.SIZES.BASE * 0.4,
  // }}
  // onChangeText={(textPass) => {
  //   Promise.resolve()
  //     .then(() => this.state.chatbotNLP.process("en", textPass))
  //     .then((response) => console.log(textPass, response));
  //   // const response = await this.state.chatbotNLP.process(
  //   //   "en",
  //   //   textPass
  //   // );

  //   // console.log(textPass, response);
  // }}
  // />

  // handleModalVisible = (modalVisible) => {
  //   this.setState({ modalVisible });
  // };

  setChatbotTyping = value => {
    // console.log("SET MESSAGES: ", newMessages);
    this.setState({chatbotTyping: value});
  };

  //   const [messages, setMessages] = useState([]);

  //  all the below does is fetch additional chat updates from firestore, not needed for chatbot
  //   useLayoutEffect(() => {
  //     console.log("USING LAYOUT CHAT< CRID: ", connect.currentCRID);
  //     // const unsubscribe = db
  //     //   .collection("Chatrooms")
  //     //   .doc(connect.currentCRID)
  //     //   .collection("messages")
  //     //   .orderBy("createdAt", "desc")
  //     //   .onSnapshot((snapshot) =>
  //     //     this.setMessages(
  //     //       snapshot.docs.map((doc) => ({
  //     //         _id: doc.data()._id,
  //     //         createdAt: doc.data().createdAt.toDate(),
  //     //         text: doc.data().text,
  //     //         user: doc.data().user,
  //     //       }))
  //     //     )
  //     //   );
  //     // return unsubscribe;
  //   }, []);

  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
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
      .then(() => {
        console.log('SEND userMessageText: ', userMessageText);
        return this.handleUserInput(userMessageText);
      })
      .then(response => {
        console.log('SEND response1: ', response);
        return this.sendChatbotMessagesSequentially(response);
      })
      .then(response => {
        console.log('SEND response2: ', response);
        this.setInputVisible(response.freeformInputAccepted);
        return this.setButtonResponsesList(response.responseOptions);
      })
      .catch(function (err) {
        console.warn(err);
        console.log('Modal Visible false 14');
        this.props.setModalVisible(false);
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

  render() {
    const {
      // style,
      // children,
      navigation,
      modalVisible,
      setModalVisible,
      // customOnPress,
      // customOnPressText,
      customOnBackdropPress,
      ...props
    } = this.props;

    // console.log("RERENDER MESSAGES: ", this.state.messages);
    // console.log(
    //   "CHAT MESSAGES LIST1: ",
    //   this.props.amieChatbot.currentChatMessages,
    //   typeof this.props.amieChatbot.currentChatMessages
    // );
    const [
      datePicketActiveRowCount,
      singleOptionActiveRowCount,
      multiOptionActiveRowCount,
      buttonResponseListActiveRowCount,
      newUserResponseContainerHeight,
    ] = this.calcToolbarHeights();

    return (
      <Overlay
        isVisible={modalVisible}
        onBackdropPress={customOnBackdropPress}
        fullScreen={false}
        animationType="slide"
        overlayStyle={{
          backgroundColor: 'transparent',
          // marginHorizontal: 0,
          // padding: 0,
          // marginTop: theme.SIZES.BASE * 3,
          // borderRadius: 50,
          // width: {width - theme.SIZES.BASE * 2},
          // width: width,
          width: width - theme.SIZES.BASE * 4,
          marginLeft: theme.SIZES.BASE * 1.5,
          // height: 200,
          elevation: 0,
          flex: 1,
          marginBottom: theme.SIZES.BASE * 2,
          alignContent: 'flex-end',
          // shadowOpacity: 0,
        }}>
        {/* <ScrollView> */}
        {/* <View
          style={{
            // margin: 0,
            backgroundColor: theme.COLORS.TRANSPARENT,
            // borderRadius: 20,
            // padding: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        > */}
        {/* <View style={{ backgroundColor: "red" }}>
              <Text>Hello</Text>
            </View> */}
        {/*The Chatbot interface goes here.... will this be super resource intensive?
            
            
            
            So basically I need to the following next:
            1) I need to create a modal object which can be placed in every main screen
            2) The modal object need to contain giftedchat in order to facilitate a coversation with
            the amie chatbot assistant/friend
            3) I need to create a redux state for the AmieChatbot
            4) The redux state needs to contain the entire history of their conversation for viewing later
            5) It needs to contain a more immediate conversation history for viewing an individual conversation
            starting from the first message from amie that interaction
            6) The redux store will probably need to maintain an internal state to keep track of user responses
            and the conversations progess in any given decision tree. Basically all the AmieChatbot state will
            be managed in redux since it persists across multiple componants, screens, and sessions.
            7) Then decision trees etc / logic maps will be stored in static dictionaries that the AmieChatBot
            can access as it's making it's decisions
            ***  These minimal pieces will allow us to put an interactive chatbot interface over the whole app
            ***  and will allow us to test if user's appreciate the experiences / valadate / or drop
            ***  the feature quickly in a rapid fashion. We want some sort of automatic validation built in
            ***  we just need to start testing various types of validation
            
            
            
            
            
            
            
            
            */}

        <View
          style={{
            flex: 1,
            alignContent: 'center',
            // backgroundColor: theme.COLORS.ERROR1,
          }}>
          <GiftedChat
            ref={this.giftedChatRef}
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
            // minComposerHeight={45}
            textInputStyle={{
              ...styles.amieChatInput,
            }}
            renderBubble={this.renderBubble}
            renderLoading={this.renderLoading}
            renderSend={this.renderSend}
            renderAvatar={this.renderAvatar}
            scrollToBottomComponent={this.scrollToBottomComponent}
            renderSystemMessage={this.renderSystemMessage}
            minComposerHeight={45}
            maxComposerHeight={45}
            // minInputToolbarHeight={90}
            minInputToolbarHeight={this.state.userResponseContainerHeight}
            renderInputToolbar={props => (
              <View
                style={{
                  // flex: 1,
                  height: this.state.userResponseContainerHeight,
                  marginVertical: 0,
                  paddingVertical: 0,
                }}>
                {this.getDatePicker()}

                {this.state.singleOptionPickerVisible && (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 0,
                      paddingTop: 0,
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
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
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
                      height:
                        this.activeItemHeight *
                        buttonResponseListActiveRowCount,
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
                                console.log('EXIT');
                                Promise.resolve()
                                  .then(() => {
                                    console.log('Modal Visible false 1');
                                    this.props.setModalVisible(false);
                                  })
                                  .catch(error => {
                                    console.log(error);
                                    console.log('Modal Visible false 2');
                                    this.props.setModalVisible(false);
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
                                    console.log('Modal Visible false 3');
                                    this.props.setModalVisible(false);
                                  });
                              }
                            }}
                          />
                        ),
                      )}
                    </View>
                  </View>
                )}
                {this.state.inputVisible && (
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
                )}
              </View>
            )}
          />
        </View>
        {/* </View> */}
        {/* </ScrollView> */}
      </Overlay>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    // trackedSymptoms: state.trackSymptoms.trackingSymptoms,
    // trackingLog: state.trackLog.logHistory,
    userProfile: state.userProfile,
    userPublicProfile: state.userPublicProfile,
    connect: state.connect,
    amieChatbot: state.amieChatbot,
  };
};
export default connect(mapStateToProps)(ChatbotModal);
