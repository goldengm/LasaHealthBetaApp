import 'react-native-gesture-handler';
import {registerRootComponent} from 'expo';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {AppRegistry, Text, TextInput} from 'react-native';
import messaging from '@react-native-firebase/messaging';
// Add this line to your `index.js`
import 'react-native-get-random-values';
import {backgroundPushNotificationManager} from './shared/NotificationManager';
import {DEBUG_TESTING} from './constants/AppVersion';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
Text.defaultProps.maxFontSizeMultipler = 1;
TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.maxFontSizeMultipler = 1;

// import PushNotification from "react-native-push-notification";
import App from './App';

if (!DEBUG_TESTING) {
  console.log = () => {};
}

// FIXMETUNA: BACKGROUND PUSH NOTIFICATIONS, THIS ALSO HANDLES QUIT NOTIFICATIONS
// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('FCM BACKGROUND BEFORE');
  backgroundPushNotificationManager(remoteMessage);
});

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// function HeadlessCheck({ isHeadless }) {
//   if (isHeadless) {
//     // App has been launched in the background by iOS, ignore
//     return null;
//   }

//   return <App />;
// }

// AppRegistry.registerComponent("main", () => HeadlessCheck);

// // Must be outside of any component LifeCycle (such as `componentDidMount`).
// PushNotification.configure({
//   // (optional) Called when Token is generated (iOS and Android)
//   onRegister: function (token) {
//     console.log("TOKEN:", token);
//   },

//   // (required) Called when a remote is received or opened, or local notification is opened
//   onNotification: function (notification) {
//     console.log("NOTIFICATION:", notification);

//     // process the notification
//     // (required) Called when a remote is received or opened, or local notification is opened
//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },

//   // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//   onAction: function (notification) {
//     console.log("ACTION:", notification.action);
//     console.log("NOTIFICATION:", notification);
//     // process the action
//   },

//   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//   onRegistrationError: function (err) {
//     console.error(err.message, err);
//   },

//   // Android only
//   // senderID — is the cloud messaging sender ID from Firebase console
//   senderID: "1090501687137", //  FIXMETUNA:  what is this hardcoded value from tutorial
//   // IOS ONLY (optional): default: all - Permissions to register.
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },

//   // Should the initial notification be popped automatically
//   // default: true

//   popInitialNotification: true,

//   /**
//    * (optional) default: true
//    * - Specified if permissions (ios) and token (android and ios) will requested or not,
//    * - if not, you must call PushNotificationsHandler.requestPermissions() later
//    * - if you are not using remote notification or do not have Firebase installed, use this:
//    *     requestPermissions: getOS() === 'ios'
//    */

//   requestPermissions: true,
// });
