import { ADD_BALANCE, DEDUCT_USER_BALANCE } from '../Actions/UserAction';

const initialState = {
  balance: 99,
};

const balanceRecuder = (
  state = initialState,
  action: { type: string; payload: number }
) => {
  const { type, payload } = action;
  switch (type) {
    case DEDUCT_USER_BALANCE:
      return { ...state, balance: state.balance - payload };
    case ADD_BALANCE:
      return { ...state, balance: state.balance + payload };
    default:
      return { ...state };
  }
};

export { balanceRecuder };
