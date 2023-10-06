const admin = require('firebase-admin');
const functions = require('firebase-functions');
// const getRandValues = require('react-native-get-random-values');
// const {v4: uuidv4} = require('uuid');
const CryptoJS = require('crypto-js');
const {cloneDeep} = require('lodash');

// import admin from 'firebase-admin';
// import functions from 'firebase-functions';
// import getRandValues from 'react-native-get-random-values';
// import {v4 as uuidv4} from 'uuid';
// import CryptoJS from 'crypto-js';

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { v4 as uuidv4 } from "uuid";
// const { AccessibilityInfo, NativeModules, Platform } = require("react-native");
// const { Aes } = require("react-native-aes-crypto");

// const { AES } = require("crypto-js");
// const bcrypt = require("bcrypt");
// const SHA256 = require("crypto-js/sha256");
// const sha256 = require("crypto-js/sha256");

admin.initializeApp();

//  NOTE:  run the command below in powershell to deploy cloud functions
// // $env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\Tunadude09\Projects\Work\Meliora\App\amie_app_alpha\firebase.secretkeys.json"
//  or in cmd
//  set [GOOGLE_APPLICATION_CREDENTIALS=["C:\Users\Tunadude09\Projects\Work\Meliora\App\amie_app_alpha\firebase.secretkeys.json"]]
// // firebase deploy --only functions

//  NOTE:  various helpful docs
// const firebaseConfig = {
//   credential: admin.credential.applicationDefault(),
//   databaseURL: "https://amie-health.firebaseio.com",
// };
// admin.initializeApp(firebaseConfig);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

//  NOTE: Calling a https cloud function directly
// gcloud functions call YOUR_FUNCTION_NAME --data '{"name":"Keyboard Cat"}'
// gcloud functions call createNewUserAuth --data '{"email":"dummmyTestMex123@gmail.com"}'
// or you can test the function directly in the google cloud command console on the functions page

// admin.initializeApp(functions.config().firebase);
// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// // import { initializeApp, applicationDefault } from 'firebase-admin/app';
// // const secretKeys = require("./firebase.secretkeys.json");
// // const firebaseConfig = {
// //   credential: {
// //     apiKey: secretKeys.apiKey,
// //     authDomain: secretKeys.authDomain,
// //     projectId: secretKeys.projectId,
// //     storageBucket: secretKeys.storageBucket,
// //     messagingSenderId: secretKeys.messagingSenderId,
// //     appId: secretKeys.appId,
// //     measurementId: secretKeys.measurementId,
// //   },
// //   databaseURL: "https://amie-health.firebaseio.com",
// // };
// //  FIXMETUNA:  would be better to automate the following
// //  need to run the cmd below in powershell before deploying
// // $env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\Tunadude09\Projects\Work\Meliora\App\amie_app_alpha\firebase.secretkeys.json"
// const firebaseConfig = {
//   credential: admin.credential.applicationDefault(),
//   databaseURL: "https://amie-health.firebaseio.com",
// };
// admin.initializeApp(firebaseConfig);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// //  Listen for new user request in firestore
// // exports.createNewUserAuth = functions.https.onCall(async (data, context) => {
// exports.createNewUserAuth = functions.firestore
//   .document(
//     'ServerUtils/UserAccountManagement/NewUserRequestList/{newUserEmail}',
//   )
//   .onWrite(async (change, context) => {
//     // Only allow admin users to execute this function.
//     //   && context.auth.token.admin
//     //  FIXMETUNA:  each user should only be able to delete chatrooms they are apart of
//     // if (!(context.auth && context.auth.token)) {
//     //   throw new functions.https.HttpsError(
//     //     "permission-denied",
//     //     "Must be an authenticated authority to create new user.",
//     //     context
//     //   );
//     // }

