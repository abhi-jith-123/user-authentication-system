import React,{useState} from "react";
import axios from "axios";
import './Logout.css'
export default function Product(){
const[name,Setname]=useState("")
const[price,SetPrice]=useState("")
const[image,SetImage]=useState("")

let data={
    name,
    price,
    image
}
function Product(){
    console.log(data);
    axios.post("http://localhost:5000/Product",data).then((res)=>{
        console.log(res.data);
    })
}

return(
    <div  >
      
        
        <label style={{fontFamily:"fantasy",color:"white"}}>ProductName</label>
        <input type="text" placeholder='enter product name...'onChange={(e)=>Setname(e.target.value)}/>
        <br></br>
        <label style={{fontFamily:"fantasy",color:"white"}}>Price</label>
        <input type="number" placeholder='enter product price...'onChange={(e)=>SetPrice(e.target.value)}/>
        <br />
        <label style={{fontFamily:"fantasy",color:"white"}}>ProductImage</label>
        <input onChange={(e)=>SetImage(e.target.value)}/>
        <br />
        <label style={{fontFamily:"fantasy",color:"white"}}>ProductDescription</label>
        <input onChange={(e)=>SetProduct(e.target.value)}/>
        <br />
        
       
        <button className="button"onClick={Product}>Submit</button>
        
    </div>


)

}
