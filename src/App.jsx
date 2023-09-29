import './App.css'
import {Routes,Route} from 'react-router-dom'
import NavBar from '../src/Components/NavBar'
import Home from '../src/Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Logout from './Pages/Logout'

function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
    
    </>
  )
}

export default App
