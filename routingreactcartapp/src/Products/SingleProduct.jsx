import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./Container";
import axios from "axios"


export const SingleProduct = () => {
  const [data, setData] = React.useState({});
  const [dataa, setDataa] = React.useState([]);
  const { idd } = useParams();
  useEffect(() => {
    date();

  }, [idd]);

  const date = async () => {
    let res = await fetch(`http://localhost:3000/data/${idd}`);
    let Data = await res.json();
    
    setData(data);
    setDataa([Data])
    console.log("xxxxxxxx",dataa[0]);
  };


  return (
    <div tyle={{ width: "125px", height: "200px" }} align="center">
      Product: {idd}
      {dataa?.map((item)=>{
        return <Container key={item.id} item={item}/>
      })}
    </div>
  );
};
