import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; 
import { AppContext } from '../../context/AppContext';

const Header = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(AppContext);
  const navigate = useNavigate();
 
  const logout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };
  
 
  return (
    <div>
      <nav id="navbar" >
        <div className="nav-wrapper">
            <div className="logo">
              <Link to="/">Library Management System</Link>
            </div>
            <div>
              <ul id="menu">
              <li><Link to="/">Home</Link></li>
               {isLoggedIn ? (
             <div className='loggedIn'>
            <li><Link to="/book">Services</Link></li>
            <li><Link to="/fav">Favorite</Link></li>
            <li><Link to="/" onClick={()=>logout()}>Logout</Link></li>
          </div>
            ):
            <li><Link to="/login">Login</Link></li>}
              </ul>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
