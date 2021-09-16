
export interface IACTION
{
  type: string,
  payload?: any,
}

export interface IUserState {
  logginIn: boolean,
  loggedIn: boolean,
  user: any,
  error: any,
}