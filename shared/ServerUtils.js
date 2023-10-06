import {
  auth,
  db,
  functions,
  replaceAllUndefined,
} from '../shared/firebaseUtils';
import {theme, styles} from '../constants';
// import Purchases from 'react-native-purchases';
import cloneDeep from 'lodash/cloneDeep';
import XDate from 'xdate';

import {collection, getCountFromServer} from 'firebase/firestore';
import {statsConstants} from './AnalysisUtils';

// import { firebase } from "@react-native-firebase/functions";
// import firebase from "firebase/compat/app"; // just firebase/app in <v8
// import "firebase/compat/functions"; // just firebase/functions in <v8
// import firebase from "@firebase/app";
// import "@firebase/functions";

// export async function hasPremiumAccess(userPublicProfile) {
//   if (!(auth.currentUser == null)) {
//     try {
//       //  FIXMETUNA:  if the user signed up in March 2023 or earlier either:
//       //  their first month after signup includes premium access free of charge
//       //  or the month of March 2023 includes premium free of charge if they signup up
//       //  previous to the promotion

//       const accountCreationDate = new XDate(
//         userPublicProfile['accountCreationTS'],
//       );
//       const freeTrialPromotionStartDate = new XDate(2023, 2, 1); //  march 1, 2023
//       const currentDate = new XDate();

//       //  if the user has a valid account and is eligible for the premium free trial march 2023 promotion
//       if (
//         !(accountCreationDate == null) &&
//         freeTrialPromotionStartDate.diffMonths(accountCreationDate) <= 1
//       ) {
//         //  if the user created an account before the start of the promotion or are still
//         //  within their first month, give premium access
//         if (
//           accountCreationDate.diffMilliseconds(freeTrialPromotionStartDate) >
//             0 ||
//           accountCreationDate.diffMonths(currentDate) <= 1
//         ) {
//           return true;
//         }
//       }

//       // console.log('Auth info before purchaserRC: ', auth.currentUser);
//       // const purchaserInfo0 = await Purchases.getCustomerInfo();
//       // console.log(
//       //   'Auth info before purchaserRC0: ',
//       //   purchaserInfo0.entitlements.active,
//       //   purchaserInfo0.originalAppUserId,
//       // );
//       // const purchaserInfo1 = await Purchases.logOut();
//       // console.log(
//       //   'Auth info before purchaserRC1: ',
//       //   purchaserInfo1.entitlements.active,
//       //   purchaserInfo1.originalAppUserId,
//       // );
//       // const purchaserInfo2 = await Purchases.getCustomerInfo();
//       // console.log(
//       //   'Auth info before purchaserRC2: ',
//       //   purchaserInfo2.entitlements.active,
//       //   purchaserInfo2.originalAppUserId,
//       // );
//       // const purchaserInfo3 = await Purchases.logIn(auth.currentUser?.uid);
//       // const purchaserInfo = await Purchases.getCustomerInfo();

//       const idTokenResult = await auth.currentUser.getIdTokenResult();
//       console.log(
//         'Purchaser info RC: ',
//         idTokenResult.claims.revenueCatEntitlements,
//       );
//       // if (
//       //   !(purchaserInfo == null) &&
//       //   !(
//       //     typeof purchaserInfo.entitlements.active['Lasa Health Premium'] ==
//       //     'undefined'
//       //   )
//       // ) {
//       if (
//         !(idTokenResult == null) &&
//         !(idTokenResult.claims == null) &&
//         !(idTokenResult.claims.revenueCatEntitlements == null) &&
//         idTokenResult.claims.revenueCatEntitlements.includes(
//           'Lasa Health Premium',
//         )
//       ) {
//         return true;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.log(error);
//       return false;
//     }
//   } else {
//     return false;
//   }
// }

