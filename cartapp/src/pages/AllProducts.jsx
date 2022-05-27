import React from "react";
import axios from "axios";
import {Link} from "react-router-dom"

export const AllProducts = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
      axios({
        url:" http://localhost:3000/data",
        method:"GET",
      })
      .then((res) => {
          setData(res.data)
        //   console.log(res.data)
        //   console.log("data",data)
      })
      .catch((err) => {
          console.log(err)
      })
  },[])

  return <div>
      <h1>Products</h1>
      <div>
          {data?.map((item) => {
              return <div style={{border: '1px solid black',width:"250px",margin:"auto"}} key={item.id}>
                  <h3>{item.name}</h3>
                  {/* <h4>{item.price}</h4> */}
                  <Link to={`/allproducts/${item.id}`}>See more</Link>
              </div>
          })}
      </div>
  </div>;
};
