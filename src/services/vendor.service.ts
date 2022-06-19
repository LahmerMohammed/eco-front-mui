


import {api} from './base' 


import { ICreateProductDTO } from '../types/product.create.dto';
import { AxiosError } from 'axios';
import { Stream } from 'stream';


interface GetProductsOptions{
  limit?: number,
  offset?: number,
  page?: number,
}



interface GetProductResponse{
  data: {image:any,name:string,regular_price:number,sale_price:string,rating:number}[];
  count: number;
  total: number;
  page: number;
  pageCount: number; 
}

class VendorService
{
  async getProducts(options: GetProductsOptions) {
    try{
      const data = <GetProductResponse>(await(await api.get('products', {
        params: options
      })).data);
      
      console.log(typeof data.data[0].image)

      let products =  data.data;

      products.forEach((product,index) => {
        const base64String = btoa(String.fromCharCode(...new Uint8Array(product.image.data)));
        products[index] = {
          ...product,
          image: `data:image/jpg;base64,${base64String}`
        }
      })
      
      return { ...data , data: products};

    }catch(error: any){
      console.log(error.response.data);
    }
  }

  
  async addProduct(productDTO: ICreateProductDTO)
  {
    let formData = new FormData();
    productDTO.images.forEach(img => formData.append('images' , img))

    formData.append('body' , JSON.stringify(productDTO));

    try
    {
      return await api.post('products' , formData , {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        }
      } );

    }catch(error: any)
    {
      return error.response.data;
    }
  }

}

export const vendorService = new VendorService();