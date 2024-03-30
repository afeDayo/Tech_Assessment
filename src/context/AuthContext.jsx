import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosConfig";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || null;
  });

  const [authenticating, setAuthenticating] = useState(false);

  const navigate = useNavigate();

  //register

  const handleRegisterUser = async (formData) => {
    setAuthenticating(true);
    setTimeout(async () => {
      try {
        const { data } = await axiosInstance.post(
          "/api/auth/register",
          formData
        );
        toast.success("Registration Successful");
        localStorage.setItem("token", JSON.stringify(data.token));
        setToken(data.token);
        setUser({ id: data.id });
        navigate("/");
      } catch (error) {
        if (error.response) {
          return toast.error(error.response.data.message);
        }
        toast.error("Something went wrong");
      } finally {
        setAuthenticating(false);
      }
    }, 2000);
  };

  //Login
  const handleSignInUser = (formData) => {
    setAuthenticating(true);
    setTimeout(async () => {
      try {
        const { data } = await axiosInstance.post("/api/auth/login", formData);
        toast.success("Welcome Back!");
        localStorage.setItem("token", JSON.stringify(data.token));
        setToken(data.token);
        setUser({ id: data.id });
        navigate("/");
      } catch (error) {
        if (error.response) {
          return toast.error(error.response.data.message);
        }
        toast.error("Something went wrong");
      } finally {
        setAuthenticating(false);
      }
    }, 2000);
  };

  const contextData = {
    user,
    token,
    handleRegisterUser,
    handleSignInUser,
    authenticating,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
