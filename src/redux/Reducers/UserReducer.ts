import { LOG_IN } from '../Actions/UserAction';

export interface IUserState {
  isLoggedIn: boolean;
  userName: string;
}

const initialState: IUserState = {
  isLoggedIn: false,
  userName: '',
};

const UserReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        userName: action.payload.userName,
      };
  
    default:
      return { ...initialState };
  }
};

export default UserReducer;
