const LOG_IN = 'login';
const DEDUCT_USER_BALANCE = 'deductBalance';
const ADD_BALANCE = 'addBalace'

const UserAction = (payload: { isLoggedIn: boolean; userName: string }) => {
  return {
    type: LOG_IN,
    payload,
  };
};


const DeductBalanceAction = (payload: number) => {
    return { 
        type: DEDUCT_USER_BALANCE,
        payload
    }
}

const AddBalanceAction = (payload: number) => {
    return {
        type: ADD_BALANCE,
        payload
    }
}

export { UserAction, LOG_IN, AddBalanceAction,DeductBalanceAction, DEDUCT_USER_BALANCE, ADD_BALANCE};
