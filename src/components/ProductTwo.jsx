import React, { useState } from 'react'

 function ProductTwo() {
const[apidata,setapidata] = useState([])



    const handlefetch = async () =>{
        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()
        setapidata(data)
    }




  return (
    <div>

        <button onClick={handlefetch}>Apicall </button>
        {apidata.map((hey)=>(
            <div>

                <img src={hey.image} height={200} width={200}/>
                <h1>{hey.title}</h1>


                </div>
        ))}
      
    </div>
  )
}

export default ProductTwo