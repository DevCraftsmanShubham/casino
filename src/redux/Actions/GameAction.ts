const SLOT_UPDATE = 'slotUpdate';
const SLOT_RESET = 'slotReset';
const ADD_DATA_TO_GAME_RESULT = "addDataToGameResult";
export interface IGameAction {
  slotNumber: number;
  value: number;
}

export interface IGameResetAction {}

const GameAction = (payload: IGameAction) => {
  return {
    type: SLOT_UPDATE,
    payload,
  };
};

const ResetGameState = () => {
  return {
    type: SLOT_RESET,
  };
};

export interface IAddResult {
  id: number,
  slots: Array<number>,
  time: any,
}

const addGameResultState = (payload: IAddResult) => {
  return {
    type: ADD_DATA_TO_GAME_RESULT,
    payload
  }
}

export { GameAction, ResetGameState, SLOT_UPDATE, SLOT_RESET, ADD_DATA_TO_GAME_RESULT, addGameResultState  };
