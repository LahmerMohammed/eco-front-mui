import { LOAD_USER, LOGOUT } from './../action-types/actions';
import { LOGIN_ACTIONS } from '../action-types/actions';
import { IError, IUser} from '../../types/index';
import { IAction } from '../types';
import { Dispatch } from 'redux';


export const actionCreators = {
  loginRequest,
  loginFailure,
  loginSuccess,
  loadUser,
  logout,
} 


export function loginRequest(){

  
  return (dispatch: Dispatch<IAction>) => dispatch({
    type: LOGIN_ACTIONS.REQUEST,
  });
}

export function loginSuccess(user: IUser){

  return (disptach: Dispatch<IAction>) => disptach({
    type: LOGIN_ACTIONS.SUCESS,
    payload: user
  });
}

export function loginFailure(error: IError){

  return (disptach: Dispatch<IAction>) =>  disptach({
    type: LOGIN_ACTIONS.FAILURE,
    payload: error,
  });
}

export function loadUser(user: IUser){

  return (disptach: Dispatch<IAction>) =>  disptach({
    type: LOAD_USER,
    payload: user,
  });
}


export function logout(){
  return (disptach: Dispatch<IAction>) =>  disptach({type: LOGOUT});
}

