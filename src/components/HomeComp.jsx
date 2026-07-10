import React from 'react'

export default function HomeComp({name,op}) {
  return (
    <div>
      <h1>Home</h1>

      <h2> {op[0]} </h2>

      <h1>{name}</h1>


      
    </div>
  )
}
