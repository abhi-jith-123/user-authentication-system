import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const Navigate=useNavigate()
  return (
   <div className='home'>
    <div className='s'>
    {/* <button onClick={()=>Navigate("/")}>Home</button> */}
    <button className='a'onClick={()=>Navigate("/register")}>Register</button>
    
    <button className='b'onClick={()=>Navigate("/login")}>Login</button>
    
    <button className='c' onClick={()=>Navigate("/logout")}>Logout</button>
    

    </div>
   </div>

  )
}

export default Home
