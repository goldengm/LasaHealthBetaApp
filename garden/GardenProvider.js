import React from 'react';
import {Dimensions, DeviceEventEmitter} from 'react-native';
import produce from 'immer';

import {GardenItem, PlacedGardenItem} from './GardenItem';
import {gardenItemsList} from '../constants/garden/gardenItemsList';
import {saveGardenStateAction} from '../redux/actions/gardenActions';
import {statsConstants} from '../shared/AnalysisUtils';

import {Images, theme} from '../constants';

import PlatformUtils from '../shared/PlatformUtils';

// const {width, height} = Dimensions.get('screen');
// const iosPlatform = () => PlatformUtils.getOS() == 'ios';

export const GardenContext = React.createContext();

export class GardenProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storeInventory: null,
      playerInventory: null,
      gardenState: null,
      lastDailyRefreshTSDays: null,
      lastDailyWaterTSDays: null,
    };
  }

  componentDidMount() {}

  setLastDailyRefreshTSDays = async lastDailyRefreshTSDaysP => {
    return this.setState({lastDailyRefreshTSDays: lastDailyRefreshTSDaysP});
  };

  getLastDailyRefreshTSDays = () => {
    return this.state.lastDailyRefreshTSDays;
  };

  setLastDailyWaterTSDays = async lastDailyWaterTSDaysP => {
    return this.setState({lastDailyWaterTSDays: lastDailyWaterTSDaysP});
  };

  getCurrentTimestampDays = () => {
    return Math.floor(Date.now() / statsConstants.dayLengthMilliseconds);
  };

  loadGardenStateForNewUser = async passedState => {
    console.log('GARDEN PROVIDER passedState: ', passedState);
    return Promise.resolve()
      .then(() =>
        this.setState(
          produce(draft => {
            const [
              storeInventoryP,
              playerInventoryP,
              gardenStateP,
              lastDailyRefreshTSDaysP,
              lastDailyWaterTSDaysP,
            ] = this.loadSavedStateFromRedux(passedState);

            draft.storeInventory = storeInventoryP;
            draft.playerInventory = playerInventoryP;
            draft.gardenState = gardenStateP;
            draft.lastDailyRefreshTSDays = lastDailyRefreshTSDaysP;
            draft.lastDailyWaterTSDays = lastDailyWaterTSDaysP;
          }),
        ),
      )
      .catch(error => {
        console.log(error);
      });
  };

  //  FIXMETUNA:  something is breaking here, with the following error message
  // ERROR  TypeError: undefined is not an object (evaluating '_passedState.gardenItem1')
  loadSavedStateFromRedux = passedState => {
    //  FIXMETUNA: when the game controller is first loaded, it will convert all saved json garden data
    //  into game state objects (this is because the game must be run from state, not redux so it
    //  can refresh properly... I'll just need to save the current state back to redux occationally)
    //  FIXMETUNA:  objects to restore: storeInventory, playerInventory, gardenState

    console.log('GARDEN passed state: ', passedState);

    let storeInventory = {};
    let playerInventory = {};
    let gardenState = {};

    //  TMP start for set state for debug

    storeInventory = {
      gardenItem1: new GardenItem(
        (itemType = passedState.storeInventory.gardenItem1.itemType),
        (action = passedState.storeInventory.gardenItem1.action),
        (name = passedState.storeInventory.gardenItem1.name),
        (assets = passedState.storeInventory.gardenItem1.assets),
        (rarity = passedState.storeInventory.gardenItem1.rarity),
        (price = passedState.storeInventory.gardenItem1.price),
      ),
      gardenItem2: new GardenItem(
        (itemType = passedState.storeInventory.gardenItem2.itemType),
        (action = passedState.storeInventory.gardenItem2.action),
        (name = passedState.storeInventory.gardenItem2.name),
        (assets = passedState.storeInventory.gardenItem2.assets),
        (rarity = passedState.storeInventory.gardenItem2.rarity),
        (price = passedState.storeInventory.gardenItem2.price),
      ),
      gardenItem3: new GardenItem(
        (itemType = passedState.storeInventory.gardenItem3.itemType),
        (action = passedState.storeInventory.gardenItem3.action),
        (name = passedState.storeInventory.gardenItem3.name),
        (assets = passedState.storeInventory.gardenItem3.assets),
        (rarity = passedState.storeInventory.gardenItem3.rarity),
        (price = passedState.storeInventory.gardenItem3.price),
      ),
      gardenItem1Sold: passedState.storeInventory.gardenItem1Sold,
      gardenItem2Sold: passedState.storeInventory.gardenItem2Sold,
      gardenItem3Sold: passedState.storeInventory.gardenItem3Sold,
    };

    playerInventory = {
      gardenItems: passedState.playerInventory.gardenItems.map(item => {
        return new GardenItem(
          (itemType = item.itemType),
          (action = item.action),
          (name = item.name),
          (assets = item.assets),
          (rarity = item.rarity),
          (price = item.price),
        );
      }),
      numSeeds: passedState.playerInventory.numSeeds,
    };

    //  FIXMETUNA:
    //  FIXMETUNA:  Fix the garden plot loading here
    //  FIXMETUNA:
    gardenState = {
      gardenPlots: [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
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
      skyState: passedState.gardenState.skyState,
      gardenSoilCondition: passedState.gardenState.gardenSoilCondition,
      gardenBackground: passedState.gardenState.gardenBackground,
      globalAssets: passedState.gardenState.globalAssets,
      removeGardenItemModeActive:
        passedState.gardenState.removeGardenItemModeActive,
    };

    for (let i = 0; i < passedState.gardenState.gardenPlots.length; i++) {
      for (let j = 0; j < passedState.gardenState.gardenPlots[i].length; j++) {
        if (!(passedState.gardenState.gardenPlots[i][j] == null)) {
          gardenState.gardenPlots[i][j] = {
            itemType: passedState.gardenState.gardenPlots[i][j].itemType,
            action: passedState.gardenState.gardenPlots[i][j].action,
            name: passedState.gardenState.gardenPlots[i][j].name,
            assets: passedState.gardenState.gardenPlots[i][j].assets,
            rarity: passedState.gardenState.gardenPlots[i][j].rarity,
            price: passedState.gardenState.gardenPlots[i][j].price,
            datePlaced: passedState.gardenState.gardenPlots[i][j].datePlaced,
            health: passedState.gardenState.gardenPlots[i][j].health,
            happiness: passedState.gardenState.gardenPlots[i][j].happiness,
            location: passedState.gardenState.gardenPlots[i][j].location,
            age: passedState.gardenState.gardenPlots[i][j].age,
          };
        }
      }
    }

    for (let i = 0; i < passedState.gardenState.weedPlots.length; i++) {
      for (let j = 0; j < passedState.gardenState.weedPlots[i].length; j++) {
        if (!(passedState.gardenState.weedPlots[i][j] == null)) {
          gardenState.weedPlots[i][j] = {
            itemType: passedState.gardenState.weedPlots[i][j].itemType,
            action: passedState.gardenState.weedPlots[i][j].action,
            name: passedState.gardenState.weedPlots[i][j].name,
            assets: passedState.gardenState.weedPlots[i][j].assets,
            rarity: passedState.gardenState.weedPlots[i][j].rarity,
            price: passedState.gardenState.weedPlots[i][j].price,
            datePlaced: passedState.gardenState.weedPlots[i][j].datePlaced,
            health: passedState.gardenState.weedPlots[i][j].health,
            happiness: passedState.gardenState.weedPlots[i][j].happiness,
            location: passedState.gardenState.weedPlots[i][j].location,
            age: passedState.gardenState.weedPlots[i][j].age,
          };
        }
      }
    }

    const lastDailyRefreshTSDays = passedState.lastDailyRefreshTSDays;
    const lastDailyWaterTSDays = passedState.lastDailyWaterTSDays;

    return [
      storeInventory,
      playerInventory,
      gardenState,
      lastDailyRefreshTSDays,
      lastDailyWaterTSDays,
    ];
  };

  // gardenState = {
  //   gardenPlots: [[null, null, null, null],
  //                 [null, null, null, null],
  //                 [null, null, null, null],
  //                 [null, null, null, null],
  //                 [null, null, null, null], ],
  //   skyState: ["day", "night", "storm", "rain", "etc"],
  //   gardenSoilCondition: [0 - 3],
  //   weedPlots: [[null, null, null, null, null, null, null],
  //               [null, null, null, null, null, null, null],
  //               [null, null, null, null, null, null, null],
  //               [null, null, null, null, null, null, null],
  //               [null, null, null, null, null, null, null],
  //               [null, null, null, null, null, null, null],
  //               [null, null, null, null, null, null, null],
  //               [null, null, null, null, null, null, null],
  //               [null, null, null, null, null, null, null],
  //               [null, null, null, null, null, null, null], ],
  //   gardenBackground: "TMP",
  //   globalAssets: ["TMP"]
  // };

  saveStateToRedux = async dispatch => {
    //  FIXMETUNA:  save current state back out to redux
    console.log('SAVING GARDEN TO REDUX');
    return dispatch(
      saveGardenStateAction(
        this.state.storeInventory,
        this.state.playerInventory,
        this.state.gardenState,
        this.state.lastDailyRefreshTSDays,
        this.state.lastDailyWaterTSDays,
      ),
    );
  };

  checkForDailyGardenUpdate = dispatch => {
    if (this.state.lastDailyRefreshTSDays < this.getCurrentTimestampDays()) {
      Promise.resolve()
        .then(() => this.tickDownGardenHealth())
        .then(() => this.refreshStore())
        .then(() =>
          this.setLastDailyRefreshTSDays(this.getCurrentTimestampDays()),
        )
        .then(() => this.saveStateToRedux(dispatch))
        .catch(error => {
          console.log(error);
        });
    }
  };

  tickDownGardenHealth = async () => {
    return this.setState(
      produce(draft => {
        draft.gardenState.gardenSoilCondition =
          draft.gardenState.gardenSoilCondition - 1;
        for (let i = 0; i < draft.gardenState.gardenPlots.length; i++) {
          for (let j = 0; j < draft.gardenState.gardenPlots[i].length; j++) {
            if (!(draft.gardenState.gardenPlots[i][j] == null)) {
              draft.gardenState.gardenPlots[i][j].health =
                draft.gardenState.gardenPlots[i][j].health - 1;
              draft.gardenState.gardenPlots[i][j].age =
                draft.gardenState.gardenPlots[i][j].age + 1;
              //  check for flower death
              if (draft.gardenState.gardenPlots[i][j].health == -5) {
                if (Math.random() < 0.33) {
                  draft.gardenState.gardenPlots[i][j].health = -999;
                }
              }
            } else {
              //  there is a 5% chance for each empty space to get a weed each day
              if (Math.random() < 0.05) {
                draft.gardenState.gardenPlots[i][j] = new PlacedGardenItem(
                  (itemType = 'weed'),
                  (action = 'weed'),
                  (name = 'weed'),
                  (assets = {
                    generalStaticImage: Images.garden.weed0_0,
                    health0StaticImage: Images.garden.weed0_0,
                    health1StaticImage: Images.garden.weed0_0,
                    health2StaticImage: Images.garden.weed0_0,
                    health3StaticImage: Images.garden.weed0_0,
                  }),
                  (rarity = 0.0),
                  (price = 0),
                  (datePlaced = Date.now()),
                  (health = -999999999),
                  (happiness = 0),
                  (location = i.toString() + j.toString()),
                  (age = 0),
                );
              }
            }
          }
        }
      }),
    );
  };

  waterGarden = dispatch => {
    if (this.state.lastDailyWaterTSDays < this.getCurrentTimestampDays()) {
      DeviceEventEmitter.emit('event.toastNotification', {
        text: '💧 Garden watered 💧',
        containerStyle: {
          backgroundColor: theme.COLORS.TERTIARY1,
        },
        textStyle: {color: theme.COLORS.WHITE},
      });

      Promise.resolve()
        .then(() =>
          this.setState(
            produce(draft => {
              draft.gardenState.gardenSoilCondition = 0;
              for (let i = 0; i < draft.gardenState.gardenPlots.length; i++) {
                for (
                  let j = 0;
                  j < draft.gardenState.gardenPlots[i].length;
                  j++
                ) {
                  if (!(draft.gardenState.gardenPlots[i][j] == null)) {
                    //  add 2 health to offset the daily countdown. If you water your plant each day
                    //  -1 for daily tick down, then +2 for watering, you'll get a net of +1 for the day
                    draft.gardenState.gardenPlots[i][j].health =
                      draft.gardenState.gardenPlots[i][j].health + 2;
                    if (draft.gardenState.gardenPlots[i][j].health < 0) {
                      //  if the plant's isn't already dead (<-100), revive
                      if (draft.gardenState.gardenPlots[i][j].health > -100) {
                        //  0 is the current minimum for a watered plant
                        draft.gardenState.gardenPlots[i][j].health = 0;
                      }
                    } else if (draft.gardenState.gardenPlots[i][j].health > 5) {
                      //  6 health is the current maximum for a watered plant
                      draft.gardenState.gardenPlots[i][j].health = 6;
                    }
                  }
                }
              }
            }),
          ),
        )
        .then(() =>
          this.setLastDailyWaterTSDays(this.getCurrentTimestampDays()),
        )
        .then(() => this.saveStateToRedux(dispatch))
        .catch(error => {
          console.log(error);
        });
    }
  };

  addSeedsToPlayerInventory = (dispatch, numSeedsToAdd) => {
    DeviceEventEmitter.emit('event.toastNotification', {
      text: '+' + numSeedsToAdd.toString() + ' seeds',
    });

    Promise.resolve()
      .then(() =>
        this.setState(
          produce(draft => {
            draft.playerInventory.numSeeds =
              draft.playerInventory.numSeeds + numSeedsToAdd;
          }),
        ),
      )
      .then(() => this.saveStateToRedux(dispatch))
      .catch(error => {
        console.log(error);
      });
  };

  rollForGardenItems = async numItemsRequested => {
    return Promise.resolve()
      .then(() => {
        let requestedItems = [];
        let maximumValue = 0.0;
        let indexDivisionValues = [];
        for (let gardenItem of gardenItemsList) {
          maximumValue += gardenItem.rarity;
          indexDivisionValues = indexDivisionValues.concat(maximumValue);
        }

        for (let i = 0; i < numItemsRequested; i++) {
          const randVal = Math.random() * maximumValue;
          for (let j = 0; j < indexDivisionValues.length; j++) {
            if (randVal <= indexDivisionValues[j]) {
              requestedItems = requestedItems.concat(gardenItemsList[j]);
              break;
            }
          }
        }
        console.log('REQUESTED ITEMS: ', requestedItems, numItemsRequested);
        return requestedItems;
      })
      .catch(error => {
        console.log(error);
      });
  };

  refreshStore = async () => {
    return Promise.resolve()
      .then(() => this.rollForGardenItems(3))
      .then(([gardenItem1, gardenItem2, gardenItem3]) =>
        this.setState(
          produce(draft => {
            draft.storeInventory.gardenItem1Sold = false;
            draft.storeInventory.gardenItem2Sold = false;
            draft.storeInventory.gardenItem3Sold = false;

            draft.storeInventory.gardenItem1 = new GardenItem(
              (itemType = gardenItem1.itemType),
              (action = gardenItem1.action),
              (name = gardenItem1.name),
              (assets = gardenItem1.assets),
              (rarity = gardenItem1.rarity),
              (price = gardenItem1.price),
            );
            draft.storeInventory.gardenItem2 = new GardenItem(
              (itemType = gardenItem2.itemType),
              (action = gardenItem2.action),
              (name = gardenItem2.name),
              (assets = gardenItem2.assets),
              (rarity = gardenItem2.rarity),
              (price = gardenItem2.price),
            );
            draft.storeInventory.gardenItem3 = new GardenItem(
              (itemType = gardenItem3.itemType),
              (action = gardenItem3.action),
              (name = gardenItem3.name),
              (assets = gardenItem3.assets),
              (rarity = gardenItem3.rarity),
              (price = gardenItem3.price),
            );
          }),
        ),
      )
      .catch(error => {
        console.log(error);
      });
  };

  buyItemFromStore = (dispatch, itemSlotNum) => {
    console.log('BUYING ITEM FROM STORE, ', itemSlotNum);
    Promise.resolve()
      .then(() =>
        this.setState(
          produce(draft => {
            if (itemSlotNum == 0) {
              if (
                draft.storeInventory.gardenItem1.price <=
                draft.playerInventory.numSeeds
              ) {
                console.log('BUYING 1st');
                draft.playerInventory.numSeeds =
                  draft.playerInventory.numSeeds -
                  draft.storeInventory.gardenItem1.price;

                draft.storeInventory.gardenItem1Sold = true;
                draft.playerInventory.gardenItems =
                  draft.playerInventory.gardenItems.concat(
                    draft.storeInventory.gardenItem1,
                  );
              }
            } else if (itemSlotNum == 1) {
              if (
                draft.storeInventory.gardenItem2.price <=
                draft.playerInventory.numSeeds
              ) {
                console.log('BUYING 2nd');
                draft.playerInventory.numSeeds =
                  draft.playerInventory.numSeeds -
                  draft.storeInventory.gardenItem2.price;

                draft.storeInventory.gardenItem2Sold = true;
                draft.playerInventory.gardenItems =
                  draft.playerInventory.gardenItems.concat(
                    draft.storeInventory.gardenItem2,
                  );
              }
            } else {
              if (
                draft.storeInventory.gardenItem3.price <=
                draft.playerInventory.numSeeds
              ) {
                console.log('BUYING 3rd');
                draft.playerInventory.numSeeds =
                  draft.playerInventory.numSeeds -
                  draft.storeInventory.gardenItem3.price;

                draft.storeInventory.gardenItem3Sold = true;
                draft.playerInventory.gardenItems =
                  draft.playerInventory.gardenItems.concat(
                    draft.storeInventory.gardenItem3,
                  );
              }
            }
          }),
        ),
      )
      .then(() => this.saveStateToRedux(dispatch))
      .then(() => console.log('AFTER BUY ITEMS PLAYER INVENTORY: ', this.props))
      .catch(error => {
        console.log(error);
      });
  };

  plantInventoryItemInGarden = (
    dispatch,
    playerInventorySlotNum,
    gardenRow,
    gardenCol,
  ) => {
    console.log(
      'PLANTING INVENTORY ITEM IN GARDEN: ',
      playerInventorySlotNum,
      gardenRow,
      gardenCol,
    );
    Promise.resolve()
      .then(() =>
        this.setState(
          produce(draft => {
            const tmpPlacedGardenItem = new PlacedGardenItem(
              (itemType =
                draft.playerInventory.gardenItems[playerInventorySlotNum]
                  .itemType),
              (action =
                draft.playerInventory.gardenItems[playerInventorySlotNum]
                  .action),
              (name =
                draft.playerInventory.gardenItems[playerInventorySlotNum].name),
              (assets =
                draft.playerInventory.gardenItems[playerInventorySlotNum]
                  .assets),
              (rarity =
                draft.playerInventory.gardenItems[playerInventorySlotNum]
                  .rarity),
              (price =
                draft.playerInventory.gardenItems[playerInventorySlotNum]
                  .price),
              (datePlaced = Date.now()),
              (health = 0),
              (happiness = 0),
              (location = gardenRow.toString() + gardenCol.toString()),
              (age = 0),
            );

            draft.gardenState.gardenPlots[gardenRow][gardenCol] =
              tmpPlacedGardenItem;

            draft.playerInventory.gardenItems =
              draft.playerInventory.gardenItems.filter(
                (_, index) => index !== playerInventorySlotNum,
              );
          }),
        ),
      )
      .then(() => this.saveStateToRedux(dispatch))
      .catch(error => {
        console.log(error);
      });
  };

  removeItemFromGarden = (dispatch, gardenRow, gardenCol) => {
    Promise.resolve()
      .then(() =>
        this.setState(
          produce(draft => {
            draft.gardenState.gardenPlots[gardenRow][gardenCol] = null;
          }),
        ),
      )
      .then(() => this.saveStateToRedux(dispatch))
      .catch(error => {
        console.log(error);
      });
  };

  setRemoveGardenItemModeActive = newValue => {
    this.setState(
      produce(draft => {
        draft.gardenState.removeGardenItemModeActive = newValue;
      }),
    );
  };

  render = () => {
    return (
      <GardenContext.Provider
        value={{
          storeInventory: this.state.storeInventory,
          playerInventory: this.state.playerInventory,
          gardenState: this.state.gardenState,
          getLastDailyRefreshTSDays: this.getLastDailyRefreshTSDays,
          loadGardenStateForNewUser: this.loadGardenStateForNewUser,
          tickDownGardenHealth: this.tickDownGardenHealth,
          waterGarden: this.waterGarden,
          addSeedsToPlayerInventory: this.addSeedsToPlayerInventory,
          refreshStore: this.refreshStore,
          buyItemFromStore: this.buyItemFromStore,
          plantInventoryItemInGarden: this.plantInventoryItemInGarden,
          removeItemFromGarden: this.removeItemFromGarden,
          setRemoveGardenItemModeActive: this.setRemoveGardenItemModeActive,
          checkForDailyGardenUpdate: this.checkForDailyGardenUpdate,
        }}>
        {this.props.children}
      </GardenContext.Provider>
    );
  };
}

export default GardenProvider;