export async function getCachedPublicProfile(
  requestedUID,
  cachedPublicProfiles,
) {
  const currentDate = new XDate();
  const currentTS = currentDate.getTime();
  //  get cached public profile if it's less than a day old, otherwise fetch a new version
  if (
    Object.keys(cachedPublicProfiles).includes(requestedUID) &&
    cachedPublicProfiles[requestedUID]['timestamp'] &&
    currentTS - cachedPublicProfiles[requestedUID]['timestamp'] <
      statsConstants.dayLengthMilliseconds
  ) {
    return [null, cachedPublicProfiles[requestedUID]['publicProfile']];
  } else {
    let updatedCachedPublicProfiles = cloneDeep(cachedPublicProfiles);

    const newPublicProfile = await getPublicProfile(requestedUID);

    console.log(
      'REQUESTED UID AND FOUND PUBLIC PROFILE: ',
      requestedUID,
      JSON.stringify(newPublicProfile),
    );

    updatedCachedPublicProfiles[requestedUID] = {
      timestamp: currentTS,
      publicProfile: newPublicProfile,
    };

    // updatedCachedPublicProfiles[requestedUID] = newPublicProfile;
    return [updatedCachedPublicProfiles, newPublicProfile];
  }
}

export async function getPublicProfile(requestedUID) {
  if (!(auth.currentUser == null)) {
    const requestedPublicProfile = await db
      .collection('UserPublicProfiles')
      .doc(requestedUID)
      .get()
      .then(snapshot => snapshot.data())
      .catch(error => {
        console.log(error);
      });
    return requestedPublicProfile;
  } else {
    return null;
  }
}

export async function createChatroom(friendUID) {
  if (!(auth.currentUser == null)) {
    //  FIXMETUNA:   this should return the chatroom list CRID, figure out how to return this
    //  The only way anyone can access a chat is if they have the CRID,
    //  if they lose access to the CRID they lose access to the chat, a type of security measure
    const newCRID = await db
      .collection('Chatrooms')
      .add({
        participants: [auth.currentUser['uid'], friendUID],
        createdAt: Date.now(),
      })
      .then(docRef => {
        return docRef.id; //  return the newly generated CRID
      })
      .catch(error => {
        console.log(error);
      });
    return newCRID;
  } else {
    return null;
  }
}

export async function deleteChatroom(CRID) {
  if (!(auth.currentUser == null)) {
    var deleteFn = functions().httpsCallable('chatroomRecursiveDelete');
    deleteFn({crid: CRID})
      .then(result => {
        console.log('Delete success: ' + JSON.stringify(result));
      })
      .catch(err => {
        console.log('Delete failed, see console,');
        console.warn(err);
      });

    // //  FIXMETUNA:   this should return the chatroom list CRID, figure out how to return this
    // //  The only way anyone can access a chat is if they have the CRID,
    // //  if they lose access to the CRID they lose access to the chat, a type of security measure
  } else {
    return null;
  }
}
export async function getUserPublicProfilesForAllChatrooms(chatroomList) {
  if (!(auth.currentUser == null)) {
    const userProfilesForAllChatrooms = {};

    for (const [item, i] in Object.entries(chatroomList)) {
      const userProfileDict = await getUserPublicProfilesForChatroom(
        item[1].crid,
      );
      userProfilesForAllChatrooms[item[1].crid] =
        userProfileDict.data.publicProfiles;
    }
    return userProfilesForAllChatrooms;
  } else {
    return null;
  }
}

export async function getUserPublicProfilesForChatroom(CRID) {
  if (!(auth.currentUser == null)) {
    const participants = await db
      .collection('Chatrooms')
      .doc(CRID.toString())
      .get()
      .then(snapshot => snapshot.data()['participants'])
      .catch(error => {
        console.log(error);
      });

    if (
      participants &&
      Object.values(participants).includes(context.auth.uid)
    ) {
      console.log('User is in requested chatroom group');

      //  FIXMETUNA:  might need to check this where clause below
      //  get list of users with saved public profiles
      const matchingUserProfiles = await db
        .collection('UserPublicProfiles')
        .where('uid', 'in', participants)
        .get()
        .then(snapshot => snapshot.docs.map(docItem => docItem.data()))
        .catch(error => {
          console.log(error);
        });

      return {
        publicProfiles: matchingUserProfiles,
      };
    } else {
      console.log(
        'User is not a member of requested chatroom, returning empty',
      );
      return {};
    }
  } else {
    return null;
  }
}

