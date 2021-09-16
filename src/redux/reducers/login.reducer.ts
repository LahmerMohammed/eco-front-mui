import { LOGIN_ACTIONS } from '../action-types/actions';
import { IUserState } from '../types';
import { IACTION } from "../types";





const initState: IUserState = {
  logginIn: false,
  loggedIn: false,
  user: {},
  error: {},
};



export function loginReducer(state: IUserState = initState , action: IACTION ) : IUserState{

  switch(action.type)
  {
    case LOGIN_ACTIONS.REQUEST: 
    {
      return { ...state , logginIn: true};
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
      return {...state}
    }
  }

}