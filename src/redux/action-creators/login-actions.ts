import { LOGIN_ACTIONS } from '../action-types/actions';
import { IError, IUser} from '../../types/index';
import { IAction } from '../types';
import { Dispatch } from 'redux';


export const actionCreators = {
  loginRequest,
  loginFailure,
  loginSuccess
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