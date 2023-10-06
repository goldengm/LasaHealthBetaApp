import messaging from '@react-native-firebase/messaging';
import notifee, {
  TimestampTrigger,
  IntervalTrigger,
  TriggerType,
  TimeUnit,
  AndroidNotificationSetting,
} from '@notifee/react-native';
import {View, Alert} from 'react-native';
import cloneDeep from 'lodash/cloneDeep';
import XDate from 'xdate';
import {v4 as uuidv4} from 'uuid';
import {auth, db} from '../shared/firebaseUtils';
import {
  updateChatroomAction,
  deleteChatroomAction,
  setUrgentFriendStatusReceivedAction,
} from '../redux/actions/connectActions';
import {updateNotificationsAction} from '../redux/actions/sessionManagementActions';

import {
  dailyMessages,
  weeklyMessages,
} from '../constants/userEngagement/notificationMessages';

//   FIXMETUNA:  add this to every message to make is a silent notification,
//  how to do a background silent notification
//  "content_available": true,

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const settings = await notifee.requestPermission();

  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    return true;
  } else {
    return false;
  }
}

export async function syncDeviceTokenFCM() {
  // const enabled = await messaging().hasPermission();
  const enabled = await requestUserPermission();
  if (enabled) {
    const uid = auth.currentUser?.uid;

    messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          console.log(
            'PUSH NOTIFICATION SUCCESS: trying to add device token',
            fcmToken,
          );
          console.log(fcmToken);
          db.collection('devicePushTokens')
            .doc(uid)
            .set({
              notification_token: fcmToken,
              created_at: Date.now(),
            })
            .then(res => {
              console.log(res);
            })
            .catch(error => {
              console.log(error);
              console.log('PUSH NOTIFICATION ERROR: Exception thrown 2');
            });
        } else {
          console.log(
            "PUSH NOTIFICATION ERROR: User doesn't have a device token yet",
          );
        }
      })
      .catch(error => {
        console.log(error);
        console.log('PUSH NOTIFICATION ERROR: Exception thrown');
      });
  } else {
    console.log('PUSH NOTIFICATION ERROR: User is not logged in');
  }
}

export async function sendLocalPushNotification(title, body, data, triggerTS) {
  const notificationID = uuidv4();
  try {
    const channelId = await notifee.createChannel({
      id: 'defaultLasaHealth',
      name: 'Default Lasa Health Channel',
    });

    if (triggerTS) {
      const settings = await notifee.getNotificationSettings();
      // console.log('Current notification settings: ', settings);
      if (settings.android.alarm == AndroidNotificationSetting.ENABLED) {
        //Create timestamp trigger
        // console.log('Timestamp trigger allowed for push notifications');

        //  single timestamp trigger
        const trigger = {
          type: TriggerType.TIMESTAMP,
          timestamp: parseInt(triggerTS),
        };

        // //  trigger at a certain inverval
        // const trigger = {
        //   type: TriggerType.INTERVAL,
        //   interval: 15,
        //   timeUnit: TimeUnit.MINUTES,
        // };

        notifee.createTriggerNotification(
          {
            id: notificationID,
            title: title,
            body: body,
            data: data,
            android: {
              channelId,
              // smallIcon: "small-icon",
              smallIcon: 'ic_launcher_foreground_2',
              pressAction: {
                id: 'default',
              },
            },
          },
          trigger,
        );
      } else {
        // Show some user information to educate them on what exact alarm permission is,
        // and why it is necessary for your app functionality, then send them to system preferences:
        console.log(
          'Timestamp trigger does not have permission for push notifications',
        );
        await notifee.openAlarmPermissionSettings();
      }
    } else {
      notifee.displayNotification({
        id: notificationID,
        title: title,
        body: body,
        data: data,
        android: {
          channelId,
          smallIcon: 'ic_launcher_foreground_2',
          pressAction: {
            id: 'default',
          },
        },
      });
    }
  } catch (error) {
    console.log('ERROR sending local push notification');
    console.log(error);
  } finally {
    return notificationID;
  }
}