// export async function getNewAmie() {
//   if (!(auth.currentUser == null)) {
//     var fn = functions.httpsCallable('connectGetNewAmie');
//     return fn({UID: auth.currentUser['uid']})
//       .then(function (result) {
//         console.log('Get New Amie success: ' + JSON.stringify(result));
//         return result;
//       })
//       .catch(function (err) {
//         console.log('Failed to get new amie, see console,');
//         console.warn(err);
//       });

//     // //  FIXMETUNA:   this should return the chatroom list CRID, figure out how to return this
//     // //  The only way anyone can access a chat is if they have the CRID,
//     // //  if they lose access to the CRID they lose access to the chat, a type of security measure
//     // db.collection("Chatrooms")
//     //   .add({
//     //     participants: [auth.currentUser["uid"], friendUID],
//     //     messages: {},
//     //     createdAt: Date.now(),
//     //   })
//     //   .then((docRef) => {
//     //     return docRef.id; //  return the newly generated CRID
//     //   });
//   } else {
//     return null;
//   }
// }

// //  FIXMETUNA:  delete this soon, only created to test server push notifications on iOS and Android
// export async function requestServerPushNotificationTestTMP(
//   delayEnabledP = false,
// ) {
//   console.log('Calling server PN 1');
//   if (!(auth.currentUser == null)) {
//     const uidLocal = auth.currentUser['uid'];
//     var fn = functions.httpsCallable('sendPushNotificationTestTMP');
//     console.log('Calling server PN 2');
//     return fn({uid: uidLocal, delayEnabled: delayEnabledP})
//       .then(function (result) {
//         if (result && result.success) {
//           console.log('Request server push notification success');
//         } else {
//           console.log('Request server push notification failure', result);
//         }
//         return result;
//       })
//       .catch(function (err) {
//         console.log('Failed to request server push notification, see console,');
//         console.warn(err);
//       });
//   } else {
//     return null;
//   }
// }

// // this.props.localState.session.owner
// export async function getUserPublicProfilesForChatroom(uid, CRID) {
//   if (!(auth.currentUser == null)) {
//     //  Get list of participants in requested chatroom
//     const participants = await db
//       .collection("Chatrooms")
//       .doc(CRID)
//       .get()
//       .then((snapshot) => snapshot.data()["participants"])
//       .catch((error) => {
//         console.log(error);
//         // An error happened.
//       });

//     console.log("Full paritipants object: ", uid, participants);

//     if (participants && Object.values(participants).includes(uid)) {
//       console.log("User is in requested chatroom group");

//       // const matchingUserProfiles = null;
//       //  get list of users with saved public profiles
//       // const matchingUserProfiles = await db
//       //   .collection("AppSaveState")
//       //   .get()
//       //   .then((snapshot) => {
//       //     const foundPublicProfiles = {};

//       //     return Promise.resolve()
//       //       .then(() =>
//       //         snapshot.forEach((doc) => {
//       //           // doc.data() is never undefined for query doc snapshots
//       //           // console.log(doc.id, " => ", doc.data());
//       //           // console.log("For user: ", doc.id);
//       //           if (Object.values(participants).includes(doc.id)) {
//       //             // console.log(
//       //             //   "The user is a participant: ",
//       //             //   doc.id,
//       //             //   doc.data()["userPublicProfile"]
//       //             // );
//       //             foundPublicProfiles[doc.id] = doc.data()["userPublicProfile"];
//       //             // return doc.data()["userPublicProfile"];
//       //           }
//       //         })
//       //       )
//       //       .then((result) => {
//       //         // console.log("Found public profiles: ", foundPublicProfiles);
//       //         return foundPublicProfiles;
//       //       });
//       //   })
//       //   .catch((error) => {
//       //     console.log(error);
//       //     // An error happened.
//       //   });

