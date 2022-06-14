


import {api} from './base' 


import { ICreateProductDTO } from '../types/product.create.dto';




class VendorService
{

  
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