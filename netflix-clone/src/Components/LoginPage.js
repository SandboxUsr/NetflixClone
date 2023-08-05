import React from "react";
import netflixlogo from "../Assets/netflixlogo.png";
import BgImg from "./BackgroundImg";
import './Login.css'
function LoginPage() {
  return (
    <>
      <div className="container">
       <BgImg/>
       <div className="content">
       <div className="netflix">
       <img
         style={{ height: "45px", width: "170px" }} src={netflixlogo} alt="logo"/>
     </div>

     <div className="form">
     
     <h3>Sign In</h3>
     <br/>
     <form>
     <input id="ip1" placeholder="    Email or phone number" type="email"/><br/>
     <input id="ip2" placeholder="    Password" type="password"/><br/>
     <button type="submit">Sign In</button>
     </form>
     

     </div>
     </div>
       
      </div>
    </>
  );
}

export default LoginPage;
