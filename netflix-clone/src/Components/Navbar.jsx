import React, { useState } from "react";
import logo from "../Assets/netflixlogo.png";
import "../Styles/navbar.css";
import search from "../Assets/Navbar/search.png";
import bell from "../Assets/Navbar/notification.png";
import user from "../Assets/Navbar/user.png";
import { Link } from "react-router-dom";

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
        <Link to="/home">
        <img
          className="navbar-left-elements-instance navbar-netflix-logo"
          src={logo}
          onClick={setSearchToDefault}
          alt="Netflix Logo"
        />
        </Link>
        <Link to="/home" style={{"text-decoration": "none"}}>
        <span
          className="navbar-left-elements-instance navbar-home"
          onClick={setSearchToDefault}
        >
          Home
        </span>
        </Link>
        <Link to="/tvshows" style={{"text-decoration": "none"}}>
        <span
          className="navbar-left-elements-instance navbar-tvshows"
          style={
            props.setTvShows
              ? { color: "white" }
              : { color: "rgb(76, 74, 74)" }
          }
          onClick={setSearchToDefault}
        >
          Tv_Shows
        </span>
        </Link>
        <Link to="/movies" style={{"text-decoration": "none"}}>
        <span
          className="navbar-left-elements-instance navbar-movies"
          onClick={setSearchToDefault}
        >
          Movies
        </span>
        </Link>
        <Link to="/latest" style={{"text-decoration": "none"}}>
        <span
          className="navbar-left-elements-instance navbar-latest"
          style={
            props.latest
              ? { color: "white" }
              : { color: "rgb(76, 74, 74)" }
          }
          onClick={setSearchToDefault}
        >
          Latest
        </span>
        </Link>
        <Link to="/mylist" style={{"text-decoration": "none"}}>
        <span
          className="navbar-left-elements-instance navbar-mylist"
          style={
            props.myList
              ? { color: "white" }
              : { color: "rgb(76, 74, 74)" }
          }
          onClick={setSearchToDefault}
        >
          My_List
        </span>
        </Link>
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
