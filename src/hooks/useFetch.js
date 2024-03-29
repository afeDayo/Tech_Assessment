import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosConfig";
import toast from "react-hot-toast";

export const useFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosInstance.get(url, {
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
          },
        });

        setData(data.data);
      } catch (error) {
        if (error.message === "Network Error") {
          setError("Server is down, please refresh");
        }

        if (error.response.status === 401) {
          toast.error("Login to view bookmarks", { id: "z" });
          navigate("/signin");
        }

        setError("Something went wrong");
        console.log(setError);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      getData();
    }, 2000);
  }, [url]);
};
