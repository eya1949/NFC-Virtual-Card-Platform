// import { Link } from "react-router-dom"
import { FaRegUser } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
function Navbar() {
  return (
    <>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
 
    <a className="btn btn-ghost text-xl">Tamurt</a>
  </div>


  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Shop</a></li>
      <li><a>About Us</a></li>
      <li><a>Researchers Hub</a></li>
      <li><a ><FaRegUser /></a></li>
      <li><a ><GiShoppingBag /></a></li>
    
    </ul>
  </div>
  
 
</div>
       </>
  )
}

export default Navbar
