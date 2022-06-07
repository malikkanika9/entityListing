import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
export const ProductDetails = () => {
    const [data, setData]=useState([])
    const params=useParams();
    useEffect(()=>{
        const{id}=params;
        axios({
            url:`  http://localhost:8080/products/${id}`,
            method:"GET",
        
        }).then((res)=>{
            setData(res.data)
        })
    
    },[params.id])
    console.log(data)
    return(
        <div style={{gap:"2rem", marginTop:"10px"}}>
       {
       <div key={data?.id}>
       <div ><img src={data?.imageurl} style={{width:"50px", height:"50px"}} /></div>
       <div>{data?.Name}</div>
<div>{data?.Brand}</div>
        <div> Rs{data?.price} </div>  
       </div>}
               </div>

)
};