//     functions.logger.log(
//       //  `User ${context.auth.uid} has requested to delete chatroom ${data.crid}`
//       'Creating new user',
//       // change,
//       // context
//     );
//     const newUserEmail = context.params['newUserEmail'];
//     const generatedPassword = uuidv4();

//     // console.log(
//     //   NativeModules.version,
//     //   Platform.version,
//     //   AccessibilityInfo.version
//     // );
//     const salt = newUserEmail;
//     // const generatedPasswordhash = await Aes.pbkdf2(
//     //   generatedPassword,
//     //   salt,
//     //   120000,
//     //   256
//     // );
//     // const generatedPasswordhashPre = await bcrypt.hash(generatedPassword, salt);

//     // const generatedPasswordhashPre = await AES.encrypt(generatedPassword, salt);

//     // const generatedPasswordhashPre = await sha256(generatedPassword + salt);
//     // const generatedPasswordhash = generatedPasswordhashPre.toString();

//     const generatedPasswordhashPre = await CryptoJS.SHA256(
//       generatedPassword + salt,
//     ); // eslint-disable-line no-use-before-define
//     const generatedPasswordhash = generatedPasswordhashPre.toString();

//     // functions.logger.log(
//     //   //  `User ${context.auth.uid} has requested to delete chatroom ${data.crid}`
//     //   "Creating new user before",
//     //   generatedPassword
//     // );
//     // functions.logger.log(
//     //   //  `User ${context.auth.uid} has requested to delete chatroom ${data.crid}`
//     //   "Creating new user hash",
//     //   generatedPasswordhash
//     // );

//     admin
//       .auth()
//       .createUser({
//         email: newUserEmail.toString().trim(),
//         emailVerified: false,
//         // phoneNumber: '+11234567890',
//         password: generatedPasswordhash.toString().trim(),
//         // displayName: 'John Doe',
//         // photoURL: 'http://www.example.com/12345678/photo.png',
//         // disabled: false,
//       })
//       .then(async userRecord => {
//         // See the UserRecord reference doc for the contents of userRecord.
//         functions.logger.log('Successfully created new user:', userRecord.uid);

//         const uid = userRecord?.uid;
//         await admin.firestore().collection('Users').doc(uid.toString()).set({
//           firstTimeSetupProgress: 0,
//           firstTimeActivationKey: generatedPassword,
//           // messages: {},
//           createdAt: Date.now(),
//         });
//         functions.logger.log('Added user to firestore');
//       })
//       .catch(error => {
//         functions.logger.log('Error adding new user to firestore:', error);
//       });
//   });

//  used for password reset on the local hosted server
exports.epLocal = functions.https.onCall(async (data, context) => {
  // Only allow admin users to execute this function.
  //   && context.auth.token.admin

  const arbitrarycheck = await data.arbitrarycheck.toString();

  functions.logger.log('Hash password Called');

  if (!(arbitrarycheck == null) && arbitrarycheck == 'otrelloB812ant42a') {
    const passedPassword = await data.password.toString();
    const passedEmail = await data.email.toString();
    if (
      !(passedPassword == null) &&
      !(passedPassword == '') &&
      !(passedEmail == null) &&
      !(passedEmail == '')
    ) {
      const generatedPasswordhashPre = await CryptoJS.SHA256(
        passedPassword + passedEmail,
      );
      const generatedHash = generatedPasswordhashPre.toString();

      // functions.logger.log("Hash successful: ", generatedHash);
      return {hash: generatedHash};
    } else {
      functions.logger.log('Hash failed');
      return {};
    }
  } else {
    throw new functions.https.HttpsError(
      'permission-denied',
      "Must be auth'd to access.",
    );
  }
});

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
//************************************NEW COMMUNITY METHODS**************************************/
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

// //  Listen for new messages in chatrooms
// exports.chatroomNewMessage = functions.firestore
//   .document('Chatrooms/{CRID}/messages/{MID}')
//   .onWrite(async (change, context) => {
//     // Get an object with the current document value.
//     // If the document does not exist, it has been deleted.
//     const document = change.after.exists
//       ? change.after.data()
//       : change.before.data();

