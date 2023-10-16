import React from 'react';
import {shallow} from 'enzyme';

import {GardenProvider} from '../../garden/gardenProvider';
import {GardenItem, PlacedGardenItem} from '../../garden/GardenItem';
// import { waitForDebugger } from "inspector";

// jest.mock('react-native-elements', () => ({}));

jest.mock('react-native-elements', () => ({
  createTheme: jest.fn(() => {}),
}));

jest.mock('expo-print', () => ({}));
jest.mock('expo-sharing', () => ({}));
jest.mock('@react-native-firebase/functions', () => ({}));
jest.mock('../../shared/PlatformUtils', () => ({
  getOS: jest.fn(() => 'android'),
}));

// jest
//   .spyOn("../shared/PlatformUtils", "getOS")
//   .mockImplementation(() => "android");

// jest
//   .spyOn("../shared/PlatformUtils", "getOS")
//   .mockImplementation(() => "android");

// Object.defineProperty(Platform, "OS", { get: jest.fn(() => "android") });
// jest.mock("getOS()", () => ({ OS: false }));
// jest.mock("Platform", () => {
//   class Platform {
//     constructor() {
//       this.OS = "android";
//     }
//     select = () => {};
//   }
//   // const Platform = { OS: "android", Select: () => {} };
//   // getOS() = "android";
//   // Platform.Select = () => {};
//   return new Platform();
// });

//  largely just test gardenProvider generally for now, gardenUtils and gardenItem are
//  relatively simple and don't require testing atm

const localStateTMP = {
  storeInventory: {
    gardenItem1: new GardenItem(
      (itemType = 'itemType1'),
      (action = 'action1'),
      (name = 'name1'),
      (assets = 'assets1'),
      (rarity = 0.1),
      (price = 10),
    ),
    gardenItem2: new GardenItem(
      (itemType = 'itemType2'),
      (action = 'action2'),
      (name = 'name2'),
      (assets = 'assets2'),
      (rarity = 0.2),
      (price = 20),
    ),
    gardenItem3: new GardenItem(
      (itemType = 'itemType3'),
      (action = 'action3'),
      (name = 'name3'),
      (assets = 'assets3'),
      (rarity = 0.3),
      (price = 30),
    ),
    gardenItem1Sold: false,
    gardenItem2Sold: false,
    gardenItem3Sold: true,
  },

  playerInventory: {
    gardenItems: [
      new GardenItem(
        (itemType = 'itemType4'),
        (action = 'action4'),
        (name = 'name4'),
        (assets = 'assets4'),
        (rarity = 'rarity4'),
        (price = 'price4'),
      ),
      new GardenItem(
        (itemType = 'itemType5'),
        (action = 'action5'),
        (name = 'name5'),
        (assets = 'assets5'),
        (rarity = 'rarity5'),
        (price = 'price5'),
      ),
    ],
    numSeeds: 1000,
  },

  gardenState: {
    gardenPlots: [
      [null, null, null, null],
      [null, null, null, null],
      [
        null,
        null,
        null,
        new PlacedGardenItem(
          (itemType = 'itemType000'),
          (action = 'action000'),
          (name = 'name000'),
          (assets = 'assets000'),
          (rarity = 0.1),
          (price = 10),
          (datePlaced = '000'),
          (health = 0),
          (happiness = 0),
          (location = '23'),
          (age = 0),
        ),
      ],
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
      [
        null,
        null,
        null,
        null,
        null,
        null,
        new PlacedGardenItem(
          (itemType = 'itemType000'),
          (action = 'action000'),
          (name = 'name000'),
          (assets = 'assets000'),
          (rarity = 0.1),
          (price = 10),
          (datePlaced = '000'),
          (health = 0),
          (happiness = 0),
          (location = '23'),
          (age = 0),
        ),
      ],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ],
    skyState: 0,
    gardenSoilCondition: 0,
    gardenBackground: 'gardenBackground1',
    globalAssets: 'globalAssets1',
    // gardenItemToPlace: "",
    // gardenItemToPlacePlayerInventorySlotNum: -1,
    removeGardenItemModeActive: false,
  },

  lastDailyRefreshTSDays: '-1',
  lastDailyWaterTSDays: '-1',
};

it('Testing GardenProvider loading and initialization', async () => {
  expect(GardenProvider).toBeTruthy();
  const gpInstance = await new GardenProvider();
  expect(gpInstance).toBeTruthy();
  expect(gpInstance.state.gardenState == null).toBeTruthy();
});

// it("Testing GardenProvider loading garden state", async () => {
//   const gpInstance = await shallow(<GardenProvider />);
//   expect(gpInstance).toBeTruthy();
//   await gpInstance.instance().loadGardenStateForNewUser(localStateTMP);
//   expect(gpInstance.instance().state.storeInventory.gardenItem1).toBeTruthy();
//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem1.itemType ==
//       "itemType1"
//   ).toBeTruthy();
//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem3.rarity == 0.3
//   ).toBeTruthy();
//   //  FIXMETUNA:  not sure if this is checking for the correct thing or not, seems
//   //  the GardenItem object is represented as an array?
//   expect(
//     gpInstance.instance().state.playerInventory.gardenItems[0][0].getName()
//   ).toEqual("name4");
//   expect(
//     gpInstance.instance().state.gardenState.gardenPlots[2][3].action ==
//       "action000"
//   ).toBeTruthy();
// });

