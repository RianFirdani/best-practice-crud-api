import { axiosInstance } from "./axios"


export const handleDelete = async(id : number)=>{
    const res = await axiosInstance.delete(`/${id}`)

    console.log(res.status)
}
