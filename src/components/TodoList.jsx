import React, { useEffect, useState } from 'react'

export default function TodoList() {

    const [datas ,setdatas] = useState([])




    const handleapifetch = async () =>{
        let response = await fetch("https://jsonplaceholder.typicode.com/todos")
        let da = await response.json()
        setdatas(da)

    }

    useEffect(()=>{
        handleapifetch()

        console.log("arun");
        
    },[])



  return (
    <div>

        {/* <button onClick={handleapifetch}>handleapifetch</button> */}


        {datas.map((data)=>(
            <div>

                {data.title}



                </div>
        ))}
      
    </div>
  )
}