// it("Testing GardenProvider tickDownGardenHealth", async () => {
//   const gpInstance = await shallow(<GardenProvider />);
//   await gpInstance.instance().loadGardenStateForNewUser(localStateTMP);
//   expect(gpInstance.instance()).toBeTruthy();

//   expect(
//     gpInstance.instance().state.gardenState.gardenPlots[2][3].health
//   ).toEqual(0);
//   expect(gpInstance.instance().state.gardenState.gardenSoilCondition).toEqual(
//     0
//   );
//   await gpInstance.instance().tickDownGardenHealth();
//   expect(
//     gpInstance.instance().state.gardenState.gardenPlots[2][3].health
//   ).toEqual(-1);
//   expect(gpInstance.instance().state.gardenState.gardenSoilCondition).toEqual(
//     -1
//   );
// });

// it("Testing GardenProvider waterGarden", async () => {
//   const gpInstance = await shallow(<GardenProvider />);
//   await gpInstance.instance().loadGardenStateForNewUser(localStateTMP);
//   expect(gpInstance.instance()).toBeTruthy();

//   expect(
//     gpInstance.instance().state.gardenState.gardenPlots[2][3].health
//   ).toEqual(0);
//   expect(gpInstance.instance().state.gardenState.gardenSoilCondition).toEqual(
//     0
//   );
//   await gpInstance.instance().waterGarden();
//   expect(
//     gpInstance.instance().state.gardenState.gardenPlots[2][3].health
//   ).toEqual(2);
//   expect(gpInstance.instance().state.gardenState.gardenSoilCondition).toEqual(
//     0
//   );
// });

// it("Testing GardenProvider full tickdown / Water cycle", async () => {
//   const gpInstance = await shallow(<GardenProvider />);
//   await gpInstance.instance().loadGardenStateForNewUser(localStateTMP);
//   expect(gpInstance.instance()).toBeTruthy();

//   expect(
//     gpInstance.instance().state.gardenState.gardenPlots[2][3].health
//   ).toEqual(0);
//   expect(gpInstance.instance().state.gardenState.gardenSoilCondition).toEqual(
//     0
//   );
//   await gpInstance.instance().tickDownGardenHealth();
//   await gpInstance.instance().waterGarden();
//   expect(
//     gpInstance.instance().state.gardenState.gardenPlots[2][3].health
//   ).toEqual(1);
//   expect(gpInstance.instance().state.gardenState.gardenSoilCondition).toEqual(
//     0
//   );
// });

// it("Testing GardenProvider add seeds", async () => {
//   const gpInstance = await shallow(<GardenProvider />);
//   await gpInstance.instance().loadGardenStateForNewUser(localStateTMP);
//   expect(gpInstance.instance()).toBeTruthy();

//   expect(gpInstance.instance().state.playerInventory.numSeeds).toEqual(1000);
//   await gpInstance.instance().addSeedsToPlayerInventory(20);
//   expect(gpInstance.instance().state.playerInventory.numSeeds).toEqual(1020);
// });

// it("Testing GardenProvider refresh store", async () => {
//   const gpInstance = await shallow(<GardenProvider />);
//   await gpInstance.instance().loadGardenStateForNewUser(localStateTMP);
//   expect(gpInstance.instance()).toBeTruthy();

//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem1.itemType
//   ).toEqual("itemType1");
//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem2.itemType
//   ).toEqual("itemType2");
//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem3.itemType
//   ).toEqual("itemType3");
//   await gpInstance.instance().refreshStore();
//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem1.itemType
//   ).not.toEqual("itemType1");
//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem2.itemType
//   ).not.toEqual("itemType2");
//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem3.itemType
//   ).not.toEqual("itemType3");
// });

// it("Testing GardenProvider refresh store", async () => {
//   const gpInstance = await shallow(<GardenProvider />);
//   await gpInstance.instance().loadGardenStateForNewUser(localStateTMP);
//   expect(gpInstance.instance()).toBeTruthy();

//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem1.itemType
//   ).toEqual("itemType1");
//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem2.itemType
//   ).toEqual("itemType2");
//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem3.itemType
//   ).toEqual("itemType3");
//   await gpInstance.instance().refreshStore();
//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem1.itemType
//   ).not.toEqual("itemType1");
//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem2.itemType
//   ).not.toEqual("itemType2");
//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem3.itemType
//   ).not.toEqual("itemType3");
// });

// it("Testing GardenProvider refresh store", async () => {
//   const gpInstance = await shallow(<GardenProvider />);
//   await gpInstance.instance().loadGardenStateForNewUser(localStateTMP);
//   expect(gpInstance.instance()).toBeTruthy();

//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem2Sold
//   ).not.toBeTruthy();
//   await gpInstance.instance().buyItemFromStore(1);
//   expect(
//     gpInstance.instance().state.storeInventory.gardenItem2Sold
//   ).toBeTruthy();
// });

// //  TODO:
// // plantInventoryItemInGarden
// // removeItemFromGarden
