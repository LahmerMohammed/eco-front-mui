import { IUser } from './../types/index';
import { ConfirmEmailDto, LoginDto, RegisterDto, ResendConfirmEmailDto } from '../types';

import {api, setToken} from './base' 

const subUrl = "auth"
const userUrl = "users"

class UserService {
	
  async getUserByEmail(email: string) {
    const response  = await api.get(userUrl + `/email/${email}`); 
    return response.data;
	}

  logout(token: string | null){
    // add token to blacklist if not expired
    api.post(userUrl + "/blacklist" , {token: token});
    
    // clear token & email from localStorage
    localStorage.clear();
  }

  async login(userLogin: LoginDto) {
    try {
      
      const response : {user: IUser ,access_token: string} = (await api.post(subUrl + "/login", userLogin)).data; 

      localStorage.setItem('token',response.access_token);
      localStorage.setItem('email',response.user.email);


      setToken(response.access_token);

      return response;

    } catch (error: any) {

      return error.response.data;
    }
  }

  async register(userRegister: RegisterDto) {

    try {
      const response = await api.post(subUrl + "/register", userRegister); 
      
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


  async updateUser(user: Partial<IUser>) {
    try {
      const response = await api.put(`${userUrl}`,user);

      return response.data;
      
    } catch (error: any) {
      return error.response.data;
    }
  }


  resendConfirmationEmail(data: ResendConfirmEmailDto) {
    api.post('/resend-confirm-email' , data);
  }

}

export const userService = new UserService();




