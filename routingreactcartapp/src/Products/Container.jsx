import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Container = ({ item }) => {
  
  const naviagte = useNavigate();
  const addtocart = ({item}) => {
    
    axios({
      url:"http://localhost:3000/cart",
      method:"POST",
      data: item
    })
    // console.log(item)
  };

  return (
    // <link key={item.id} to="singleproduct">
    // </link>
    <div>
    <div
      onClick={() => naviagte(`/s/${item.id}`)}
      style={{ border: "1px solid red", padding: "20px" }}
    >
      <div>
        <img
          style={{ width: "125px", height: "200px" }}
          src={item.image}
          alt=""
        />
        <p>{item.title}</p>
        <p>Brand:{item.brand}</p>
        <p>MRP:${item.Price}</p>
        <p>category{item.category}</p>
      </div>
    </div>
      <button onClick={() =>addtocart({item})}>Add to Cart</button>
    </div>
  );
};
