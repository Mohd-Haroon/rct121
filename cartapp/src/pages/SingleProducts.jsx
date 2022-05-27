import React from "react";
import axios from "axios";
import {useParams,useNavigate} from "react-router-dom"

export const SingleProduct=()=>{
    const navigate=useNavigate()
    const params = useParams()
    const {id} = params
    const [data,setData] = React.useState()

    React.useEffect(() => {
        axios({
            url:`http://localhost:3000/data/${id}`,
            method: 'GET'
        })
        .then((res) => {
            setData(res.data)
            // console.log(res.data)
        })
    },[])
        
    return(
        <di>
        <h1>single</h1>
        <div>
            <h3>{data?.name}</h3>
            <h3>Price:-Rs.{data?.price}</h3>
            <h3>ID:-{data?.id}</h3>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
        </di>
    )
}