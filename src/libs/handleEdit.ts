import { axiosInstance } from "./axios"

type Product = {
    name : string,
    price : string,
    image: string
}
export const handleEdit  = async(id : number, product : Product) =>{
    const res = await axiosInstance.put(`/${id}`,{
        product
    })
    return res.data
}