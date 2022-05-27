import React from "react";
import {Link} from "react-router-dom"


export const Navbar= () => {
    return(
        <div style={{display:"flex",gap:"20px",width:"25%",margin: "auto"}}>
            <Link style={{textDecoration:"none"}} to="/">Home</Link>
            <Link style={{textDecoration:"none"}} to="/allproducts">All Products</Link>

        </div>
    )
}