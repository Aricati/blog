import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Logo = (props) => {
  return (
    <Link to={`/blog`} className="logo">
      MyBlog
    </Link>
  );
};

export default Logo;
