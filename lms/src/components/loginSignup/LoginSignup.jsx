import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';

function LoginSignup() {
    
  const [action,setAction] = useState("Sign Up"); 
  const [user, setUser] = useState();
  const [password,SetPassword] = useState();

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" srcset="" />
                <input type="text" placeholder="Name" />
            </div>
            <div className="input">
                <img src={password_icon} alt="" srcset="" />
                <input type="password" placeholder="password" />
            </div>
        </div>
        {action==="Sign Up"?<div></div>: <div className="forget-password">Lost Password? <span>Click here</span> </div>}
       
        <div className="submit-container">
    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign up</div>
    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
    </div>


    </div>
  )
}

export default LoginSignup