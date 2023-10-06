import React from "react";
import trackingLogStagingReducer from "../../redux/reducers/trackingLogStagingReducer";
import * as actions from "../../redux/constants/index";

jest.mock("react-native-elements", () => ({}));
jest.mock("../../shared/PlatformUtils", () => ({
  getOS: jest.fn(() => "android"),
}));
jest.mock("../../components/Icon", () => ({}));

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

const initialStateTLSR = {
  timestamp: 111111111,
  tsFromPast: false,
  symptoms: {},
  generalLogEntryNotes: "",
};

describe("trackingLogStagingReducer general tests", () => {
  it("Testing ADD_SYMPTOM_LOG_STAGING", () => {
    const actionObj1 = {
      type: actions.ADD_SYMPTOM_LOG_STAGING,
      payload: {
        symptom: {
          Name: "name1",
          Category: "cat1",
          BodyPart: "body1",
          Type: "type1",
        },
        severity: "1",
        option: "2",
        number: "3",
        note: "4",
      },
    };

    const returned1 = trackingLogStagingReducer(initialStateTLSR, actionObj1);
    expect(returned1.symptoms[0].Name).toEqual("name1");
  });

  it("Testing REMOVE_SYMPTOM_LOG_STAGING", () => {
    const actionObj1 = {
      type: actions.ADD_SYMPTOM_LOG_STAGING,
      payload: {
        symptom: {
          Name: "name1",
          Category: "cat1",
          BodyPart: "body1",
          Type: "type1",
        },
        severity: "1",
        option: "2",
        number: "3",
        note: "4",
      },
    };
    const actionObj2 = {
      type: actions.REMOVE_SYMPTOM_LOG_STAGING,
      payload: {
        symptom: {
          Name: "name1",
          Category: "cat1",
          BodyPart: "body1",
          Type: "type1",
        },
        severity: "1",
        option: "2",
        number: "3",
        note: "4",
      },
    };

    const returned1 = trackingLogStagingReducer(initialStateTLSR, actionObj1);
    expect(returned1.symptoms[0].Name).toEqual("name1");

    const returned2 = trackingLogStagingReducer(returned1, actionObj2);
    expect(returned2.symptoms).toEqual({});
  });

  // it("Testing ADD_SYMPTOM_LOG_STAGING_SEVERITY", () => {
  //   const actionObj1 = {
  //     type: actions.ADD_SYMPTOM_LOG_STAGING,
  //     payload: {
  //       symptom: {
  //         Name: "name1",
  //         Category: "cat1",
  //         BodyPart: "body1",
  //         Type: "type1",
  //       },
  //       severity: "1",
  //       option: "2",
  //       number: "3",
  //       note: "4",
  //     },
  //   };
  //   const actionObj2 = {
  //     type: actions.ADD_SYMPTOM_LOG_STAGING_SEVERITY,
  //     payload: {
  //       symptom: {
  //         Name: "name1",
  //         Category: "cat1",
  //         BodyPart: "body1",
  //         Type: "type1",
  //       },
  //       severity: "1",
  //       option: "2",
  //       number: "3",
  //       note: "4",
  //     },
  //   };

  //   const returned1 = trackingLogStagingReducer(initialStateTLSR, actionObj1);
  //   expect(returned1.symptoms[0].Name).toEqual("name1");
  //   const returned2 = trackingLogStagingReducer(returned1, actionObj2);
  //   expect(returned2.severity).toEqual("1");
  // });

  // it("Testing ADD_SYMPTOM_LOG_STAGING_OPTION", () => {
  //   const actionObj1 = {
  //     type: actions.ADD_SYMPTOM_LOG_STAGING,
  //     payload: {
  //       symptom: {
  //         Name: "name1",
  //         Category: "cat1",
  //         BodyPart: "body1",
  //         Type: "type1",
  //       },
  //       severity: "1",
  //       option: "2",
  //       number: "3",
  //       note: "4",
  //     },
  //   };
  //   const actionObj2 = {
  //     type: actions.ADD_SYMPTOM_LOG_STAGING_OPTION,
  //     payload: {
  //       symptom: {
  //         Name: "name1",
  //         Category: "cat1",
  //         BodyPart: "body1",
  //         Type: "type1",
  //       },
  //       severity: "1",
  //       option: "2",
  //       number: "3",
  //       note: "4",
  //     },
  //   };

  //   const returned1 = trackingLogStagingReducer(initialStateTLSR, actionObj1);
  //   expect(returned1.symptoms[0].Name).toEqual("name1");
  //   const returned2 = trackingLogStagingReducer(returned1, actionObj2);
  //   expect(returned2.option).toEqual("2");
  // });

  //   it("Testing ADD_SYMPTOM_LOG_STAGING_NUMBER", () => {
  //     const actionObj1 = {
  //       type: actions.ADD_SYMPTOM_LOG_STAGING,
  //       payload: {
  //         symptom: {
  //           Name: "name1",
  //           Category: "cat1",
  //           BodyPart: "body1",
  //           Type: "type1",
  //         },
  //         severity: "1",
  //         option: "2",
  //         number: "3",
  //         note: "4",
  //       },
  //     };
  //     const actionObj2 = {
  //       type: actions.ADD_SYMPTOM_LOG_STAGING_NUMBER,
  //       payload: {
  //         symptom: {
  //           Name: "name1",
  //           Category: "cat1",
  //           BodyPart: "body1",
  //           Type: "type1",
  //         },
  //         severity: "1",
  //         option: "2",
  //         number: "3",
  //         note: "4",
  //       },
  //     };

  //     const returned1 = trackingLogStagingReducer(initialStateTLSR, actionObj1);
  //     expect(returned1.symptoms[0].Name).toEqual("name1");
  //     const returned2 = trackingLogStagingReducer(returned1, actionObj2);
  //     expect(returned2.number).toEqual("3");
  //   });

  //   it("Testing ADD_SYMPTOM_LOG_STAGING_NOTE", () => {
  //     const actionObj1 = {
  //       type: actions.ADD_SYMPTOM_LOG_STAGING,
  //       payload: {
  //         symptom: {
  //           Name: "name1",
  //           Category: "cat1",
  //           BodyPart: "body1",
  //           Type: "type1",
  //         },
  //         severity: "1",
  //         option: "2",
  //         number: "3",
  //         note: "4",
  //       },
  //     };
  //     const actionObj2 = {
  //       type: actions.ADD_SYMPTOM_LOG_STAGING_NOTE,
  //       payload: {
  //         symptom: {
  //           Name: "name1",
  //           Category: "cat1",
  //           BodyPart: "body1",
  //           Type: "type1",
  //         },
  //         severity: "1",
  //         option: "2",
  //         number: "3",
  //         note: "4",
  //       },
  //     };

  //     const returned1 = trackingLogStagingReducer(initialStateTLSR, actionObj1);
  //     expect(returned1.symptoms[0].Name).toEqual("name1");
  //     const returned2 = trackingLogStagingReducer(returned1, actionObj2);
  //     expect(returned2.note).toEqual("4");
  //   });
});
