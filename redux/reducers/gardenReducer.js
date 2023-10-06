import * as actions from '../constants/index';
import produce from 'immer';
import {gardenItemsList} from '../../constants/garden/gardenItemsList';

//  NOTE: apparently only simple data sctructures and primatives are allowed in redux,
//  sets, maps, functions, classes are all not allowed

let storeInventory = {};
let playerInventory = {};
let gardenState = {};

storeInventory = {
  gardenItem1: {
    itemType: gardenItemsList[0].itemType,
    action: gardenItemsList[0].action,
    name: gardenItemsList[0].name,
    assets: gardenItemsList[0].assets,
    rarity: gardenItemsList[0].rarity,
    price: gardenItemsList[0].price,
  },
  gardenItem2: {
    itemType: gardenItemsList[1].itemType,
    action: gardenItemsList[1].action,
    name: gardenItemsList[1].name,
    assets: gardenItemsList[1].assets,
    rarity: gardenItemsList[1].rarity,
    price: gardenItemsList[1].price,
  },
  gardenItem3: {
    itemType: gardenItemsList[2].itemType,
    action: gardenItemsList[2].action,
    name: gardenItemsList[2].name,
    assets: gardenItemsList[2].assets,
    rarity: gardenItemsList[2].rarity,
    price: gardenItemsList[2].price,
  },
  gardenItem1Sold: false,
  gardenItem2Sold: false,
  gardenItem3Sold: false,
};

playerInventory = {
  gardenItems: [],
  numSeeds: 50,
};

// const tmpPlacedGardenItem = {
//   itemType: gardenItemsList[0].itemType,
//   action: gardenItemsList[0].action,
//   name: gardenItemsList[0].name,
//   assets: gardenItemsList[0].assets,
//   rarity: gardenItemsList[0].rarity,
//   price: gardenItemsList[0].price,
//   datePlaced: Date.now(),
//   health: 3,
//   happiness: 0,
//   location: "22",
//   age: 0,
// };

gardenState = {
  gardenPlots: [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ],
  skyState: 'day',
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
  gardenBackground: 'TMP',
  globalAssets: ['TMP'],
  // gardenItemToPlace: null,
  // gardenItemToPlacePlayerInventorySlotNum: null,
  removeGardenItemModeActive: false,
};

