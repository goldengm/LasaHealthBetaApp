import React from "react";
import amieChatbotReducer from "../../redux/reducers/amieChatbotReducer";
import * as actions from "../../redux/constants/index";

jest.mock("react-native-elements", () => ({}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

beforeEach(async () => {
  // store = await createTestStore();
});

// //  3 ways to create the same query, for use in future test writing
// expect(componantInstance.contains(<Text>Hihihi</Text>)).toEqual(true);
// expect(
//   componantInstance
//     .find("Text") // Use selector to get certain children
//     .first() // Get the first child
//     .props().children // Get its props
// ).toEqual("Hihihi");
// expect(
//   componantInstance
//     .find(Text) // Use selector to get certain children
//     .at(0) // Get the first child
//     .props().children // Get its props
// ).toEqual("Hihihi");

const initialStateACR = {
  newConversationFlag: false,
  decisionTreeProgressPlaceholderTMP: null,
  currentChatMessages: [],
  chatLog: [],
  chatbotAvatarIndex: 0,
};

describe("AmieChatbotReducer general tests", () => {
  it("Testing set_chatbot_messages", () => {
    // const screenInstance = render(component);
    // const { getByPlaceholderText, getByText } = render();
    // expect(screenInstance.getByText("Subscribed Courses")).toBeTruthy();
    const actionObj = {
      type: actions.SET_CHATBOT_MESSAGES,
      payload: ["testing message"],
    };

    const returnStateACR = {
      newConversationFlag: false,
      decisionTreeProgressPlaceholderTMP: null,
      currentChatMessages: ["testing message"],
      chatLog: [],
      chatbotAvatarIndex: 0,
    };
    expect(amieChatbotReducer(initialStateACR, actionObj)).toEqual(
      returnStateACR
    );
  });

  it("Testing SET_CHATBOT_AVATAR_INDEX", () => {
    // const screenInstance = render(component);
    // const { getByPlaceholderText, getByText } = render();
    // expect(screenInstance.getByText("Subscribed Courses")).toBeTruthy();
    const actionObj = {
      type: actions.SET_CHATBOT_AVATAR_INDEX,
      payload: 22,
    };

    const returnStateACR = {
      newConversationFlag: false,
      decisionTreeProgressPlaceholderTMP: null,
      currentChatMessages: [],
      chatLog: [],
      chatbotAvatarIndex: 22,
    };
    expect(amieChatbotReducer(initialStateACR, actionObj)).toEqual(
      returnStateACR
    );
  });

  it("Testing logging and clearing current chatbot messages", () => {
    // const screenInstance = render(component);
    // const { getByPlaceholderText, getByText } = render();
    // expect(screenInstance.getByText("Subscribed Courses")).toBeTruthy();
    const actionObj1 = {
      type: actions.SET_CHATBOT_MESSAGES,
      payload: ["testing message"],
    };
    const actionObj2 = {
      type: actions.LOG_CURRENT_CHATBOT_MESSAGES,
      // payload: ["testing message"],
    };
    const actionObj3 = {
      type: actions.CLEAR_CURRENT_CHATBOT_MESSAGES,
      // payload: ["testing message"],
    };

    const returnStateACR = {
      newConversationFlag: false,
      decisionTreeProgressPlaceholderTMP: null,
      currentChatMessages: [],
      chatLog: ["testing message"],
      chatbotAvatarIndex: 0,
    };
    const outputState1 = amieChatbotReducer(initialStateACR, actionObj1);
    expect(outputState1.currentChatMessages).toEqual(["testing message"]);
    expect(outputState1.chatLog).toEqual([]);
    const outputState2 = amieChatbotReducer(outputState1, actionObj2);
    expect(outputState2.currentChatMessages).toEqual(["testing message"]);
    expect(outputState2.chatLog).toEqual(["testing message"]);
    const outputState3 = amieChatbotReducer(outputState2, actionObj3);
    expect(outputState3.currentChatMessages).toEqual([]);
    expect(outputState3.chatLog).toEqual(["testing message"]);
  });
});
