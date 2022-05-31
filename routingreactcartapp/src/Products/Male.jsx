import React from "react";
import { Container } from "./Container";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios"

export const Male = () => {
  const naviagte = useNavigate();
  const [data,setData] = React.useState([])
  // console.log("Data", data.data);
  React.useEffect(() => {
    
    axios({
      url: "http://localhost:3000/data?category=men",
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
    <div
      style={{
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "25px",
      }}
    >
      {data?.map((item) => {
        return (
          <Container key={item.id} item={item} />
          // <Link key={item.id} to={`/s/${item.id}`}>
          //   {item.title}
          // </Link>
        );
      })}
    </div>
  );
};
