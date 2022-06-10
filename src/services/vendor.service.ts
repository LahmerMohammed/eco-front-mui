


import {api} from './base' 


import { ICreateProductDTO } from '../types/product.create.dto';




class VendorService
{

  
  async addProduct(productDTO: ICreateProductDTO)
  {
    let formData = new FormData();
    productDTO.images.forEach(img => formData.append('images' , img))

    formData.append('products','createProductDto' , JSON.stringify(productDTO));
    return api.post('posts' , formData , {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      }
    } );
  }

}

export const vendorService = new VendorService();