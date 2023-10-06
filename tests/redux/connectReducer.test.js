import React from 'react';
import connectReducer from '../../redux/reducers/connectReducer';
import * as actions from '../../redux/constants/index';

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

// const initialStateACR = {
//   currentCRID: '999999999',
//   currentAmieUID: '-1',
//   currentAmieProfile: {},
//   proposedAmies: [],
//   friendsList: {},
//   blockedList: [],
//   chatroomList: [
//     {
//       crid: '999999999',
//       name: 'Super Chat',
//       lastMessage: 'Last message',
//       lastMessageTS: '',
//       numRead: 0,
//       numMessages: 0,
//     },
//   ],
//   reportedUID: -1,
// };

const localQnaUpdatesDefaultValue = {
  newQuestions: {},
  newQuestionInteractions: {},
};

const localFeedUpdatesDefaultValue = {
  newStatusUpdates: {},
  newStatusReactions: {},
};

initialStateACR = {
  currentCRID: '999999999',
  currentAmieUID: '-1',
  currentAmieProfile: {},

  cachedPublicProfiles: {},

  proposedAmies: [],
  friendsList: {},
  blockedList: [],
  chatroomList: {
    999999999: {
      crid: '999999999',
      name: 'Super Chat',
      lastMessage: 'Last message',
      lastMessageTS: '',
      numRead: 0,
      numMessages: 0,
    },
  },
  reportedUID: -1,

  cachedQna: {},
  lastCachedQnaRefreshTS: -1,
  localQnaUpdates: localQnaUpdatesDefaultValue,
  cachedFeed: {},
  lastCachedFeedRefreshTS: -1,
  localFeedUpdates: localFeedUpdatesDefaultValue,
  cachedFriendRequests: {},
  lastCachedFriendRequestsRefreshTS: -1,

  urgentFriendStatusReceived: false,
  lastFeedSnapshot: null,
};

describe('ConnectReducer general tests', () => {
  it('Testing REMOVE_PROPOSED_AMIE', () => {
    // const screenInstance = render(component);
    // const { getByPlaceholderText, getByText } = render();
    // expect(screenInstance.getByText("Subscribed Courses")).toBeTruthy();
    const actionObj1 = {
      type: actions.ADD_PROPOSED_AMIE,
      payload: {
        data: {amieUID: '111'},
      },
    };
    const actionObj2 = {
      type: actions.REMOVE_PROPOSED_AMIE,
      payload: '111',
    };

    // const returnStateACR = {
    //   currentCRID: "999999999",
    //   currentAmieUID: "-1",
    //   currentAmieProfile: {},
    //   proposedAmies: [],
    //   friendsList: [],
    //   blockedList: [],
    //   chatroomList: [
    //     {
    //       crid: "999999999",
    //       name: "Super Chat",
    //       lastMessage: "Last message",
    //     },
    //   ],
    //   reportedUID: -1,
    // };
    const returned1 = connectReducer(initialStateACR, actionObj1);
    expect(returned1.proposedAmies[0]).toEqual('111');
    expect(returned1.proposedAmies.length).toEqual(1);
    const returned2 = connectReducer(returned1, actionObj2);
    expect(returned2.proposedAmies.length).toEqual(0);
  });

  it('Testing UPDATE_CHATROOM', async () => {
    // const screenInstance = render(component);
    // const { getByPlaceholderText, getByText } = render();
    // expect(screenInstance.getByText("Subscribed Courses")).toBeTruthy();
    const actionObj1 = {
      type: actions.UPDATE_CHATROOM,
      payload: {
        crid: '999999999',
        lastMessage: 'new1',
        name: 'name1',
        lastMessageTS: '',
        numRead: 0,
        numMessages: 0,
      },
    };
    const actionObj2 = {
      type: actions.UPDATE_CHATROOM,
      payload: {
        crid: '123456',
        lastMessage: 'new2',
        name: 'name2',
        lastMessageTS: '',
        numRead: 0,
        numMessages: 0,
      },
    };
    const actionObj3 = {
      type: actions.DELETE_CHATROOM,
      payload: {
        crid: '123456',
        lastMessage: '',
        name: '',
        lastMessageTS: '',
        numRead: 0,
        numMessages: 0,
      },
    };
    const actionObj4 = {
      type: actions.UPDATE_LAST_MESSAGE_CHATROOM,
      payload: {
        crid: '999999999',
        lastMessage: 'new11',
        name: '',
        lastMessageTS: '',
        numRead: 0,
        numMessages: 0,
      },
    };

    // const returnStateACR = {
    //   newConversationFlag: false,
    //   decisionTreeProgressPlaceholderTMP: null,
    //   currentChatMessages: [],
    //   chatLog: ["testing message"],
    //   chatbotAvatarIndex: 0,
    // };
    const returned1 = await connectReducer(initialStateACR, actionObj1);
    expect(returned1.chatroomList['999999999'].crid).toEqual('999999999');
    expect(returned1.chatroomList['999999999'].lastMessage).toEqual('new1');
    const returned2 = await connectReducer(returned1, actionObj2);
    expect(returned2.chatroomList['123456'].crid).toEqual('123456');
    expect(returned2.chatroomList['123456'].lastMessage).toEqual('new2');
    const returned3 = await connectReducer(returned2, actionObj3);
    expect(Object.keys(returned3.chatroomList).length).toEqual(1);
    const returned4 = await connectReducer(returned3, actionObj4);
    expect(returned4.chatroomList['999999999'].crid).toEqual('999999999');
    expect(returned4.chatroomList['999999999'].lastMessage).toEqual('new11');
    // expect(outputState1.chatLog).toEqual([]);
    // const outputState2 = amieChatbotReducer(outputState1, actionObj2);
    // expect(outputState2.currentChatMessages).toEqual(["testing message"]);
    // expect(outputState2.chatLog).toEqual(["testing message"]);
    // const outputState3 = amieChatbotReducer(outputState2, actionObj3);
    // expect(outputState3.currentChatMessages).toEqual([]);
    // expect(outputState3.chatLog).toEqual(["testing message"]);
  });
});
