import React from "react";
import {Routes,Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {Navbar} from "./pages/Navbar"
import {SingleProduct} from "./pages/SingleProducts"
import {AllProducts} from "./pages/AllProducts"



export const AllRoutes=()=>{

    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/allproducts" element={<AllProducts/>}/>
            <Route path="/allproducts/:id" element={<SingleProduct/>}/>
            {/* <Route path="/" element={<Home/>}/> */}

        </Routes>
        </>
    )
}