import React from 'react';
import customSymptomsReducer from '../../redux/reducers/customSymptomsReducer';
import * as actions from '../../redux/constants/index';

// jest.mock('react-native-elements', () => ({}));
jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));
jest.mock('../../components/Icon', () => ({}));

beforeEach(async () => {
  // store = await createTestStore();
});

// //  3 ways to create the same query, for use in future test writing
// expect(componantInstance.contains(<Text>Hihihi</Text>)).toEqual(true);
// expect(
//   componantInstance
//     .find("Text") // Use selector to get certain children
//     .first() // Get the first child
//     .props().children // Get its props
// ).toEqual("Hihihi");
// expect(
//   componantInstance
//     .find(Text) // Use selector to get certain children
//     .at(0) // Get the first child
//     .props().children // Get its props
// ).toEqual("Hihihi");

const initialState = {
  customSymptoms: {
    0: {
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
    1: {
      Type: 'Symptom3',
      BodyPart: 'Abdomen3',
      IconName: 'Svg024MenstrualPain3',
      Category: 'Gastrointestinal3',
      Name: 'Abdominal Pain3',
      Measurements: {
        Binary: false,
        Severity: true,
        Location: false,
        Number: false,
        Options: [],
      },
    },
  },
};

describe('CustomSymptomsReducer general tests', () => {
  it('Testing ADD_AND_REMOVE custom symptom', () => {
    const actionObj1 = {
      type: actions.ADD_CUSTOM_SYMPTOM,
      payload: {
        type: 'Symtom2',
        bodyPart: 'Abdomen2',
        iconName: 'Svg024MenstrualPain2',
        category: 'Gastrointestinal2',
        symptom: 'Abdominal Pain2',
        measurement: {
          Binary: false,
          Severity: true,
          Location: false,
          Number: false,
          Options: [],
        },
      },
    };
    const actionObj2 = {
      type: actions.REMOVE_CUSTOM_SYMPTOM,
      payload: {
        type: 'Symtom2',
        bodyPart: 'Abdomen2',
        iconName: 'Svg024MenstrualPain2',
        category: 'Gastrointestinal2',
        symptom: 'Abdominal Pain2',
        measurement: {
          Binary: false,
          Severity: true,
          Location: false,
          Number: false,
          Options: [],
        },
      },
    };

    const actionObj3 = {
      type: actions.REMOVE_CUSTOM_SYMPTOM,
      payload: {
        type: 'Symptom3',
        bodyPart: 'Abdomen3',
        iconName: 'Svg024MenstrualPain3',
        category: 'Gastrointestinal3',
        symptom: 'Abdominal Pain3',
        measurement: {
          Binary: false,
          Severity: true,
          Location: false,
          Number: false,
          Options: [],
        },
      },
    };

    const returned1 = customSymptomsReducer(initialState, actionObj1);
    expect(Object.keys(returned1.customSymptoms).length).toEqual(3);
    expect(returned1.customSymptoms[2].IconName).toEqual(
      'Svg024MenstrualPain2',
    );

    const returned2 = customSymptomsReducer(returned1, actionObj2);
    expect(Object.keys(returned2.customSymptoms).length).toEqual(2);
    expect(returned2.customSymptoms[1].IconName).toEqual(
      'Svg024MenstrualPain3',
    );

    const returned3 = customSymptomsReducer(returned2, actionObj3);
    expect(Object.keys(returned3.customSymptoms).length).toEqual(1);
    expect(returned3.customSymptoms[0].IconName).toEqual('Svg024MenstrualPain');
  });
});
