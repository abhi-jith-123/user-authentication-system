import { useState } from "react"
import './Login.css'

function Login() {
  const [data,setData]=useState({
    email:'',
    password:'',
  })

const loginUser = (e) =>{
  e.preventDefault()
  console.log(data);
}



  return (
    <div >
      <form onSubmit={loginUser}>
      <label style={{fontFamily:"fantasy", color:"white"}}>Email</label>
          <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data,email:e.target.value})}/>
          <br />
          <label style={{fontFamily:"fantasy",color:"white"}}>Password</label>
          <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data,password:e.target.value})}/>
          <br />
          <button className="button" type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
