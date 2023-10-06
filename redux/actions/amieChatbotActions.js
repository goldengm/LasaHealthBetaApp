import * as actions from '../constants/index';

export function setChatbotMessagesAction(messages) {
  return {
    type: actions.SET_CHATBOT_MESSAGES,
    payload: messages,
  };
}

export function logCurrentChatbotMessagesAction() {
  return {
    type: actions.LOG_CURRENT_CHATBOT_MESSAGES,
    payload: null,
  };
}

export function clearCurrentChatbotMessagesAction() {
  return {
    type: actions.CLEAR_CURRENT_CHATBOT_MESSAGES,
    payload: null,
  };
}

export function setChatbotAvatarIndexAction(chatbotAvatarIndex) {
  return {
    type: actions.SET_CHATBOT_AVATAR_INDEX,
    payload: chatbotAvatarIndex,
  };
}
