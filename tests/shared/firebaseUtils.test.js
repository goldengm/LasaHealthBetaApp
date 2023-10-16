import {
  convertLocalReduxForServerState,
  convertServerStateForLocalRedux,
} from '../../shared/firebaseUtils';

jest.mock('react-native-keychain', () => ({}));
jest.mock('react-native-device-info', () => ({}));
jest.mock('react-native-elements', () => ({}));
jest.mock('@react-native-firebase/functions', () => ({}));

jest.mock('firebase/compat/app', () => ({
  apps: [0],
  app: jest.fn(() => {
    return {
      firestore: () => {
        return {
          settings: () => {},
        };
      },
      functions: () => {},
    };
  }),
  auth: function auth() {
    auth.Auth = {
      Persistence: {
        LOCAL: '_',
        SESSION: '_',
      },
    };

    return {
      setPersistence: () => Promise.resolve(),
      // signInWithEmailAndPassword: (email, password) =>
      //     new Promise<void>((res, rej) => { /* ...code */}),
    };
  },
}));

// jest.mock('firebase/compat/app', () => ({
//   // apps: jest.fn(() => {}),
//   // firebase: () => 'apps',
//   apps: [0],
//   app: jest.fn(() => {
//     return {
//       firestore: () => {
//         return {
//           settings: () => {},
//         };
//       },
//       functions: () => {},
//     };
//   }),

//   // 'auth.Auth.Persistence.SESSION': {},
//   // 'auth.Auth.Persistence.LOCAL': {},
//   auth: {AUTH: ''},
//   auth: jest.fn(() => {}),
//   // auth: {Auth: {Persistence: {LOCAL: ""}}},
// }));

it('Testing firebaseutils convertLocalReduxForServerState', () => {
  // convertedSaveState.garden.gardenState.gardenPlots
  let localStateBefore = {
    garden: {
      gardenState: {
        gardenPlots: [
          [null, null, null, null],
          [null, null, null, null],
          [null, null, 'test', null],
          [null, null, null, null],
          [null, null, null, null],
        ],
        weedPlots: [
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
        ],
      },
    },
  };

  let localStateAfter = convertLocalReduxForServerState(localStateBefore);
  // console.log("Before: ", localStateBefore.garden.gardenState.gardenPlots[0]);
  // console.log("After: ", localStateAfter.garden.gardenState.gardenPlots[0]);

  expect(convertLocalReduxForServerState).toBeTruthy();
  expect(localStateAfter.garden.gardenState.gardenPlots[0][0] === '');
  expect(localStateAfter.garden.gardenState.gardenPlots[0][1] === '');
  expect(localStateAfter.garden.gardenState.gardenPlots[2][2] === 'test');
  expect(localStateAfter.garden.gardenState.weedPlots[3][4] === '');
});

it('Testing firebaseutils convertServerStateForLocalRedux', () => {
  // convertedSaveState.garden.gardenState.gardenPlots
  let serverStateBefore = {
    garden: {
      gardenState: {
        gardenPlots: [
          {0: '', 1: '', 2: '', 3: ''},
          {0: '', 1: '', 2: '', 3: ''},
          {0: '', 1: '', 2: 'test', 3: ''},
          {0: '', 1: '', 2: '', 3: ''},
          {0: '', 1: '', 2: '', 3: ''},
        ],
        weedPlots: [
          {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: ''},
          {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: ''},
          {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: ''},
          {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: ''},
          {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: ''},
          {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: ''},
          {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: ''},
          {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: ''},
          {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: ''},
          {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: ''},
        ],
      },
    },
  };

  let serverStateAfter = convertServerStateForLocalRedux(serverStateBefore);
  // console.log("Before: ", localStateBefore.garden.gardenState.gardenPlots[0]);
  // console.log("After: ", localStateAfter.garden.gardenState.gardenPlots[0]);

  expect(convertServerStateForLocalRedux).toBeTruthy();
  expect(serverStateAfter.garden.gardenState.gardenPlots[0][0] === null);
  expect(serverStateAfter.garden.gardenState.gardenPlots[0][1] === null);
  expect(serverStateAfter.garden.gardenState.gardenPlots[2][2] === 'test');
  expect(serverStateAfter.garden.gardenState.weedPlots[3][4] === null);
});

it('Testing firebaseutils converting state then reverting, confirming data preserved', () => {
  // convertedSaveState.garden.gardenState.gardenPlots
  let localStateBefore = {
    garden: {
      gardenState: {
        gardenPlots: [
          [null, null, null, null],
          [null, null, null, null],
          [null, null, 'test', null],
          [null, null, null, null],
          [null, null, null, null],
        ],
        weedPlots: [
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
        ],
      },
    },
  };

  let serverStateAfter = convertLocalReduxForServerState(localStateBefore);
  let localStateAfter = convertServerStateForLocalRedux(serverStateAfter);

  // console.log("Before: ", localStateBefore.garden.gardenState.gardenPlots[0]);
  // console.log("After: ", localStateAfter.garden.gardenState.gardenPlots[0]);

  expect(
    localStateBefore.garden.gardenState.gardenPlots[0][0] ===
      localStateAfter.garden.gardenState.gardenPlots[0][0],
  );
  expect(
    localStateBefore.garden.gardenState.gardenPlots[2][2] ===
      localStateAfter.garden.gardenState.gardenPlots[2][2],
  );
  expect(
    localStateBefore.garden.gardenState.weedPlots[4][4] ===
      localStateAfter.garden.gardenState.weedPlots[4][4],
  );
});
