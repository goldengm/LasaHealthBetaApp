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
initialState = {
  assessmentResults: [],
};
export default asessmentReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.SET_ASSESSMENT_RESULTS:
        draft.assessmentResults = [...draft.assessmentResults, ...action.payload];
        break;
      case actions.RESET_ASSESSMENT_RESULTS:
        draft.assessmentResults = [];
        break;

      default:
        break;
    }
});
