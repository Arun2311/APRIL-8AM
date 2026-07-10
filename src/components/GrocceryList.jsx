import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function GrocceryList() {

    const [inputdata, setinputdata] = useState("")

    const [apidata, setapidata] = useState([])

    const handleinput = (e) => {
        setinputdata(e.target.value)
    }

    const handlesend = async () => {
        try {
            let body = {
                data: inputdata
            }
            let data = await axios.post("http://localhost:3000/todoList", body)
            alert("data sent suc")

            handleget()

        } catch (Err) {
            console.log(Err);

        }
    }


    const handleget = async () => {
        let res = await axios.get("http://localhost:3000/todoList")

        setapidata(res.data);
    }

    useEffect(() => {
        handleget()
    }, [])


    const handledelete = async (id) => {
        let res = await axios.delete("http://localhost:3000/todoList/" + id)
        handleget()
    }


    const handleedit = async (datas) => {

        let updatedata = prompt("update u r")

        let body = {
            id: datas.id,
            data: updatedata
        }

        let res = await axios.put("http://localhost:3000/todoList/" + datas.id, body)

        handleget()

    }


    return (
        <div>
            <h1>List</h1>
            <input onChange={handleinput} placeholder='enter' />
            <button onClick={handlesend} >Submit</button>


            {apidata.map((da, i) => (
                <div>
                    <h1>{i = i + 1} . {da.data}</h1>
                    <button onClick={() => handleedit(da)} >edit</button>
                    <button onClick={() => handledelete(da.id)} >delete</button>
                </div>
            ))}

<h1>Die</h1>



        </div>
    )
}
