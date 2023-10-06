import React from 'react';
import trackingSymptomsReducer from '../../redux/reducers/trackingSymptomsReducer';
import * as actions from '../../redux/constants/index';

jest.mock('react-native-elements', () => ({}));
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
  },
};

describe('SessionReducer general tests', () => {
  it('Testing ADD_AND_DELETE_TRACKING_SYMPTOM', () => {
    const actionObj = {
      type: actions.ADD_TRACKING_SYMPTOM,
      payload: {
        type: 'Menstrual3',
        bodyPart: '3',
        iconName: 'Svg028Star3',
        category: 'Other3',
        symptom: 'Vaginal Discharge3',
        measurement: {
          Binary: false,
          Severity: false,
          Location: false,
          Number: false,
          Options: [],
        },
      },
    };

    const actionObj2 = {
      type: actions.REMOVE_TRACKING_SYMPTOM,
      payload: {
        type: 'Menstrual3',
        bodyPart: '3',
        iconName: 'Svg028Star3',
        category: 'Other3',
        symptom: 'Vaginal Discharge3',
      },
    };

    const actionObj3 = {
      type: actions.REMOVE_TRACKING_SYMPTOM,
      payload: {
        type: 'Menstrual',
        bodyPart: '',
        iconName: 'Svg028Star',
        category: 'Other',
        symptom: 'Vaginal Discharge',
      },
    };

    const returned = trackingSymptomsReducer(initialState, actionObj);
    expect(returned.trackingSymptoms[3].Category).toEqual('Other3');
    expect(Object.keys(returned.trackingSymptoms).length).toEqual(4);

    const returned2 = trackingSymptomsReducer(returned, actionObj2);
    expect(Object.keys(returned2.trackingSymptoms).length).toEqual(3);

    const returned3 = trackingSymptomsReducer(returned2, actionObj3);
    expect(Object.keys(returned3.trackingSymptoms).length).toEqual(2);
  });
});
