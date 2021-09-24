import axios from 'axios'


export  const api = axios.create({
  baseURL: "https://ecommerce-2000414.herokuapp.com/",
});


export const setToken = (token: string) => {
  
  api.interceptors.request.use((config) => {
    
    config.headers.Authprization = token;

    return config;

  });

}

