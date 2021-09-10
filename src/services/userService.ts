import { ConfirmEmailDto, LoginDto, RegisterDto } from './../types/UserTypes';

import {api} from './base' 

const subUrl = "auth/"

class UserService {


  async login(userLogin: LoginDto) {
    try {
      
      const response = await api.post(subUrl + "login", userLogin); 
      
      return response.data;

    } catch (error: any) {

      return error.response.data;
    }
  }

  async register(userRegister: RegisterDto) {

    try {
      const response = await api.post(subUrl + "register", userRegister); 
      
      return response.data;

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