initialStateGR = {
  gardenState: gardenState,
  playerInventory: playerInventory,
  storeInventory: storeInventory,
  lastDailyRefreshTSDays: 0,
  lastDailyWaterTSDays: 0,
};
export default gardenReducer = (state = initialStateGR, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.SAVE_GARDEN_STATE:
        console.log('IN GARDEN STATE REDUCER');
        for (
          let i = 0;
          i < action.payload.gardenState.gardenPlots.length;
          i++
        ) {
          for (
            let j = 0;
            j < action.payload.gardenState.gardenPlots[i].length;
            j++
          ) {
            if (!(action.payload.gardenState.gardenPlots[i][j] == null)) {
              draft.gardenState.gardenPlots[i][j] = {
                itemType: action.payload.gardenState.gardenPlots[i][j].itemType,
                action: action.payload.gardenState.gardenPlots[i][j].action,
                name: action.payload.gardenState.gardenPlots[i][j].name,
                assets: action.payload.gardenState.gardenPlots[i][j].assets,
                rarity: action.payload.gardenState.gardenPlots[i][j].rarity,
                price: action.payload.gardenState.gardenPlots[i][j].price,
                datePlaced:
                  action.payload.gardenState.gardenPlots[i][j].datePlaced,
                health: action.payload.gardenState.gardenPlots[i][j].health,
                happiness:
                  action.payload.gardenState.gardenPlots[i][j].happiness,
                location: action.payload.gardenState.gardenPlots[i][j].location,
                age: action.payload.gardenState.gardenPlots[i][j].age,
              };
            } else {
              draft.gardenState.gardenPlots[i][j] = null;
            }
          }
        }

        for (let i = 0; i < action.payload.gardenState.weedPlots.length; i++) {
          for (
            let j = 0;
            j < action.payload.gardenState.weedPlots[i].length;
            j++
          ) {
            if (!(action.payload.gardenState.weedPlots[i][j] == null)) {
              draft.gardenState.weedPlots[i][j] = {
                itemType: action.payload.gardenState.weedPlots[i][j].itemType,
                action: action.payload.gardenState.weedPlots[i][j].action,
                name: action.payload.gardenState.weedPlots[i][j].name,
                assets: action.payload.gardenState.weedPlots[i][j].assets,
                rarity: action.payload.gardenState.weedPlots[i][j].rarity,
                price: action.payload.gardenState.weedPlots[i][j].price,
                datePlaced:
                  action.payload.gardenState.weedPlots[i][j].datePlaced,
                health: action.payload.gardenState.weedPlots[i][j].health,
                happiness: action.payload.gardenState.weedPlots[i][j].happiness,
                location: action.payload.gardenState.weedPlots[i][j].location,
                age: action.payload.gardenState.weedPlots[i][j].age,
              };
            } else {
              draft.gardenState.weedPlots[i][j] = null;
            }
          }
        }

        // draft.gardenState = {
        //   skyState: action.payload.gardenState.skyState,
        //   gardenSoilCondition: action.payload.gardenState.gardenSoilCondition,
        //   gardenBackground: action.payload.gardenState.gardenBackground,
        //   globalAssets: action.payload.gardenState.globalAssets,
        //   gardenItemToPlace: action.payload.gardenState.gardenItemToPlace,
        //   gardenItemToPlacePlayerInventorySlotNum:
        //     action.payload.gardenState.gardenItemToPlacePlayerInventorySlotNum,
        //   removeGardenItemModeActive:
        //     action.payload.gardenState.removeGardenItemModeActive,
        // };

        draft.gardenState.skyState = action.payload.gardenState.skyState;
        draft.gardenState.gardenSoilCondition =
          action.payload.gardenState.gardenSoilCondition;
        draft.gardenState.gardenBackground =
          action.payload.gardenState.gardenBackground;
        draft.gardenState.globalAssets =
          action.payload.gardenState.globalAssets;
        draft.gardenState.removeGardenItemModeActive =
          action.payload.gardenState.removeGardenItemModeActive;

        draft.playerInventory = {
          gardenItems: action.payload.playerInventory.gardenItems.map(item => {
            console.log('New item saved to player inventory: ', item.name);
            return {
              itemType: item.itemType,
              action: item.action,
              name: item.name,
              assets: item.assets,
              rarity: item.rarity,
              price: item.price,
            };
          }),
          numSeeds: action.payload.playerInventory.numSeeds,
        };

        draft.storeInventory = {
          gardenItem1: {
            itemType: action.payload.storeInventory.gardenItem1.itemType,
            action: action.payload.storeInventory.gardenItem1.action,
            name: action.payload.storeInventory.gardenItem1.name,
            assets: action.payload.storeInventory.gardenItem1.assets,
            rarity: action.payload.storeInventory.gardenItem1.rarity,
            price: action.payload.storeInventory.gardenItem1.price,
          },
          gardenItem2: {
            itemType: action.payload.storeInventory.gardenItem2.itemType,
            action: action.payload.storeInventory.gardenItem2.action,
            name: action.payload.storeInventory.gardenItem2.name,
            assets: action.payload.storeInventory.gardenItem2.assets,
            rarity: action.payload.storeInventory.gardenItem2.rarity,
            price: action.payload.storeInventory.gardenItem2.price,
          },
          gardenItem3: {
            itemType: action.payload.storeInventory.gardenItem3.itemType,
            action: action.payload.storeInventory.gardenItem3.action,
            name: action.payload.storeInventory.gardenItem3.name,
            assets: action.payload.storeInventory.gardenItem3.assets,
            rarity: action.payload.storeInventory.gardenItem3.rarity,
            price: action.payload.storeInventory.gardenItem3.price,
          },
          gardenItem1Sold: action.payload.storeInventory.gardenItem1Sold,
          gardenItem2Sold: action.payload.storeInventory.gardenItem2Sold,
          gardenItem3Sold: action.payload.storeInventory.gardenItem3Sold,
        };

        draft.lastDailyRefreshTSDays = action.payload.lastDailyRefreshTSDays;
        draft.lastDailyWaterTSDays = action.payload.lastDailyWaterTSDays;

        break;
      default:
        break;
    }
  });
