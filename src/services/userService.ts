import { ConfirmEmailDto, LoginDto, RegisterDto } from './../types/UserTypes';

import {api} from './base' 

const subUrl = "auth"

class UserService {


  async login(userLogin: LoginDto) {
    try {
      return await (
        await api.post(subUrl + "/login", userLogin)
      ).data;
    } catch (error: any) {

      return error.response.data;
    }
  }

  async register(userRegister: RegisterDto) {

    try {
      return await ( await api.post(subUrl + "/register", userRegister)).data;
    } catch (error: any) {

      return error.response.data;
    }
  }


  sendToken(confirmEmailDto: ConfirmEmailDto) {
    try {
      api.post('/confirm-email',confirmEmailDto);
    } catch (error: any) {
      return error.response.data;
    }
  }

}

export const userService = new UserService();