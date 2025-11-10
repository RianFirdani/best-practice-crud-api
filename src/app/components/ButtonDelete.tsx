'use client'
import { handleDelete } from '@/libs/handleDelete'
import React from 'react'

const ButtonDelete = ({id}) => {
    const confirmDelete = (id : number)=>{
        const dialog = confirm('Yakin ingin hapus?')
        if(dialog){
            handleDelete(id)
        }
    }
  return (
    <div>
        <button onClick={()=> confirmDelete(id)}>Delete id : {id}</button>
    </div>
  )
}

export default ButtonDelete