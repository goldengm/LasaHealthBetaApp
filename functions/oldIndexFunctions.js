// //  Listen for all changes to chatrooms
// exports.chatroomUpdate = functions.firestore
//   .document("Chatrooms/{CRID}")
//   .onWrite(async (change, context) => {
//     // Get an object with the current document value.
//     // If the document does not exist, it has been deleted.
//     const document = change.after.exists
//       ? change.after.data()
//       : change.before.data();

//     functions.logger.log("Updated Chatroom DOCUMENT TYPE: ", typeof document);
//     functions.logger.log("DOCUMENT CONTENTS: ", document); //  it's literally a json object
//     functions.logger.log("CONTEXT CONTENTS: ", context); //  it's literally a json object
//     //  FIXMETUNA:  so perform json object ordering etc below

//     //  if the document was deleted, set latest message to null, everything else is the same
//     const participants = document["participants"];
//     functions.logger.log("DOCUMENT 1 ");

//     // const CRID = document.id;
//     const CRID = context.params["CRID"];
//     if (CRID == "999999999") {
//       //  skip superchat
//       return true;
//     }
//     // let lastTS = -1;
//     let latestMessage = "";
//     // for (const [, val] of Object.entries(document["messages"])) {
//     //   if (val.createdAt > lastTS) {
//     //     lastTS = val.createdAt;
//     //     latestMessage = val.text;
//     //   }
//     // }

//     // functions.logger.log("Last Message and Timestamp: ", latestMessage, lastTS); //  it's literally a json object

//     latestMessage = change.after.exists ? latestMessage : null;
//     // const latestMessage = change.after.exists
//     //   ? await document["messages"]
//     //       .orderBy("createdAt", "asc")
//     //       .limit(1)
//     //       .get()
//     //       .then((snapshot) => snapshot.data())
//     //   : null;
//     // const latestMessage = "TMP last message";

//     functions.logger.log("DOCUMENT 2.1");
//     functions.logger.log("DOCUMENT 2.2");

//     participants.forEach(async (UID, index) => {
//       if (!(UID == "")) {
//         //  FIXMETUNA:  send out a push notification with
//         //  push_notification(CRID, latestMessage);
//         //  for each user

//         //   const FCMToken = admin
//         //     .firestore()
//         //     .ref(`/devicePushTokens/${UID}`)
//         //     .once("notification_token");

//         functions.logger.log("DOCUMENT 3 " + index);

//         const FCMToken = await admin
//           .firestore()
//           .collection("devicePushTokens")
//           .doc(`${UID}`)
//           .get()
//           .then((snapshot) => snapshot.data()["notification_token"])
//           .catch((error) => {
//             console.log(error);
//             // An error happened.
//           });
//         // .collection("notification_token")

//         if (!(FCMToken == null) && !(FCMToken == "")) {
//           functions.logger.log("DOCUMENT 4.1 ", index, FCMToken);
//           functions.logger.log("DOCUMENT 4.2 ", index, UID);

//           const payload = {
//             token: FCMToken,
//             data: { crid: String(CRID), message: String(latestMessage) },

//             // Required for background/quit data-only messages on iOS
//             // contentAvailable: true,
//             // content_available: true,
//             // Required for background/quit data-only messages on Android
//             apns: {
//               headers: {
//                 "apns-priority": "5",
//               },
//               payload: {
//                 aps: {
//                   contentAvailable: true,
//                 },
//                 // my_custom_parameter: true,
//                 content_available: true,
//                 priority: "high",
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

//           functions.logger.log("DOCUMENT 5 " + index);

//           functions.logger.log("FCM Message payload: ", payload);

//           admin
//             .messaging()
//             .send(payload)
//             .then((response) => {
//               // Response is a message ID string.
//               functions.logger.log("Successfully sent message:", response);

//               return { success: true };
//             })
//             .catch((error) => {
//               functions.logger.log(
//                 "FCM Message Delivery ERROR: ",
//                 error,
//                 error.code
//               );

//               return { error: error.code };
//             });
//           functions.logger.log("DOCUMENT 6 " + index);
//         }
//       }
//     });
//   });

// exports.connectGetNewAmie = functions.https.onCall(async (data, context) => {
//   // Only allow admin users to execute this function.
//   //   && context.auth.token.admin
//   if (!(context.auth && context.auth.token)) {
//     throw new functions.https.HttpsError(
//       "permission-denied",
//       "Must be an authorized to find new amie."
//     );
//   }

//   // const path = "/Chatrooms/" + data.crid;
//   // console.log(
//   //   `User ${context.auth.uid} has requested to delete path ${path}`
//   // );

