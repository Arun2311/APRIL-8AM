import React, { useState } from 'react'


let count = 0
export default function FormOne() {
count =count + 1


    const [name, setname] = useState("")
    const [age, setage] = useState(0)
    const [ishide, setishide] = useState(false)


    const handlename = (e) => {
        setname(e.target.value)

    }

    const handleage = (event) => {
        setage(event.target.value)

    }

    const handleshow = () => {
        setishide(true)
    }

    return (
        <div>
            <h1>Form One</h1>

{!ishide ? 
            <div>
                <label>Name</label>
                <input onChange={handlename} placeholder='enter' />

                <br />
                <br />

                <label>Age</label>
                <input onChange={handleage} placeholder='Enter Age' />

                <br />
                <br />

                <button onClick={handleshow}>Submit</button>
            </div>
: null}
            {ishide ?
                <div>

                    <h1>Name : {name}</h1>
                    <h1>Age : {age}</h1>

                </div>
                : null}

        </div>
    )
}






























