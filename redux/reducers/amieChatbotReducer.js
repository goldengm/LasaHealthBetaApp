import * as actions from '../constants/index';
import produce from 'immer';
//  FIXMETUNA:
//  FIXMETUNA:  This Chatbot is going to take a lot of thought and development
//  FIXMETUNA:
//  FIXMETUNA:  chat log contains the entire history of chats between the user and the chatbot
//  currentChatMessages only contains the current conversation and is moved to chatlog and erased
//  each time a conversation ends.
//  new conversation flag is used to allow different applications to flag that the AmieChatbot wants to
//  start a new conversation with the user (could be triggered by a user's sad input, etc)
//  there it's up to each page to watch for changes in the new conversation flag and bring up the
//  AmieChatbot interface which will display the new conversation
initialStateACR = {
  newConversationFlag: false,
  decisionTreeProgressPlaceholderTMP: null,
  currentChatMessages: [],
  chatLog: [],
  chatbotAvatarIndex: 0,
};
export default amieChatbotReducer = (state = initialStateACR, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.SET_CHATBOT_MESSAGES:
        draft.currentChatMessages = action.payload;
        break;
      case actions.SET_CHATBOT_AVATAR_INDEX:
        draft.chatbotAvatarIndex = action.payload;
        break;

      case actions.LOG_CURRENT_CHATBOT_MESSAGES:
        draft.chatLog = draft.chatLog.concat(draft.currentChatMessages);
        break;

      case actions.CLEAR_CURRENT_CHATBOT_MESSAGES:
        draft.currentChatMessages = [];
        break;

      default:
        break;
    }
  });
