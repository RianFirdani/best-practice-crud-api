import { axiosInstance } from "./axios"


export type Product = {
  id : number,
  name: string
  price: string
  image: string
}

export const getOneProduct = async (id: number): Promise<Product> => {
  const response = await axiosInstance.get<Product>(`/${id}`)
  console.log(`id : ${id} data : ${response.data}`)
  return response.data
}