//     functions.logger.log('New Message DOCUMENT TYPE: ', typeof document);
//     functions.logger.log('DOCUMENT CONTENTS: ', document); //  it's literally a json object
//     functions.logger.log('CONTEXT CONTENTS: ', context); //  it's literally a json object
//     //  FIXMETUNA:  so perform json object ordering etc below

//     //  if the document was deleted, set latest message to null, everything else is the same

//     // const CRID = document.id;
//     const CRID = context.params['CRID'];
//     const latestMessage = document['text'];
//     const latestMessageAuthorUID = document['user']['_uid'];
//     functions.logger.log('DOCUMENT 1 ', CRID, latestMessage);

//     const participants = await admin
//       .firestore()
//       .collection('Chatrooms')
//       .doc(`${CRID}`)
//       .get()
//       .then(snapshot => snapshot.data()['participants'])
//       .catch(error => {
//         console.log(error);
//         // An error happened.
//       });

//     // for (const [, val] of Object.entries(document["messages"])) {
//     //   if (val.createdAt > lastTS) {
//     //     lastTS = val.createdAt;
//     //     latestMessage = val.text;
//     //   }
//     // }

//     functions.logger.log('Last Message and Timestamp: ', latestMessage); //  it's literally a json object

//     // latestMessage = change.after.exists ? latestMessage : null;
//     // const latestMessage = change.after.exists
//     //   ? await document["messages"]
//     //       .orderBy("createdAt", "asc")
//     //       .limit(1)
//     //       .get()
//     //       .then((snapshot) => snapshot.data())
//     //   : null;
//     // const latestMessage = "TMP last message";

//     functions.logger.log('DOCUMENT 2.1');
//     functions.logger.log('DOCUMENT 2.2');

//     participants.forEach(async (UID, index) => {
//       // functions.logger.log(
//       //   "Comparing participants: ",
//       //   latestMessageAuthorUID,
//       //   " 2: ",
//       //   UID,
//       //   " 3: ",
//       //   index
//       // );
//       if (!(UID == '') && !(latestMessageAuthorUID == UID)) {
//         //  FIXMETUNA:  send out a push notification with
//         //  push_notification(CRID, latestMessage);
//         //  for each user

//         //   const FCMToken = admin
//         //     .firestore()
//         //     .ref(`/devicePushTokens/${UID}`)
//         //     .once("notification_token");

//         functions.logger.log('DOCUMENT 3 ' + index);

//         const FCMToken = await admin
//           .firestore()
//           .collection('devicePushTokens')
//           .doc(`${UID}`)
//           .get()
//           .then(snapshot => snapshot.data()['notification_token'])
//           .catch(error => {
//             console.log(error);
//             // An error happened.
//           });
//         // .collection("notification_token")

//         if (!(FCMToken == null) && !(FCMToken == '')) {
//           functions.logger.log('DOCUMENT 4.1 ', index, FCMToken);
//           functions.logger.log('DOCUMENT 4.2 ', index, UID);

//           const payload = {
//             token: FCMToken,
//             data: {
//               crid: String(CRID),
//               title: 'Endo101 - New Message',
//               body: String(latestMessage),
//               notificationType: 'newChatroomMessage',
//             },

//             // notification: {
//             //   title: "Endo101 - New Message",
//             //   body: String(latestMessage),
//             // },

//             // Required for background/quit data-only messages on iOS
//             // contentAvailable: true,
//             // content_available: true,
//             // Required for background/quit data-only messages on Android
//             apns: {
//               headers: {
//                 'apns-priority': '5',
//               },
//               payload: {
//                 aps: {
//                   contentAvailable: true,
//                 },
//                 // my_custom_parameter: true,
//                 content_available: true,
//                 priority: 'high',
//               },
//             },
//           };
//           // const payload = {
//           //   token: FCMToken,
//           //   notification: {
//           //     title: "New Message",
//           //     body: latestMessage,
//           //   },
//           //   data: { crid: String(CRID), message: String(latestMessage) },

