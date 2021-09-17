import { IUser , IError } from '../../types';
import { LOGIN_ACTIONS } from '../action-types/actions';
import { IUserState } from '../types';
import { IAction } from "../types";





const initState: IUserState = {
  logginIn: false,
  loggedIn: false,
  user: {} as IUser,
  error: {} as IError,
};



export function loginReducer(state: IUserState = initState , action: IAction ) : IUserState{

  switch(action.type)
  {
    case LOGIN_ACTIONS.REQUEST: 
    {
      return { ...initState , logginIn: true};
    }

    case LOGIN_ACTIONS.SUCESS: 
    {
      return { ...state , logginIn: false , loggedIn: true , user: action.payload};
    }

    case LOGIN_ACTIONS.FAILURE: 
    {
      return {...state , logginIn: false , error: action.payload};
    }

    default: 
    {
      return state;
    }
  }

}