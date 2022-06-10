export interface IProuctDTO
{
  id: string | null;
  name: string;
  description: string;
  regular_price: number,
  sale_price: number,
  stock: number,
  category: string,
  tags: Array<string>,
}

export interface ICreateProductDTO
{
  product_dto: IProuctDTO,
  images: Array<File>
}