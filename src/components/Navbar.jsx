// import { Link } from "react-router-dom"
// import { FaRegUser } from "react-icons/fa";
// import { GiShoppingBag } from "react-icons/gi";
// function Navbar() {
//   return (
//     <>
//     <header className="header px-12 py-3 bg-white-100 relative z-20">
//       {/* < className= "lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10"> */}
//       <nav className="p-4 flex justify-between items-center relative">
//         <div className="flex items-center gap-14">
       
//         <a className="btn btn-ghost text-xl">Tamurt</a>
//         </div>
//         {/* <div className="hidden lg:flex items-center justify-between gap-8"> */}
//         <div className=" hidden lg:flex items-center justify-between gap-8">
     
//         <ul className="menu menu-horizontal px-1">
//       <li><a>Shop</a></li>
//       <li><a>About Us</a></li>
//       <li><a>Researchers Hub</a></li>
//       <li><a ><FaRegUser /></a></li>
//       <li><a ><GiShoppingBag /></a></li>
    
//     </ul>
//         </div>
      
//       </nav>
  
 

// </header>
//        </>
//   )
// }

// export default Navbar































import { FaRegUser } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header px-4 lg:px-12 py-3 bg-white relative z-20">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a className="btn btn-ghost text-xl">Tamurt</a>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="btn btn-ghost">
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:justify-between lg:gap-8`}
          >
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Researchers Hub</a>
              </li>
              <li>
                <a>
                  <FaRegUser />
                </a>
              </li>
              <li>
                <a>
                  <GiShoppingBag />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
