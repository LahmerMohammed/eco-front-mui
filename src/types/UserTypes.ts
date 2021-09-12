
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