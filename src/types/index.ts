
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
  birthdate: Date,
  phonenumber: string;
  roles: Role[],
  whishlist_counter: number;
} 

export interface IAddress {
  id: string | null;
  name: string;
  address_line: string;
  phonenumber: string;
  user_id: string | null;
}
