import * as actions from '../constants/index';
import produce from 'immer';
import cloneDeep from 'lodash/cloneDeep';
import XDate from 'xdate';
import {merge} from 'lodash';

findIndexOfAmie = (amieArr, crid) => {
  let indexToRemove = -1;
  let currentIndex = -1;
  for (const val of amieArr) {
    currentIndex += 1;
    if (!(val == null) && val === crid) {
      indexToRemove = currentIndex;
      break;
    }
  }
  return indexToRemove;
};

findIndexOfChatroom = (sympArray, crid) => {
  let sympIndexTmp = -1;
  let currentInd = -1;
  for (let val of sympArray) {
    currentInd += 1;
    if (!(val == null) && val.crid === crid) {
      sympIndexTmp = currentInd;
      break;
    }
  }
  return sympIndexTmp;
};

//  FIXMETUNA:  I need to remove the set and stick to arrays etc,
//  apparently only simple data sctructures and primatives are allowed in redux,
//  sets, maps, functions, classes are all not allowed

const localQnaUpdatesDefaultValue = {
  newQuestions: {},
  newQuestionInteractions: {},
};

const localFeedUpdatesDefaultValue = {
  newStatusUpdates: {},
  newStatusReactions: {},
};

initialStateCR = {
  currentCRID: '',
  currentAmieUID: '-1',
  currentAmieProfile: {},

  cachedPublicProfiles: {},

  proposedAmies: [],
  friendsList: {},
  blockedList: [],
  chatroomList: {},
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

// localQnaUpdates: {
//   newQuestions: {
//     timestamp: {question: {questionObj}}
//   },
//   newQuestionInteractions: {
//     QID: {
//       upvoteDiff: 0  // [-1,1], 0 if no changes
//       discussion: {  //  {} if no changes
//         TS : {
//           text: "", // "" if not a new comment, only change if it's a new comment
//           uid: "", //  "" if not a new comment
//           upvoteDiff: 0, // [-1,1], 0 if no change
//           replies: { // {} if no new replies
//             timestamp: "ts", text: "", uid: ""
//           }
//         }
//       }
//     }
//   }
// },

// localFeedUpdates: {
//   newStatusUpdates: {
//     timestamp: {statusUpdate: {statusUpdate}}
//   },
//   newStatusReactions: {
//     UID: {
//       timestamp: "",
//        reactionDiff: {
//          heart: 0,
//          smile: 1,
//          strong: -1,
//          tear: 0,
//          thumbsUp: 0,
//        },
//      }
//   }
// },

export default connectReducer = (state = initialStateCR, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.SET_CURRENT_CRID:
        draft.currentCRID = action.payload;
        break;

      case actions.SET_CURRENT_AMIE_UID:
        draft.currentAmieUID = action.payload;
        break;

      case actions.SET_CURRENT_AMIE_PROFILE:
        draft.currentAmieProfile = action.payload;
        break;

      case actions.SET_CACHED_PUBLIC_PROFILES:
        draft.cachedPublicProfiles = action.payload;
        break;

      case actions.RESET_CACHED_PUBLIC_PROFILES:
        draft.cachedPublicProfiles = {};
        break;

      case actions.ATTEMPT_CACHED_PUBLIC_PROFILE_UPDATE:
        if (
          draft.cachedPublicProfiles[action.payload.publicProfile['uid']] &&
          parseInt(
            draft.cachedPublicProfiles[action.payload.publicProfile['uid']][
              'timestamp'
            ],
          ) < action.payload.timestamp
        ) {
          draft.cachedPublicProfiles[action.payload.publicProfile['uid']] = {
            timestamp: action.payload.timestamp,
            publicProfile: action.payload.publicProfile,
          };
        }
        break;

      case actions.UPDATE_CACHED_PUBLIC_PROFILE:
        const currentDate6 = new XDate();
        const currentTS6 = currentDate6.getTime();
        draft.cachedPublicProfiles[action.payload['uid']] = {
          timestamp: currentTS6,
          publicProfile: action.payload['publicProfile'],
        };
        break;

      case actions.SET_FRIENDS_LIST:
        draft.friendsList = action.payload;
        break;

      case actions.REMOVE_FRIEND_FROM_FRIENDS_LIST:
        delete draft.friendsList[action.payload];
        break;

      case actions.ADD_FRIEND_TO_FRIENDS_LIST:
        const currentDate7 = new XDate();
        const currentTS7 = currentDate7.getTime();
        draft.friendsList[action.payload['uid']] = {
          tsAdded: currentTS7,
          uid: action.payload['uid'],
        };
        break;

      case actions.ADD_PROPOSED_AMIE:
        draft.proposedAmies = draft.proposedAmies.concat(
          action.payload['data']['amieUID'],
        );
        break;

      case actions.REMOVE_PROPOSED_AMIE:
        const indexToRemove = findIndexOfAmie(
          draft.proposedAmies,
          action.payload,
        );

        if (indexToRemove >= 0) {
          const lastIndex = draft.proposedAmies.length - 1;
          if (lastIndex === indexToRemove) {
            //  then delete the object at the end
            delete draft.proposedAmies[lastIndex];
            draft.proposedAmies = [];
          } else {
            draft.proposedAmies[indexToRemove] = cloneDeep(
              draft.proposedAmies[lastIndex],
            );
            //  then delete the object at the end
            delete draft.proposedAmies[lastIndex];
          }
        }

        break;

      case actions.UPDATE_CHATROOM:
        console.log('UPDATE_CHATROOM1');
        if (Object.keys(draft.chatroomList).includes(action.payload.crid)) {
          draft.chatroomList[action.payload.crid].name = action.payload.name;
          draft.chatroomList[action.payload.crid].lastMessage =
            action.payload.lastMessage;
          draft.chatroomList[action.payload.crid].lastMessageTS =
            action.payload.lastMessageTS;
          draft.chatroomList[action.payload.crid].numRead =
            action.payload.numRead;
          draft.chatroomList[action.payload.crid].numMessages =
            action.payload.numMessages;
        } else {
          draft.chatroomList[action.payload.crid] = {
            crid: action.payload.crid,
            name: action.payload.name,
            lastMessage: action.payload.lastMessage,
            lastMessageTS: action.payload.lastMessageTS,
            numRead: action.payload.numRead,
            numMessages: action.payload.numMessages,
          };
        }
        break;

      case actions.UPDATE_ALL_CHATROOMS:
        console.log('UPDATE_ALL_CHATROOMS1');
        Object.entries(action.payload.chatroomUpdates).forEach(
          async ([crid, chatroomObj]) => {
            console.log(
              'Reducing: ',
              JSON.stringify(crid),
              JSON.stringify(chatroomObj),
              Object.keys(draft.chatroomList),
            );

            if (Object.keys(draft.chatroomList).includes(crid)) {
              draft.chatroomList[crid]['lastMessage'] =
                chatroomObj['lastMessage'];
              draft.chatroomList[crid]['lastMessageTS'] =
                chatroomObj['lastMessageTS'];
              draft.chatroomList[crid]['numMessages'] =
                chatroomObj['numMessages'];
              draft.chatroomList[crid]['publicProfile']['uid'] =
                chatroomObj['participants'][0] == action.payload.uid
                  ? chatroomObj['participants'][1]
                  : chatroomObj['participants'][0];
            } else {
              let newChatroom = {
                numRead: 0,
                username: '',
                numMessages: chatroomObj['numMessages'],
                lastMessageTS: chatroomObj['lastMessageTS'],
                publicProfile: {
                  uid:
                    chatroomObj['participants'][0] == action.payload.uid
                      ? chatroomObj['participants'][1]
                      : chatroomObj['participants'][0],
                },
                crid: crid,
                lastMessage: chatroomObj['lastMessage'],
              };

              draft.chatroomList[crid] = newChatroom;
            }
          },
        );

        break;

      case actions.DELETE_CHATROOM:
        if (Object.keys(draft.chatroomList).includes(action.payload.crid)) {
          delete draft.chatroomList[action.payload.crid];
        }
        break;

      case actions.ADD_CHATROOM:
        draft.chatroomList[action.payload.crid] = action.payload.chatroom;
        if (
          !(action.payload.chatroom.publicProfile.uid == null) &&
          action.payload.chatroom.publicProfile.uid != ''
        ) {
          const currentDate9 = new XDate();
          const currentTS9 = currentDate9.getTime();
          draft.friendsList[action.payload.chatroom.publicProfile.uid] = {
            tsAdded: currentTS9,
            uid: action.payload.chatroom.publicProfile.uid,
          };
        }

        break;

      case actions.UPDATE_LAST_MESSAGE_CHATROOM:
        console.log('UPDATE_LAST_MESSAGE_CHATROOM1');
        // only updates the last message if the chatroom exists
        if (Object.keys(draft.chatroomList).includes(action.payload.crid)) {
          draft.chatroomList[action.payload.crid].lastMessage =
            action.payload.lastMessage;
        }
        break;

      case actions.UPDATE_NUM_READ_CHATROOM:
        // only updates the last message if the chatroom exists

        if (Object.keys(draft.chatroomList).includes(action.payload.crid)) {
          draft.chatroomList[action.payload.crid].numRead =
            action.payload.numRead;
        }
        break;

      case actions.SET_CHATROOMLIST:
        draft.chatroomList = action.payload;
        const currentDate1 = new XDate();
        const currentTS1 = currentDate1.getTime();
        draft.lastChatroomRefreshTS = currentTS1;
        break;

      case actions.SET_LAST_CHATROOM_REFRESH_TS:
        draft.lastChatroomRefreshTS = action.payload;
        break;

      case actions.SET_REPORTED_UID:
        draft.reportedUID = action.payload;
        break;

      case actions.SET_CACHED_QNA:
        draft.cachedQna = action.payload;
        const currentDate3 = new XDate();
        const currentTS3 = currentDate3.getTime();
        draft.lastCachedQnaRefreshTS = currentTS3;

        break;

      case actions.ADD_QUESTION_TO_CACHED_QNA:
        draft.cachedQna[action.payload.timestamp] = action.payload.qna;

        break;

      case actions.SET_LAST_CACHED_QNA_REFRESH_TS:
        draft.lastCachedQnaRefreshTS = action.payload;
        break;

      case actions.SET_LOCAL_QNA_UPDATES:
        draft.localQnaUpdates = action.payload;
        break;

      case actions.RESET_LOCAL_QNA_UPDATES:
        draft.localQnaUpdates = localQnaUpdatesDefaultValue;
        break;

      case actions.SET_LOCAL_FEED_UPDATES:
        draft.localFeedUpdates = action.payload;
        break;

      case actions.RESET_LOCAL_FEED_UPDATES:
        draft.localFeedUpdates = localFeedUpdatesDefaultValue;
        break;

      case actions.SET_CACHED_FEED:
        draft.cachedFeed = action.payload;
        const currentDate4 = new XDate();
        const currentTS4 = currentDate4.getTime();
        draft.lastCachedFeedRefreshTS = currentTS4;
        break;

      case actions.UPDATE_CACHED_FEED_ITEM:
        draft.cachedFeed[action.payload.fid] = action.payload.updatedFeedItem;
        break;

      case actions.ADD_STATUS_TO_CACHED_FEED:
        draft.cachedFeed[action.payload.qid] = action.payload.statusUpdate;
        break;

      case actions.SET_LAST_CACHED_FEED_REFRESH_TS:
        draft.lastCachedFeedRefreshTS = action.payload;
        break;

      case actions.APPEND_TO_CACHED_FEED_ACTION:
        // draft.cachedFeed = draft.cachedFeed.concat(action.payload);
        const mergeOutput = merge(draft.cachedFeed, action.payload);
        // console.log('MERGE OUTPUT&*&*&*&: ', JSON.stringify(mergeOutput));
        draft.cachedFeed = mergeOutput;

        const currentDate4_2 = new XDate();
        const currentTS4_2 = currentDate4_2.getTime();
        draft.lastCachedFeedRefreshTS = currentTS4_2;
        break;

      case actions.SET_LAST_FEED_SNAPSHOT_ACTION:
        draft.lastFeedSnapshot = action.payload;
        break;

      case actions.SET_CACHED_FRIEND_REQUEST:
        draft.cachedFriendRequests = action.payload;
        const currentDate5 = new XDate();
        const currentTS5 = currentDate5.getTime();
        draft.lastCachedFriendRequestsRefreshTS = currentTS5;
        break;

      case actions.SET_LAST_CACHED_FRIEND_REQUESTS_REFRESH_TS:
        draft.lastCachedFriendRequestsRefreshTS = action.payload;
        break;

      case actions.MARK_ALL_READ_FOR_CRID:
        if (Object.keys(draft.chatroomList).includes(action.payload)) {
          draft.chatroomList[action.payload].numRead =
            draft.chatroomList[action.payload].numMessages;
        }
        break;

      case actions.SET_URGENT_FRIEND_STATUS_RECEIVED:
        draft.urgentFriendStatusReceived = action.payload;
        break;

      case actions.UPDATE_PUBLIC_PROFILE_FOR_CACHED_CHATROOM:
        draft.chatroomList[action.payload.crid]['publicProfile'] =
          action.payload.publicProfile;
        break;

      default:
        break;
    }
  });
