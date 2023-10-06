import React from 'react';

import trackingSymptomsReducer from '../reducers/trackingSymptomsReducer';
import customSymptomsReducer from '../reducers/customSymptomsReducer';
import learnReducer from '../reducers/learnReducer';
import trackingLogReducer from '../reducers/trackingLogReducer';
import trackingLogStagingReducer from '../reducers/trackingLogStagingReducer';
import userAnalyticsReducer from '../reducers/userAnalyticsReducer';
import userProfileReducer from '../reducers/userProfileReducer';
import userPublicProfileReducer from '../reducers/userPublicProfileReducer';
import sessionReducer from '../reducers/sessionReducer';
import settingsReducer from '../reducers/settingsReducer';
import connectReducer from '../reducers/connectReducer';
import amieChatbotReducer from '../reducers/amieChatbotReducer';
import gardenReducer from '../reducers/gardenReducer';
import * as actions from '../constants/index';

import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  // createTransform
} from 'redux-persist';
import {encryptTransform} from 'redux-persist-transform-encrypt';
import produce from 'immer';
import {auth} from '../../shared/firebaseUtils';
import assessmentReducer from '../reducers/assessmentReducer';

// import { purgeStoredState } from "redux-persist";

const allReducers = combineReducers({
  trackSymptoms: trackingSymptomsReducer,
  trackCustomSymptoms: customSymptomsReducer,
  trackLog: trackingLogReducer,
  trackLogStaging: trackingLogStagingReducer,
  learn: learnReducer,
  userAnalytics: userAnalyticsReducer,
  userProfile: userProfileReducer,
  userPublicProfile: userPublicProfileReducer,
  session: sessionReducer,
  connect: connectReducer,
  amieChatbot: amieChatbotReducer,
  garden: gardenReducer,
  settings: settingsReducer,
  // assessment: assessmentReducer,
});

//  FIXMETUNA: check this, only change state if the currently auth'd user owns the current redux db
const rootReducer = (state, action) => {
  if (
    !(auth.currentUser == null) &&
    action.type === actions.SYNC_TO_SERVER_SAVESTATE
  ) {
    console.log(
      'OVERWITTING LOCAL DB WITH UPDATED SAVESTATE:',
      action.payload.session.owner,
    );
    return {...action.payload};
  } else if (action.type === actions.RESET_DB_TO_DEFAULT) {
    return allReducers(undefined, action);
  } else if (
    !(auth.currentUser == null) &&
    action.type === actions.SET_DB_OWNER_TO_CURRENT_AUTH_USER
  ) {
    state = produce(state, draft => {
      draft.session.owner = auth.currentUser['uid'];
    });
    return allReducers(state, action);
  } else if (
    !(auth.currentUser == null) &&
    state.session != undefined &&
    state.session.owner === auth.currentUser['uid']
  ) {
    state = produce(state, draft => {
      console.log(
        'CURRENTLY LOGGED IN USER OWNS DB!! ADDING A NEW TIMESTAMP AND EXECUTING REDUCER!!!',
      );
      draft.session.timestamp = Date.now();
    });
    return allReducers(state, action);
  } else {
    return allReducers(state, action);
  }
};

//  FIXMETUNA:  need to switch this encryption key to the user's UID later
const persistedReducer = persistReducer(
  {
    key: 'persistedReducer',
    storage: AsyncStorage,
    transforms: [
      encryptTransform({
        secretKey: 'my-super-secret-key2',
        onError: function (error) {
          // Handle the error.
          console.log('Error wrong redux key', error);
        },
      }),
    ],
  },
  rootReducer,
);

const configureStore = () => {
  const __DEV__ = true;
  const middlewares = [
    /* other middlewares */
    thunk,
  ];

  // if (__DEV__) {
  //   const createDebugger = require('redux-flipper').default;
  //   middlewares.push(createDebugger());
  // }

  store = createStore(
    persistedReducer,
    {},
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
  storePersistor = persistStore(store);
  // storePersistor.purge();

  return [store, storePersistor];

  // return [null, null];
};

export default configureStore;
