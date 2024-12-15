import React from "react";
import Lottie from "lottie-react";
import { useContext } from "react";
import loginAnimation from "../../src/assets/login.json";
import AuthContext from "../context/AuthContext/AuthContext";

const Login = () => {
  const { signInUser,signInwithGoogle } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginData={email,password}
    console.log(loginData)
    signInUser(email,password)
    .then(result=>{
        console.log(result.user)
        console.log(`Sign up successfully`)
    })
    .catch(error=>{
        console.log('Error',error)
    })
  };
  const GoogleSinIn=()=>{
    signInwithGoogle()
      .then((result) => {
        console.log(result.user);
        alert("Successfully Login with Google!");
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error.message);
        alert("Google Sign-In failed: " + error.message);
      });
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={loginAnimation} loop={true}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <h2 className="text-2xl font-bold text-center p-5">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control my-5">
                <input
                  type="submit"
                  value="Login"
                  className="input cursor-pointer font-bold input-bordered"
                />
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="form-control my-5 w-[220px] mx-auto">
              <input
                type="button" onClick={GoogleSinIn}
                value="Continue with Google"
                className="input cursor-pointer font-bold input-bordered"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
