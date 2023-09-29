import { useState } from "react"
import React from "react"
import axios from 'axios'
import './Register.css'

function Register() {
  const [name,setName]=useState('')
  const [email,setemail]=useState('')
  const [password,setPassword]=useState('')
  let data={
    name,
    email,
    password
  }
  function register(){
    console.log(data);
    axios.post("http://localhost:5000/register",data)
  }

// const registerUser= (e) => {
//   e.preventDefault()
//   console.log(data);

  return (
    <div>
      {/* <form onSubmit={registerUser}> */}
        <label style={{fontFamily:"fantasy",color:"white"}}>Name</label>
          <input type='text' placeholder='enter name...' onChange={(e)=>setName(e.target.value)}/>
          <br />
          <label style={{fontFamily:"fantasy",color:"white"}}>Email</label>
          <input type='email' placeholder='enter email...' onChange={(e)=>setemail(e.target.value)}/>
          <br />
          <label style={{fontFamily:"fantasy",color:"white"}}>Password</label>
          <input type='password' placeholder='enter password...' onChange={(e)=>setPassword(e.target.value)}/>
          <br />
          <button className="button" onClick={register}>Submit</button>
      {/* </form> */}
    </div>
  )
}

export default Register