import * as actions from '../constants/index';
import produce from 'immer';
import cloneDeep from 'lodash/cloneDeep';

const dayLengthMinutes = 1440;

let tmpMenCycleSimTS = [];
for (let i = 1; i < 30; i++) {
  tmpMenCycleSimTS = tmpMenCycleSimTS.concat(
    27633309 - i * 28 * dayLengthMinutes,
  );
}
let tmpOffsetMenCycleSimTS = [];
for (let i = 1; i < 30; i++) {
  tmpOffsetMenCycleSimTS = tmpOffsetMenCycleSimTS.concat(
    27613309 - i * 1 * dayLengthMinutes,
  );
}
// 27633309
// 27267813

// initialStateTLR = {
//   logHistory: {
//     [tmpOffsetMenCycleSimTS[13]]: {
//       logEntryNotes: "",
//       symptoms: {
//         0: {
//           Type: "Menstrual",
//           BodyPart: "Pelvis",
//           IconName: "water-drops1",
//           Category: "Gynecological",
//           Name: "None",
//           Measurements: {
//             Binary: false,
//             Severity: false,
//             Location: false,
//             Number: false,
//             Options: "",
//           },
//         },
//       },
//     },

//  NOTE:  logHistory Timestamps are in minutes
initialStateTLR = {
  logHistory: {},
};

//  FIXMETUNA:  need to add / check for type here as well, I could export this
//  if needed in other parts of the app
findIndexOfSymptom = (sympDict, name, cat, body, type) => {
  let indexToRemove = -1;
  for (let [key, val] of Object.entries(sympDict)) {
    if (
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

export default trackingLogReducer = (state = initialStateTLR, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.ADD_SYMPTOM_LOG: {
        timestampdayTmp = action.payload.timestampday;
        symptomTmp = action.payload.symptom;

        if (timestampdayTmp in draft.logHistory) {
          const symptomIndex = findIndexOfSymptom(
            draft.logHistory[timestampdayTmp].symptoms,
            symptomTmp.Name,
            symptomTmp.Category,
            symptomTmp.BodyPart,
            symptomTmp.Type,
          );
          if (symptomIndex >= 0) {
            draft.logHistory[timestampdayTmp].symptoms[symptomIndex] = {
              ...symptomTmp,
            };
          } else {
            const newIndex = Object.keys(
              draft.logHistory[timestampdayTmp].symptoms,
            ).length;
            draft.logHistory[timestampdayTmp].symptoms[newIndex] = {
              ...symptomTmp,
            };
          }
        } else {
          draft.logHistory[timestampdayTmp] = {
            symptoms: {
              0: {
                ...symptomTmp,
              },
            },
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
      case actions.REMOVE_SYMPTOM_LOG: {
        timestampdayTmp = action.payload.timestampday;
        symptomTmp = action.payload.symptom;

        if (timestampdayTmp in draft.logHistory) {
          const symptomIndex = findIndexOfSymptom(
            draft.logHistory[timestampdayTmp].symptoms,
            symptomTmp.Name,
            symptomTmp.Category,
            symptomTmp.BodyPart,
            symptomTmp.Type,
          );
          if (symptomIndex >= 0) {
            //  FIXMETUNA:  make the swap here
            //  replaced deleted index with object at end of list
            const lastIndex =
              Object.keys(draft.logHistory[timestampdayTmp].symptoms).length -
              1;
            if (lastIndex === symptomIndex) {
              //  then delete the object at the end
              delete draft.logHistory[timestampdayTmp].symptoms[lastIndex];
              draft.logHistory[timestampdayTmp].symptoms = {};
            } else {
              draft.logHistory[timestampdayTmp].symptoms[symptomIndex] =
                cloneDeep(
                  draft.logHistory[timestampdayTmp].symptoms[lastIndex],
                );
              //  then delete the object at the end
              delete draft.logHistory[timestampdayTmp].symptoms[lastIndex];
            }
          }
        }
        break;
      }

      case actions.ADD_SYMPTOM_LOG_FROM_STAGING: {
        timestampdayTmp = action.payload.timestampday;
        symptomsDirTmp = action.payload.symptomsDir;
        logEntryNotesTmp = action.payload.logEntryNotes;
        draft.logHistory[timestampdayTmp] = {
          symptoms: symptomsDirTmp,
          logEntryNotes: logEntryNotesTmp,
        };
        break;
      }

      case actions.RECOVER_LEFTOVER_TRACK_LOG_STAGING: {
        timestampdayTmp = action.payload.timestampday;
        trackingLogStaging = action.payload.trackingLogStaging;
        if (Object.keys(trackingLogStaging.symptoms).length > 0) {
          draft.logHistory[trackingLogStaging.timestamp] = {
            symptoms: trackingLogStaging.symptoms,
            logEntryNotes: trackingLogStaging.generalLogEntryNotes,
          };
        }
        break;
      }

      default:
        break;
    }
  });
