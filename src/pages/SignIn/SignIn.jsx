import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Spinner from "../../utils/Spinner";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleSignInUser, authenticating } = useAuth();

  const btnText = authenticating ? <Spinner /> : "Login to your account";

  const onSubmit = (data) => {
    handleSignInUser(data);
  };

  return (
    <div className="signin">
      <form className="in-form" action="" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="in-title">Login</h1>
        <div className="in-input">
          <div className="position-relative">
            <input
              type="text"
              placeholder="Email Address"
              className={errors.email ? "error" : ""}
              {...register("email", { required: true })}
            />
            {errors.email && errors.email.type === "required" ? (
              <span className=" position-absolute end-0 pt-3 pe-4">
                Can't be empty
              </span>
            ) : null}
          </div>
          <div className="position-relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className={errors.password ? "error" : ""}
              {...register("password", { required: true })}
            />
            {errors.password && errors.password.type === "required" ? (
              <span className="position-absolute end-0 pt-3 pe-4">
                Can't be empty
              </span>
            ) : null}
          </div>
          <button disabled={authenticating}>{btnText}</button>
        </div>
        <div className="dont">
          <p className="mb-0">Don't have an account?</p>
          <p className="ccc mb-0" onClick={handleClick}>
            Sign Up
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
