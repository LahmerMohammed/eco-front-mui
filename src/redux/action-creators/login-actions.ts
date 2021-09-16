import { LOGIN_ACTIONS } from '../action-types/actions';
import { LoginDto } from '../../types/UserTypes';
import { IACTION } from '../types';
import { Dispatch } from 'redux';




export function loginRequest(user: LoginDto)  {

  
  return (dispatch: Dispatch<IACTION>) => dispatch({
    type: LOGIN_ACTIONS.REQUEST,
    payload: user
  });
}

export function loginSuccess(user: any){
  return (disptach: Dispatch<IACTION>) => disptach({
    type: LOGIN_ACTIONS.REQUEST,
  payload: user
  });
}

export function loginFailure(error: any){

  return (disptach: Dispatch<IACTION>) =>  disptach({
    type: LOGIN_ACTIONS.REQUEST,
    payload: error,
  });
}