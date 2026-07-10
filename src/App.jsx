import React, { useEffect, useState } from "react";
import NameComp from "./components/NameComp";
import Counter from "./components/Counter";
import MovieShow from "./components/MovieShow";
import ProductShow from "./components/ProductShow";
import ProductTwo from "./components/ProductTwo";
import TodoList from "./components/TodoList";
import HookTwo from "./components/HookTwo";
import HomeComp from "./components/HomeComp";
import Card from "./components/Card";
import FormOne from "./components/FormOne";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import { BrowserRouter,Routes,Route ,Link} from "react-router-dom";
import GrocceryList from "./components/GrocceryList";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap"
import Navbar from "./components/Navbar";

function App(){

//   const [log,setlog] = useState(true)

//   const [name,setname]=useState("Arun")


//   const handlelog = () =>{
// setlog(false)
//   }

const[apidata,setapidata] = useState([])



    const handlefetch = async () =>{
        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()
        setapidata(data)
    }

    useEffect(()=>{
      handlefetch()
    },[])


  return(
    <BrowserRouter>
       
    {/* <h1>Arun</h1>
    <h2>Ram</h2> */}

    {/* <NameComp/> */}

                {/* <Counter/> */}

                {/* <MovieShow/> */}

                {/* <ProductShow/> */}

                {/* <ProductTwo/> */}

                {/* <TodoList/> */}

{/* {log ? <HookTwo/> : <h1>Loged out</h1> }

                <button onClick={handlelog}>Logout</button> */}

{/* <HomeComp  name={name} op={["luffy","zoro","sanji"]} /> */}

{/* card comp */}

{/* {apidata.map((da)=>(
  <div>

    <Card data={da}/>

  </div>
))} */}



{/* <FormOne/> */}

{/* <div>
  <Link to="/">Home</Link>

  <Link to="/product"> Product</Link>

  <Link to="/about"> About</Link>
</div>

<Routes>


<Route element={<Home/>} path="/" />
<Route element={<Product/>} path="/product" />

<Route element={<About/>} path="/about" />





</Routes>
 */}

 {/* <GrocceryList/> */}

 <Navbar/>


<button className="btn btn-danger ms-5">paid</button>



    </BrowserRouter>

  )
}


export default App