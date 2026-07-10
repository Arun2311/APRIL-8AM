import React, { useState } from "react";


function Counter(){

    const[count,setcount]  =useState(1)
    // const[name,setname] = useState("luffy")
    // const[data,setdata] = useState(["luffy","zoro","sanji","nami"])

    const handleadd = () =>{
     setcount(count + 1)
    }

    const handlename = ()=>{
       if(name=="Arun"){
         setname("luffy")
       }else{
         setname("Arun")
       }

    }


    return(
        <div>
            <h1>Name:{name} </h1>
            <h1>Cart - {count}</h1>

            <button onClick={handleadd}>Add</button>
            <button onClick={handlename}>Change</button>
        </div>
    )
}

export default Counter