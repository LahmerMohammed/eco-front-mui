
export interface LoginDto {
  username: string,
  password: string,
}

export interface RegisterDto {
  username: string,
  email: string,
  password: string,
  rePassword: string,
}

export interface ConfirmEmailDto {
  token: string,
}

export interface ResendConfirmEmailDto {
  email: string,
}

export interface IError {
  error: string,
  message: string,
  statusCode: number,
} 


export enum Role {
  USER="user",
  ADMIN="admin",
  SUPER_ADMIN="super_admin",
  SELLER="seller",
}

export interface IUser {
  id: string,
  email: string,
  username: string,
  fullname: string,
  birthdate: Date,
  roles: Role[],
  whishlist_counter: number;
} 