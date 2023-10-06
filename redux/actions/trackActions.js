import * as actions from '../constants/index';

export function addCustomSymptomAction(name, icon, typ, cat, body, msmt) {
  return {
    type: actions.ADD_CUSTOM_SYMPTOM,
    payload: {
      symptom: name,
      category: cat,
      type: typ,
      bodyPart: body,
      iconName: icon,
      measurement: msmt,
    },
  };
}

export function removeCustomSymptomAction(item, cat, body, type) {
  return {
    type: actions.REMOVE_CUSTOM_SYMPTOM,
    payload: {symptom: item, category: cat, bodyPart: body, type: type},
  };
}

export function addTrackingSymptomAction(name, icon, typ, cat, body, msmt) {
  return {
    type: actions.ADD_TRACKING_SYMPTOM,
    payload: {
      symptom: name,
      category: cat,
      type: typ,
      bodyPart: body,
      iconName: icon,
      measurement: msmt,
    },
  };
}

export function removeTrackingSymptomAction(item, cat, body, type) {
  return {
    type: actions.REMOVE_TRACKING_SYMPTOM,
    payload: {symptom: item, category: cat, bodyPart: body, type: type},
  };
}

export function addTrackingLogAction(timestampdayP, symptomP) {
  return {
    type: actions.ADD_SYMPTOM_LOG,
    payload: {
      timestampday: timestampdayP,
      symptom: symptomP,
    },
  };
}

export function removeTrackingLogAction(timestampdayP, symptomP) {
  return {
    type: actions.REMOVE_SYMPTOM_LOG,
    payload: {
      timestampday: timestampdayP,
      symptom: symptomP,
    },
  };
}

export function addTrackingLogFromStagingAction(
  timestampdayP,
  symptomsDirP,
  logEntryNotesP,
) {
  return {
    type: actions.ADD_SYMPTOM_LOG_FROM_STAGING,
    payload: {
      timestampday: timestampdayP,
      symptomsDir: symptomsDirP,
      logEntryNotes: logEntryNotesP,
    },
  };
}

export function recoverLeftoverTrackLogStaging(
  timestampP,
  trackingLogStagingP,
) {
  return {
    type: actions.RECOVER_LEFTOVER_TRACK_LOG_STAGING,
    payload: {
      timestampTmp: timestampP,
      trackingLogStaging: trackingLogStagingP,
    },
  };
}

export function addTrackingLogStagingTimestampAction(
  timestampP,
  tsFromPastP = false,
) {
  return {
    type: actions.ADD_SYMPTOM_LOG_STAGING_TIMESTAMP,
    payload: {
      timestampTmp: timestampP,
      tsFromPast: tsFromPastP,
    },
  };
}

export function setSymptomLogStagingToDate(
  timestampP,
  symptomsP,
  generalLogEntryNotesP,
  tsFromPastP = false,
) {
  return {
    type: actions.SET_SYMPTOM_LOG_STAGING_TO_DATE,
    payload: {
      timestamp: timestampP,
      symptoms: symptomsP,
      generalLogEntryNotes: generalLogEntryNotesP,
      tsFromPast: tsFromPastP,
    },
  };
}

export function resetTrackingLogStagingToDefaultAction() {
  return {
    type: actions.RESET_SYMPTOM_LOG_STAGING_TO_DEFAULT,
    payload: {},
  };
}

export function addTrackingLogStagingAction(symptomP) {
  return {
    type: actions.ADD_SYMPTOM_LOG_STAGING,
    payload: {
      symptom: symptomP,
    },
  };
}

export function removeTrackingLogStagingAction(symptomP) {
  return {
    type: actions.REMOVE_SYMPTOM_LOG_STAGING,
    payload: {
      symptom: symptomP,
    },
  };
}

export function addTrackingLogStagingSeverityAction(symptomP, severityP) {
  return {
    type: actions.ADD_SYMPTOM_LOG_STAGING_SEVERITY,
    payload: {
      symptom: symptomP,
      severity: severityP,
    },
  };
}
export function addTrackingLogStagingOptionAction(symptomP, optionP) {
  return {
    type: actions.ADD_SYMPTOM_LOG_STAGING_OPTION,
    payload: {
      symptom: symptomP,
      option: optionP,
    },
  };
}
export function addTrackingLogStagingNumberAction(symptomP, numberP) {
  return {
    type: actions.ADD_SYMPTOM_LOG_STAGING_NUMBER,
    payload: {
      symptom: symptomP,
      number: numberP,
    },
  };
}
export function addTrackingLogStagingNoteAction(symptomP, noteP) {
  return {
    type: actions.ADD_SYMPTOM_LOG_STAGING_NOTE,
    payload: {
      symptom: symptomP,
      note: noteP,
    },
  };
}

export function addTrackingGeneralLogStagingNoteAction(noteP) {
  return {
    type: actions.ADD_SYMPTOM_GENERAL_LOG_STAGING_NOTE,
    payload: {
      note: noteP,
    },
  };
}
