import React from "react";
import "./style.css";
import { Link, withRouter } from "react-router-dom";
import SocialLinks from "../SocialLinks";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <Link to={`/`}>Home</Link>
        <Link to={`/about-me`}>About</Link>
        <Link to={`/blog`}>My Blog</Link>
        <Link to={`/contact`}>Contact</Link>
      </nav>
      <div>
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