//   return {
//     amieUID: "gxzuEQfNTBSFLCrPQ0TMihjO0XU2",
//   };
// });

// //  FIXMETUNA:  get all public user profiles for users in chosen chat group
// //  only triggers if the user is auth'd and the user is a member of the requested chat group
// exports.sendPushNotificationTestTMP = functions.https.onCall(
//   async (data, context) => {
//     // Only allow admin users to execute this function.
//     //   && context.auth.token.admin

//     const sleep = function (ms) {
//       return new Promise(resolve => setTimeout(resolve, ms));
//     };

//     if (!(context.auth && context.auth.token)) {
//       throw new functions.https.HttpsError(
//         'permission-denied',
//         'Must be an authorized to test remote push notifications.',
//       );
//     } else {
//       const UID = data.uid;
//       const delayEnabled = data.delayEnabled;
//       const delayMS = delayEnabled ? 60000 : 0;

//       if (!(UID == null) && !(UID == '')) {
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
//           functions.logger.log('DOCUMENT 4.1 ', FCMToken);
//           functions.logger.log('DOCUMENT 4.2 ', UID);

//           let testMessage = 'Hello, this is a test message sent remotely';
//           if (delayEnabled) {
//             testMessage = testMessage + ' with a 1 minute delay.';
//           }
//           functions.logger.log('DOCUMENT 5 ', testMessage);

//           const payload = {
//             token: FCMToken,
//             data: {
//               uid: String(UID),
//               title: 'Test Title',
//               body: String(testMessage),
//               notificationType: 'notificationTestTMP',
//             },
//             // notification: { title: "Test Title", body: String(testMessage) },
//             // Required for background/quit data-only messages on iOS
//             // contentAvailable: true,
//             // content_available: true,
//             // Required for background/quit data-only messages on Android
//             apns: {
//               headers: {
//                 'apns-priority': '5',
//                 'apns-push-type': 'background',
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

//           functions.logger.log('FCM Message payload: ', payload);
//           functions.logger.log('FCM Message payload 2: ', payload.data.body);
//           functions.logger.log(
//             'FCM Message payload 3: ',
//             payload.apns.headers['apns-priority'],
//           );

//           Promise.resolve()
//             .then(() => sleep(delayMS))
//             .then(() => {
//               admin
//                 .messaging()
//                 .send(payload)
//                 .then(response => {
//                   // Response is a message ID string.
//                   functions.logger.log(
//                     'Successfully sent message:',
//                     response,
//                     ' Payload: ',
//                     payload,
//                   );

//                   return {success: true};
//                 })
//                 .catch(error => {
//                   functions.logger.log(
//                     'FCM Message Delivery ERROR: ',
//                     error,
//                     error.code,
//                   );

//                   return {error: error.code};
//                 });
//             });
//         }
//       }
//     }
//   },
// );

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.listProducts = functions.https.onCall((data, context) => {
//   return [];
// });

//   //  calling the function:
//   import { firebase } from '@react-native-firebase/functions';

// // ...

// // note the name of our deployed function, 'listProducts', is referenced here:
// const { data } = await firebase.functions().httpsCallable('listProducts')({
//   page: 1,
//   limit: 15,
// });

// // ...

// //  FIXMETUNA:  get all public user profiles for users in chosen chat group
// //  only triggers if the user is auth'd and the user is a member of the requested chat group
// exports.transferAppSaveStateToNewUIDTMP = functions.https.onCall(
//   async (data, context) => {
//     // Only allow admin users to execute this function.
//     //   && context.auth.token.admin

//     functions.logger.log('TRANSFER APP SAVESTATE TO UID Called: ', data);

//     // if (!(context.auth && context.auth.token)) {
//     //   throw new functions.https.HttpsError(
//     //     "permission-denied",
//     //     "Must be auth'd to test app save state update."
//     //   );
//     // } else {
//     const UID = await data.olduid;
//     const NewUID = await data.newuid;
//     if (
//       !(UID == null) &&
//       !(UID == '') &&
//       !(NewUID == null) &&
//       !(NewUID == '')
//     ) {
//       admin
//         .firestore()
//         .collection('AppSaveState')
//         .doc(`${UID}`)
//         .get()
//         .then(snapshot => {
//           admin
//             .firestore()
//             .collection('AppSaveState')
//             .doc(`${NewUID}`)
//             .set(snapshot.data());

//           // snapshot.data()["notification_token"]
//         })
//         .catch(error => {
//           functions.logger.log(error);
//           // An error happened.
//         });
//     } else {
//       functions.logger.log('Transfer failed, ', UID, NewUID);
//     }
//   },
//   // }
// );
