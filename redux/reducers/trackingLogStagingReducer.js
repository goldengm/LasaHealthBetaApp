import * as actions from '../constants/index';
import produce from 'immer';
import cloneDeep from 'lodash/cloneDeep';

// 2: {
//   Type: "Symptom",
//   BodyPart: "Abdomen",
//   IconName: "024-hot air balloon",
//   Category: "Gastrointestinal",
//   Name: "Bloating",
//   Measurements: {
//     Binary: false,
//     Severity: true,
//     Location: false,
//     Number: false,
//     Options: [],
//   },
//   Notes: ""
// },

getCurrentTimestampMinutes = () => {
  return Math.floor(Date.now() / 60000.0);
};

const dayLengthMinutes = 1440;

initialStateTLSR = {
  timestamp: getCurrentTimestampMinutes(),
  tsFromPast: false,
  symptoms: {},
  generalLogEntryNotes: '',
};

//  FIXMETUNA:  need to add / check for type here as well, I could export this
//  if needed in other parts of the app
findIndexOfSymptom = (sympDict, name, cat, body, type) => {
  let indexToRemove = -1;
  for (let [key, val] of Object.entries(sympDict)) {
    if (
      !(val == null) &&
      val.Name === name &&
      val.Category === cat &&
      val.BodyPart === body &&
      val.Type === type
    ) {
      indexToRemove = key;
      break;
    }
  }
  return indexToRemove;
};

export default trackingLogStagingReducer = (state = initialStateTLSR, action) =>
  produce(state, draft => {
    //  update the timestamp eachtime an action is called,
    //  if tsFromPast is true, the timestamp won't be changed anymore
    draft.timestamp = draft.tsFromPast
      ? draft.timestamp
      : getCurrentTimestampMinutes();

    switch (action.type) {
      //  explicitly set the timestamp and whether or not it's a past timestamp,
      //  useful for editing past entries
      case actions.ADD_SYMPTOM_LOG_STAGING_TIMESTAMP: {
        draft.timestamp = action.payload.timestampTmp;
        draft.tsFromPast = action.payload.tsFromPast;

        break;
      }
      case actions.SET_SYMPTOM_LOG_STAGING_TO_DATE: {
        draft.timestamp = action.payload.timestamp;
        draft.tsFromPast = action.payload.tsFromPast;
        draft.generalLogEntryNotes = action.payload.generalLogEntryNotes;
        draft.symptoms = cloneDeep(action.payload.symptoms);
        break;
      }
      case actions.RESET_SYMPTOM_LOG_STAGING_TO_DEFAULT: {
        draft.timestamp = initialStateTLSR.timestamp;
        draft.tsFromPast = initialStateTLSR.tsFromPast;
        draft.symptoms = cloneDeep(initialStateTLSR.symptoms);
        break;
      }
      case actions.ADD_SYMPTOM_LOG_STAGING: {
        symptomTmp = action.payload.symptom;
        const symptomIndex = findIndexOfSymptom(
          draft.symptoms,
          symptomTmp.Name,
          symptomTmp.Category,
          symptomTmp.BodyPart,
          symptomTmp.Type,
        );
        if (symptomIndex >= 0) {
          draft.symptoms[symptomIndex] = {
            ...symptomTmp,
          };
        } else {
          const newIndex = Object.keys(draft.symptoms).length;
          draft.symptoms[newIndex] = {
            ...symptomTmp,
          };
        }
        break;
      }

      //  FIXMETUNA:  basically for this I'm going to find the index of the object to remove
      //  then replace that index with the symptom at what's currently the highest index.
      //  then I'll completely remove the highest index
      //  this is because indexing is currently autoincremented based on the current
      //  length of the list of symptoms. So if I remove a symptom, I should shift all the indexes
      //  down one so that the next index to add is still the length of the current list
      //  of symptoms
      case actions.REMOVE_SYMPTOM_LOG_STAGING: {
        symptomTmp = action.payload.symptom;

        const symptomIndex = findIndexOfSymptom(
          draft.symptoms,
          symptomTmp.Name,
          symptomTmp.Category,
          symptomTmp.BodyPart,
          symptomTmp.Type,
        );
        if (symptomIndex >= 0) {
          // //  FIXMETUNA:  make the swap here
          // //  replaced deleted index with object at end of list
          const lastIndex = Object.keys(draft.symptoms).length - 1;
          if (lastIndex === symptomIndex) {
            //  then delete the object at the end
            delete draft.symptoms[lastIndex];
            draft.symptoms = {};
          } else {
            draft.symptoms[symptomIndex] = cloneDeep(draft.symptoms[lastIndex]);
            //  then delete the object at the end
            delete draft.symptoms[lastIndex];
          }
        }
        break;
      }
      case actions.ADD_SYMPTOM_LOG_STAGING_SEVERITY: {
        symptomTmp = action.payload.symptom;
        severityTmp = action.payload.severity;

        //  only added if the timestamp and the symptom exist already
        //  otherwise a new log needs to be added first before calling this upate
        const symptomIndex = findIndexOfSymptom(
          draft.symptoms,
          symptomTmp.Name,
          symptomTmp.Category,
          symptomTmp.BodyPart,
          symptomTmp.Type,
        );
        if (symptomIndex >= 0) {
          draft.symptoms[symptomIndex].Measurements.Severity = severityTmp;
        }
        break;
      }
      case actions.ADD_SYMPTOM_LOG_STAGING_OPTION: {
        symptomTmp = action.payload.symptom;
        optionTmp = action.payload.option;

        //  only added if the timestamp and the symptom exist already
        //  otherwise a new log needs to be added first before calling this upate
        const symptomIndex = findIndexOfSymptom(
          draft.symptoms,
          symptomTmp.Name,
          symptomTmp.Category,
          symptomTmp.BodyPart,
          symptomTmp.Type,
        );
        if (symptomIndex >= 0) {
          draft.symptoms[symptomIndex].Measurements.Options = optionTmp;
        }
        break;
      }
      case actions.ADD_SYMPTOM_LOG_STAGING_NUMBER: {
        symptomTmp = action.payload.symptom;
        numberTmp = action.payload.number;

        //  only added if the timestamp and the symptom exist already
        //  otherwise a new log needs to be added first before calling this upate
        const symptomIndex = findIndexOfSymptom(
          draft.symptoms,
          symptomTmp.Name,
          symptomTmp.Category,
          symptomTmp.BodyPart,
          symptomTmp.Type,
        );
        if (symptomIndex >= 0) {
          draft.symptoms[symptomIndex].Measurements.Number = numberTmp;
        }

        break;
      }
      case actions.ADD_SYMPTOM_LOG_STAGING_NOTE: {
        symptomTmp = action.payload.symptom;
        noteTmp = action.payload.note;

        //  only added if the timestamp and the symptom exist already
        //  otherwise a new log needs to be added first before calling this upate
        const symptomIndex = findIndexOfSymptom(
          draft.symptoms,
          symptomTmp.Name,
          symptomTmp.Category,
          symptomTmp.BodyPart,
          symptomTmp.Type,
        );
        if (symptomIndex >= 0) {
          draft.symptoms[symptomIndex].Notes = noteTmp;
        }

        break;
      }

      case actions.ADD_SYMPTOM_GENERAL_LOG_STAGING_NOTE: {
        noteTmp = action.payload.note;

        draft.generalLogEntryNotes = noteTmp;

        break;
      }
      default:
        break;
    }
  });
