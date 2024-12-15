import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottieData from "../../src/assets/register.json";
import AuthContext from "../context/AuthContext/AuthContext";

const Register = () => {
  const { createUser, signInwithGoogle } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const email = form.email.value;
    const password = form.password.value;

    const registerData = { fname, lname, email, password };
    console.log(registerData);

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset(); // Reset form only on success
      })
      .catch((error) => {
        console.error("Error:", error.message);
        alert("Registration failed: " + error.message);
      });
  };

  const registerWithGoogle = () => {
    signInwithGoogle()
      .then((result) => {
        console.log(result.user);
        alert("Successfully registered with Google!");
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error.message);
        alert("Google Sign-In failed: " + error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={registerLottieData} loop={true}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleRegister}>
              <h2 className="text-2xl font-bold text-center p-5">
                Register Now
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  value="Register"
                  className="input cursor-pointer font-bold input-bordered"
                />
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="form-control my-5 w-[220px] mx-auto">
              <input
                type="button"
                onClick={registerWithGoogle}
                value="Register with Google"
                className="input cursor-pointer font-bold input-bordered"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
