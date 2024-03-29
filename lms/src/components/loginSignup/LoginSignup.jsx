import React, { useContext, useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import  AppContext from "../../context/AppContext";

function LoginSignup() {
  const { loginUser, signupUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [action, setAction] = useState("Sign Up");
  const [error,setError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("login data=> ", data);
    if (data != null) {
      if (action === "Sign Up") {
        signupUser(data);
        reset();
      } else {
     try {
            const res =  await loginUser(data);
            console.log("res=>",res);
             if (!res) {
              navigate("/book");
            }
            else{
              setError(res);
            }
            
      } catch (error) {
        console.error("Login error:", error);
      }
      }
    }
  };

if(error)
{
  throw new Error("server error!");
}
  return (
    <div id="loginBack">

    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input form-control">
            <img src={user_icon} alt="" srcset="" />
            <input
              type="text"
              placeholder="Name"
              name="userName"
              {...register("userName", {
                required: "Username is required.",
                minLength: {
                  value: 3,
                  message: "Username should be at least 3 characters.",
                },
                maxLength: {
                  value: 15,
                  message: "Username should be at most 15 characters.",
                },
              })}
            />
                {errors.userName && <p>{errors.userName.message}</p>}
          </div>
          <div className="input form-control">
            <img src={password_icon} alt="" srcset="" />
            <input
              type="password"
              placeholder="password"
              name="password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 characters.",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                  message: "Password must contain at least one capital letter and one special character.",
                },
              })}
            />
             {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>

        <div className="submit-container form-control">
          <button
            type="submit"
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign up
          </button>
          <button
            type="submit"
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default LoginSignup;
