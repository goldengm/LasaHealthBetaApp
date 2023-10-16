import React, {createRef} from 'react';
import {Image, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import produce from 'immer';
import {theme, styles} from '../../constants';
import DateTimePicker from '@react-native-community/datetimepicker';
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
import {v4 as uuidv4} from 'uuid';

import {Button, Select, CheckBox, Chip} from '../../components';
import {getChatbotAvatar} from '../../constants/Images';
import {auth} from '../../shared/firebaseUtils';
import AmieChatbot from '../../chatbot/AmieChatBot';
import {setChatbotMessagesAction} from '../../redux/actions/amieChatbotActions';
const initialDateValue = new Date(1598051730000);

class ChatbotScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatbotTyping: false,
      // userResponseContainerHeight: 55,
      userResponseContainerHeight: 10,

      inputVisible: false,
      buttonReponsesVisible: true,
      buttonResponsesList: {},

      datePickerVisible: false,
      datePickerMode: 'date',
      singleOptionPickerVisible: false,
      multiOptionPickerVisible: false,

      //  date selection state
      startDate: initialDateValue,
      modeDate: 'date',
      showDate: false,
      singleOptionPickerList: [],
      singleSelectedOption: -1,
      multiOptionPickerList: [],
      multiSelectedOptions: [],
    };

    this.amieChatbot = createRef();
    this.giftedChatInputRef = createRef();
    this.activeItemHeight = 45;

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

  // setChatbot = async (chatbotNLPP) => {
  //   this.setState({ chatbotNLP: chatbotNLPP });
  // };

  //  multiselect response save example

  // syncSelectedContraceptiesToState = async () => {
  //   for (const item of this.state.multiSelectedOptions) {
  //     this.setOnboarding(true, "contraception", item);
  //   }
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

    const lineLength = 65;
    let optionsCharLength = 0;
    for (let item of this.state.multiOptionPickerList) {
      optionsCharLength += item.length + 4;
    }
    let multiOptionActiveRowCount = Math.ceil(optionsCharLength / lineLength);

    optionsCharLength = 0;
    for (let item of Object.entries(this.state.buttonResponsesList)) {
      optionsCharLength += item[0].length + 12;
    }
    let buttonResponseListActiveRowCount = Math.ceil(
      optionsCharLength / lineLength,
    );

    let datePicketActiveRowCount = this.state.datePickerVisible ? 1 : 0;
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
    const newUserResponseContainerHeight =
      inputOffset + this.activeItemHeight * activeRowCount;
    return [
      datePicketActiveRowCount,
      singleOptionActiveRowCount,
      multiOptionActiveRowCount,
      buttonResponseListActiveRowCount,
      newUserResponseContainerHeight,
    ];
  };

  syncUserResponseContainerHeight = async () => {
    console.log('Syncing input container size');

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
      // .then(() => {
      //   console.log('Updating input toolbar');
      //   this.giftedChatRef.current.resetInputToolbar();
      // })
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
        // An error happened.
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

  setModeDate = modeDate => {
    this.setState({modeDate: modeDate});
  };

  setShowDate = showDate => {
    this.setState({showDate: showDate});
  };

  onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.startDate;
    this.setShowDate(getOS() === 'ios');
    this.setStartDate(currentDate);
    console.log('Date changed: ', selectedDate);
    this.onUserSelectMessage(selectedDate.toString());
    this.setDatePickerVisible(false);
    this.setDatePickerMode('date');
  };

  showModeDate = currentMode => {
    this.setShowDate(true);
    this.setModeDate(currentMode);
  };

  showDatepicker = () => {
    this.setStartDate(initialDateValue); //  reset,only enter a date, otherwise they start
    this.showModeDate('date');
  };

  showTimepicker = () => {
    this.setStartDate(initialDateValue); //  reset, only enter a time, otherwise they stack
    this.showModeDate('time');
  };

  getDatePicker = () => {
    return (
      <View>
        {this.state.showDate && (
          <DateTimePicker
            display="spinner"
            testID="dateTimePicker"
            value={this.state.startDate}
            mode={this.state.modeDate}
            is24Hour={true}
            onChange={this.onChangeDate}
          />
        )}
      </View>
    );
  };

  setSingleSelectedOption = async singleSelectedOptionP => {
    this.setState({singleSelectedOption: singleSelectedOptionP});
  };

  setInputVisible = async inputVisibleP => {
    Promise.resolve()
      .then(() => this.setState({inputVisible: inputVisibleP}))
      .then(() => this.syncUserResponseContainerHeight())
      .catch(error => {
        console.log(error);
        // An error happened.
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
        // An error happened.
      });
  };

  setButtonResponsesList = async buttonResponsesListP => {
    this.setState({buttonResponsesList: buttonResponsesListP});
    this.setButtonReponsesVisible(
      !(buttonResponsesListP == null) &&
        Object.keys(buttonResponsesListP).length > 0,
    );
  };

  getCheckboxList = itemsList => {
    //  FIXMETUNA:  need to change this to add a button to response list which set the list to
    //  invisible when it's selected

    return (
      <View
        style={{
          flex: 1,
          // flexDirection: "row",
          flexWrap: 'wrap',
          alignContent: 'flex-end',
        }}>
        {Object.entries(itemsList).map(itemTmp => {
          let indexCount = itemTmp[0];
          let nameNew = itemTmp[1];
          // // console.log("PRINTING ALL SYMP DICTIONARIES!!!!", sympDict);

          const tmpName = nameNew;

          // // console.log(sympDict);
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

  setMessages = newMessages => {
    this.props.dispatch(setChatbotMessagesAction(newMessages));
  };

  setChatbotTyping = value => {
    this.setState({chatbotTyping: value});
  };

  handleUserInput = async (userMessageText, messageType) => {
    return this.amieChatbot.current.handleUserMessage(
      userMessageText,
      messageType,
    );
  };

  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  onSend = (
    messages = [],
    messageType = 'freeformInput',
    responsePath = null,
  ) => {
    console.log('TO SEND CHATBOT: ', messages, messageType, responsePath);

    const userMessageText = messages[0].text;

    Promise.resolve()
      .then(() => {
        this.setMessages(
          GiftedChat.append(
            this.props.amieChatbotRedux.currentChatMessages,
            messages,
          ),
        );
        console.log('one', messages);
      })
      .then(() => {
        this.setChatbotTyping(true);
        console.log('two');
        console.log('AMIE BOT REF: ', this.amieChatbot);
      })
      .then(() => this.sleep(1000))
      .then(() => {
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
        if (responsePath == null) {
          return this.handleUserInput(userMessageText, messageType);
        } else {
          return this.handleUserInput(responsePath, messageType);
        }
      })
      .then(response => {
        console.log('three');
        this.setChatbotTyping(false);

        Promise.resolve()

          // .then(() => {
          //   for (const messageVal of response.response) {
          //     this.onAmieChatbotMessage(messageVal);
          //     this.sleep(500);
          //   }
          // })
          // .then(() => {
          //   // this.onAmieChatbotMessage(response.response);
          //   this.setInputVisible(response.freeformInputAccepted);
          //   return this.setButtonResponsesList(response.responseOptions);
          // });
          .then(() => {
            this.onAmieChatbotMessage(response.response);
            this.setInputVisible(response.freeformInputAccepted);
            return this.setButtonResponsesList(response.responseOptions);
          })
          .catch(error => {
            console.log(error);
            // An error happened.
          });
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

  onAmieChatbotMessage = newMessage => {
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
    this.setMessages(
      GiftedChat.append(
        this.props.amieChatbotRedux.currentChatMessages,
        chatbotMessage,
      ),
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

  componentDidMount() {
    const {route, navigation} = this.props;
    this._unsubscribe = navigation.addListener('focus', () => {
      // do something

      //  FIXMETUNA:  fix the pathing here
      // route.params.chatbotDTKey
      let chatbotModalDTRequest = route?.params?.chatbotModalDTRequest;
      if (
        chatbotModalDTRequest == null ||
        chatbotModalDTRequest == '' ||
        chatbotModalDTRequest == 'null'
      ) {
        chatbotModalDTRequest = 'routing.chooseModule.listAll';
      }
      Promise.resolve()
        .then(() => {
          this.setChatbotTyping(true);
          console.log('two');
          console.log('AMIE BOT REF: ', this.amieChatbot);
        })
        .then(() => this.sleep(1000))
        .then(() => this.handleUserInput(chatbotModalDTRequest, 'responsePath'))
        .then(response => {
          console.log('three');
          this.setChatbotTyping(false);

          Promise.resolve()
            .then(() => {
              this.onAmieChatbotMessage(response.response);
              this.setInputVisible(response.freeformInputAccepted);
              return this.setButtonResponsesList(response.responseOptions);
            })
            .catch(error => {
              console.log(error);
              // An error happened.
            });
        })
        .catch(function (err) {
          console.warn(err);
        });
    });
  }

  componentWillUnmount() {
    if (this._unsubscribe) {
      this._unsubscribe();
    }
  }

  renderAvatar = props => {
    if (props.currentMessage.user['_id'] == 'lasachatbot@lasahealth.com') {
      return (
        <Image
          source={getChatbotAvatar(
            this.props.amieChatbotRedux.chatbotAvatarIndex,
          )}
          style={styles.chatAvatarIconSmall}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    const {navigation, customOnBackdropPress} = this.props;

    const [
      datePicketActiveRowCount,
      singleOptionActiveRowCount,
      multiOptionActiveRowCount,
      buttonResponseListActiveRowCount,
      newUserResponseContainerHeight,
    ] = this.calcToolbarHeights();

    // console.log("RERENDER MESSAGES: ", this.props.amieChatbot.currentChatMessages);

    /*The Chatbot interface goes here.... will this be super resource intensive?
            
            
            
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
            
            
            
            









            Here are some custom methods to check out, I should probably just make the composer it's
            Own custom componant, deciding when it is or isn't visible, adding choice bubbles and 
            suggestions below the chat conversation
            
renderInputToolbar (Function) - Custom message composer container
renderComposer (Function) - Custom text input message composer
            
textInputProps (Object) - Extra props to be passed to the <TextInput>
textInputStyle (Object) - Custom style to be passed to the <TextInput>
            
            


Explains a few tips on changing text input style:
https://github.com/FaridSafi/react-native-gifted-chat/issues/662


import { GiftedChat, InputToolbar } from 'react-native-gifted-chat'
//Note that I'm just importing the InputToolbar
<GiftedChat
     renderInputToolbar={this.renderInputToolbar} 
/>

  renderInputToolbar (props) {
     //Add the extra styles via containerStyle
    return <InputToolbar {...props} containerStyle={{borderTopWidth: 1.5, borderTopColor: '#333'}} />
  }









This reply is outdated (or too vague). This is proper way to do it in the current version.
Import Composer from 'react-native-gifted-chat' and then
<GiftedChat 
renderInputToolbar={props => ( <InputToolbar {...props} containerStyle={{ backgroundColor: "black", }} renderComposer={props1 => ( <Composer {...props1} textInputStyle={{ color: "white"}} /> )} /> )} 



... />









minComposerHeight (Object) - Custom min-height of the composer.
maxComposerHeight (Object) - Custom max height of the composer.

minInputToolbarHeight (Integer) - Minimum height of the input toolbar; default is 44















            
            */

    // console.log(
    //   "CHAT MESSAGES LIST2: ",
    //   this.props.amieChatbotRedux.currentChatMessages,
    //   typeof this.props.amieChatbotRedux.currentChatMessages
    // );

    // chatbotDTKey
    // this.props.route.params.chatbotDTKey

    // console.log("CHATBOT SCREEN PROPS: ", this.props);

    return (
      <View testID="chatbotView" style={{flex: 1, alignContent: 'center'}}>
        <GiftedChat
          // ref={this.giftedChatRef}
          textInputRef={this.giftedChatInputRef}
          messages={this.props.amieChatbotRedux.currentChatMessages}
          onSend={messages => this.onSend(messages, 'freeformInput')}
          onPressAvatar={() => {
            Promise.resolve()
              .then(() => customOnBackdropPress())
              .then(() => navigation.navigate('Chatbot'))
              .catch(error => {
                console.log(error);
                // An error happened.
              });
          }}
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
          showUserAvatar
          scrollToBottom
          textInputStyle={styles.amieChatInput}
          renderBubble={this.renderBubble}
          renderLoading={this.renderLoading}
          renderSend={this.renderSend}
          scrollToBottomComponent={this.scrollToBottomComponent}
          renderSystemMessage={this.renderSystemMessage}
          renderAvatar={this.renderAvatar}
          minComposerHeight={45}
          maxComposerHeight={45}
          minInputToolbarHeight={this.state.userResponseContainerHeight}
          composerStyle={{
            backgroundColor: theme.COLORS.WHITE,
          }}
          inputToolbarStyle={{
            backgroundColor: theme.COLORS.WHITE,
          }}
          style={{
            backgroundColor: theme.COLORS.WHITE,
          }}
          renderInputToolbar={props => (
            <View
              testID="inputToolbarView"
              style={{flex: 1, marginTop: 0, paddingTop: 0}}>
              {this.getDatePicker()}

              {this.state.datePickerVisible && (
                <View
                  testID="datePickerView"
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 0,
                    paddingTop: 0,
                    height: this.activeItemHeight,
                  }}>
                  <View style={{flex: 1}}>
                    <View>
                      {this.state.datePickerMode == 'date' && (
                        <Button
                          style={{...styles.button, height: 40}}
                          titleStyle={{color: theme.COLORS.WHITE}}
                          onPress={this.showDatepicker}
                          title="Select a Date"
                        />
                      )}

                      {this.state.datePickerMode == 'time' && (
                        <Button
                          style={{...styles.button, height: 40}}
                          titleStyle={{color: theme.COLORS.WHITE}}
                          onPress={this.showTimepicker}
                          title="Select a Time"
                        />
                      )}
                    </View>
                  </View>
                </View>
              )}

              {this.state.singleOptionPickerVisible && (
                <View
                  testID="singleOptionView"
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
                  testID="multiPickerView"
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 0,
                    paddingTop: 0,
                    height: this.activeItemHeight * multiOptionActiveRowCount,
                  }}>
                  {this.getCheckboxList(this.state.multiOptionPickerList)}
                </View>
              )}

              {this.state.buttonReponsesVisible && (
                <View
                  testID="responseButtonsView"
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 0,
                    paddingTop: 0,
                    height:
                      this.activeItemHeight * buttonResponseListActiveRowCount,
                  }}>
                  <View
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
                          title={responseObj[0]}
                          key={i}
                          containerStyle={{
                            marginTop: 0,
                            marginBottom: 2,
                            marginHorizontal: 0,
                            paddingHorizontal: 8,
                            paddingVertical: 0,
                          }}
                          onPress={() => {
                            if (responseObj[1] == 'exit') {
                              console.log('EXIT');
                              navigation.replace('App');
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

                                  this.onSend(
                                    [responseMessage],
                                    'responsePath',
                                    responseObj[1],
                                  );
                                })
                                .catch(error => {
                                  console.log(error);
                                  // An error happened.
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
                  {...props}
                  containerStyle={{backgroundColor: theme.COLORS.WHITE}}
                  renderComposer={props1 => (
                    <Composer
                      {...props1}
                      textInputStyle={{color: theme.COLORS.TEXT1}}
                    />
                  )}
                />
              )}
            </View>
          )}
        />

        <AmieChatbot ref={this.amieChatbot} />
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userPublicProfile: state.userPublicProfile,
    connect: state.connect,
    amieChatbotRedux: state.amieChatbot,
  };
};
export default connect(mapStateToProps)(ChatbotScreen);
