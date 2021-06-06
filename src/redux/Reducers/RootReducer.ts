import { combineReducers } from 'redux';
import { balanceRecuder } from './BalanceReducer';
import GameReducer from './GameReducer';
import UserReducer from './UserReducer';


const rootReducer = combineReducers({
    user: UserReducer,
    gameState: GameReducer,
    balance: balanceRecuder
});

export default rootReducer