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
// },
// type: actions.ADD_CUSTOM_SYMPTOM,
// payload: {
//   symptom: name,
//   category: cat,
//   type: typ,
//   bodyPart: body,
//   iconName: icon,
//   measurement: msmt,
// },

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

//  default to tracking flow, discharge, and mood
initialStateTSR = {
  trackingSymptoms: {
    0: {
      Type: 'Menstrual',
      BodyPart: '',
      IconName: 'Svg028Star',
      Category: 'Other',
      Name: 'Menstrual Flow',
      Measurements: {
        Binary: false,
        Severity: false,
        Location: false,
        Number: false,
        Options: [],
      },
    },
    1: {
      Type: 'Menstrual',
      BodyPart: '',
      IconName: 'Svg028Star',
      Category: 'Other',
      Name: 'Vaginal Discharge',
      Measurements: {
        Binary: false,
        Severity: false,
        Location: false,
        Number: false,
        Options: [],
      },
    },
    2: {
      Type: 'Essential',
      BodyPart: '',
      IconName: 'Svg028Star',
      Category: 'Other',
      Name: 'Current Mood',
      Measurements: {
        Binary: false,
        Severity: false,
        Location: false,
        Number: false,
        Options: [],
      },
    },
    3: {
      Type: 'Essential',
      BodyPart: '',
      IconName: 'Svg028Star',
      Category: 'Other',
      Name: 'Current Stress',
      Measurements: {
        Binary: false,
        Severity: true,
        Location: false,
        Number: false,
        Options: [],
      },
    },
    4: {
      Type: 'Essential',
      BodyPart: '',
      IconName: 'Svg028Star',
      Category: 'Other',
      Name: 'Current Pain',
      Measurements: {
        Binary: false,
        Severity: true,
        Location: false,
        Number: false,
        Options: [],
      },
    },

    //  FIXMETUNA:  add several endo specific default symptoms here

    5: {
      Type: 'Symptom',
      BodyPart: 'Pelvis',
      IconName: 'Svg025Sex',
      Category: 'Gynecological',
      Name: 'Painful intercourse',
      Measurements: {
        Binary: true,
        Severity: false,
        Location: false,
        Number: false,
        Options: [],
      },
    },

    6: {
      Type: 'Symptom',
      BodyPart: 'Pelvis',
      IconName: 'Svg032DarkUrine',
      Category: 'Urinary',
      Name: 'Painful Urination',
      Measurements: {
        Binary: true,
        Severity: false,
        Location: false,
        Number: false,
        Options: [],
      },
    },
    7: {
      Type: 'Symptom',
      BodyPart: 'Abdomen',
      IconName: 'Svg024MenstrualPain',
      Category: 'Gastrointestinal',
      Name: 'Abdominal Pain',
      Measurements: {
        Binary: false,
        Severity: true,
        Location: false,
        Number: false,
        Options: [],
      },
    },
    8: {
      Type: 'Symptom',
      BodyPart: 'Abdomen',
      IconName: 'Svg017Stool',
      Category: 'Gastrointestinal',
      Name: 'Bloating',
      Measurements: {
        Binary: false,
        Severity: true,
        Location: false,
        Number: false,
        Options: [],
      },
    },
    9: {
      Type: 'Symptom',
      BodyPart: 'Pelvis',
      IconName: 'Svg017Stool',
      Category: 'Gastrointestinal',
      Name: 'Constipation',
      Measurements: {
        Binary: true,
        Severity: false,
        Location: false,
        Number: false,
        Options: [],
      },
    },
    10: {
      Type: 'Symptom',
      BodyPart: 'Pelvis',
      IconName: 'Svg017Stool',
      Category: 'Gastrointestinal',
      Name: 'Diarrhea',
      Measurements: {
        Binary: true,
        Severity: false,
        Location: false,
        Number: false,
        Options: [],
      },
    },
  },
};

export default trackingSymptomsReducer = (state = initialStateTSR, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.ADD_TRACKING_SYMPTOM:
        //  only add a symptom if it doesn't already exist, bugfix
        const indexOfMatch = findIndexOfSymptom(
          draft.trackingSymptoms,
          action.payload.symptom,
          action.payload.category,
          action.payload.bodyPart,
          action.payload.type,
        );

        if (indexOfMatch < 0) {
          const sympCount = Object.keys(draft.trackingSymptoms).length;
          draft.trackingSymptoms[sympCount] = {
            Type: action.payload.type,
            BodyPart: action.payload.bodyPart,
            IconName: action.payload.iconName,
            Category: action.payload.category,
            Name: action.payload.symptom,
            Measurements: action.payload.measurement,
            Notes: '',
          };
        }

        break;
      case actions.REMOVE_TRACKING_SYMPTOM:
        const indexToRemove = findIndexOfSymptom(
          draft.trackingSymptoms,
          action.payload.symptom,
          action.payload.category,
          action.payload.bodyPart,
          action.payload.type,
        );

        if (indexToRemove >= 0) {
          const lastIndex = Object.keys(draft.trackingSymptoms).length - 1;
          if (lastIndex === indexToRemove) {
            //  then delete the object at the end
            delete draft.trackingSymptoms[lastIndex];
            draft.trackingSymptoms = {};
          } else {
            draft.trackingSymptoms[indexToRemove] = cloneDeep(
              draft.trackingSymptoms[lastIndex],
            );
            //  then delete the object at the end
            delete draft.trackingSymptoms[lastIndex];
          }
        }

        break;
      default:
        break;
    }
  });
