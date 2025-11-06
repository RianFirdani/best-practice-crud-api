'use client'
import React from 'react'
import { useForm,SubmitHandler } from "react-hook-form";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { axiosInstance } from '@/libs/axios';


const Form = () => {
    
      const products = z.object({
        name : z.string().min(3),
        price : z.string().min(3),
        image : z.string().min(3).max(128)
      })
      type Products = z.infer<typeof products>

      const {register , handleSubmit, formState : {errors} } = useForm<Products>({
        resolver : zodResolver(products)
      })
      const onSubmit : SubmitHandler <Products> = async (data) => {
        const res = await axiosInstance.post('/',{
          name : data.name,
          price : data.price,
          image : data.image
        })
        console.log(res)
      }
  return (
    <form style={{display : 'flex', flexDirection : 'column', gap : '4px'}} action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">
            Product Name :
            <input type="text" {...register('name')} /> 
        </label>
        {errors.name?.message}

        <label htmlFor="">
            Product Price :
            <input type="text" {...register('price')} /> 
        </label>
        {errors.price?.message}
        

        <label htmlFor="">
            Product Image  :
            <input type="text" {...register('image')} /> 
        </label>
       {errors.image?.message} 
        
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form