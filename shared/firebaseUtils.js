import React from 'react';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import * as firebase from "firebase";
// import "firebase/firebase-auth";
// import "firebase/firestore";
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
// import { getAuth } from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/functions'; // just firebase/functions in <v8
// import * as compat from "@firebase/auth-types";
import functions from '@react-native-firebase/functions';

import * as Keychain from 'react-native-keychain';
// import { NativeModules } from "react-native";
// import Aes from "react-native-aes-crypto";
// import { AES } from "crypto-js";
import CryptoJS from 'crypto-js';
// import XDate from 'xdate';
// import { SHA256 } from "crypto-js/sha256";
// import * as sha256 from "crypto-js/sha256";
// import bcrypt from "bcrypt";

import cloneDeep from 'lodash/cloneDeep';
import DeviceInfo from 'react-native-device-info';
import {
  syncToServerSaveStateAction,
  updateLastServerSyncTimestampAction,
  updateDeviceMetadataAction,
} from '../redux/actions/sessionManagementActions';
import {DB_VERSION, APP_VERSION} from '../constants/AppVersion';
import SymptomsDir from '../constants/track/symptomsDir';

import secretKeys from '../firebase.secretkeys.json';
const firebaseConfig = {
  apiKey: secretKeys.apiKey,
  authDomain: secretKeys.authDomain,
  projectId: secretKeys.projectId,
  storageBucket: secretKeys.storageBucket,
  messagingSenderId: secretKeys.messagingSenderId,
  appId: secretKeys.appId,
  measurementId: secretKeys.measurementId,
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

//  FIXMETUNA:  adding to fix could not connect to firestore connection issue, remove if not fixed
// app.firestore().settings({experimentalForceLongPolling: true, merge: true}); // add this
app.firestore().settings({merge: true}); // add this

// const analytics = getAnalytics(app);
const db = app.firestore();
const auth = firebase.auth();
// const auth = getAuth(app);
// const functions = app.functions();
// const functions = functions();

const firebaseLocalPersistance = firebase.auth.Auth.Persistence.LOCAL;
const firebaseSessionPersistance = firebase.auth.Auth.Persistence.SESSION;

// // const analytics = getAnalytics(app);
// const db = {};
// const auth = {};
// // const auth = getAuth(app);
// const functions = {};

// const db = {};
// const auth = new (class {
//   constructor() {
//     this.currentUser = null;
//   }
//   signOut() {
//     // return 'yaong';
//     return true;
//   }
//   onAuthStateChanged() {
//     // return 'yaong';
//     return true;
//   }
//   signInWithEmailAndPassword() {
//     // return 'yaong';
//     return true;
//   }
// })();
// const functions = {};
// const firebaseLocalPersistance = 'LOCAL';
// const firebaseSessionPersistance = 'SESSION';

export {
  db,
  auth,
  functions,
  firebaseLocalPersistance,
  firebaseSessionPersistance,
};

syncDeviceMetadataAction = async dispatch => {
  const deviceMetadata = {};

  // deviceMetadata['AndroidId'] = await DeviceInfo.getAndroidId();
  deviceMetadata['ApiLevel'] = await DeviceInfo.getApiLevel();
  deviceMetadata['ApplicationName'] = await DeviceInfo.getApplicationName();
  deviceMetadata['BaseOs'] = await DeviceInfo.getBaseOs();
  deviceMetadata['PowerState'] = await DeviceInfo.getPowerState();
  deviceMetadata['Bootloader'] = await DeviceInfo.getBootloader();
  deviceMetadata['Brand'] = await DeviceInfo.getBrand();
  deviceMetadata['BuildNumber'] = await DeviceInfo.getBuildNumber();
  deviceMetadata['BuildId'] = await DeviceInfo.getBuildId();
  deviceMetadata['Carrier'] = await DeviceInfo.getCarrier();
  deviceMetadata['Codename'] = await DeviceInfo.getCodename();
  deviceMetadata['Device'] = await DeviceInfo.getDevice();
  deviceMetadata['DeviceId'] = await DeviceInfo.getDeviceId();
  deviceMetadata['Display'] = await DeviceInfo.getDisplay();
  deviceMetadata['DeviceName'] = await DeviceInfo.getDeviceName();
  deviceMetadata['FirstInstallTime'] = await DeviceInfo.getFirstInstallTime();
  deviceMetadata['FontScale'] = await DeviceInfo.getFontScale();
  deviceMetadata['FreeDiskStorage'] = await DeviceInfo.getFreeDiskStorage();
  deviceMetadata['Host'] = await DeviceInfo.getHost();
  // deviceMetadata['getInstanceId'] = await DeviceInfo.getInstanceId();
  deviceMetadata['LastUpdateTime'] = await DeviceInfo.getLastUpdateTime();
  deviceMetadata['Manufacturer'] = await DeviceInfo.getManufacturer();
  deviceMetadata['MaxMemory'] = await DeviceInfo.getMaxMemory();
  deviceMetadata['SystemVersion'] = await DeviceInfo.getSystemVersion();
  deviceMetadata['UserAgent'] = await DeviceInfo.getUserAgent();
  deviceMetadata['IsEmulator'] = await DeviceInfo.isEmulator();
  deviceMetadata['DeviceType'] = await DeviceInfo.getDeviceType();

  return dispatch(updateDeviceMetadataAction(deviceMetadata));
};

replaceUndefined = obj => {
  let objStr = JSON.stringify(obj);
  objStr = objStr.replaceAll('null', '""');
  const reparsedObj = JSON.parse(objStr);

  // console.log('OBJECT null replaced********: ', JSON.stringify(reparsedObj));
  // objStr = objStr.replaceAll('null', '');
  // return JSON.parse(objStr);
  return reparsedObj;
};

// replaceUndefined = obj => {
//   if (obj == null) {
//     return ''; //  will catch null and undefined
//   } else if (obj instanceof Array) {
//     let updatedArray = [];
//     // iterating over the object using for..in
//     for (let i = 0; i < obj.length; i++) {
//       if (obj[i] == null) {
//         updatedArray.push('');
//       } else if (typeof obj[i] === 'object') {
//         //checking if the current value is an object itself
//         // if so then again calling the same function
//         updatedArray.push(replaceUndefined(obj[i]));
//       } else {
//         updatedArray.push(obj[i]);
//       }
//     }
//     return updatedArray;
//   } else if (typeof obj === 'object') {
//     let updatedObj = {};
//     // iterating over the object using for..in
//     for (var keys in obj) {
//       //  only add values with valid keys, empty keys are not allowed
//       if (!(keys == null) && !(keys == '')) {
//         if (obj[keys] == null) {
//           updatedObj[keys] = '';
//         } else if (typeof obj[keys] === 'object') {
//           //checking if the current value is an object itself
//           // if so then again calling the same function
//           updatedObj[keys] = replaceUndefined(obj[keys]);
//         } else {
//           updatedObj[keys] = obj[keys];
//         }
//       }
//     }
//     return updatedObj;
//   } else {
//     return obj;
//   }
// };

export function replaceAllUndefined(convertedSaveState) {
  // console.log(
  //   'Replacing null and undefined for server: ',
  //   JSON.stringify(convertedSaveState),
  // );
  const nextState = replaceUndefined(convertedSaveState);
  // console.log('Null replaced: ', JSON.stringify(nextState));
  return nextState;
}

//  FIXMETUNA:  need to make this more universal
export function convertLocalReduxForServerState(localAppSaveState) {
  // console.log('LOCAL SAVE STATE: ', localAppSaveState.garden);
  let convertedSaveState = cloneDeep(localAppSaveState);
  convertedSaveState = replaceAllUndefined(convertedSaveState);

  for (
    let i = 0;
    i < convertedSaveState.garden.gardenState.gardenPlots.length;
    i++
  ) {
    let updatedRow = {};
    for (
      let j = 0;
      j < convertedSaveState.garden.gardenState.gardenPlots[i].length;
      j++
    ) {
      if (convertedSaveState.garden.gardenState.gardenPlots[i][j] == null) {
        updatedRow[j] = '';
      } else {
        updatedRow[j] = convertedSaveState.garden.gardenState.gardenPlots[i][j];
      }
    }
    convertedSaveState.garden.gardenState.gardenPlots[i] =
      cloneDeep(updatedRow);
  }

  for (
    let i = 0;
    i < convertedSaveState.garden.gardenState.weedPlots.length;
    i++
  ) {
    let updatedRow = {};
    for (
      let j = 0;
      j < convertedSaveState.garden.gardenState.weedPlots[i].length;
      j++
    ) {
      if (convertedSaveState.garden.gardenState.weedPlots[i][j] == null) {
        updatedRow[j] = '';
      } else {
        updatedRow[j] = convertedSaveState.garden.gardenState.weedPlots[i][j];
      }
    }
    convertedSaveState.garden.gardenState.weedPlots[i] = cloneDeep(updatedRow);
  }

  return convertedSaveState;
}

//  need to add logic for updating old db versions here, it will all happen locally
function compareDBVersions(db1Version, db2Version) {
  const db1VersionParts = db1Version.split('.');
  const db2VersionParts = db2Version.split('.');
  if (parseInt(db1VersionParts[0]) < parseInt(db2VersionParts[0])) {
    return -1;
  } else if (parseInt(db1VersionParts[0]) > parseInt(db2VersionParts[0])) {
    return 1;
  } else {
    //  the versions are equal
    if (parseInt(db1VersionParts[1]) < parseInt(db2VersionParts[1])) {
      return -1;
    } else if (parseInt(db1VersionParts[1]) > parseInt(db2VersionParts[1])) {
      return 1;
    } else {
      //  the versions are equal
      if (parseInt(db1VersionParts[2]) < parseInt(db2VersionParts[2])) {
        return -1;
      } else if (parseInt(db1VersionParts[2]) > parseInt(db2VersionParts[2])) {
        return 1;
      } else {
        //  the versions are equal
        return 0;
      }
    }
  }
}

function isDbUpdateNeeded(proposedDBVersion, currentDBVersion) {
  if (currentDBVersion == null) {
    return true;
  } else {
    return compareDBVersions(proposedDBVersion, currentDBVersion) > 0;
  }
}

function dbUpgradeVersion000to050(serverAppSaveState) {
  if (isDbUpdateNeeded('0.5.2', serverAppSaveState.session.dbVersion)) {
    console.log('Updating db version 0.0.0 to 0.5.2');
    let convertedSaveState = cloneDeep(serverAppSaveState);
    convertedSaveState.session['dbVersion'] = '0.5.2';
    // convertedSaveState.session["lastServerSyncTimestamp"] = -1;

    let customSymptomsLen = Object.keys(
      convertedSaveState.trackCustomSymptoms.customSymptoms,
    ).length;
    convertedSaveState.trackCustomSymptoms.customSymptoms[customSymptomsLen] =
      SymptomsDir['101'];
    convertedSaveState.trackCustomSymptoms.customSymptoms[
      customSymptomsLen + 1
    ] = SymptomsDir['102'];
    convertedSaveState.trackCustomSymptoms.customSymptoms[100] =
      SymptomsDir['100'];

    return convertedSaveState;
  } else {
    return serverAppSaveState;
  }
}

function dbUpgradeVersion050to056(serverAppSaveState) {
  if (isDbUpdateNeeded('0.5.6', serverAppSaveState.session.dbVersion)) {
    console.log('Updating db version 0.5.2 to 0.5.6');
    let convertedSaveState = cloneDeep(serverAppSaveState);
    convertedSaveState.session['dbVersion'] = '0.5.6';
    // convertedSaveState.session["lastServerSyncTimestamp"] = -1;

    convertedSaveState.userProfile['activeTodo'] = {
      0: 0,
      1: 1,
      2: 2,
    };
    convertedSaveState.userProfile['allTodo'] = {
      //  status: 0=incomplete, 1=in progress, 2=complete
      0: {
        status: 0,
        name: 'Complete your health profile',
        navigationParams: {
          name: 'Login',
          params: {
            screen: 'ProfileSetup',
          },
        },
      },
      1: {
        status: 0,
        name: 'Chronic Conditions Registered',
        navigationParams: {
          name: 'Login',
          params: {
            screen: 'ProfileSetup',
          },
        },
      },
      2: {
        status: 0,
        name: 'Log your first day of symptoms',
        navigationParams: {
          name: 'Track',
          params: {
            screen: 'TrackSymptoms',
          },
        },
      },
      3: {
        status: 0,
        name: 'Send a message in community chat',
        navigationParams: {
          name: 'Learn',
          params: {},
        },
      },
      4: {
        status: 0,
        name: 'Log symptoms for seven days',
        navigationParams: {
          name: 'Track',
          params: {
            screen: 'TrackSymptoms',
          },
        },
      },
      5: {
        status: 0,
        name: 'Plant a flower in your garden',
        navigationParams: {
          name: 'Garden',
          params: {},
        },
      },
    };

    //  update course goal tracking redux
    convertedSaveState.learn.endo101Course.week2['module6Q5Confidence1'] = '';
    convertedSaveState.learn.endo101Course.week2['module6Q5Confidence2'] = '';
    convertedSaveState.learn.endo101Course.week2['module6Q5Confidence3'] = '';
    convertedSaveState.learn.endo101Course.week2['module6Q6Progress1'] = '';
    convertedSaveState.learn.endo101Course.week2['module6Q6Progress2'] = '';
    convertedSaveState.learn.endo101Course.week2['module6Q6Progress3'] = '';
    convertedSaveState.learn.endo101Course.week2['module6Q7Rating'] = '';

    convertedSaveState.learn.endo101Course.week3['module7Q5Confidence1'] = '';
    convertedSaveState.learn.endo101Course.week3['module7Q5Confidence2'] = '';
    convertedSaveState.learn.endo101Course.week3['module7Q5Confidence3'] = '';
    convertedSaveState.learn.endo101Course.week3['module7Q6Progress1'] = '';
    convertedSaveState.learn.endo101Course.week3['module7Q6Progress2'] = '';
    convertedSaveState.learn.endo101Course.week3['module7Q6Progress3'] = '';
    convertedSaveState.learn.endo101Course.week3['module7Q7Rating'] = '';

    convertedSaveState.learn.endo101Course.week4['module9Q4Confidence1'] = '';
    convertedSaveState.learn.endo101Course.week4['module9Q4Confidence2'] = '';
    convertedSaveState.learn.endo101Course.week4['module9Q4Confidence3'] = '';
    convertedSaveState.learn.endo101Course.week4['module9Q5Progress1'] = '';
    convertedSaveState.learn.endo101Course.week4['module9Q5Progress2'] = '';
    convertedSaveState.learn.endo101Course.week4['module9Q5Progress3'] = '';
    convertedSaveState.learn.endo101Course.week4['module9Q6Rating'] = '';

    return convertedSaveState;
  } else {
    return serverAppSaveState;
  }
}

function dbUpgradeVersion056to058(serverAppSaveState) {
  if (isDbUpdateNeeded('0.5.8', serverAppSaveState.session.dbVersion)) {
    console.log('Updating db version 0.5.6 to 0.5.8');
    let convertedSaveState = cloneDeep(serverAppSaveState);
    convertedSaveState.session['dbVersion'] = '0.5.8';
    // convertedSaveState.session["lastServerSyncTimestamp"] = -1;

    convertedSaveState.userProfile['appIntroTutorialComplete'] = false;

    convertedSaveState.learn.endo101Course.week5['weekProgress'] = 0;
    convertedSaveState.learn.endo101Course.week5['numModules'] = 7;
    convertedSaveState.learn.endo101Course.week5['module1Q1EndoSugery'] = '';
    convertedSaveState.learn.endo101Course.week5['module1Q2Excision'] = '';
    convertedSaveState.learn.endo101Course.week5['module1Q3LaproBenefits'] = '';
    convertedSaveState.learn.endo101Course.week5['module1Q4SurgeonCred'] = '';
    convertedSaveState.learn.endo101Course.week5['module2Q1HadLapro'] = '';
    convertedSaveState.learn.endo101Course.week5['module7Q1EndoSugery'] = '';
    convertedSaveState.learn.endo101Course.week5['module7Q2Excision'] = '';
    convertedSaveState.learn.endo101Course.week5['module7Q3LaproBenefits'] = '';
    convertedSaveState.learn.endo101Course.week5['module7Q4SurgeonCred'] = '';
    convertedSaveState.learn.endo101Course.week5['module7Q5Confidence1'] = '';
    convertedSaveState.learn.endo101Course.week5['module7Q6Confidence2'] = '';
    convertedSaveState.learn.endo101Course.week5['module7Q7Confidence3'] = '';
    convertedSaveState.learn.endo101Course.week5['module7Q8Progress1'] = '';
    convertedSaveState.learn.endo101Course.week5['module7Q9Progress2'] = '';
    convertedSaveState.learn.endo101Course.week5['module7Q10Progress3'] = '';
    convertedSaveState.learn.endo101Course.week5['module7Q11Rating'] = '';

    return convertedSaveState;
  } else {
    return serverAppSaveState;
  }
}

function dbUpgradeVersion058to059(serverAppSaveState) {
  if (isDbUpdateNeeded('0.5.9', serverAppSaveState.session.dbVersion)) {
    console.log('Updating db version 0.5.8 to 0.5.9');
    let convertedSaveState = cloneDeep(serverAppSaveState);
    convertedSaveState.session['dbVersion'] = '0.5.9';
    // convertedSaveState.session["lastServerSyncTimestamp"] = -1;

    //  Endo101 Week 6
    convertedSaveState.learn.endo101Course.week6['weekProgress'] = 0;
    convertedSaveState.learn.endo101Course.week6['numModules'] = 7;

    //  Endo101 Week 7
    convertedSaveState.learn.endo101Course.week7['weekProgress'] = 0;
    convertedSaveState.learn.endo101Course.week7['numModules'] = 7;

    convertedSaveState.learn.endo101Course.week7['module1Q1PFHelp'] = '';
    convertedSaveState.learn.endo101Course.week7['module1Q2CureEndo'] = '';
    convertedSaveState.learn.endo101Course.week7['module1Q3ExBene'] = '';
    convertedSaveState.learn.endo101Course.week7['module1Q4TensPain'] = '';

    convertedSaveState.learn.endo101Course.week7['module3Q1BeenPFTherap'] = '';
    convertedSaveState.learn.endo101Course.week7['module3Q2HowEffectivePF'] =
      '';
    convertedSaveState.learn.endo101Course.week7['module3Q3ExpPF'] = '';
    convertedSaveState.learn.endo101Course.week7['module3Q4PFScreen'] = '';

    convertedSaveState.learn.endo101Course.week7['module4Q1ToolsUsed'] = '';
    convertedSaveState.learn.endo101Course.week7['module4Q2ToolsEffective'] =
      '';
    convertedSaveState.learn.endo101Course.week7['module4Q3ExpTools'] = '';

    convertedSaveState.learn.endo101Course.week7['module7Q1PFHelp'] = '';
    convertedSaveState.learn.endo101Course.week7['module7Q2CureEndo'] = '';
    convertedSaveState.learn.endo101Course.week7['module7Q3ExBene'] = '';
    convertedSaveState.learn.endo101Course.week7['module7Q4TensPain'] = '';
    convertedSaveState.learn.endo101Course.week7['module7Q5Confidence1'] = '';
    convertedSaveState.learn.endo101Course.week7['module7Q6Confidence2'] = '';
    convertedSaveState.learn.endo101Course.week7['module7Q7Confidence3'] = '';
    convertedSaveState.learn.endo101Course.week7['module7Q8Progress1'] = '';
    convertedSaveState.learn.endo101Course.week7['module7Q9Progress2'] = '';
    convertedSaveState.learn.endo101Course.week7['module7Q10Progress3'] = '';
    convertedSaveState.learn.endo101Course.week7['module7Q11Rating'] = '';

    //  Endo101 Week 8
    convertedSaveState.learn.endo101Course.week8['weekProgress'] = 0;
    convertedSaveState.learn.endo101Course.week8['numModules'] = 7;

    //  Endo101 Week 9
    convertedSaveState.learn.endo101Course.week9['weekProgress'] = 0;
    convertedSaveState.learn.endo101Course.week9['numModules'] = 6;

    //  Endo101 Week 10
    convertedSaveState.learn.endo101Course.week10['weekProgress'] = 0;
    convertedSaveState.learn.endo101Course.week10['numModules'] = 7;

    //  Endo101 Week 11
    convertedSaveState.learn.endo101Course.week11['weekProgress'] = 0;
    convertedSaveState.learn.endo101Course.week11['numModules'] = 7;

    //  Endo101 Week 12
    convertedSaveState.learn.endo101Course.week12['weekProgress'] = 0;
    convertedSaveState.learn.endo101Course.week12['numModules'] = 7;

    return convertedSaveState;
  } else {
    return serverAppSaveState;
  }
}

function dbUpgradeVersion059to0510(serverAppSaveState) {
  if (isDbUpdateNeeded('0.5.10', serverAppSaveState.session.dbVersion)) {
    console.log('Updating db version 0.5.9 to 0.5.10');
    let convertedSaveState = cloneDeep(serverAppSaveState);
    convertedSaveState.session['dbVersion'] = '0.5.10';
    // convertedSaveState.session["lastServerSyncTimestamp"] = -1;

    convertedSaveState.userProfile.OnboardingAnswers.onboarding.contraception[
      'Barrier Gel'
    ] = false;
    convertedSaveState.userProfile.OnboardingAnswers.onboarding.contraception[
      'Spermacide'
    ] = false;
    convertedSaveState.userProfile.OnboardingAnswers.onboarding.contraception[
      'Diaphragm'
    ] = false;

    return convertedSaveState;
  } else {
    return serverAppSaveState;
  }
}

function dbUpgradeVersion0510to0514(serverAppSaveState) {
  if (isDbUpdateNeeded('0.5.14', serverAppSaveState.session.dbVersion)) {
    console.log('FIXME: Updating db version 0.5.10 to 0.5.14');
    let convertedSaveState = cloneDeep(serverAppSaveState);
    convertedSaveState.session['dbVersion'] = '0.5.14';
    convertedSaveState.session['appVersion'] = APP_VERSION;

    convertedSaveState.session['deviceMetadata'] = {};
    convertedSaveState.userProfile['allTodo'][0]['rewardText'] = '+10 seeds';
    convertedSaveState.userProfile['allTodo'][1]['rewardText'] = '+10 seeds';
    convertedSaveState.userProfile['allTodo'][2]['rewardText'] =
      '+ garden watered';
    convertedSaveState.userProfile['allTodo'][3]['rewardText'] = '+10 seeds';
    convertedSaveState.userProfile['allTodo'][4]['rewardText'] = '+10 seeds';
    convertedSaveState.userProfile['allTodo'][5]['rewardText'] = '+10 seeds';

    convertedSaveState.userProfile['allTodo'][0]['navigationParams'] = {
      name: 'Login',
      params: {
        screen: 'ProfileSetup',
      },
    };
    convertedSaveState.userProfile['allTodo'][1]['navigationParams'] = {
      name: 'Login',
      params: {
        screen: 'ProfileSetup',
      },
    };
    convertedSaveState.userProfile['allTodo'][2]['navigationParams'] = {
      name: 'Track',
      params: {
        screen: 'TrackSymptoms',
      },
    };
    convertedSaveState.userProfile['allTodo'][3]['navigationParams'] = {
      name: 'Learn',
      params: {},
    };
    convertedSaveState.userProfile['allTodo'][4]['navigationParams'] = {
      name: 'Track',
      params: {
        screen: 'TrackSymptoms',
      },
    };
    convertedSaveState.userProfile['allTodo'][5]['navigationParams'] = {
      name: 'Garden',
      params: {},
    };

    return convertedSaveState;
  } else {
    return serverAppSaveState;
  }
}

function dbUpgradeVersion0514to0516(serverAppSaveState) {
  if (isDbUpdateNeeded('0.5.16', serverAppSaveState.session.dbVersion)) {
    console.log('Updating db version 0.5.14 to 0.5.16');
    let convertedSaveState = cloneDeep(serverAppSaveState);
    convertedSaveState.session['dbVersion'] = '0.5.16';
    convertedSaveState.userProfile['appIntroTutorialComplete'] = [];
    convertedSaveState.session['notifications'] = {
      daily: {},
      weekly: {},
    };
    convertedSaveState.settings = {pushNotificationsEnabled: true};

    return convertedSaveState;
  } else {
    return serverAppSaveState;
  }
}

function dbUpgradeVersion0516to0518(serverAppSaveState) {
  if (isDbUpdateNeeded('0.5.18', serverAppSaveState.session.dbVersion)) {
    console.log('Updating db version 0.5.16 to 0.5.18');
    let convertedSaveState = cloneDeep(serverAppSaveState);
    convertedSaveState.session['dbVersion'] = '0.5.18';
    convertedSaveState.userProfile['introHealthSurvey'] = {};
    convertedSaveState.userProfile['followUpHealthSurveys'] = {};

    return convertedSaveState;
  } else {
    return serverAppSaveState;
  }
}

function dbUpgradeVersion0518to0527(serverAppSaveState) {
  if (isDbUpdateNeeded('0.5.27', serverAppSaveState.session.dbVersion)) {
    console.log('Updating db version 0.5.18 to 0.5.27');
    let convertedSaveState = cloneDeep(serverAppSaveState);
    convertedSaveState.session['dbVersion'] = '0.5.27';

    convertedSaveState.userPublicProfile['uid'] =
      convertedSaveState.session['owner'];

    //  convert conditions dict to array
    convertedSaveState.userPublicProfile['healthConditions'] = Object.keys(
      convertedSaveState.userPublicProfile['healthConditions'],
    );

    //  setup cachedFeed, cachedQna, friendlist, etc, all in the connect db
    convertedSaveState.connect['friendsList'] = {};
    convertedSaveState.connect['chatroomList'] = {};
    convertedSaveState.connect['cachedQna'] = {};
    convertedSaveState.connect['lastCachedQnaRefreshTS'] = -1;
    convertedSaveState.connect['localQnaUpdates'] = {
      newQuestions: {},
      newQuestionInteractions: {},
    };
    convertedSaveState.connect['cachedFeed'] = {};
    convertedSaveState.connect['lastCachedFeedRefreshTS'] = -1;
    convertedSaveState.connect['localFeedUpdates'] = {
      newStatusUpdates: {},
      newStatusReactions: {},
    };
    convertedSaveState.connect['cachedFriendRequests'] = {};
    convertedSaveState.connect['lastCachedFriendRequestsRefreshTS'] = -1;

    convertedSaveState.connect['cachedPublicProfiles'] = {};
    delete convertedSaveState.connect['amiePublicProfiles'];
    delete convertedSaveState.connect['lastAmiePublicProfilesRefreshTS'];

    convertedSaveState.userPublicProfile['uid'] = cloneDeep(
      convertedSaveState.userPublicProfile['UID'],
    );
    delete convertedSaveState.userPublicProfile['UID'];

    convertedSaveState.userProfile['emailVerified'] = false;
    if (
      convertedSaveState.learn.endo101Course.courseStartTimestamp &&
      convertedSaveState.learn.endo101Course.courseStartTimestamp != -1 &&
      convertedSaveState.learn.endo101Course.courseStartTimestamp != '-1' &&
      parseInt(convertedSaveState.learn.endo101Course.courseStartTimestamp) > 0
    ) {
      convertedSaveState.userProfile['accountCreationTS'] =
        convertedSaveState.learn.endo101Course.courseStartTimestamp;
    } else {
      convertedSaveState.userProfile['accountCreationTS'] = -1;
    }

    return convertedSaveState;
  } else {
    return serverAppSaveState;
  }
}

function dbUpgradeVersion0527to0529(serverAppSaveState) {
  if (isDbUpdateNeeded('0.5.29', serverAppSaveState.session.dbVersion)) {
    console.log('Updating db version 0.5.27 to 0.5.29');
    let convertedSaveState = cloneDeep(serverAppSaveState);
    convertedSaveState.session['dbVersion'] = '0.5.29';

    convertedSaveState.userAnalytics.menstrualCycle['predCycleLen'] = -1;
    convertedSaveState.userAnalytics.menstrualCycle['predPeriodLen'] = -1;
    convertedSaveState.userAnalytics.menstrualCycle['observedCycleMean'] = -1;
    convertedSaveState.userAnalytics.menstrualCycle['observedCycleStd'] = -1;
    convertedSaveState.userAnalytics.menstrualCycle['observedPeriodMean'] = -1;
    convertedSaveState.userAnalytics.menstrualCycle['observedPeriodStd'] = -1;

    convertedSaveState.userPublicProfile['uid'] =
      serverAppSaveState.session.owner;

    return convertedSaveState;
  } else {
    return serverAppSaveState;
  }
}

function dbUpgradeVersion0529to0601(serverAppSaveState) {
  if (isDbUpdateNeeded('0.6.1', serverAppSaveState.session.dbVersion)) {
    console.log('Updating db version 0.5.29 to 0.6.1');
    let convertedSaveState = cloneDeep(serverAppSaveState);
    convertedSaveState.session['dbVersion'] = '0.6.1';

    convertedSaveState.connect['urgentFriendStatusReceived'] = false;
    convertedSaveState.connect['lastFeedSnapshot'] = null;

    return convertedSaveState;
  } else {
    return serverAppSaveState;
  }
}

function dbUpgradeVersion0601to0602(serverAppSaveState) {
  if (isDbUpdateNeeded('0.6.2', serverAppSaveState.session.dbVersion)) {
    console.log('Updating db version 0.6.1 to 0.6.2');
    let convertedSaveState = cloneDeep(serverAppSaveState);
    convertedSaveState.session['dbVersion'] = '0.6.2';

    convertedSaveState.userPublicProfile.healthConditions =
      convertedSaveState.userPublicProfile.healthConditions.filter(
        item => item !== 'Update' && item !== 'Conditions' && item !== 'Here',
      );

    return convertedSaveState;
  } else {
    return serverAppSaveState;
  }
}

function dbUpgradeVersion0602to0604(serverAppSaveState) {
  if (isDbUpdateNeeded('0.6.4', serverAppSaveState.session.dbVersion)) {
    console.log('Updating db version 0.6.2 to 0.6.4');
    let convertedSaveState = cloneDeep(serverAppSaveState);
    convertedSaveState.session['dbVersion'] = '0.6.4';

    convertedSaveState.userProfile.appIntroTutorialComplete =
      convertedSaveState.userProfile.appIntroTutorialComplete.filter(
        item => item !== 4 && item !== '4',
      );

    return convertedSaveState;
  } else {
    return serverAppSaveState;
  }
}

const superchatMemberUIDList = [
  'WlyonwDSvDY7ryW3J2EzE3RZujB3',
  'WMOFdBADU8UlKVIPTMVu4IVUcx42',
  'NARHmmbidBc9JpL8Tg3ZWrMmzrS2',
  'VUsZ1OKcwoe79odeHP5Wd9oSQBh2',
  '8zrYAvLtAuYQp2OvOgEHpja3wAm1',
  'h0v3NiUI3pTWhN2Hbb7k5thn8Ij2',
  'GOD4ANu8NQVS3FbYJrbyU4re2Us2',
  'l5HVyG7Rm3XoWpmy7XO2AG4Qm9C3',
  'KaBlWDi2IaMMGdI4C2Lv0XThFxv2',
  'tGhIdq40W3RVhJQd4BYeIYRg4ir1',
  'MVpDyBUCkKOYDsEdU3CwBGceCmn1',
  '6i8lGMh4ZNPIfMwBx6xnF9vu0uF3',
  'zFQYCewVGiU5KJGq4nLWWdJ2vM93',
  '1m3Snd9qZvdkIw3JonNNkPyMWFj2',
  'xTeu81i5Vqh2NJs8bIat0ngyhKj2',
  '73uH36C8yXXIIdFXR8n5rExhGWI2',
  '00WqUGYel1USPExmr0qu1St8EX52',
  'Bc4ixzxNGIQj10w7McuMbl9cT773',
  'uPo5xfP3wRUqvMmdTrUOY6K33qK2',
  'vzwVQw1DVsW2YqSPXWaH5X8nef13',
  'VXU1yU2b75f8Jlr6HN79CZmjMWU2',
  'BZqV4WNL8zeneDq99DXaI6I1Uy93',
  'PFx2MIanxqd2qx4TwThBD8VMQCz2',
  'NaS23kYrqNe39uZLK8UhnMuJc6Y2',
  '8h2EP5HN6DXDyq7WfdvTTUAPjE03',
  'z8MxIMt26FYgqhnJMl2TG1ol28m1',
  'FAP01Gl0RXRaDxSWd5JMaj8V3hF3',
  'nhVJJqFEu7ayTyzTYGZUQL8ag5D2',
  'QtCoFRJ9u4fFMPmQQL2Ph0skmWk2',
  'lRb8wYjdkDWZp4R66tWk8Q44V6u2',
  'u66v7798fBUX0u9gixTsR3YTdbV2',
  '9BdWb1VA7RhSsyNY1JD3r3Z8wh03',
  'b3adsI8aiNOZmxaFe4qtZSCzZxO2',
  'X2nWZ5yGTdSkqY0zadvS06XJ5zr2',
];

// function dbUpgradeTMPChatroomHotfix(serverAppSaveState) {
//   let convertedSaveState = cloneDeep(serverAppSaveState);
//   // if (superchatMemberUIDList.includes(serverAppSaveState.session.owner)) {
//   //   convertedSaveState.connect['chatroomList'] = [
//   //     {
//   //       crid: '999999999',
//   //       name: 'Super Chat',
//   //       lastMessage: '',
//   //     },
//   //   ];

//   //   return convertedSaveState;
//   // } else {
//   //   convertedSaveState.connect['chatroomList'] = [
//   //     {
//   //       crid: 'endo101fall2022group1',
//   //       name: 'Endo101 Group 1',
//   //       lastMessage: '',
//   //     },
//   //   ];

//   convertedSaveState.connect['chatroomList'] = {};

//   return convertedSaveState;
// }

function updateSaveStateToCurrentDBVersion(serverAppSaveState) {
  let convertedSaveState = cloneDeep(serverAppSaveState);
  console.log('Updating db version');

  //  FIXMETUNA:  this logic will get more complex over time
  // convertedSaveState = dbUpgradeTMPChatroomHotfix(convertedSaveState);
  convertedSaveState = dbUpgradeVersion000to050(convertedSaveState);
  convertedSaveState = dbUpgradeVersion050to056(convertedSaveState);
  convertedSaveState = dbUpgradeVersion056to058(convertedSaveState);

  convertedSaveState = dbUpgradeVersion058to059(convertedSaveState);
  convertedSaveState = dbUpgradeVersion059to0510(convertedSaveState);
  convertedSaveState = dbUpgradeVersion0510to0514(convertedSaveState);
  convertedSaveState = dbUpgradeVersion0514to0516(convertedSaveState);
  convertedSaveState = dbUpgradeVersion0516to0518(convertedSaveState);

  convertedSaveState = dbUpgradeVersion0518to0527(convertedSaveState);
  convertedSaveState = dbUpgradeVersion0527to0529(convertedSaveState);
  convertedSaveState = dbUpgradeVersion0529to0601(convertedSaveState);
  convertedSaveState = dbUpgradeVersion0601to0602(convertedSaveState);
  convertedSaveState = dbUpgradeVersion0602to0604(convertedSaveState);

  return convertedSaveState;
}

//  FIXMETUNA:  the server state is corrupted here before being added
export function convertServerStateForLocalRedux(serverAppSaveState) {
  let convertedSaveState = cloneDeep(serverAppSaveState);

  for (
    let i = 0;
    i < serverAppSaveState.garden.gardenState.gardenPlots.length;
    i++
  ) {
    let updatedRow = [];
    for (
      let j = 0;
      j <
      Object.keys(serverAppSaveState.garden.gardenState.gardenPlots[i]).length;
      j++
    ) {
      if (serverAppSaveState.garden.gardenState.gardenPlots[i][j] == '') {
        updatedRow = updatedRow.concat(null);
      } else {
        updatedRow = updatedRow.concat(
          serverAppSaveState.garden.gardenState.gardenPlots[i][j],
        );
      }
    }
    convertedSaveState.garden.gardenState.gardenPlots[i] =
      cloneDeep(updatedRow);
  }

  for (
    let i = 0;
    i < serverAppSaveState.garden.gardenState.weedPlots.length;
    i++
  ) {
    let updatedRow = [];
    for (
      let j = 0;
      j <
      Object.keys(serverAppSaveState.garden.gardenState.weedPlots[i]).length;
      j++
    ) {
      if (serverAppSaveState.garden.gardenState.weedPlots[i][j] == '') {
        updatedRow = updatedRow.concat(null);
      } else {
        updatedRow = updatedRow.concat(
          serverAppSaveState.garden.gardenState.weedPlots[i][j],
        );
      }
    }
    convertedSaveState.garden.gardenState.weedPlots[i] = cloneDeep(updatedRow);
  }

  return convertedSaveState;
}

const millisecondsInADay = 86400000;

export async function checkForDailyServerSync(dispatch, localAppSaveState) {
  console.log('Checking for daily serversync update');
  if (
    Date.now() - localAppSaveState.session.lastServerSyncTimestamp >
    millisecondsInADay
  ) {
    console.log(
      'DAILY Server Sync Initiated, at least 1 day has passed since last sync',
    );
    return syncServerUserSaveState(dispatch, localAppSaveState);
  } else {
    return null;
  }
}

export async function syncServerUserSaveState(dispatch, localAppSaveState) {
  console.log('Syncing localstate with server');
  const isUserAuthorizedToAccessLocalDb =
    !(auth.currentUser == null) &&
    localAppSaveState.session.owner == auth.currentUser['uid'];

  console.log(
    'USER PERMISSIONS: ',
    !(auth.currentUser == null),
    localAppSaveState.session.owner == auth.currentUser['uid'],
  );
  console.log(
    'USER PERMISSIONS VALUES: ',
    localAppSaveState.session.owner,
    auth.currentUser['uid'],
  );

  if (isUserAuthorizedToAccessLocalDb) {
    const lastLocalTSForUser = localAppSaveState.session.timestamp;

    //  check that the user is logged in
    if (!(auth.currentUser == null)) {
      //  check that app savestate exists on firestore
      const serverAppSaveState = await db
        .collection('AppSaveState')
        .doc(auth.currentUser['uid'])
        .get()
        .then(snapshot => snapshot.data())
        .catch(error => {
          console.log(error);
        });

      const lastServerTSForUser = !(serverAppSaveState == null)
        ? serverAppSaveState.session.timestamp
        : -1;

      console.log(
        'APPSAVESTATE: localTS, ServerTS: ',
        lastLocalTSForUser,
        lastServerTSForUser,
      );

      if (
        !(lastServerTSForUser == null) &&
        lastLocalTSForUser < lastServerTSForUser
      ) {
        //  download the latest AppSaveState from the server, sync to local

        console.log(
          'APPSAVESTATE: Download the latest savestate from the server to local db',
        );
        return Promise.resolve().then(() =>
          dispatch(
            syncToServerSaveStateAction(
              updateSaveStateToCurrentDBVersion(
                convertServerStateForLocalRedux(serverAppSaveState),
              ),
            ),
          )
            .then(() => dispatch(updateLastServerSyncTimestampAction()))
            .then(() => syncDeviceMetadataAction(dispatch)),
        );
      } else if (
        !(lastServerTSForUser == null) &&
        lastLocalTSForUser === lastServerTSForUser
      ) {
        //  do nothing, if the TS already exists on the server continue
        console.log(
          'APPSAVESTATE: Do nothing, local db already synced with server',
        );

        return Promise.resolve()
          .then(() =>
            dispatch(
              syncToServerSaveStateAction(
                updateSaveStateToCurrentDBVersion(localAppSaveState),
              ),
            ),
          )
          .then(() => {
            dispatch(updateLastServerSyncTimestampAction());
          })
          .then(() => syncDeviceMetadataAction(dispatch));
      } else {
        //  either this is the first entry on the server for this user,
        //  or the local state is more recent then then server's
        //  either way, add current AppSaveState to the firestore server and continue
        console.log(
          'APPSAVESTATE: Update server with local savestate: ',
          JSON.stringify(localAppSaveState.connect['chatroomList']),
        );

        const updatedLocalAppSaveState =
          updateSaveStateToCurrentDBVersion(localAppSaveState);

        console.log(
          'APPSAVESTATE: immedicately after db conversion: ',
          JSON.stringify(updatedLocalAppSaveState.connect['chatroomList']),
        );

        return Promise.resolve()
          .then(() =>
            db
              .collection('AppSaveState')
              .doc(auth.currentUser['uid'])
              .set(convertLocalReduxForServerState(updatedLocalAppSaveState)),
          )
          .then(results => {
            console.log(
              'RESULTS after appsavestate uploaded to server',
              results,
              JSON.stringify(updatedLocalAppSaveState.connect['chatroomList']),
            );
            return dispatch(
              syncToServerSaveStateAction(updatedLocalAppSaveState),
            );
          })
          .then(() => {
            dispatch(updateLastServerSyncTimestampAction());
          })
          .then(() => syncDeviceMetadataAction(dispatch));
      }
    }
    return null;
  } else if (!(auth.currentUser == null)) {
    //  FIXMETUNA:  there are likely many edge case bugs in syncing the state between the server
    //  FIXMETUNA:  and the local redux db. Pay close attention to this method.
    //  the auth'd user doesn't own the local db, they should grab an updated db from the server
    const serverAppSaveState = await db
      .collection('AppSaveState')
      .doc(auth.currentUser['uid'])
      .get()
      .then(snapshot => snapshot.data())
      .catch(error => {
        console.log(error);
      });

    if (!(serverAppSaveState == null)) {
      console.log(
        'APPSAVESTATE: NO ACCESS TO LOCAL DB, Download the latest savestate from the server to local db',
      );
      return Promise.resolve()
        .then(() =>
          dispatch(
            syncToServerSaveStateAction(
              updateSaveStateToCurrentDBVersion(
                convertServerStateForLocalRedux(serverAppSaveState),
              ),
            ),
          ),
        )
        .then(() => {
          dispatch(updateLastServerSyncTimestampAction());
        })
        .then(() => syncDeviceMetadataAction(dispatch));
    } else {
      throw {
        code: -1,
        message:
          'ERROR: No User DB Found. Please Re-Register, sorry for the inconvience.',
      };
    }
  }
  return null;
}

export async function getLoginCredentials() {
  // Retrieve the credentials
  // const credentials = await Keychain.getGenericPassword();
  // Retrieve the credentials
  const credentials = await Keychain.getGenericPassword();
  if (credentials) {
    return credentials;
  } else {
    // console.log('No credentials stored');
    return false;
  }
}

export async function saveLoginCredentials(username, password) {
  const encryptedPass = await encryptPassword(username, password);
  return await Keychain.setGenericPassword(username, encryptedPass);
}

export async function deleteLoginCredentials() {
  let result = await Keychain.resetGenericPassword();
  return result;
}

export async function encryptPassword(username, password) {
  const salt = username;
  const generatedPasswordhashPre = await CryptoJS.SHA256(password + salt);
  const hash = generatedPasswordhashPre.toString();
  return hash;
}
