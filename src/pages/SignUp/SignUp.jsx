import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Spinner from "../../utils/Spinner";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordRepeatVisible, setPasswordRepeatVisible] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signin");
  };

  const { handleRegisterUser, authenticating } = useAuth();

  const btnText = authenticating ? <Spinner /> : "Create an account";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleRegisterUser(data);
  };

  return (
    <div className="signup">
      <form className="up-form" action="" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="up-title">Sign Up</h1>
        <div className="up-input">
          <div className="position-relative">
            <input
              type="text"
              placeholder="Email Address"
              className={errors.email ? "error" : ""}
              {...register("email", { required: true })}
            />
          </div>
          <div className="position-relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className={errors.password ? "error" : ""}
              {...register("password", { required: true })}
            />
          </div>
          <div className="position-relative">
            <input
              type={passwordRepeatVisible ? "text" : "password"}
              placeholder="Repeat Password"
              className={errors.repeatPassword ? "error" : ""}
              {...register("repeatPassword", { required: true })}
            />
          </div>
          <button disabled={authenticating}>{btnText}</button>
        </div>
        <div className="already">
          <p className="mb-0">Already have an account?</p>
          <p className="ggg mb-0" onClick={handleClick}>
            Login
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
