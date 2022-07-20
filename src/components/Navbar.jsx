import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import {BsBasket} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {useStateContext} from '../context/ContextProvider'
import './Navbar.css'
const Navbar = () => {
  
  const navigate = useNavigate();
  const {isloggedin} = useStateContext();
  const {setIsLoggedIn} = useStateContext();
  const {setUser} = useStateContext();
  const {initialUser} = useStateContext();
  const {setScreenSize} = useStateContext();
  const {screenSize} = useStateContext();
  const {setActiveMenu} = useStateContext();
  const {activeMenu} = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

function logout (){
  setIsLoggedIn(false);
  setUser(initialUser);
  localStorage.clear();
  navigate('/');
  console.log("you are now logged out");
}

const menuon = () => {
  setActiveMenu(!activeMenu);
}


  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative header">
      
      <Link to="/">
        <span><BsBasket className='inline m-2'/>Smart Cart</span>
      </Link>
      <div className='navbar'>
        <NavLink to="/home" className={activeMenu ? "NavLink selected " : "NavLink" }>Home</NavLink>
        <NavLink to="/about" className={activeMenu ? "NavLink selected" : "NavLink" }>About us</NavLink>
        {isloggedin && <NavLink to="/GettingStarted" className={activeMenu ? "NavLink selected" : "NavLink" }>Getting Started</NavLink>}
        {isloggedin && <NavLink to="/history" className={activeMenu ? "NavLink selected" : "NavLink" }>My History</NavLink>}
        {isloggedin && <NavLink to="/currentcart" className={activeMenu ? "NavLink selected" : "NavLink" }>My Current cart</NavLink>}
        {isloggedin && <NavLink to="/profile" className={activeMenu ? "NavLink selected" : "NavLink" }>My Profile</NavLink>}
      </div>
        {!isloggedin && <NavLink to="/Start" className="flex rounded p-2 m-1 bg-green-700 justify-center NavLink text-lg">Get Started</NavLink>}
        {isloggedin && (
          <button onClick={logout} className="rounded p-2 m-1 bg-red-500 NavLink text-lg">Log out</button>
        )}
        <div className="icons">
              <div className="menu" id="menu-btn" onClick={menuon}><GiHamburgerMenu className='burger'/> </div>
        </div>
    </div>
  )
}

export default Navbar