//           //   // Required for background/quit data-only messages on iOS
//           //   contentAvailable: true,
//           //   content_available: true,
//           //   // Required for background/quit data-only messages on Android
//           //   priority: "high",
//           // };

//           functions.logger.log('DOCUMENT 5 ' + index);

//           functions.logger.log('FCM Message payload: ', payload);

//           admin
//             .messaging()
//             .send(payload)
//             .then(response => {
//               // Response is a message ID string.
//               functions.logger.log('Successfully sent message:', response);

//               return {success: true};
//             })
//             .catch(error => {
//               functions.logger.log(
//                 'FCM Message Delivery ERROR: ',
//                 error,
//                 error.code,
//               );

//               return {error: error.code};
//             });
//           functions.logger.log('DOCUMENT 6 ' + index);
//         }
//       }
//     });
//   });

/**
 * Initiate a recursive delete of documents at a given path.
 *
 * The calling user must be authenticated and have the custom "admin" attribute
 * set to true on the auth token.
 *
 * This delete is NOT an atomic operation and it's possible
 * that it may fail after only deleting some documents.
 *
 * @param {string} data.path the document or collection path to delete.
 */
exports.chatroomRecursiveDelete = functions
  .runWith({
    timeoutSeconds: 540,
    memory: '2GB',
  })
  .https.onCall(async (data, context) => {
    // Only allow admin users to execute this function.
    //   && context.auth.token.admin
    //  FIXMETUNA:  each user should only be able to delete chatrooms they are apart of
    if (!(context.auth && context.auth.token)) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Must be an authenticated user to initiate delete.',
      );
    }

    // const path = "/Chatrooms/" + data.crid;
    // functions.logger.log(
    //   `User ${context.auth.uid} has requested to delete path ${path}`
    // );
    // // Run a recursive delete on the given document or collection path.
    // // The 'token' must be set in the functions config, and can be generated
    // // at the command line by running 'firebase login:ci'.
    // //  await firebase_tools.firestore
    // await admin.firestore().delete(path, {
    //   project: process.env.GCLOUD_PROJECT,
    //   recursive: true,
    //   yes: true,
    //   // token: functions.config().fb.token,
    // });

    functions.logger.log(
      `User ${context.auth.uid} has requested to delete chatroom ${data.crid}`,
    );
    const firestore = admin.firestore();
    // Delete
    const documentRef = firestore
      .collection('Chatrooms')
      .doc(data.crid.toString());
    await firestore.recursiveDelete(documentRef);

    return {
      path: data.crid,
    };
  });

// //  FIXMETUNA:  get all public user profiles for users in chosen chat group
// //  only triggers if the user is auth'd and the user is a member of the requested chat group
// exports.connectGetUserPublicProfilesForChatroom = functions.https.onCall(
//   async (data, context) => {
//     // Only allow admin users to execute this function.
//     //   && context.auth.token.admin
//     if (!(context.auth && context.auth.token)) {
//       throw new functions.https.HttpsError(
//         'permission-denied',
//         'Must be an authorized to get user public profiles.',
//       );
//     } else {
//       const path = '/Chatrooms/' + data.crid;
//       console.log(
//         `User ${context.auth.uid} has requested to get participant public profiles from ${path}`,
//       );

//       //  Get list of participants in requested chatroom
//       const participants = await admin
//         .firestore()
//         .collection('Chatrooms')
//         .doc(data.crid.toString())
//         .get()
//         .then(snapshot => snapshot.data()['participants'])
//         .catch(error => {
//           console.log(error);
//           // An error happened.
//         });

//       // console.log("Full paritipants object: ", participants);

