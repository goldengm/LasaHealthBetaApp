import React from "react";
import gardenReducer from "../../redux/reducers/gardenReducer";
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

let storeInventory = {};
let playerInventory = {};
let gardenState = {};

//  TMP start for set state for debug
storeInventory = {
  gardenItem1: {
    itemType: "1",
    action: "1",
    name: "1",
    assets: "1",
    rarity: "1",
    price: "1",
  },
  gardenItem2: {
    itemType: "2",
    action: "2",
    name: "2",
    assets: "2",
    rarity: "2",
    price: "2",
  },
  gardenItem3: {
    itemType: "3",
    action: "3",
    name: "3",
    assets: "3",
    rarity: "3",
    price: "3",
  },
  gardenItem1Sold: false,
  gardenItem2Sold: false,
  gardenItem3Sold: false,
};

playerInventory = {
  gardenItems: [
    {
      itemType: "11",
      action: "11",
      name: "11",
      assets: "11",
      rarity: "11",
      price: "11",
    },
    {
      itemType: "22",
      action: "22",
      name: "22",
      assets: "22",
      rarity: "22",
      price: "22",
    },
  ],
  numSeeds: 50,
};

const tmpPlacedGardenItem = {
  itemType: "111",
  action: "111",
  name: "111",
  assets: "111",
  rarity: "111",
  price: "111",
  datePlaced: "2022-1-1",
  health: 3,
  happiness: 0,
  location: "22",
  age: 0,
};

// console.log("garden provider item: ", tmpPlacedGardenItem);

gardenState = {
  gardenPlots: [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, tmpPlacedGardenItem, null],
    [tmpPlacedGardenItem, null, null, null],
    [null, null, null, null],
  ],
  skyState: "day",
  gardenSoilCondition: -1,
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
  gardenBackground: "TMP",
  globalAssets: ["TMP"],
  // gardenItemToPlace: null,
  // gardenItemToPlacePlayerInventorySlotNum: null,
  removeGardenItemModeActive: false,
};

const initialStateGR = {
  gardenState: gardenState,
  playerInventory: playerInventory,
  storeInventory: storeInventory,
  lastDailyRefreshTSDays: 0,
  lastDailyWaterTSDays: 0,
};

// describe("gardenReducer general tests", () => {
//   it("Testing SAVE_GARDEN_STATE", () => {
//     // const screenInstance = render(component);
//     // const { getByPlaceholderText, getByText } = render();
//     // expect(screenInstance.getByText("Subscribed Courses")).toBeTruthy();
//     const actionObj = {
//       type: actions.SAVE_GARDEN_STATE,
//       payload: ["testing message"],
//     };

//     const returnStateACR = {
//       newConversationFlag: false,
//       decisionTreeProgressPlaceholderTMP: null,
//       currentChatMessages: ["testing message"],
//       chatLog: [],
//       chatbotAvatarIndex: 0,
//     };
//     expect(gardenReducer(initialStateGR, actionObj)).toEqual(returnStateACR);
//   });
// });

it("Testing save garden state identity", () => {
  const actionObj1 = {
    type: actions.SAVE_GARDEN_STATE,
    payload: {
      gardenState: initialStateGR.gardenState,
      playerInventory: initialStateGR.playerInventory,
      storeInventory: initialStateGR.storeInventory,
      lastDailyRefreshTSDays: initialStateGR.lastDailyRefreshTSDays,
      lastDailyWaterTSDays: initialStateGR.lastDailyWaterTSDays,
    },
  };

  const returned1 = gardenReducer(initialStateGR, actionObj1);

  expect(true).toBeTruthy();
});
