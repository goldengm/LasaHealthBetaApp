import * as actions from '../constants/index';
import symptomsDir from '../../constants/track/symptomsDir';
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
// },

export function findIndexOfSymptom(sympDict, name, cat, body, type) {
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
}

//  use the symptoms directory constant to initialize the custom list of symptoms
initialStateCSR = {
  customSymptoms: symptomsDir,
};

export default customSymptomsReducer = (state = initialStateCSR, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.ADD_CUSTOM_SYMPTOM:
        const sympCount = Object.keys(draft.customSymptoms).length;
        draft.customSymptoms[sympCount] = {
          Type: action.payload.type,
          BodyPart: action.payload.bodyPart,
          IconName: action.payload.iconName,
          Category: action.payload.category,
          Name: action.payload.symptom,
          Measurements: action.payload.measurement,
        };
        break;
      case actions.REMOVE_CUSTOM_SYMPTOM:
        const indexToRemove = findIndexOfSymptom(
          draft.customSymptoms,
          action.payload.symptom,
          action.payload.category,
          action.payload.bodyPart,
          action.payload.type,
        );

        if (indexToRemove >= 0) {
          const lastIndex = Object.keys(draft.customSymptoms).length - 1;
          if (lastIndex === indexToRemove) {
            //  then delete the object at the end
            delete draft.customSymptoms[lastIndex];
            draft.customSymptoms = symptomsDir;
          } else {
            draft.customSymptoms[indexToRemove] = cloneDeep(
              draft.customSymptoms[lastIndex],
            );
            //  then delete the object at the end
            delete draft.customSymptoms[lastIndex];
          }
        }
        break;
      default:
        break;
    }
  });