//       if (
//         participants &&
//         Object.values(participants).includes(context.auth.uid)
//       ) {
//         console.log('User is in requested chatroom group');

//         //  get list of users with saved public profiles
//         const matchingUserProfiles = await admin
//           .firestore()
//           .collection('AppSaveState')
//           .get()
//           .then(snapshot => {
//             const foundPublicProfiles = {};

//             return Promise.resolve()
//               .then(() =>
//                 snapshot.forEach(doc => {
//                   // doc.data() is never undefined for query doc snapshots
//                   // console.log(doc.id, " => ", doc.data());
//                   // console.log("For user: ", doc.id);
//                   if (Object.values(participants).includes(doc.id)) {
//                     // console.log(
//                     //   "The user is a participant: ",
//                     //   doc.id,
//                     //   doc.data()["userPublicProfile"]
//                     // );
//                     foundPublicProfiles[doc.id] =
//                       doc.data()['userPublicProfile'];
//                     // return doc.data()["userPublicProfile"];
//                   }
//                 }),
//               )
//               .then(result => {
//                 // console.log("Found public profiles: ", foundPublicProfiles);
//                 return foundPublicProfiles;
//               });
//           })

//           // .get()
//           // .then((snapshot) =>
//           //   snapshot.forEach((doc) => {
//           //     // doc.data() is never undefined for query doc snapshots
//           //     // console.log(doc.id, " => ", doc.data());
//           //     console.log("For user: ", doc.id);
//           //     if (Object.values(participants).includes(doc.id)) {
//           //       console.log(
//           //         "The user is a participant: ",
//           //         doc.id,
//           //         doc.data()["userPublicProfile"]
//           //       );
//           //       return doc.data()["userPublicProfile"];
//           //     }
//           //   })
//           // )
//           .catch(error => {
//             console.log(error);
//             // An error happened.
//           });

//         return {
//           publicProfiles: matchingUserProfiles,
//         };
//       }

//       // const participantPublicProfiles = {};

//       // // participants.forEach(async (UID, index) => {
//       // for (const UID of participants) {
//       //   // console.log("Requested key, val, pair from participants: ", UID, index);
//       //   const specificUserPublicProfile = await admin
//       //     .firestore()
//       //     .collection("AppSaveState")
//       //     .doc(UID)
//       //     .get()
//       //     .then((snapshot) => snapshot.data()["userPublicProfile"])
//       //     .catch((error) => {
//       //       console.log(error);
//       //       // An error happened.
//       //     });

//       //   // console.log("Retrieved user profile: ", UID, specificUserPublicProfile);

//       //   if (specificUserPublicProfile) {
//       //     console.log("adding profile to uid: ", UID);
//       //     participantPublicProfiles[UID] = specificUserPublicProfile;
//       //   }
//       // }
//       // // });

//       // return {
//       //   publicProfiles: participantPublicProfiles,
//       // };
//       else {
//         console.log(
//           'User is not a member of requested chatroom, returning empty',
//         );
//         return {};
//       }
//     }
//   },
// );

