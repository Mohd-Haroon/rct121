import React from "react";
import { Container } from "./Contcart";
import axios from "axios"


export const Cart=()=>{
  const [data, setData] = React.useState()
  React.useEffect(() => {
    
    axios({
      url: "http://localhost:3000/cart",
      method: "GET",
      param:{
        // category : "men",
      }
    })
    .then ((res) => {
      console.log(res.data)
      setData(res.data)
    })
  },[])
    return (
      <div>
        <div
      style={{
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap:"25px"
      }}
    >
      {data?.map((item) => {
        return <Container key={item.id} item={item} />;
      })}
    </div>
    </div>
    )
}