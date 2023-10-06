import React from 'react';

import * as actions from '../constants/index';

export function makeUserDbOwnerAction() {
  return {
    type: actions.SET_DB_OWNER_TO_CURRENT_AUTH_USER,
  };
}

export function resetDBToDefaultAction() {
  return {
    type: actions.RESET_DB_TO_DEFAULT,
  };
}

//  unique action for syncing the entire state to the server's savestate
export function syncToServerSaveStateAction(saveStateP) {
  return {
    type: actions.SYNC_TO_SERVER_SAVESTATE,
    payload: saveStateP,
  };
}

export function updateLastServerSyncTimestampAction() {
  return {
    type: actions.UPDATE_LAST_SERVER_SYNC_TIMESTAMP,
    payload: Date.now(),
  };
}

export function updateDeviceMetadataAction(deviceMetadataP) {
  return {
    type: actions.UPDATE_DEVICE_METADATA,
    payload: {deviceMetadata: deviceMetadataP},
  };
}

export function updateNotificationsAction(
  dailyNotifications,
  weeklyNotifications,
) {
  return {
    type: actions.UPDATE_NOTIFICATIONS,
    payload: {daily: dailyNotifications, weekly: weeklyNotifications},
  };
}
