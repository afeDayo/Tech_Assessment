import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
import sad from "../../assets/sad.png";

const Error = () => {
  return (
    <div className="error">
      <img src={sad} alt="" />
      <h2 className="errbig">Error 404 - Page Not Found</h2>
      <p className="errmess">Sorry, the requested page could not be found.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default Error;
