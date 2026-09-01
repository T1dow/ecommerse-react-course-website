import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [mode, setMode] = useState("");
  const {signup, user, logout, login}= useContext(AuthContext)
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data)=>{
    setError(null)
    let result;
    if(mode === "signup"){
    result = signup(data.email, data.password)
    }else{
        result=  login(data.email, data.password)

    }

    if (result.success){
      navigate("/")
    }else{
      setError(result.error)
    }
  }
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {user && <p>user have login{user.email}</p>}
          <button onClick={()=>logout()}>logout</button>
          <h1 className="page-title">
            {mode === "signup" ? "Sign-Up" : "Login"}
          </h1>
          
          <form action="" onSubmit={handleSubmit(onSubmit)} className="auth-form">
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-input"
                id="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (<span className="form-error">{errors.email.message }</span>)}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Passsword
              </label>
              <input
                type="password"
                className="form-input"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "password must be atleest 6 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "password must be less than 12 characters",
                  },
                })}
              />
               {errors.password && (<span className="form-error">{errors.password.message }</span>)}
            </div>
            <button className="btn btn-primary btn-large">
              {mode === "signup" ? "Sign-Up" : "Login"}
            </button>
          </form>
          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Already have an account?{" "}
                <span
                  className="auth-link"
                  onClick={() => {
                    setMode("login");
                  }}
                >
                  Login
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <span
                  className="auth-link"
                  onClick={() => {
                    setMode("signup");
                  }}
                >
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
