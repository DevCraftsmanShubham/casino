import { ADD_DATA_TO_GAME_RESULT } from '../Actions/GameAction';


const initialState = {
  data: [],
};

const GameResultReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_DATA_TO_GAME_RESULT:
      return { ...state };
    default:
      return { ...state };
  }
};

export default GameResultReducer;
