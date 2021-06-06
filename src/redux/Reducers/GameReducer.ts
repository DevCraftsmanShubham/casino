import { IGameAction, SLOT_RESET, SLOT_UPDATE } from '../Actions/GameAction';

const initialState = {
  slot1: 0,
  slot2: 0,
  slot3: 0,
};

const GameReducer = (
  state = initialState,
  action: { type: string; payload: IGameAction }
) => {
  const { type, payload } = action;
  switch (type) {
    case SLOT_UPDATE:
      if (payload.slotNumber === 1) {
        return {
          ...state,
          slot1: action.payload.value,
        };
      } else if (payload.slotNumber === 2) {
        return {
          ...state,
          slot2: action.payload.value,
        };
      } else if (payload.slotNumber === 3) {
        return {
          ...state,
          slot3: action.payload.value,
        };
      }
      return { ...state };
    case SLOT_RESET:
      return { ...state, slot1: 0, slot2: 0, slot3: 0 };
    default:
      return { ...initialState };
  }
};

export default GameReducer;