//       //  FIXMETUNA:  this is causing a memory crash.... need to filter before getting from
//       //  the cloud
//       const matchingUserProfiles = await db
//         .collection("AppSaveState")
//         .get()
//         .then((snapshot) => {
//           const foundPublicProfiles = {};
//           return snapshot;
//           // return Promise.resolve()
//           //   .then(() =>
//           //     snapshot.forEach((doc) => {
//           //       foundPublicProfiles[doc.id] = doc.data()["userPublicProfile"];
//           //       // return doc.data()["userPublicProfile"];
//           //     })
//           //   )
//           //   .then((result) => {
//           //     // console.log("Found public profiles: ", foundPublicProfiles);
//           //     return foundPublicProfiles;
//           //   });
//         })
//         .catch((error) => {
//           console.log(error);
//           // An error happened.
//         });

//       console.log("Matching profiles: ", matchingUserProfiles);

//       return matchingUserProfiles;
//     } else {
//       return null;
//     }

//     // return null;

//     // const requestedPublicProfile = await db
//     //   .collection("AppSaveState")
//     //   .doc(auth.currentUser["uid"])
//     //   .get()
//     //   .then((snapshot) => snapshot.data()["userPublicProfile"])
//     //   .catch((error) => {
//     //     console.log(error);
//     //     // An error happened.
//     //   });
//     // // .collection("userPublicProfile")
//     // // .then((snapshot) => snapshot.data());

//     // // .doc(auth.currentUser["uid"])
//     // // .get()
//     // // .then((snapshot) => snapshot.collection("userPublicProfile").get())
//     // // .then((snapshot) => snapshot.data());
//     // // .get()
//     // // .then((snapshot) => snapshot.collection("userPublicProfile").get())
//     // // .then((snapshot) => snapshot.data());
//     // return requestedPublicProfile;
//   } else {
//     return null;
//   }
// }

// export async function addChatMessage(message, CRID, participantUIDs) {
//   if (!(auth.currentUser == null)) {
//     const { _id, createdAt, text, user } = message;
//     db.collection("Chatrooms")
//       .doc(CRID)
//       .add({
//         _id,
//         createdAt,
//         text,
//         user,
//       })
//       // .then((docRef) => {
//       //   participantUIDs.forEach((pUID) => {
//       //     //  FIXMETUNA:  I need to make sure the unread message value is actually set here
//       //     // db.collection("UserNotifications").doc(pUID).set("unreadMessages", true);
//       //   });
//       //   return docRef;
//       // })
//       .then((docRef) => {
//         return docRef; //  return the results
//       });
//   } else {
//     return null;
//   }
// }

// export async function getNotifications() {
//   if (!(auth.currentUser == null)) {
//     const requestedNotifications = await db
//       .collection("UserNotifications")
//       .doc(auth.currentUser["uid"])
//       .get()
//       .then((snapshot) => snapshot.data());
//     //  FIXMETUNA:  then I want to reset the message notifications once they're consumed.... I think?
//     //  FIXMETUNA:  maybe this should be a seperate function to call when the client is ready
//     db.collection("UserNotifications").doc(auth.currentUser["uid"]).set({
//       unreadMessages: false,
//       notifications: {},
//     });
//     return requestedNotifications;
//   } else {
//     return null;
//   }
// }

//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***************************************NEW COMMUNITY METHODS***********************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/
//***********************************************************************************************/

