import { axiosInstance } from "@/libs/axios";

export type Product = {
        id : number,
        name : string,
        price : string,
        image : string
      }

export const getProduct = async () : Promise<Product[]> =>{
        try{
          const res = await axiosInstance.get<Product[]>('/')
        return res.data
        }catch(e){
          console.log(e)
          return[]
        }
}