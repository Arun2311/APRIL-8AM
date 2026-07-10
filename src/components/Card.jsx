import React from 'react'

export default function Card({data}) {
  return (
    <div>

        <h1>Card</h1>

        <img src={data.image} height={200} width={200}/>

        <h5>Name:{data.title} </h5>
        <h5>Price:{data.price}</h5>
      
    </div>
  )
}
