'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const ButtonEdit = ({id} : {id : number}) => {
    const route = useRouter()
  return (
    <div>
        <button onClick={()=>route.push(`edit/${id}`)}>Edit Data</button>
    </div>
  )
}

export default ButtonEdit