import React from "react";
import trackingLogReducer from "../../redux/reducers/trackingLogReducer";
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

const initialStateACR = { logHistory: {} };

// describe("trackingLogReducer general tests", () => {
//   it("Testing ADD_SYMPTOM_LOG", () => {
//     // const screenInstance = render(component);
//     // const { getByPlaceholderText, getByText } = render();
//     // expect(screenInstance.getByText("Subscribed Courses")).toBeTruthy();
//     const actionObj = {
//       type: actions.ADD_SYMPTOM_LOG,
//       payload: ["testing message"],
//     };

//     // const returnStateACR = {
//     //   newConversationFlag: false,
//     //   decisionTreeProgressPlaceholderTMP: null,
//     //   currentChatMessages: ["testing message"],
//     //   chatLog: [],
//     //   chatbotAvatarIndex: 0,
//     // };
//     // expect(trackingLogReducer(initialStateACR, actionObj)).toEqual(
//     //   returnStateACR
//     // );
//   });

//   it("Testing REMOVE_SYMPTOM_LOG", () => {
//     // const screenInstance = render(component);
//     // const { getByPlaceholderText, getByText } = render();
//     // expect(screenInstance.getByText("Subscribed Courses")).toBeTruthy();
//     const actionObj = {
//       type: actions.REMOVE_SYMPTOM_LOG,
//       payload: 22,
//     };

//     // const returnStateACR = {
//     //   newConversationFlag: false,
//     //   decisionTreeProgressPlaceholderTMP: null,
//     //   currentChatMessages: [],
//     //   chatLog: [],
//     //   chatbotAvatarIndex: 22,
//     // };
//     // expect(trackingLogReducer(initialStateACR, actionObj)).toEqual(
//     //   returnStateACR
//     // );
//   });

//   it("Testing ADD_SYMPTOM_LOG_FROM_STAGING", () => {
//     // const screenInstance = render(component);
//     // const { getByPlaceholderText, getByText } = render();
//     // expect(screenInstance.getByText("Subscribed Courses")).toBeTruthy();
//     const actionObj = {
//       type: actions.ADD_SYMPTOM_LOG_FROM_STAGING,
//       payload: 22,
//     };

//     // const returnStateACR = {
//     //   newConversationFlag: false,
//     //   decisionTreeProgressPlaceholderTMP: null,
//     //   currentChatMessages: [],
//     //   chatLog: [],
//     //   chatbotAvatarIndex: 22,
//     // };
//     // expect(trackingLogReducer(initialStateACR, actionObj)).toEqual(
//     //   returnStateACR
//     // );
//   });

//   it("Testing RECOVER_LEFTOVER_TRACK_LOG_STAGING", () => {
//     // const screenInstance = render(component);
//     // const { getByPlaceholderText, getByText } = render();
//     // expect(screenInstance.getByText("Subscribed Courses")).toBeTruthy();
//     const actionObj = {
//       type: actions.RECOVER_LEFTOVER_TRACK_LOG_STAGING,
//       payload: 22,
//     };

//     // const returnStateACR = {
//     //   newConversationFlag: false,
//     //   decisionTreeProgressPlaceholderTMP: null,
//     //   currentChatMessages: [],
//     //   chatLog: [],
//     //   chatbotAvatarIndex: 22,
//     // };
//     // expect(trackingLogReducer(initialStateACR, actionObj)).toEqual(
//     //   returnStateACR
//     // );
//   });
// });

it("Testing TMP", () => {
  expect(true).toBeTruthy();
});