export function foregroundPushNotificationManager(dispatchPassed) {
  //  FIXMETUNA:  foreground push notification logic here
  //  these will not display in the notifiation panel, I need to handle them directly
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    // Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
    //  FIXMETUNA: I should add this to a notification queue probably? or maybe make it a non-invasive toast?

    console.log('FCM Message handled in the foreground!', remoteMessage);

    const {data} = remoteMessage;

    if (data && data.notificationType == 'urgentMessageFriend') {
      console.log('Urgent status update notification received!');

      const notificationID = await sendLocalPushNotification(
        data.title,
        data.body,
        data,
      );

      dispatchPassed(setUrgentFriendStatusReceivedAction(true));
    } else if (data && data.notificationType == 'notificationTestTMP') {
      console.log('Test notification received!');

      const notificationID = await sendLocalPushNotification(
        data.title,
        data.body,
        data,
      );
    } else if (data && data.notificationType == 'newChatroomMessage') {
      console.log(
        'New Message on Chatroom ' +
          remoteMessage.data.crid +
          ': ' +
          remoteMessage.data.body,
      );

      const notificationID = await sendLocalPushNotification(
        data.title,
        data.body,
        data,
      );

      //  FIXMETUNA: add the chatroom / latest message here

      // useDispatch
      dispatchPassed(
        updateChatroomAction(remoteMessage.data.crid, remoteMessage.data.body),
      );
    }
    // } else {
    //   console.log("Chatroom " + remoteMessage.data.crid + " deleted");

    //   dispatchPassed(deleteChatroomAction(remoteMessage.data.crid));
    // }
  });

  return unsubscribe;
}

export function backgroundPushNotificationManager(remoteMessage) {
  //  FIXMETUNA:  I might need to update the redux db directly outside of the normal app
  //  FIXMETUNA:  //  I think I might not be able to use app libraries/functions here
  //  FIXMETUNA:  //  because it is called outside of the app itself
  console.log('FCM Message handled in the background!', remoteMessage);

  const {data} = remoteMessage;

  if (data && data.notificationType == 'notificationTestTMP') {
    console.log('Background - Test notification received!');

    Promise.resolve()
      .then(() => sendLocalPushNotification(data.title, data.body, data))
      .then(notificationID => {});
  } else if (data && data.notificationType == 'notificationTestTMP') {
    console.log('Background - Test notification received!');

    Promise.resolve()
      .then(() => sendLocalPushNotification(data.title, data.body, data))
      .then(notificationID => {});
  } else if (data && data.notificationType == 'newChatroomMessage') {
    console.log(
      'Background - New Message on Chatroom ' +
        remoteMessage.data.crid +
        ': ' +
        remoteMessage.data.body,
    );

    Promise.resolve()
      .then(() => sendLocalPushNotification(data.title, data.body, data))
      .then(notificationID => {});
  }
}

function getNextMondayTSGivenTS(passedTS) {
  // noon on mondays would be good
  let nextMondayTS = new XDate(passedTS);
  const currentWeekNum = nextMondayTS.getWeek();
  const currentYear = nextMondayTS.getFullYear();

  let nextWeekNum = currentWeekNum + 1;
  let nextWeekYear = currentYear;
  if (nextWeekNum > 53) {
    nextWeekNum = 1;
    nextWeekYear = nextWeekYear + 1;
  }

  //  this method sets the timestamp to monday 0:00 of the chosen week
  nextMondayTS.setWeek(nextWeekNum, nextWeekYear);
  nextMondayTS.setHours(12);

  return nextMondayTS.getTime();
}

function getDayAfterTSGivenTS(passedTS) {
  // towards the end of the day (6pm)
  let dayAfterTS = new XDate(passedTS);
  dayAfterTS.addDays(1);
  dayAfterTS.setHours(18);
  return dayAfterTS.getTime();
}

function tsDateNotInTSList(passedTS, listTS) {
  const passedTSObj = new XDate(passedTS);
  const passedTSStr = passedTSObj.toString('MM/dd/yyyy');
  for (let i = 0; i < listTS.length; i++) {
    const nextTSStr = new XDate(listTS[i]);
    if (passedTSStr == nextTSStr.toString('MM/dd/yyyy')) {
      return false;
    }
  }
  return true;
}

export function getWeeklyPNMessage() {
  const numMessages = Object.keys(weeklyMessages).length;
  const randVal = Math.floor(Math.random() * numMessages);
  const pnTitle = weeklyMessages[randVal].title;
  const pnBody = weeklyMessages[randVal].body;
  return [pnTitle, pnBody];
}

export function getDailyPNMessage() {
  const numMessages = Object.keys(dailyMessages).length;
  const randVal = Math.floor(Math.random() * numMessages);
  const pnTitle = dailyMessages[randVal].title;
  const pnBody = dailyMessages[randVal].body;

  return [pnTitle, pnBody];
}

