// import React from "react";
// import netflixlogo from "../Assets/netflixlogo.png";
// import BgImg from "./BackgroundImg";
// import './Login.css'
// function LoginPage() {
//   return (
//     <>
//       <div className="container">
//        <BgImg/>
//        <div className="content">
//        <div className="netflix">
//        <img
//          style={{ height: "45px", width: "170px" }} src={netflixlogo} alt="logo"/>
//      </div>

//      <div className="form">
     
//      <h3>Sign In</h3>
//      <br/>
//      <form>
//      <input id="ip1" placeholder="    Email or phone number" type="email"/><br/>
//      <input id="ip2" placeholder="    Password" type="password"/><br/>
//      <button type="submit">Sign In</button>
//      <div id="div1">
//      <span><label>Remember me</label><input type="checkbox" id="Remember" /></span>
//      <span>Need help?</span>
//      </div>
//      <div id="div2">New to Netflix? 
// <span id="link"> Sign up now.</span><br/>
// <div id="message">
// This page is protected by Google reCAPTCHA to ensure you're not a bot. <span id="learnMore">Learn more.</span></div>
// </div> </form>
     

//      </div>
//      </div>
       
//       </div>
//     </>
//   );
// }

// export default LoginPage;

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
     <div id="div1">
     <span><label>Remember me</label><input type="checkbox" id="Remember" /></span>
     <span>Need help?</span>
     </div>
     <div id="div2">New to Netflix? 
<span id="link"> Sign up now.</span><br/>
<div id="message">
This page is protected by Google reCAPTCHA to ensure you're not a bot. <span id="learnMore">Learn more.</span></div>
</div> </form>
     

     </div>
     </div>
       
      </div>
    </>
  );
}
export default LoginPage;