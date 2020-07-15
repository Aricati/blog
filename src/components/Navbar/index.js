import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("Searched");
  };

  const openSearch = () => {
    setSearch(true);
  };

  const searchClass = search ? "searchInput active" : "searchInput";

  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/about-me`}>About</Link>
        </li>
        <li>
          <Link to={`/blog`}>Posts</Link>
        </li>
        <li>
          <Link to={`/contact`}>Contact</Link>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" placeholder="Search..." className={searchClass} />
          <img
            onClick={openSearch}
            className="searchIcon"
            src={require("../../assets/icons/search.png")}
            alt="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
