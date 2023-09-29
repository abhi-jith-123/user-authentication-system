import {Link} from "react-router-dom"
import './NavBar.css'

function NavBar() {
  return (
   <nav>
    <Link to='/'><button className="btn" style={{marginRight:"1200px"}}>Home</button></Link>
    {/* <Link to='/register'>Register</Link>
    <Link to='/login'>Login</Link>
     */}
   </nav>
  )
}

export default NavBar
