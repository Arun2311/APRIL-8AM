import React, { useState } from 'react'
import moviesdata from "../data/movie"

 function MovieShow() {

    const[datas] = useState(moviesdata)

    
    
  return (
    <div>

        <h1>Movies </h1>


        {datas.map((da)=>(
            <div>


<img src={da.Poster} height={200} width={200} />
                <h1>{da.Title}</h1>
                <h2>{da.Director}</h2>



            </div>
        ))}


     
    </div>
  )
}


export default MovieShow