export async function refreshPushNotifications(dispatch, notifications) {
  let updatedDailyPNs = {};
  let updatedWeeklyPNs = {};

  // this.setAmieModalVisible(!this.state.amieModalVisible);
  console.log('Refreshing push notifications');

  const currentXDate = new XDate();
  const currentTS = currentXDate.getTime();
  const currentDateStr = currentXDate.toString('MM/dd/yyyy');

  let largestDailyTS = currentTS;
  let largestWeeklyTS = currentTS;

  //  FIXMETUNA:  also need to also delete all PNs for today
  //              delete all old PNs just in case
  Object.entries(notifications['daily']).forEach((entry, index) => {
    const notificationID = entry[1];
    //  FIXMETUNA:  I'm deleting all notifications each time temporarily as a bugfix
    // const entryTS = entry[0];
    // const entryDateStr = new XDate(entry[0]).toString('MM/dd/yyyy');
    // // console.log('REFRESH DAILY: ', entry);
    // if (entryTS > currentTS && !(entryDateStr == currentDateStr)) {
    //   updatedDailyPNs[entryTS] = notificationID;
    //   if (entryTS > largestDailyTS) {
    //     largestDailyTS = entryTS;
    //   }
    // } else {
    if (
      !(notificationID == null) &&
      !(notificationID == '') &&
      !(notificationID == 'NaN') &&
      !(notificationID == 'null') &&
      !(notificationID == 'Null' && !(notificationID == 'NULL'))
    ) {
      notifee.cancelNotification(notificationID);
    }
    // }
  });
  Object.entries(notifications['weekly']).forEach((entry, index) => {
    const notificationID = entry[1];
    //  FIXMETUNA:  I'm deleting all notifications each time temporarily as a bugfix
    // const entryTS = entry[0];
    // const entryDateStr = new XDate(entry[0]).toString('MM/dd/yyyy');
    // // console.log('REFRESH WEEKLY: ', entry);
    // if (entryTS > currentTS && !(entryDateStr == currentDateStr)) {
    //   updatedWeeklyPNs[entryTS] = notificationID;
    //   if (entryTS > largestWeeklyTS) {
    //     largestWeeklyTS = entryTS;
    //   }
    // } else {
    if (
      !(notificationID == null) &&
      !(notificationID == '') &&
      !(notificationID == 'NaN') &&
      !(notificationID == 'null') &&
      !(notificationID == 'Null' && !(notificationID == 'NULL'))
    ) {
      notifee.cancelNotification(notificationID);
    }
    // }
  });

  //  FIXMETUNA:  update the weekly PNs, fill back to 3
  while (Object.keys(updatedWeeklyPNs).length < 3) {
    //  send weekly notifications on Monday afternoons
    const nextMondayTS = getNextMondayTSGivenTS(largestWeeklyTS);
    const [pnTitle, pnBody] = getWeeklyPNMessage();

    const newNotificationID = await sendLocalPushNotification(
      pnTitle,
      pnBody,
      {},
      nextMondayTS,
    );

    updatedWeeklyPNs[nextMondayTS] = newNotificationID;
    largestWeeklyTS = nextMondayTS;
  }

  //  FIXMETUNA:  update the daily PNs, fill back to 3
  //  do not add PNs the same day as weeklies, set notificationID to null if so and skip
  while (Object.keys(updatedDailyPNs).length < 3) {
    //  send daily notifications at 6pm
    const nextDayTS = getDayAfterTSGivenTS(largestDailyTS);
    //  set TS entries with the same date as an existing weekly PN to null and continue
    if (tsDateNotInTSList(nextDayTS, Object.keys(updatedWeeklyPNs))) {
      const [pnTitle, pnBody] = getDailyPNMessage();

      const newNotificationID = await sendLocalPushNotification(
        pnTitle,
        pnBody,
        {},
        nextDayTS,
      );

      updatedDailyPNs[nextDayTS] = newNotificationID;
    } else {
      updatedDailyPNs[nextDayTS] = null;
    }
    largestDailyTS = nextDayTS;
  }

  //  FIXMETUNA:
  // // requestServerPushNotificationTestTMP(true);
  // sendLocalPushNotification(
  //   'Local Push Title',
  //   'Local push body',
  //   {},
  //   Date.now() + 60000,
  // );
  //  add the new notification ID and TS to the list

  return dispatch(updateNotificationsAction(updatedDailyPNs, updatedWeeklyPNs));
}

export async function removeAllPushNotifications() {
  console.log('REMOVING ALL PUSH NOTIFICATIONS');
  return notifee.cancelAllNotifications();
}
