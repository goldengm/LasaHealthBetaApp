// import {auth, db, functions} from '../shared/firebaseUtils';
import React from 'react';
import {theme, styles} from '../constants';
// import Purchases from 'react-native-purchases';
// import { firebase } from "@react-native-firebase/functions";
// import firebase from "firebase/compat/app"; // just firebase/app in <v8
// import "firebase/compat/functions"; // just firebase/functions in <v8

// import firebase from "@firebase/app";
// import "@firebase/functions";

class ServerProxy {
  constructor(props) {
    this.state = {
      statusUpdates: {
        UID1: {
          100: {
            name: 'Larry',
            status: 'Feeling feelings',
            prompt: 'I try my best',
            reactionCounts: {
              heart: 0,
              smile: 0,
              muscle: 0,
              cry: 0,
              thumbsUp: 0,
            },
          },
          140: {
            name: 'Larry',
            status: 'Feeling feelings',
            prompt: 'I try my best',
            reactionCounts: {
              heart: 0,
              smile: 0,
              muscle: 0,
              cry: 0,
              thumbsUp: 0,
            },
          },
        },
        UID2: {
          103: {
            name: 'Lisa',
            status: 'Feeling feelings',
            prompt: 'I try my best',
            reactionCounts: {
              heart: 0,
              smile: 0,
              muscle: 0,
              cry: 0,
              thumbsUp: 0,
            },
          },
        },
      },
      qnaQuestions: {
        QID1: {
          timestamp: 101,
          question: 'Why is this?',
          answer: 'This is why',
          tags: ['tag1', 'tag2'],
          upvotes: 0,
          answeredBy: {
            avatar: 'Svg018Woman',
            healthConditions: ['Update', 'Conditions', 'Here'],
            location: 'Update Location Here',
            description: 'Expert Qualifications',
            UID: '1239ewui',
            name: "Professional's Name",
          },
          discussion: {
            104: {
              uid: 'UID6',
              text: "here's a comment",
              replies: {
                timestamp: 113,
                uid: 'UID2',
                text: 'here is a reply',
              },
            },
          },
        },
        QID3: {
          timestamp: 161,
          question: 'Why is this?',
          answer: 'This is why',
          tags: ['tag1', 'tag2'],
          upvotes: 3,
          answeredBy: {
            avatar: 'Svg018Woman',
            healthConditions: ['Update', 'Conditions', 'Here'],
            location: 'Update Location Here',
            description: 'Expert Qualifications',
            UID: '1239ewui',
            name: "Professional's Name2",
          },
          discussion: {
            224: {
              uid: 'UID6',
              text: "here's a comment",
              replies: {
                timestamp: 233,
                uid: 'UID2',
                text: 'here is a reply',
              },
            },
          },
        },
      },
      publicMisc: {
        MID5: {
          timestamp: 200,
          title: 'this is the title',
          body: 'this is the body',
          path: '',
        },
      },
      friendRequests: {
        UID4: {
          requested: {
            UID2: {status: 'pending/accepted/rejected'},
            UID3: {info: 'pending/accepted/rejected'},
          },
          accepted: {UID7: 'newCRID'},
        },
      },
      chatrooms: {
        CRID2: {
          createdAt: 22222,
          participants: ['UID1', 'UID2'],
          messages: {},
        },
      },
    };
  }

  getSpecificQuestion = qid => {
    return this.state.qnaQuestions['QID1'];
  };

  getNextQuestions = pageNum => {
    return this.state.qnaQuestions;
  };

  syncLocalQuestions = localQna => {
    console.log('TEST: QnA Synced!');
  };

  getNextFeed = (uid, pageNum) => {
    //  FIXMETUNA:  need to figure out best way to simulate feed
    // return this.state.;

    let nextFeed = [];
    nextFeed.push({
      type: 'statusUpdate',
      content: this.state.statusUpdates['UID1']['100'],
    });
    nextFeed.push({
      type: 'statusUpdate',
      content: this.state.statusUpdates['UID2']['103'],
    });
    nextFeed.push({
      type: 'qnaQuestion',
      content: this.state.qnaQuestions['QID1'],
    });
    nextFeed.push({
      type: 'annoucement',
      content: this.state.publicMisc['MID5'],
    });
    nextFeed.push({
      type: 'statusUpdate',
      content: this.state.statusUpdates['UID1']['100'],
    });
    nextFeed.push({
      type: 'statusUpdate',
      content: this.state.statusUpdates['UID2']['103'],
    });
    nextFeed.push({
      type: 'qnaQuestion',
      content: this.state.qnaQuestions['QID1'],
    });

    return nextFeed;
  };

  syncLocalFeed = localFeed => {
    console.log('TEST: Feed Synced!');
  };

  postUrgentStatusUpdate = statusUpdate => {
    console.log('TEST: Urgest Status Updated!');
  };

  updateFriendRequests = (uid, friendRequests) => {
    console.log('TEST: FriendRequests Updated!');
  };

  getFriendRequests = uid => {
    return this.state.friendRequests['UID4'];
  };

  getFriendMessages = (uid, chatroomIDs) => {
    //  FIXMETUNA:  need to figure out a good way to retrieve the right messages
    //  probably -> send list of chatrooms you want to check (should have list in local userprofile)
    //  only need to grab the last message and the numMessages for each passed chatroom

    let chatroomsMeta = {
      endo101fall2022group1: {
        lastMessage: 'Last Message in chat',
        numMessages: 20,
      },

      CRID7: {
        lastMessage: 'Last Message in chat2',
        numMessages: 10,
      },
    };

    return chatroomsMeta;
  };

  queryUsers = (queryName, queryAttributes) => {
    //  FIXMETUNA:  need to figure out a efficient system for queries users

    const resultUIDs = ['UID8', 'UID22', 'UID6'];
    return resultUIDs;
  };
}

export default ServerProxy;
