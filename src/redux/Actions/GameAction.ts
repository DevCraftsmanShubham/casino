const SLOT_UPDATE = 'slotUpdate';
const SLOT_RESET = 'slotReset';

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

export { GameAction, ResetGameState, SLOT_UPDATE, SLOT_RESET };
