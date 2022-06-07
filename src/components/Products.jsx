import axios from "axios"
import {useState,useEffect} from "react"
import { Link } from "react-router-dom";
export const Products=()=>{
const[data, setData]= useState([])
const[loading,setLoading]=useState(true)
const[page,setPage]=useState(1)
const[priceorder, setPriceorder]=useState("asc")
const[FilterRating,setFilterRating]=useState(0)
useEffect(()=>{
axios({
    url:" http://localhost:8080/products",
    method:"GET",
    params:{
_page:page,
_limit:5,
_sort:"price",
_order:priceorder,
price_gte:FilterRating
    }
}) .then((res)=>{
    setData(res.data)
    setLoading(false)
})
},[page,priceorder,FilterRating])
console.log(data)
return(

    <div>
        <h1>Product Details</h1>
        
<button disabled={page==1} onClick={()=>{setPage(page-1)}}>Prev</button>
<button onClick={()=>{setPage(page+1)}}>next</button>
<button onClick={()=>{setPriceorder("asc")}}>Low To high</button>
<button onClick={()=>{setPriceorder("desc")}}>High to Low</button>
<h2>Filter </h2>
<button onClick={()=>{setFilterRating(2000)}}>above 2000</button>
<button onClick={()=>{setFilterRating(3000)}}>above 3000</button>
        {loading && <div>Loading</div>}
{data.map((item)=>{
return(
    <div key={item.id}>
<img src={item.imageurl} style={{width:"50px", height:"50px"}}/>
{item.Name} <br />
{item.price}
<Link to={`/products/${item.id}`}> See more Details</Link>
</div>

)

})}

    </div>
)

}