//  FIXMETUNA:  posts a special status update which sends push notifications to all
//  of the user's friends. Is used for urgent situations when the user needs help asap from
//  their community
exports.postUrgentStatusUpdate = functions.https.onCall(
  async (data, context) => {
    // Only allow admin users to execute this function.
    //   && context.auth.token.admin
    if (!(context.auth && context.auth.token)) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Must be an authorized to post updates.',
      );
    } else {
      const uid = context.auth.uid.toString();
      const timestamp = data.timestamp;
      const statusUpdate = data.statusUpdate;
      const friendsList = data.friendsList;

      console.log(`User ${uid} has requested an urgent status update`);

      // console.log(`User params: ${uid} ${timestamp} ${statusUpdate}`);

      //  TODO: post status update publically
      await admin
        .firestore()
        .collection('UserStatusUpdates')
        .doc(uid)
        .collection('StatusUpdates')
        .doc(timestamp.toString())
        .set(statusUpdate)

        .catch(error => {
          console.log(error);
          // An error happened.
        });

      console.log(`Sync Urgent Status 1`);

      //  TODO:  add status to your own feed
      await admin
        .firestore()
        .collection('UserCommunityFeed')
        .doc(uid)
        .collection('Feed')
        .doc(timestamp.toString())
        .set({
          timestamp: timestamp,
          type: 'statusUpdate',
          content: statusUpdate,
        })
        .catch(error => {
          console.log(error);
          // An error happened.
        });
      console.log(`Sync Urgent Status 2`);

      //  TODO: add status update to all friend's feeds
      // for (const frid in friendsList) {
      for (let i = 0; i < friendsList.length; i++) {
        const frid = friendsList[i];
        if (frid != '-1' && frid != -1) {
          // console.log('Syncing urgent feed to friend: ', JSON.stringify(frid));
          await admin
            .firestore()
            .collection('UserCommunityFeed')
            .doc(frid.toString())
            .collection('Feed')
            .doc(timestamp.toString())
            .set({
              timestamp: timestamp,
              type: 'statusUpdate',
              content: statusUpdate,
            })
            .catch(error => {
              console.log(error);
              // An error happened.
            });
        }
      }
      console.log(`Sync Urgent Status 3`);

      //  TODO: send push notifications to all friends
      // for (const frid in friendsList) {
      for (let i = 0; i < friendsList.length; i++) {
        const frid = friendsList[i];
        if (frid != '-1' && frid != -1) {
          // console.log('Send urgent PN to friend: ', JSON.stringify(frid));
          // const FCMToken = await admin
          //   .firestore()
          //   .ref(`/devicePushTokens/${frid}`)
          //   .once('notification_token');
          const FCMToken = await admin
            .firestore()
            .collection('devicePushTokens')
            .doc(frid.toString())
            .get()
            .then(snapshot => snapshot.data()['notification_token'])
            .catch(error => {
              console.log(error);
              // An error happened.
            });

          const payload = {
            token: FCMToken,
            data: {
              // crid: String(CRID),
              title: 'Urgent Message From ' + statusUpdate['name'].toString(),
              body: statusUpdate['prompt'].toString(),
              notificationType: 'urgentMessageFriend',
            },
            apns: {
              headers: {
                'apns-priority': '5',
              },
              payload: {
                aps: {
                  contentAvailable: true,
                },
                content_available: true,
                priority: 'high',
              },
            },
          };

          await admin
            .messaging()
            .send(payload)
            .then(response => {
              // Response is a message ID string.
              functions.logger.log('Successfully sent message:', response);

              return {success: true};
            })
            .catch(error => {
              functions.logger.log(
                'FCM Message Delivery ERROR: ',
                error,
                error.code,
              );

              return {error: error.code};
            });
        }
      }
      return timestamp;
    }
  },
);

