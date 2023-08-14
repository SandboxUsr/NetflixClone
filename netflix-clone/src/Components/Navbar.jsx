import React, { useState } from "react";
import logo from "../Assets/netflixlogo.png";
import "../Styles/navbar.css";
import search from "../Assets/Navbar/search.png";
import bell from "../Assets/Navbar/notification.png";
import user from "../Assets/Navbar/user.png";

export default function Navbar(props) {
  let [searchStatus, setSearchStatus] = useState(false);

  function handleSearch() {
    if (searchStatus === false) {
      setSearchStatus(true);
    }
  }

  function setSearchToDefault() {
    setSearchStatus(false);
  }

  return (
    <div className="navbar-container">
      <div className="navbar-left-elements">
        <img
          className="navbar-left-elements-instance navbar-netflix-logo"
          src={logo}
          onClick={setSearchToDefault}
          alt="Netflix Logo"
        />
        <span
          className="navbar-left-elements-instance navbar-home"
          onClick={setSearchToDefault}
        >
          Home
        </span>
        <span
          className="navbar-left-elements-instance navbar-tvshows"
          style={
            props.setTvShows
              ? { color: "white" }
              : { color: "black" }
          }
          onClick={setSearchToDefault}
        >
          Tv_Shows
        </span>
        <span
          className="navbar-left-elements-instance navbar-movies"
          onClick={setSearchToDefault}
        >
          Movies
        </span>
        <span
          className="navbar-left-elements-instance navbar-latest"
          onClick={setSearchToDefault}
        >
          Latest
        </span>
        <span
          className="navbar-left-elements-instance navbar-mylist"
          onClick={setSearchToDefault}
        >
          My_List
        </span>
      </div>
      <div className="navbar-right-elements">
        {searchStatus && <input type="text" name="search" id="search" />}
        <img
          className="navbar-right-elements-search navbar-right-elements-image"
          onClick={handleSearch}
          src={search}
          alt="Search"
        />
        <img
          className="navbar-right-elements-bell navbar-right-elements-image"
          src={bell}
          alt="Bell"
        />
        <img
          className="navbar-right-elements-bell navbar-right-elements-image"
          src={user}
          alt="User"
        />
      </div>
    </div>
  );
}
