import React, { useState } from 'react'
import productdata from '../data/product'

export default function ProductShow() {
    const[datas] = useState(productdata)
  return (
    <div>


        <h1>Products</h1>

        {datas.map((rajini)=>(
            <div>

                <img src={rajini.image} height={200} width={200}/>

                <h1>{rajini.title}</h1>
                <h4>$ : {rajini.price}</h4>


                </div>
        ))}
      
    </div>
  )
}