//  FIXMETUNA:
exports.syncLocalFeed = functions.https.onCall(async (data, context) => {
  // Only allow admin users to execute this function.
  //   && context.auth.token.admin
  if (!(context.auth && context.auth.token)) {
    throw new functions.https.HttpsError(
      'permission-denied',
      'Must be an authorized to sync local feed.',
    );
  } else {
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */
    //*********************************************************************** */

    const uid = context.auth.uid.toString();
    const localFeedUpdates = data.localFeedUpdates;
    const friendsList = data.friendsList;

    //  sync new status updates to all friend feeds
    if (Object.keys(localFeedUpdates['newStatusUpdates']).length > 0) {
      Object.entries(localFeedUpdates['newStatusUpdates']).forEach(
        async ([timestamp, updateObj]) => {
          console.log(
            'Sync status FEED: ',
            timestamp,
            JSON.stringify(updateObj),
          );

          const statusUpdate = updateObj;

          //  TODO: post status update publically
          await admin
            .firestore()
            .collection('UserStatusUpdates')
            .doc(uid)
            .collection('StatusUpdates')
            .doc(timestamp.toString())
            .set(statusUpdate)
            .catch(error => {
              console.log(error);
              // An error happened.
            });

          //  TODO:  add status to your own feed
          await admin
            .firestore()
            .collection('UserCommunityFeed')
            .doc(uid)
            .collection('Feed')
            .doc(timestamp.toString())
            .set({
              timestamp: timestamp,
              type: 'statusUpdate',
              content: statusUpdate,
            })
            .catch(error => {
              console.log(error);
              // An error happened.
            });

          //  TODO: add status update to all friend's feeds
          // for (const frid in friendsList) {
          for (let i = 0; i < friendsList.length; i++) {
            const frid = friendsList[i];
            if (frid != '-1' && frid != -1) {
              // console.log(
              //   'Syncing status to friend: ',
              //   JSON.stringify(frid),
              //   JSON.stringify(friendsList),
              // );
              await admin
                .firestore()
                .collection('UserCommunityFeed')
                .doc(frid.toString())
                .collection('Feed')
                .doc(timestamp.toString())
                .set({
                  timestamp: timestamp,
                  type: 'statusUpdate',
                  content: statusUpdate,
                })
                .catch(error => {
                  console.log(error);
                  // An error happened.
                });
            }
          }
        },
      );
    }

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
    //          muscle: -1,
    //          cry: 0,
    //          thumbsUp: 0,
    //       }}}},

    if (Object.keys(localFeedUpdates['newStatusReactions']).length > 0) {
      Object.entries(localFeedUpdates['newStatusReactions']).forEach(
        async ([statusTS, updateObj]) => {
          const timestamp = updateObj['timestamp'];
          const reactionDiff = updateObj['reactionDiff'];
          const statusUID = updateObj['uid'];

          console.log(
            'Sync Reaction Obj FEED: ',
            timestamp,
            JSON.stringify(updateObj),
          );
          console.log(
            'Sync Reaction Finding Status updateFeed at: ',
            statusUID.toString(),
            timestamp.toString(),
          );

          //  get the current matching statusUpdate
          //  FIXMETUNA:  this is returning undefined!
          const currentStatusUpdate = await admin
            .firestore()
            .collection('UserStatusUpdates')
            .doc(statusUID.toString())
            .collection('StatusUpdates')
            .doc(timestamp.toString())
            .get()
            .then(snapshot => snapshot.data())
            .catch(error => {
              console.log(error);
              // An error happened.
            });

          console.log(
            'Sync Reaction Found status update: ',
            JSON.stringify(currentStatusUpdate),
          );

          //  update the reaction values
          let updatedStatusUpdate = cloneDeep(currentStatusUpdate);
          if (!(updatedStatusUpdate == null)) {
            updatedStatusUpdate['reactionCounts']['heart'] =
              updatedStatusUpdate['reactionCounts']['heart'] +
              reactionDiff['heart'];
            updatedStatusUpdate['reactionCounts']['smile'] =
              updatedStatusUpdate['reactionCounts']['smile'] +
              reactionDiff['smile'];
            updatedStatusUpdate['reactionCounts']['muscle'] =
              updatedStatusUpdate['reactionCounts']['muscle'] +
              reactionDiff['muscle'];
            updatedStatusUpdate['reactionCounts']['cry'] =
              updatedStatusUpdate['reactionCounts']['cry'] +
              reactionDiff['cry'];
            updatedStatusUpdate['reactionCounts']['thumbsUp'] =
              updatedStatusUpdate['reactionCounts']['thumbsUp'] +
              reactionDiff['thumbsUp'];

            //  update the origional statusUpdate with the new reaction values
            await admin
              .firestore()
              .collection('UserStatusUpdates')
              .doc(statusUID.toString())
              .collection('StatusUpdates')
              .doc(timestamp.toString())
              .set(updatedStatusUpdate)
              .catch(error => {
                console.log(error);
                // An error happened.
              });
          }
        },
      );
    }
  }
});

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
//************************************Cron Jobs**************************************************/
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

