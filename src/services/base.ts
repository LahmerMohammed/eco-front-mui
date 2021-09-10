import axios from 'axios'


export  const api = axios.create({
  baseURL: "https://ecommerce-2000414.herokuapp.com/",
})