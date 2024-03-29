import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordRepeatVisible, setPasswordRepeatVisible] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signin");
  };

  const { handleRegisterUser } = null;

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
            {errors.email && errors.email.type === "required" ? (
              <span className="position-absolute end-0 pt-3 pe-4">
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
          <div className="position-relative">
            <input
              type={passwordRepeatVisible ? "text" : "password"}
              placeholder="Repeat Password"
              className={errors.repeatPassword ? "error" : ""}
              {...register("repeatPassword", { required: true })}
            />
            {errors.repeatPassword &&
            errors.repeatPassword.type === "required" ? (
              <span className="position-absolute end-0 pt-3 pe-4">
                Can't be empty
              </span>
            ) : null}
          </div>
          <button>Create an account</button>
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
