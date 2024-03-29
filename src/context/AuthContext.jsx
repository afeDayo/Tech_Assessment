import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || null;
  });

  const navigate = useNavigate();

  //register

  const handleRegisterUser = async (formData) => {
    setTimeout(async () => {
      try {
        toast.success("Registration Successful");
        localStorage.setItem("token", JSON.stringify(data.token));
        setToken(data.token);
        setUser({ id: data.id });
        navigate("/");
      } catch (error) {
        if (error.response) {
          return toast.error(error.response.data.message);
        }
      }
    });
  };

  const contextData = {
    user,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
