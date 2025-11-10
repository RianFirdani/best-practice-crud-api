'use client'
import { handleEdit } from '@/libs/handleEdit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm,SubmitHandler } from "react-hook-form";
import z from 'zod'

const FormEdit = ({id , product} : {id : number , product : {
    name : string,
    price : string,
    image : string
}}) => {
    const products = z.object({
        name : z.string().min(3),
        price : z.string().min(3),
        image : z.string().min(3).max(128)
    })
    type Products = z.infer<typeof products>
    console.log(product)

    const {register,handleSubmit} = useForm<Products>({
        resolver : zodResolver(products),
        defaultValues : product
    })

    const onSubmit  : SubmitHandler <Products>= async (data) =>{
        const res = await handleEdit(id,data)
        console.log(res)
    }

  return (
    <div>
        <form action="" style={{ display : 'flex', flexDirection : 'column' ,gap : '10px' }} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">
                Name : 
                <input type="text" {...register('name')} defaultValue={product.name}/>
            </label>
            <label htmlFor="">
                Price : 
                <input type="text" {...register('price')} defaultValue={product.price}/>
            </label>
            <label htmlFor="">
                Image : 
                <input type="text" {...register('image')} defaultValue={product.image} />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormEdit