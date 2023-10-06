import * as actions from "../constants/index";

export function saveGardenStateAction(
  storeInventoryP,
  playerInventoryP,
  gardenStateP,
  lastDailyRefreshTSDaysP,
  lastDailyWaterTSDaysP
) {
  return {
    type: actions.SAVE_GARDEN_STATE,
    payload: {
      storeInventory: storeInventoryP,
      playerInventory: playerInventoryP,
      gardenState: gardenStateP,
      lastDailyRefreshTSDays: lastDailyRefreshTSDaysP,
      lastDailyWaterTSDays: lastDailyWaterTSDaysP,
    },
  };
}
