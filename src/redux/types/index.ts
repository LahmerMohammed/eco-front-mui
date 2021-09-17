import { IUser } from "../../types";

export interface IAction
{
  type: string,
  payload?: any,
}

export interface IUserState {
  logginIn: boolean,
  loggedIn: boolean,
  user: IUser,
  error: any,
}
