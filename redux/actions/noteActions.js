import * as actions from "../constants/index";

export function addNote(note) {
  return {
    type: actions.NOTE_ADDED,
    payload: note,
  };
}
