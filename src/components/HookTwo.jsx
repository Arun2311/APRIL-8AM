import React, { useEffect, useState } from 'react'

export default function HookTwo() {

    const [count,setcount] = useState(0)
        const [name,setname] = useState("ar")



    useEffect(()=>{
     
        console.log("mounting");


        return ()=>{
            console.log("unmounting");
            
        }
        
    },[])


    const handleadd = () =>{
        setcount(count +1)
    }


  return (
    <div>
      <h1>Use Effect-{count}</h1>

      <button onClick={handleadd}>add</button>


    </div>
  )
}