export async function getChatroomUpdates() {
  if (!(auth.currentUser == null)) {
    const uid = auth.currentUser['uid'];

    console.log('GETTING CHATROOM UPDATES');

    //  NOTE: reasoning for below query: network is cheap, limits to 1 call and linear reads
    //  (up to 100 reads max for operation). Might be able to cache results for chat
    //  interface use as well
    const allChatroomsForUID = await db
      .collection('Chatrooms')
      .where('participants', 'array-contains', uid)
      .orderBy('createdAt', 'desc')
      .limit(100)
      .get()
      .then(snapshot =>
        snapshot.docs.map(docItem => {
          return {crid: docItem.id, ...docItem.data()};
        }),
      )
      .catch(error => {
        console.log(error);
      });

    let updatedChatroomMetadata = cloneDeep(allChatroomsForUID);
    for (let i = 0; i < allChatroomsForUID.length; i++) {
      const crid = allChatroomsForUID[i]['crid'].toString();

      const lastMessageInner = await db
        .collection('Chatrooms')
        .doc(crid)
        .collection('messages')
        .orderBy('createdAt', 'desc')
        .limit(1)
        .get()
        .then(snapshot => snapshot.docs.map(docItem => docItem.data())[0])
        .catch(error => {
          console.log(error);
        });

      if (!(lastMessageInner == null)) {
        const collTmp = collection(
          db,
          'Chatrooms/' + crid.toString() + '/messages',
        );

        console.log('GETTING_CHATROOM_UPDATES1');
        const snapshotTmp = await getCountFromServer(collTmp);
        const messageCountInner = snapshotTmp.data().count;
        updatedChatroomMetadata[i]['lastMessage'] = lastMessageInner['text'];
        updatedChatroomMetadata[i]['lastMessageTS'] =
          parseInt(lastMessageInner['createdAt']['seconds']) * 1000;
        updatedChatroomMetadata[i]['numMessages'] = messageCountInner;
      } else {
        updatedChatroomMetadata[i]['lastMessage'] = '';
        updatedChatroomMetadata[i]['lastMessageTS'] = '';
        updatedChatroomMetadata[i]['numMessages'] = 0;
      }
    }

    //  FIXMETUNA:
    //  FIXMETUNA:  need to reorganize this data so it's in a better format for the cache
    //  FIXMETUNA:
    //  allChatroomsForUID
    //  CURRENT FORMAT
    //  [{
    //     crid: crid,
    //     createdAt: "",
    //     participants: [],
    //     messages: {
    //       mid: {
    //         id, createdAt, text, user{}
    //       }
    //     }
    // }]

    let chatroomUpdates = {};

    for (let j = 0; j < updatedChatroomMetadata.length; j++) {
      chatroomUpdates[updatedChatroomMetadata[j]['crid']] =
        updatedChatroomMetadata[j];
    }

    return chatroomUpdates;
  } else {
    return null;
  }
}

export async function getSpecificQuestion(qid) {
  if (!(auth.currentUser == null)) {
    const specificQuestionObj = await db
      .collection('PublicQuestions')
      .doc(qid)
      .get()
      .then(snapshot => snapshot.data())
      .catch(error => {
        console.log(error);
      });
    return specificQuestionObj;
  } else {
    return null;
  }
}