exports.syncCommunityUpdates = functions.pubsub
  .topic('syncCommunityUpdates')
  .onPublish(async message => {
    console.log(
      'syncCommunityUpdates PubSub CronJob Called: ',
      JSON.stringify(message),
    );
    // try {
    //   // Get the `name` attribute of the PubSub message JSON body.
    //   let nameJson = null;
    //   nameJson = message.json.name;
    //   // Get the `name` attribute of the message.
    //   const nameAttribute = message.attributes.name;
    // } catch (e) {
    //   functions.logger.error('PubSub message was not JSON', e);
    // }

    //  TODO:  for each user
    await admin
      .firestore()
      .collection('AppSaveState')
      .get()
      .then(snapshot => {
        const promises = snapshot.docs.map(async doc => {
          //  if the user has been active within the last 25 hours, update their community data
          const currentAppSaveState = doc.data();
          const twentyfiveHoursInMilliseconds = 90000000;
          if (
            Date.now() - currentAppSaveState.session['timestamp'] <
            twentyfiveHoursInMilliseconds
          ) {
            //  grab their current public profile
            //  and add it to the collection of UserPublicProfiles
            const tmpResults = await admin
              .firestore()
              .collection('UserPublicProfiles')
              .doc(doc.id.toString())
              .set(currentAppSaveState['userPublicProfile'])
              .catch(error => {
                console.log(error);
                // An error happened.
              });
            //  FIXMETUNA: update their community feed
            const currentUID = currentAppSaveState.session['owner'];
            await admin
              .firestore()
              .collection('UserCommunityFeed')
              .doc(currentUID.toString())
              .collection('Feed')
              .get()
              .then(snapshot => {
                const innerPromises = snapshot.docs.map(async doc => {
                  const feedPostData = doc.data();

                  //  TODO:  for each statusUpdate in the user's community feed, update
                  if (
                    feedPostData['type'] == 'statusUpdate' &&
                    !(feedPostData['content']['publicProfile'] == null) &&
                    !(feedPostData['content']['publicProfile']['uid'] == null)
                  ) {
                    const frid =
                      feedPostData['content']['publicProfile']['uid'];
                    const statusUpdateTS = feedPostData['timestamp'];

                    //  if the statusUpdate is valid, get the newest public version and update
                    if (!(frid == null) && frid != '-1' && frid != -1) {
                      const currentStatusUpdate = await admin
                        .firestore()
                        .collection('UserStatusUpdates')
                        .doc(frid.toString())
                        .collection('StatusUpdates')
                        .doc(statusUpdateTS.toString())
                        .get()
                        .then(snapshot => snapshot.data())
                        .catch(error => {
                          console.log(error);
                          // An error happened.
                        });

                      // console.log(
                      //   'Sync Reaction Found status update: ',
                      //   JSON.stringify(currentStatusUpdate),
                      // );

                      //  update the user's feed status update with the current version
                      await admin
                        .firestore()
                        .collection('UserCommunityFeed')
                        .doc(currentUID.toString())
                        .collection('Feed')
                        .doc(doc.id.toString())
                        .set({
                          timestamp: doc.id.toString(),
                          type: 'statusUpdate',
                          content: currentStatusUpdate,
                        })
                        // .set(currentStatusUpdate)
                        .catch(error => {
                          console.log(error);
                          // An error happened.
                        });
                    }
                  }
                });

                return Promise.all(innerPromises);
              });

            return tmpResults;
          } else {
            return null;
          }
        });

        return Promise.all(promises);
      })
      .then(() => console.log(`All syncCommunityUpdates async tasks complete!`))
      .catch(error => {
        console.log(error);
        // An error happened.
      });
  });
