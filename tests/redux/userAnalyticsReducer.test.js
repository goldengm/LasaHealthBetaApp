import React from 'react';
import userAnalyticsReducer from '../../redux/reducers/userAnalyticsReducer';
import * as actions from '../../redux/constants/index';

jest.mock('expo-print', () => ({}));
jest.mock('expo-sharing', () => ({}));
jest.mock('@react-native-firebase/functions', () => ({}));
jest.mock('react-native-elements', () => ({}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));

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
  menstrualCycle: {
    userProvidedCycleLength: 28,
    userProvidedPeriodLength: 5,
    userProvidedOnboardingLastPeriod: -1,
    userProvidedStartAgePeriod: -1,
    predictedCycleLength: -1,
    predictedPeriodLength: -1,
    avgCycleLength: -1,
    avgPeriodLength: -1,
    menstrualCycleLog: {},
  },
  chartStats: {},
};

// describe("userAnalyticsReducer general tests", () => {
//   it("Testing REGENERATE_MENSTRUAL_CYCLE", () => {
//     // const screenInstance = render(component);
//     // const { getByPlaceholderText, getByText } = render();
//     // expect(screenInstance.getByText("Subscribed Courses")).toBeTruthy();
//     const actionObj = {
//       type: actions.REGENERATE_MENSTRUAL_CYCLE,
//       payload: ["testing message"],
//     };

//     // const returnStateACR = {
//     //   newConversationFlag: false,
//     //   decisionTreeProgressPlaceholderTMP: null,
//     //   currentChatMessages: ["testing message"],
//     //   chatLog: [],
//     //   chatbotAvatarIndex: 0,
//     // };
//     // expect(userAnalyticsReducer(initialStateACR, actionObj)).toEqual(
//     //   returnStateACR
//     // );
//   });

//   it("Testing REGENERATE_CHART_STATS", () => {
//     // const screenInstance = render(component);
//     // const { getByPlaceholderText, getByText } = render();
//     // expect(screenInstance.getByText("Subscribed Courses")).toBeTruthy();
//     const actionObj = {
//       type: actions.REGENERATE_CHART_STATS,
//       payload: 22,
//     };

//     // const returnStateACR = {
//     //   newConversationFlag: false,
//     //   decisionTreeProgressPlaceholderTMP: null,
//     //   currentChatMessages: [],
//     //   chatLog: [],
//     //   chatbotAvatarIndex: 22,
//     // };
//     // expect(userAnalyticsReducer(initialStateACR, actionObj)).toEqual(
//     //   returnStateACR
//     // );
//   });
// });

it('Testing TMP', () => {
  expect(true).toBeTruthy();
});
