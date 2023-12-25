import React, { useContext, useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

function LoginSignup() {
  const { loginUser, signupUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [action,setAction] = useState("Sign Up"); 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = (data) => {
    console.log("login data=> ", data);
    if (data != null) {
      if (action === "Sign Up") {
        signupUser(data);
        reset();
      } else {
        loginUser(data);
        navigate('/book');
      }
    }
  };
  // const onSubmit = (data) => {
  //   console.log("login data=> ",data);
  //   if(data!=null)
  //   {
  //       if(action==="Sign Up")
  //       {
  //         try {   
  //           axios.post("http://localhost:8082/users/RegisterUser", data).then((response) => {
  //           console.log("sign up response=>",response);
  //            alert(response.data);
  //            reset();
  //           });
            
  //         } catch (error) {
  //           console.log("error=>",error)
  //         }
         
  //       }
  //       else
  //       {
  //         try {
  //           axios.post("http://localhost:8000/auth/login", data).then((response) => {
  //             console.log("login response=>", response);
  //             // alert("login successful!",response);
  //             localStorage.setItem('userName', data.userName);
  //             localStorage.setItem('token', response.data);
  //             reset();
  //             navigate('/book');
  //           }).catch((error) => {
  //             if (error.response && error.response.status === 401) {
  //               console.log("Wrong credentials!!");
  //             } else {
  //               alert("An error occurred during login.");
  //             }
  //           });
  //         } catch (error) {
  //           alert("An unexpected error occurred.");
  //         }
  //         navigate('/login');
  //       }
  //   }
  // };
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