export async function getNextQuestions(lastSnapshotVisible) {
  if (!(auth.currentUser == null)) {
    let nextQuestionsObj = null;
    let newLastSnapshotVisible = null;

    if (lastSnapshotVisible) {
      [nextQuestionsObj, newLastSnapshotVisible] = await db
        .collection('PublicQuestions')
        .orderBy('upvotes', 'desc')
        .startAfter(lastSnapshotVisible)
        .limit(10)
        .get()
        .then(snapshot => {
          // Get the last visible document
          const lastVisible = snapshot.docs[snapshot.docs.length - 1];
          return [
            snapshot.docs.map(doc => {
              return {did: doc.id, data: doc.data()};
            }),
            lastVisible,
          ];
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      [nextQuestionsObj, newLastSnapshotVisible] = await db
        .collection('PublicQuestions')
        .orderBy('upvotes', 'desc')
        .limit(10)
        .get()
        .then(snapshot => {
          // Get the last visible document
          const lastVisible = snapshot.docs[snapshot.docs.length - 1];
          return [
            snapshot.docs.map(doc => {
              return {did: doc.id, data: doc.data()};
            }),
            lastVisible,
          ];
        })
        .catch(error => {
          console.log(error);
        });
    }

    //  convert to object from array
    let convertedObj = {};
    Object.entries(nextQuestionsObj).forEach((questionObj, index) => {
      convertedObj[questionObj[1]['did']] = questionObj[1]['data'];
    });
    return [convertedObj, newLastSnapshotVisible];
  } else {
    return null;
  }
}

export async function getNextFeed(lastSnapshotVisible) {
  if (!(auth.currentUser == null)) {
    const uid = auth.currentUser['uid'];
    let nextFeedObj = null;
    let newLastSnapshotVisible = null;

    if (lastSnapshotVisible) {
      [nextFeedObj, newLastSnapshotVisible] = await db
        .collection('UserCommunityFeed')
        .doc(uid)
        .collection('Feed')
        .orderBy('timestamp', 'desc')
        .startAfter(lastSnapshotVisible)
        .limit(10)
        .get()
        .then(snapshot => {
          // Get the last visible document
          const lastVisible = snapshot.docs[snapshot.docs.length - 1];
          return [
            snapshot.docs.map(doc => {
              return {did: doc.id, data: doc.data()};
            }),
            lastVisible,
          ];
        })
        .catch(error => {
          console.log(error);
          // An error happened.
        });
    } else {
      [nextFeedObj, newLastSnapshotVisible] = await db
        .collection('UserCommunityFeed')
        .doc(uid)
        .collection('Feed')
        .orderBy('timestamp', 'desc')
        .limit(10)
        .get()
        .then(snapshot => {
          // Get the last visible document
          const lastVisible = snapshot.docs[snapshot.docs.length - 1];
          return [
            snapshot.docs.map(doc => {
              return {did: doc.id, data: doc.data()};
            }),
            lastVisible,
          ];
        })
        .catch(error => {
          console.log(error);
          // An error happened.
        });
    }

    let convertedObj = {};
    Object.entries(nextFeedObj).forEach((feedObj, index) => {
      convertedObj[feedObj[1]['did']] = feedObj[1]['data'];
    });
    return [convertedObj, newLastSnapshotVisible];
  } else {
    return null;
  }
}

export async function queryUsers(name, conditions = []) {
  //  queries user, either by a case sensative name prefix match, a condition match,
  //  or a combination of both
  if (!(auth.currentUser == null)) {
    let matchingUserObjs = null;

    if (name && !(name == '') && conditions && conditions.length > 0) {
      //  FIXMETUNA: currently this doesn't require all conditions to match, just one
      //  might need to create a more complex query in the future, this works for now
      matchingUserObjs = await db
        .collection('UserPublicProfiles')
        .where('name', '>=', name)
        .where('name', '<=', name + '\uf8ff')
        .where('healthConditions', 'array-contains-any', conditions)
        .orderBy('name')
        .limit(10)
        .get()
        .then(snapshot => snapshot.docs.map(docItem => docItem.data()))
        .catch(error => {
          console.log(error);
        });
    } else if (name && !(name == '')) {
      matchingUserObjs = await db
        .collection('UserPublicProfiles')
        .where('name', '>=', name)
        .where('name', '<=', name + '\uf8ff')
        .orderBy('name')
        .limit(10)
        .get()
        .then(snapshot => snapshot.docs.map(docItem => docItem.data()))
        .catch(error => {
          console.log(error);
        });
    } else if (conditions && conditions.length > 0) {
      matchingUserObjs = await db
        .collection('UserPublicProfiles')
        .where('healthConditions', 'array-contains-any', conditions)
        .orderBy('name')
        .limit(10)
        .get()
        .then(snapshot => snapshot.docs.map(docItem => docItem.data()))
        .catch(error => {
          console.log(error);
        });
    }

    return matchingUserObjs;
  } else {
    return null;
  }
}

export async function getFriendRequests() {
  if (!(auth.currentUser == null)) {
    const uid = auth.currentUser['uid'];

    const allFriendRequestsForUID = await db
      .collection('UserFriendRequests')
      .doc(uid.toString())
      .get()
      .then(snapshot => snapshot.data())
      .catch(error => {
        console.log(error);
      });

    return allFriendRequestsForUID;
  } else {
    return null;
  }
}

export async function sendFriendRequest(frid, publicProfile) {
  if (!(auth.currentUser == null) && frid && publicProfile) {
    const uid = auth.currentUser['uid'];

    let updatedFriendRequestsForUid = await db
      .collection('UserFriendRequests')
      .doc(frid.toString())
      .get()
      .then(snapshot => snapshot.data())
      .catch(error => {
        console.log('friend request error1: ', error);
      });

    if (
      updatedFriendRequestsForUid == null ||
      typeof updatedFriendRequestsForUid != typeof {} ||
      Object.keys(updatedFriendRequestsForUid).length < 1
    ) {
      updatedFriendRequestsForUid = {requested: {}, accepted: {}};
    }
    updatedFriendRequestsForUid['requested'][uid.toString()] = {
      status: 'pending',
      publicProfile: publicProfile,
    };

    await db
      .collection('UserFriendRequests')
      .doc(frid.toString())
      .set(updatedFriendRequestsForUid)
      .catch(error => {
        console.log('friend request error2: ', error);
      });
    return true;
  } else {
    return null;
  }
}

// friendRequests: {
//   UID4: {
//     requested: {
//       UID2: {status: 'pending/accepted/rejected', publicProfile: {publicprofile}},
//       UID3: {status: 'pending/accepted/rejected', publicProfile: {publicprofile}},
//     },
//     accepted: {UID7: {crid: 'newCRID', publicProfile: {publicprofile}}},
//   },
// },

export async function updateFriendRequests(publicProfile, friendRequests) {
  if (!(auth.currentUser == null) && publicProfile && friendRequests) {
    const uid = auth.currentUser['uid'];
    let updatedFriendRequestsLocal = cloneDeep(friendRequests);
    let newChatrooms = {};
    let newCachedPublicProfiles = {};

    //  for each received friend request
    const friendRequestsList = Object.entries(friendRequests['requested']);
    for (let i = 0; i < friendRequestsList.length; i++) {
      const frid = friendRequestsList[i][0];
      const request = friendRequestsList[i][1];

      //  if the user accepted the friend request
      if (request['status'] == 'accepted') {
        //  create new chatroom for the friendship
        const newCRID = await createChatroom(frid);
        newChatrooms[newCRID] = {
          crid: newCRID,
          publicProfile: request['publicProfile'],
          username: request['publicProfile']['name'],
          lastMessage: '',
          lastMessageTS: '',
          numRead: 0,
          numMessages: 0,
        };

        let updatedFriendRequestsForUid = await db
          .collection('UserFriendRequests')
          .doc(frid.toString())
          .get()
          .then(snapshot => snapshot.data())
          .catch(error => {
            console.log(error);
          });

        if (
          updatedFriendRequestsForUid == null ||
          Object.keys(updatedFriendRequestsForUid).length < 1
        ) {
          updatedFriendRequestsForUid = {requested: {}, accepted: {}};
        }
        updatedFriendRequestsForUid['accepted'][uid.toString()] = {
          crid: newCRID,
          publicProfile: publicProfile,
        };

        await db
          .collection('UserFriendRequests')
          .doc(frid.toString())
          .set(updatedFriendRequestsForUid)
          .catch(error => {
            console.log(error);
          });
      }
    }

    //  remove rejected and accepted friend requests (no further action needed)
    let pendingOnlyRequests = {};
    Object.entries(updatedFriendRequestsLocal['requested']).forEach(
      ([itemKey, itemVal]) => {
        if (itemVal.status == 'pending') {
          pendingOnlyRequests[itemKey] = itemVal;
        }
      },
    );
    updatedFriendRequestsLocal['requested'] = pendingOnlyRequests;

    //  go through each of the accepted friend request responses this user has received

    Object.entries(friendRequests['accepted']).forEach(([frid, accepted]) => {
      //  add new chatroom CRID and info to user's local chatrooms
      newChatrooms[accepted['crid']] = {
        crid: accepted['crid'],
        publicProfile: accepted['publicProfile'],
        username: accepted['publicProfile']['name'],
        lastMessage: '',
        lastMessageTS: '',
        numRead: 0,
        numMessages: 0,
      };
      newCachedPublicProfiles[accepted['publicProfile']['uid']] =
        accepted['publicProfile'];
    });
    updatedFriendRequestsLocal['accepted'] = {};

    //  update firestore with local update version of this user's friend requests
    await db
      .collection('UserFriendRequests')
      .doc(uid.toString())
      .set(updatedFriendRequestsLocal)
      .catch(error => {
        console.log(error);
      });

    return [updatedFriendRequestsLocal, newChatrooms, newCachedPublicProfiles];
  } else {
    return null;
  }
}

export async function syncLocalQuestions(localQnaUpdates) {
  if (!(auth.currentUser == null) && localQnaUpdates) {
    const uid = auth.currentUser['uid'];
    //  add new question to public feed
    if (Object.keys(localQnaUpdates['newQuestions']).length > 0) {
      Object.entries(localQnaUpdates['newQuestions']).forEach(
        async ([timestamp, questionObj]) => {
          //  TODO: post status update publically
          await db
            .collection('PublicQuestions')
            .add(questionObj)
            .catch(error => {
              console.log(error);
            });
        },
      );
    }

    //  sync reactions to public feed
    if (Object.keys(localQnaUpdates['newQuestionInteractions']).length > 0) {
      Object.entries(localQnaUpdates['newQuestionInteractions']).forEach(
        async ([questionID, updateObj]) => {
          const upvoteDiff = updateObj['upvoteDiff'];
          const discussion = updateObj['discussion'];

          if (
            (upvoteDiff && !(upvoteDiff == 0)) ||
            (discussion && Object.keys(discussion).length > 0)
          ) {
            const currentQuestion = await db
              .collection('PublicQuestions')
              .doc(questionID)
              .get()
              .then(snapshot => snapshot.data())
              .catch(error => {
                console.log(error);
              });
            let updatedQuestion = cloneDeep(currentQuestion);

            if (upvoteDiff && !(upvoteDiff == 0)) {
              updatedQuestion['upvotes'] =
                updatedQuestion['upvotes'] + upvoteDiff;
            }

            if (discussion && Object.keys(discussion).length > 0) {
              Object.entries(discussion).forEach(
                async ([timestamp, commentObj]) => {
                  if (
                    !(commentObj['text'] == '') &&
                    !(commentObj['uid'] == '')
                  ) {
                    updatedQuestion['discussion'][timestamp] = {
                      uid: commentObj['uid'],
                      upvotes: commentObj['upvoteDiff'],
                      replies: commentObj['replies'],
                      text: commentObj['text'],
                    };
                  } else {
                    if (!(commentObj['upvoteDiff'] == 0)) {
                      updatedQuestion['discussion'][timestamp]['upvotes'] =
                        updatedQuestion['discussion'][timestamp]['upvotes'] +
                        commentObj['upvoteDiff'];
                    }

                    if (
                      commentObj['replies'] &&
                      Object.keys(commentObj['replies']).length > 0
                    ) {
                      updatedQuestion['discussion'][timestamp]['replies'][
                        commentObj['replies']['timestamp']
                      ] = {
                        uid: commentObj['replies']['uid'],
                        text: commentObj['replies']['text'],
                      };
                    }
                  }
                },
              );
            }

            await db
              .collection('PublicQuestions')
              .doc(questionID)
              .set(updatedQuestion)
              .catch(error => {
                console.log(error);
              });
          }
        },
      );
    }

    return true;
  } else {
    return null;
  }
}

export async function syncLocalFeed(localFeedUpdates, friendsList) {
  if (!(auth.currentUser == null) && localFeedUpdates && friendsList) {
    const uid = auth.currentUser['uid'];

    var fn = functions().httpsCallable('syncLocalFeed');

    return fn({
      localFeedUpdates: replaceAllUndefined(localFeedUpdates),
      friendsList: friendsList,
    })
      .then(result => {
        if (result && Object.keys(result).length > 0) {
          console.log('Sync local feed success: ' + JSON.stringify(result));
        }
        return result;
      })
      .catch(err => {
        console.log('Failed to sync local feed, see console,');
        console.warn(err);
      });
  } else {
    return null;
  }
}

export async function postUrgentStatusUpdate(
  statusUpdate,
  timestamp,
  friendsList,
) {
  if (!(auth.currentUser == null) && statusUpdate && timestamp && friendsList) {
    const uid = auth.currentUser['uid'];

    var fn = functions().httpsCallable('postUrgentStatusUpdate');
    return fn({
      statusUpdate: statusUpdate,
      timestamp: timestamp,
      friendsList: friendsList,
    })
      .then(result => {
        if (result && Object.keys(result).length > 0) {
          console.log(
            'Post Urgent Status Update success: ' + JSON.stringify(result),
          );
        }
        return result;
      })
      .catch(err => {
        console.log('Failed to Post Urgent Status Update, see console,');
        console.warn(err);
      });
  } else {
    return null;
  }
}
