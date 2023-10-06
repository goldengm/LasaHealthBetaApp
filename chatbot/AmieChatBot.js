import React from 'react';
import {Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {trainChatbot} from '../chatbot/src/chatbot';
const chatbotLogic = require('../chatbot/logic/chatbotLogicDT.json');

const {width, height} = Dimensions.get('screen');

export class AmieChatbot extends React.Component {
  // class AmieChatbot {
  constructor(props) {
    super(props);
    this.state = {
      chatbotNLP: null,
    };

    Promise.resolve()
      .then(() => trainChatbot())
      .then(chatbot => {
        // console.log("RETURNED FROM CHATBOT TRAINING: ", chatbot);
        this.setChatbot(chatbot);
      })
      .then(() =>
        console.log('RETURNED FROM CHATBOT TRAINING: ', this.state.chatbotNLP),
      )
      .catch(error => {
        console.log(error);
        // An error happened.
      });
  }

  setChatbot = async chatbotNLPP => {
    this.setState({chatbotNLP: chatbotNLPP});
  };

  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  handleUserMessage = async (userMessageText, messageType) => {
    //  FIXMETUNA:  add info about response type
    //  ["freeformInput", this.state.chatbotNLP.process("en", userMessageText)]
    //  ["listResponses", {"answer": "chatbot text", "responseOptions": ["Option1",...]]}]

    // //  choose a random chatbot question from available options
    // const chosenQuestionIndex = Math.floor(Math.random() * response.q.length);

    console.log('HANDLE USER MESSAGE: ', userMessageText, messageType);

    if (messageType == 'freeformInput') {
      //  PATH:  conversation with freeform bot requested
      const freeformBotResponse = await Promise.resolve()
        .then(() => this.state.chatbotNLP.process('en', userMessageText))
        .catch(error => {
          console.log(error);
          // An error happened.
        });
      const chatbotResponse = {
        response: freeformBotResponse.answer,
        freeformInputAccepted: true,
        responseOptions: {},
      };
      return chatbotResponse;
    } else if (messageType == 'responsePath') {
      //  PATH: decision tree (DT) requested
      if (userMessageText == 'exit') {
        //  PATH: end of conversation
        const response = chatbotLogic['greetings.bye.1'];
        const chosenQuestionIndex = Math.floor(
          Math.random() * response.q.length,
        );
        const DTResponseText = response.q[chosenQuestionIndex];
        const chatbotResponse = {
          response: DTResponseText,
          freeformInputAccepted: false,
          responseOptions: response.a,
        };
        return chatbotResponse;
      } else {
        const response = chatbotLogic[userMessageText];
        if (
          response == null ||
          response == '' ||
          response == 'null' ||
          response == {} ||
          response == []
        ) {
          //  PATH:  error in user input / bug in system, respond with freeform bot
          const freeformBotResponse = await Promise.resolve()
            .then(() => this.state.chatbotNLP.process('en', userMessageText))
            .catch(error => {
              console.log(error);
              // An error happened.
            });
          const chatbotResponse = {
            response: freeformBotResponse.answer,
            freeformInputAccepted: true,
            responseOptions: {},
          };
          return chatbotResponse;
        } else {
          //  PATH:  take next step in chosen DT
          const chosenQuestionIndex = Math.floor(
            Math.random() * response.q.length,
          );
          const DTResponseText = response.q[chosenQuestionIndex];
          const chatbotResponse = {
            response: DTResponseText,
            freeformInputAccepted: false,
            responseOptions: response.a,
          };
          return chatbotResponse;
        }
      }
    } else {
      //  PATH:  error in user input / bug in system, respond with freeform bot
      const freeformBotResponse = await Promise.resolve()
        .then(() => this.state.chatbotNLP.process('en', userMessageText))
        .catch(error => {
          console.log(error);
          // An error happened.
        });
      const chatbotResponse = {
        response: freeformBotResponse.answer,
        freeformInputAccepted: true,
        responseOptions: {},
      };
      return chatbotResponse;
    }
  };

  render = () => <></>;
}

const mapStateToProps = (state, props) => {
  return {
    // trackedSymptoms: state.trackSymptoms.trackingSymptoms,
    // trackingLog: state.trackLog.logHistory,
    // userProfile: state.userProfile,
    // userPublicProfile: state.userPublicProfile,
    connect: state.connect,
    amieChatbot: state.amieChatbot,
  };
};
export default connect(mapStateToProps, null, null, {forwardRef: true})(
  AmieChatbot,
);
