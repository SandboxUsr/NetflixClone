import React, { useState } from 'react'
import logo from "../Assets/netflixlogo.png"
import "../Styles/navbar.css"
import search from "../Assets/Navbar/search.png"
import bell from "../Assets/Navbar/notification.png"
import user from "../Assets/Navbar/user.png"

export default function Navbar() {

  let [searchStatus, setSearchStatus] = useState(false);

  function handleSearch() {
    if(searchStatus === false) {
      setSearchStatus(true);
    }
    else {
      setSearchStatus(false);
    }
  }

  return (
    <div className="navbar-container">
      <div className="navbar-left-elements">
          <img className="navbar-left-elements-instance navbar-netflix-logo" src={logo} alt="Netflix Logo" />
          <span className="navbar-left-elements-instance navbar-home">Home</span>
          <span className="navbar-left-elements-instance navbar-tvshows">Tv_Shows</span>
          <span className="navbar-left-elements-instance navbar-movies">Movies</span>
          <span className="navbar-left-elements-instance navbar-latest">Latest</span>
          <span className="navbar-left-elements-instance navbar-mylist">My_List</span>
      </div>
      <div className="navbar-right-elements">
          {searchStatus && <input type="text" name="search" id="search" /> }
          <img className="navbar-right-elements-search navbar-right-elements-image" onClick={handleSearch} src={search} alt="Search" />
          <img className="navbar-right-elements-bell navbar-right-elements-image" src={bell} alt="Bell" />
          <img className="navbar-right-elements-bell navbar-right-elements-image" src={user} alt="User" />
      </div>
    </div>
  )
}
 