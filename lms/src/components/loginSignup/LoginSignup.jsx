import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function LoginSignup() {
  const navigate = useNavigate();
  const [action,setAction] = useState("Sign Up"); 

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  

  const onSubmit = (data) => {
    console.log(data);
    if(data!=null)
    {
        if(action==="Sign Up")
        {
            axios.post("http://localhost:8082/users/RegisterUser", data).then((response) => {
            console.log("sign up response=>",response);
            });
        }
        else
        {
            axios.post("http://localhost:8000/auth/login", data).then((response) => {
                console.log("login response=>",response);
                });
                navigate('/book');
        }
    }
  };

  return (
    <div className='container'>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input form-control">
                    <img src={user_icon} alt="" srcset="" />
                    <input type="text" placeholder="Name" name="userName"  {...register("userName", {
        required: true
      })} />
                </div>
                <div className="input form-control">
                    <img src={password_icon} alt="" srcset="" />
                    <input type="password" placeholder="password"  name="password"   {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password should be at-least 6 characters."
              }
            })}/>
                </div>
            </div>
            {/* {action==="Sign Up"?<div></div>: <div className="forget-password">Lost Password? <span>Click here</span> </div>} */}
        
            <div className="submit-container form-control">
        <button type="submit" className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign up</button>
        <button type="submit" className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</button>
        </div>
    </form>

    </div>
  )
}

export default LoginSignup