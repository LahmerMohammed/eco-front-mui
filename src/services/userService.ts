import { ConfirmEmailDto, LoginDto, RegisterDto, ResendConfirmEmailDto } from '../types';

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


  resendConfirmationEmail(data: ResendConfirmEmailDto) {
    api.post('/resend-confirm-email' , data);
  }

}

export const userService = new UserService();