import React, { useState } from "react";



function Cart(){
    const[cart,setcart] = useState(0)




    const handleadd = () =>{
        setcart(cart+1)
    }



    return(
        <div>
            <h1>Cart - {cart} </h1>

            <button onClick={handleadd}>Add</button>
        </div>
    )
}